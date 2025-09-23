"use client";
import { useState, useEffect, useMemo } from "react";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Github } from "lucide-react";
import { courses } from "@/lib/data";
import { ChoiceQuestion } from "@/lib/types";
import { useRouter } from "next/navigation";
import {
  getGithubEditUrl,
  isAnswerCorrect,
} from "@/lib/utils";

import { ChapterHeader } from "@/components/chapter-header";
import { ChapterPageProps } from "./page";
import { QuizCard } from "@/components/QuizCard";

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
      <ChapterHeader
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
              <CardHeader className="inline-flex justify-between">
                <CardTitle className="flex items-center gap-2">
                  <BookOpen />
                  Guide
                </CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    window.open(
                      getGithubEditUrl(chapterId, courseId),
                      "_blank",
                      "noopener noreferrer"
                    )
                  }
                  className="gap-2 bg-transparent hover:bg-accent/50"
                >
                  <Github className="w-4 h-4" />在 GitHub 编辑此页
                </Button>
              </CardHeader>
              <CardContent className="lg:max-h-[80vh] overflow-y-auto">
                {typeof chapter.readme === "function"
                  ? chapter.readme({})
                  : chapter.readme}
              </CardContent>
            </Card>
          </div>

          {/* 右侧题目 */}
          <div className="order-1 lg:order-2">
            <QuizCard
              currentQuestion={currentQuestion}
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
              onPrev={() => setCurrentQuestionIndex((i) => Math.max(0, i - 1))}
              onNext={() => setCurrentQuestionIndex((i) => Math.min(totalQuestions - 1, i + 1))}
              onQuestionSelect={(index) => setCurrentQuestionIndex(index)}
              allQuestions={chapter.questions}
              allSelectedAnswers={selectedAnswers}
              allShowResults={showResults}
              nextChapterId={nextChapterId}
              courseId={courseId}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
