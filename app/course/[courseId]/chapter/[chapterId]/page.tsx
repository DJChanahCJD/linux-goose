"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  XCircle,
  RotateCcw,
  BookOpen,
} from "lucide-react";
import { courses } from "@/public/courses";
import { QuestionTypeEnum, ChoiceQuestion, FillQuestion } from "@/lib/types";
import { Header } from "@/components/header";

interface ChapterPageProps {
  params: { courseId: string; chapterId: string };
}

/** ---------------- 工具函数 ---------------- */
function isAnswerCorrect(
  question: ChoiceQuestion | FillQuestion,
  answer: number[] | string | null
): boolean {
  if (answer === null) return false;

  if (question.type === QuestionTypeEnum.CHOICE) {
    const q = question as ChoiceQuestion;
    return (
      Array.isArray(answer) &&
      JSON.stringify([...answer].sort()) ===
        JSON.stringify([...q.answers].sort())
    );
  }

  if (question.type === QuestionTypeEnum.FILL) {
    const q = question as FillQuestion;
    return (
      typeof answer === "string" &&
      answer.trim().toLowerCase() === q.answer.trim().toLowerCase()
    );
  }

  return false;
}

/** ---------------- 子组件 ---------------- */
function ChoiceQuestionView({
  question,
  selected,
  showResult,
  onSelect,
}: {
  question: ChoiceQuestion;
  selected: number[] | null;
  showResult: boolean;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="space-y-3">
      {question.choices.map((option, index) => {
        const isSelected = selected?.includes(index);
        const isCorrect = question.answers.includes(index);
        const isWrongSelection = showResult && isSelected && !isCorrect;

        let className =
          "w-full justify-start text-left h-auto p-4 transition-all";
        let icon = null;

        if (showResult) {
          if (isCorrect) {
            className += " bg-success/20 border-success";
            icon = <CheckCircle className="h-4 w-4 text-success" />;
          } else if (isWrongSelection) {
            className += " bg-destructive/20 border-destructive";
            icon = <XCircle className="h-4 w-4 text-destructive" />;
          }
        } else if (isSelected) {
          className += " bg-primary/20 border-primary";
        }

        return (
          <Button
            key={index}
            variant="outline"
            className={className}
            onClick={() => onSelect(index)}
          >
            <div className="flex items-center gap-3 w-full">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-muted text-muted-foreground text-sm font-medium">
                {String.fromCharCode(65 + index)}
              </div>
              <span className="flex-1">{option}</span>
              {icon}
            </div>
          </Button>
        );
      })}
    </div>
  );
}

