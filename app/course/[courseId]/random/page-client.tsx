"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { notFound, useRouter } from "next/navigation";
import { Home, Shuffle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { QuizCard } from "@/components/QuizCard";

import { courses } from "@/lib/data";
import { ChoiceQuestion, FillQuestion, Question } from "@/lib/types";
import { getRandomQuestions, isAnswerCorrect } from "@/lib/utils";
import { RandomQuizPageProps } from "./page";

/** ---------------- 随机刷题页面 ---------------- */
export function RandomQuizClient({ params }: RandomQuizPageProps) {
  const { courseId } = params;
  const router = useRouter();
  const course = courses.find((c) => c.id === courseId);
  if (!course) notFound();

  const allQuestions = useMemo(
    () => course?.chapters.flatMap(ch => ch.questions) || [],
    [course]
  );
  const [randomQuestions, setRandomQuestions] = useState<Question[]>([]);
  // 初始化或刷新题目
  const generateRandomQuestions = useCallback(() => {
    return getRandomQuestions(allQuestions);
  }, [allQuestions]);

  // 初始化题目
  useEffect(() => {
    setRandomQuestions(generateRandomQuestions());
  }, [generateRandomQuestions]);

  // 换一批题目
  const handleNewRandomQuiz = () => {
    setRandomQuestions(generateRandomQuestions());
    // 重置其他状态
    setCurrentQuestionIndex(0);
    setSelectedAnswers(new Array(10).fill(null));
    setShowResults(new Array(10).fill(false));
  };

  /** ---------------- 状态管理 ---------------- */
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    (number[] | string | null)[]
  >(new Array(randomQuestions.length).fill(null));
  const [showResults, setShowResults] = useState<boolean[]>(
    new Array(randomQuestions.length).fill(false)
  );

  const currentQuestion = randomQuestions[currentQuestionIndex];
  const totalQuestions = randomQuestions.length;

  const completedQuestions = useMemo(
    () => showResults.filter(Boolean).length,
    [showResults]
  );

  const correctAnswers = useMemo(
    () =>
      selectedAnswers.filter(
        (ans, idx) =>
          showResults[idx] && isAnswerCorrect(randomQuestions[idx], ans)
      ).length,
    [selectedAnswers, showResults, randomQuestions]
  );

  /** ---------------- 事件处理 ---------------- */
  const handleChoiceSelect = (index: number) => {
    if (showResults[currentQuestionIndex]) return;

    setSelectedAnswers((prev) => {
      const next = [...prev];
      const q = currentQuestion as ChoiceQuestion;

      if (q.answers.length === 1) {
        // 单选
        next[currentQuestionIndex] = [index];
      } else {
        // 多选
        const current = (next[currentQuestionIndex] as number[]) || [];
        next[currentQuestionIndex] = current.includes(index)
          ? current.filter((i) => i !== index)
          : [...current, index];
      }
      return next;
    });
  };

  const handleFillInput = (val: string) => {
    if (showResults[currentQuestionIndex]) return;
    setSelectedAnswers((prev) => {
      const next = [...prev];
      next[currentQuestionIndex] = val;
      return next;
    });
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswers[currentQuestionIndex] !== null) {
      setShowResults((prev) => {
        const next = [...prev];
        next[currentQuestionIndex] = true;
        return next;
      });
    }
  };

  const handleResetQuestion = () => {
    setSelectedAnswers((prev) => {
      const next = [...prev];
      next[currentQuestionIndex] = null;
      return next;
    });
    setShowResults((prev) => {
      const next = [...prev];
      next[currentQuestionIndex] = false;
      return next;
    });
  };

  // const handleNewRandomQuiz = () => router.refresh();
  const handleBackToCourse = () => router.push(`/course/${course.id}`);

  /** ---------------- 导航 ---------------- */
  const handleQuestionSelect = (index: number) =>
    setCurrentQuestionIndex(index);
  const handlePrevQuestion = () =>
    currentQuestionIndex > 0 && setCurrentQuestionIndex((i) => i - 1);
  const handleNextQuestion = () =>
    currentQuestionIndex < totalQuestions - 1 &&
    setCurrentQuestionIndex((i) => i + 1);

  /** ---------------- 无题目时 ---------------- */
  if (totalQuestions === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="text-5xl mb-4">📝</div>
          <h3 className="text-lg font-medium mb-2">本课程暂无题目</h3>
          <p className="text-sm text-muted-foreground mb-6">
            当前课程还没有添加任何练习题
          </p>
          <Button
            variant="outline"
            onClick={handleBackToCourse}
            className="gap-2"
          >
            <Home className="h-4 w-4" /> 返回课程
          </Button>
        </div>
      </div>
    );
  }

  /** ---------------- 页面 ---------------- */
  return (
    <div className="min-h-screen bg-background">
      {/* 顶部操作栏 */}
      <Header
        leftSlot={
          <div className="flex items-center justify-between w-full">
            {/* 左边：课程信息 */}
            <div className="flex items-center gap-3">
              <div
                className="text-3xl cursor-pointer"
                onClick={handleBackToCourse}
              >
                {course.icon}
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold">{course.title} - 随机刷题</h1>
                <p className="text-sm text-muted-foreground">
                  随机抽取 10 道题目进行练习
                </p>
              </div>
            </div>
          </div>
        }
        rightSlot={
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={handleNewRandomQuiz}
              className="gap-2"
            >
              <Shuffle className="h-4 w-4" /> 换一批
            </Button>
          </div>
        }
      />

      {/* 主体 */}
      <main className="container mx-auto max-w-3xl px-4 py-6">
        <QuizCard
          currentQuestion={
            currentQuestion as ChoiceQuestion | FillQuestion | null
          }
          currentIndex={currentQuestionIndex}
          totalQuestions={totalQuestions}
          completedQuestions={completedQuestions}
          correctAnswers={correctAnswers}
          selectedAnswer={selectedAnswers[currentQuestionIndex]}
          showResult={showResults[currentQuestionIndex]}
          onChoiceSelect={handleChoiceSelect}
          onFillInput={handleFillInput}
          onSubmit={handleSubmitAnswer}
          onReset={handleResetQuestion}
          onPrev={handlePrevQuestion}
          onNext={handleNextQuestion}
          onQuestionSelect={handleQuestionSelect}
          allQuestions={randomQuestions}
          allSelectedAnswers={selectedAnswers}
          allShowResults={showResults}
          courseId={courseId}
        />
      </main>
    </div>
  );
}
