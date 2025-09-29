"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { notFound, useRouter } from "next/navigation";
import { Home, Shuffle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { QuizCard } from "@/components/QuizCard";

import { courses } from "@/data";
import { ChoiceQuestion, FillQuestion, Question } from "@/lib/types";
import { getRandomQuestions, isAnswerCorrect } from "@/lib/utils";
import { RandomQuizPageProps } from "./page";
import { EmptyQuizState } from "@/components/quiz-components";
import { useQuiz } from "@/hooks/use-quiz";

/** ---------------- 随机刷题页面 ---------------- */
export function RandomQuizClient({ params }: RandomQuizPageProps) {
  const { courseId } = params;
  const router = useRouter();
  const course = courses.find((c) => c.id === courseId);
  if (!course) notFound();

  const allQuestions = useMemo(
    () => course?.chapters.flatMap((ch) => ch.questions) || [],
    [course]
  );

  // 初始化或刷新题目
  const generateRandomQuestions = useCallback(() => {
    return getRandomQuestions(allQuestions);
  }, [allQuestions]);
  const [randomQuestions, setRandomQuestions] = useState<Question[]>([]);

    const {
    currentQuestionIndex,
    currentQuestion,
    totalQuestions,
    selectedAnswers,
    showResults,
    completedQuestions,
    correctAnswers,
    handleChoiceSelect,
    handleFillInput,
    handleSubmitAnswer,
    handleResetQuestion,
    handleResetAllQuestions,
    handlePrevQuestion,
    handleNextQuestion,
    handleQuestionSelect,
  } = useQuiz(randomQuestions);


  // 初始化题目
  useEffect(() => {
    setRandomQuestions(generateRandomQuestions());
  }, [generateRandomQuestions]);

  // 换一批题目
  const handleNewRandomQuiz = () => {
    // router.refresh();
    const newRandomQuestions = generateRandomQuestions();
    setRandomQuestions(newRandomQuestions);
    // 重置所有状态到初始值
    handleResetAllQuestions();
  };


  const handleBackToCourse = () => router.push(`/course/${course.id}`);

  const hasQuestions = totalQuestions > 0;

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
        {hasQuestions ? (
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
        ) : (
          <EmptyQuizState courseId={courseId} />
        )}
      </main>
    </div>
  );
}