function FillQuestionView({
  value,
  disabled,
  onChange,
}: {
  value: string | null;
  disabled: boolean;
  onChange: (val: string) => void;
}) {
  return (
    <input
      type="text"
      className="w-full p-3 border rounded-md"
      placeholder="请输入答案..."
      value={value || ""}
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

function ResultView({
  correct,
  userAnswer,
  correctAnswer,
  hint,
}: {
  correct: boolean;
  userAnswer: string | number[] | null;
  correctAnswer: string | number[];
  hint?: string;
}) {
  const formatAnswer = (ans: string | number[] | null) => {
    if (Array.isArray(ans))
      return ans.map((i) => String.fromCharCode(65 + i)).join(", ");
    return ans ?? "未作答";
  };

  const formatCorrect = (ans: string | number[]) => {
    if (Array.isArray(ans))
      return ans.map((i) => String.fromCharCode(65 + i)).join(", ");
    return ans;
  };

  return (
    <div
      className={`p-4 rounded-lg border-2 ${
        correct
          ? "bg-success/10 border-success"
          : "bg-destructive/10 border-destructive"
      }`}
    >
      <div className="flex items-center gap-2 mb-2">
        {correct ? (
          <CheckCircle className="h-5 w-5 text-success" />
        ) : (
          <XCircle className="h-5 w-5 text-destructive" />
        )}

        <span className="font-medium text-lg">
          {correct ? (
            "回答正确！"
          ) : (
            <div className="flex items-center gap-4 w-full">
              <span>回答错误</span>
              <div className="flex items-baseline gap-4 text-sm">
                <p>
                  <strong>你的答案：</strong>
                  {formatAnswer(userAnswer)}
                </p>
                <p>
                  <strong>正确答案：</strong>
                  {formatCorrect(correctAnswer)}
                </p>
              </div>
            </div>
          )}
        </span>
      </div>

      {hint && (
        <div className="mt-2 text-sm">
          <strong>解析：</strong> {hint}
        </div>
      )}
    </div>
  );
}

/** ---------------- 主页面 ---------------- */
export default function ChapterPage({ params }: ChapterPageProps) {
  const { courseId, chapterId } = params;

  const course = courses.find((b) => b.id === courseId);
  console.log(course?.chapters);
  const chapter = course?.chapters.find((qs) => qs.id === chapterId);

  if (!course || !chapter) notFound();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    (number[] | string | null)[]
  >([]);
  const [showResults, setShowResults] = useState<boolean[]>([]);

  useEffect(() => {
    setSelectedAnswers(new Array(chapter.questions.length).fill(null));
    setShowResults(new Array(chapter.questions.length).fill(false));
  }, [chapter.questions.length]);

  const currentQuestion = chapter.questions[currentQuestionIndex];
  const totalQuestions = chapter.questions.length;

  const completedQuestions = useMemo(
    () => selectedAnswers.filter((a) => a !== null).length,
    [selectedAnswers]
  );

  const correctAnswers = useMemo(
    () =>
      selectedAnswers.filter((ans, idx) =>
        isAnswerCorrect(chapter.questions[idx], ans)
      ).length,
    [selectedAnswers]
  );

  /** ---------------- 事件处理 ---------------- */
  const handleChoiceSelect = (index: number) => {
    if (showResults[currentQuestionIndex]) return;
    setSelectedAnswers((prev) => {
      const newAnswers = [...prev];
      const q = currentQuestion as ChoiceQuestion;
      if (q.answers.length === 1) {
        newAnswers[currentQuestionIndex] = [index];
      } else {
        const current = (newAnswers[currentQuestionIndex] as number[]) || [];
        newAnswers[currentQuestionIndex] = current.includes(index)
          ? current.filter((i) => i !== index)
          : [...current, index];
      }
      return newAnswers;
    });
  };

  const handleFillInput = (val: string) => {
    if (showResults[currentQuestionIndex]) return;
    setSelectedAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[currentQuestionIndex] = val;
      return newAnswers;
    });
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswers[currentQuestionIndex] !== null) {
      setShowResults((prev) => {
        const newShow = [...prev];
        newShow[currentQuestionIndex] = true;
        return newShow;
      });
    }
  };

  const handleResetQuestion = () => {
    setSelectedAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[currentQuestionIndex] = null;
      return newAnswers;
    });
    setShowResults((prev) => {
      const newShow = [...prev];
      newShow[currentQuestionIndex] = false;
      return newShow;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        currentChapterId={chapter.id}
        course={course}
        onChapterSelect={(selectedChapterId) => {
          // 导航到选中的章节
          window.location.href = `/course/${courseId}/chapter/${selectedChapterId}`;
        }}
      />

      {/* 主体 */}
      <main className="px-4 py-6">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* 左侧 Guide */}
          <div className="order-2 lg:order-1">
            <Card className="h-fit top-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen />
                  Guide
                </CardTitle>
              </CardHeader>
              <CardContent className="max-h-[80vh] overflow-y-auto">
                {typeof chapter.readme === "function"
                  ? chapter.readme({})
                  : chapter.readme}
              </CardContent>
            </Card>
          </div>

          {/* 右侧题目 */}
          <div className="order-1 lg:order-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between h-8">
                  <div className="flex items-center gap-2 w-full">
                    题目 {currentQuestionIndex + 1}
                    {currentQuestion.type === QuestionTypeEnum.CHOICE &&
                      (currentQuestion as ChoiceQuestion).answers.length >
                        1 && <Badge variant="secondary">多选题</Badge>}
                  </div>
                  {showResults[currentQuestionIndex] && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleResetQuestion}
                      className="gap-2 bg-transparent"
                    >
                      <RotateCcw />
                      重新答题
                    </Button>
                  )}
                </CardTitle>

                {/* 导航 */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {chapter.questions.map((_, idx) => (
                    <Button
                      key={idx}
                      variant={
                        currentQuestionIndex === idx ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => setCurrentQuestionIndex(idx)}
                      className={`h-8 w-8 p-0 rounded-full ${
                        showResults[idx] ? "border-2 border-success" : ""
                      }`}
                    >
                      {idx + 1}
                    </Button>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* 问题内容 */}
                <h3 className="text-lg font-medium mb-4 leading-relaxed">
                  {currentQuestion.content}
                </h3>

                {/* 根据题型渲染 */}
                {currentQuestion.type === QuestionTypeEnum.CHOICE && (
                  <ChoiceQuestionView
                    question={currentQuestion as ChoiceQuestion}
                    selected={selectedAnswers[currentQuestionIndex] as number[]}
                    showResult={showResults[currentQuestionIndex]}
                    onSelect={handleChoiceSelect}
                  />
                )}
                {currentQuestion.type === QuestionTypeEnum.FILL && (
                  <FillQuestionView
                    value={selectedAnswers[currentQuestionIndex] as string}
                    disabled={showResults[currentQuestionIndex]}
                    onChange={handleFillInput}
                  />
                )}

                {/* 提交按钮 */}
                {!showResults[currentQuestionIndex] &&
                  selectedAnswers[currentQuestionIndex] !== null && (
                    <Button
                      onClick={handleSubmitAnswer}
                      className="w-full"
                      size="lg"
                    >
                      提交答案
                    </Button>
                  )}

                {/* 结果展示 */}
                {showResults[currentQuestionIndex] && (
                  <ResultView
                    correct={isAnswerCorrect(
                      currentQuestion,
                      selectedAnswers[currentQuestionIndex]
                    )}
                    userAnswer={selectedAnswers[currentQuestionIndex]}
                    correctAnswer={
                      currentQuestion.type === QuestionTypeEnum.CHOICE
                        ? (currentQuestion as ChoiceQuestion).answers
                        : (currentQuestion as FillQuestion).answer
                    }
                    hint={currentQuestion.hint}
                  />
                )}

                {/* 底部导航 */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <Button
                    variant="outline"
                    onClick={() =>
                      setCurrentQuestionIndex((i) => Math.max(0, i - 1))
                    }
                    disabled={currentQuestionIndex === 0}
                    className="gap-2 bg-transparent"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    上一题
                  </Button>

                  <div className="text-sm text-muted-foreground">
                    已完成 {completedQuestions} / {totalQuestions} 题
                  </div>

                  <Button
                    variant="outline"
                    onClick={() =>
                      setCurrentQuestionIndex((i) =>
                        Math.min(totalQuestions - 1, i + 1)
                      )
                    }
                    disabled={currentQuestionIndex === totalQuestions - 1}
                    className="gap-2 bg-transparent"
                  >
                    下一题
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>

                {/* 完成统计 */}
                {completedQuestions === totalQuestions && (
                  <div className="mt-6 p-4 bg-primary/10 border border-primary rounded-lg text-center">
                    <h4 className="font-semibold text-lg mb-2">
                      🎉 恭喜完成！
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      您已完成本主题的所有题目
                    </p>
                    <div className="flex justify-center gap-4 text-sm">
                      <span>总题数: {totalQuestions}</span>
                      <span>正确: {correctAnswers}</span>
                      <span>
                        正确率:{" "}
                        {Math.round((correctAnswers / totalQuestions) * 100)}%
                      </span>
                    </div>
                    <Link
                      href={`/course/${courseId}`}
                      className="mt-4 inline-block"
                    >
                      <Button className="gap-2">
                        返回课程选择其他章节
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
