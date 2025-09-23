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
import { useRouter } from "next/navigation";
import { isAnswerCorrect } from "@/lib/utils";
import { EmptyChapterState, QuestionContent, QuestionRenderer, SubmitButton, ResultDisplay, QuestionNavigation, CompletionStats } from "./components";

interface ChapterPageProps {
  params: { courseId: string; chapterId: string };
}

/** ---------------- 主页面 ---------------- */
export default function ChapterPageClient({ params }: ChapterPageProps) {
  const { courseId, chapterId } = params;
  const router = useRouter();

  const course = courses.find((b) => b.id === courseId);
  const currentChapterIndex = course?.chapters.findIndex(
    (chapter) => chapter.id === chapterId
  );
  if (currentChapterIndex === undefined) {
    notFound();
  }
  const nextChapterId = course?.chapters[currentChapterIndex + 1]?.id;

  if (currentChapterIndex === undefined) {
    notFound();
  }
  const chapter = course?.chapters.find((qs) => qs.id === chapterId);

  if (!course || !chapter) notFound();

  // 检查章节是否包含题目
  const hasQuestions = chapter.questions.length > 0;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    (number[] | string | null)[]
  >([]);
  const [showResults, setShowResults] = useState<boolean[]>([]);

  useEffect(() => {
    if (hasQuestions) {
      setSelectedAnswers(new Array(chapter.questions.length).fill(null));
      setShowResults(new Array(chapter.questions.length).fill(false));
    }
  }, [chapter.questions.length, hasQuestions]);

  const currentQuestion = hasQuestions
    ? chapter.questions[currentQuestionIndex]
    : null;
  const totalQuestions = chapter.questions.length;

  const completedQuestions = useMemo(
    () => showResults.filter((result) => result).length,
    [showResults]
  );

  const correctAnswers = useMemo(
    () =>
      selectedAnswers.filter(
        (ans, idx) =>
          showResults[idx] && isAnswerCorrect(chapter.questions[idx], ans)
      ).length,
    [selectedAnswers, showResults]
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
          router.push(`/course/${courseId}/chapter/${selectedChapterId}`);
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
                    {currentQuestion && currentQuestion.type === QuestionTypeEnum.CHOICE &&
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
                {/* Empty state */}
                {!hasQuestions ? (
                  <EmptyChapterState courseId={courseId} />
                ) : (
                  <>
                    {/* Question content */}
                    <QuestionContent currentQuestion={currentQuestion} />

                    {/* Question type rendering */}
                    <QuestionRenderer
                      currentQuestion={currentQuestion}
                      selectedAnswer={selectedAnswers[currentQuestionIndex]}
                      showResult={showResults[currentQuestionIndex]}
                      onChoiceSelect={handleChoiceSelect}
                      onFillInput={handleFillInput}
                    />

                    {/* Submit button */}
                    <SubmitButton
                      showResult={showResults[currentQuestionIndex]}
                      hasAnswer={selectedAnswers[currentQuestionIndex] !== null}
                      onSubmit={handleSubmitAnswer}
                    />

                    {/* Result display */}
                    <ResultDisplay
                      showResult={showResults[currentQuestionIndex]}
                      question={currentQuestion}
                      userAnswer={selectedAnswers[currentQuestionIndex]}
                    />

                    {/* Navigation controls */}
                    <QuestionNavigation
                      currentIndex={currentQuestionIndex}
                      totalQuestions={totalQuestions}
                      completedQuestions={completedQuestions}
                      onPrev={() =>
                        setCurrentQuestionIndex((i) => Math.max(0, i - 1))
                      }
                      onNext={() =>
                        setCurrentQuestionIndex((i) =>
                          Math.min(totalQuestions - 1, i + 1)
                        )
                      }
                    />

                    {/* Completion stats */}
                    {completedQuestions === totalQuestions && (
                      <CompletionStats
                        totalQuestions={totalQuestions}
                        correctAnswers={correctAnswers}
                        nextChapterId={nextChapterId}
                        courseId={courseId}
                        isLastChapter={
                          currentChapterIndex === course?.chapters.length - 1
                        }
                      />
                    )}
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
