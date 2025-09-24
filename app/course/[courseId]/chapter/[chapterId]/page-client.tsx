"use client";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Github } from "lucide-react";
import { courses } from "@/lib/data";
import { useRouter } from "next/navigation";
import { getGithubEditUrl, isAnswerCorrect } from "@/lib/utils";

import { ChapterHeader } from "@/components/chapter-header";
import { ChapterPageProps } from "./page";
import { EmptyQuizState } from "@/components/quiz-components";
import { QuizCard } from "@/components/QuizCard";

import { useQuiz } from "@/hooks/use-quiz";

/** ---------------- 主页面 ---------------- */
export default function ChapterPageClient({ params }: ChapterPageProps) {
  const router = useRouter();
  const { courseId, chapterId } = params;
  
  const course = courses.find((c) => c.id === courseId);
  if (!course) notFound();

  const chapter = course.chapters.find((ch) => ch.id === chapterId);
  if (!chapter) notFound();

  const currentChapterIndex = course.chapters.findIndex((ch) => ch.id === chapterId);

  const nextChapterId = course?.chapters[currentChapterIndex + 1]?.id;

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
    handlePrevQuestion,
    handleNextQuestion,
    handleQuestionSelect,
  } = useQuiz(chapter.questions);

  // 检查章节是否包含题目
  const hasQuestions = chapter.questions.length > 0;

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
            {hasQuestions ? (
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
                onPrev={handlePrevQuestion}
                onNext={handleNextQuestion}
                onQuestionSelect={handleQuestionSelect}
                allQuestions={chapter.questions}
                allSelectedAnswers={selectedAnswers}
                allShowResults={showResults}
                nextChapterId={nextChapterId}
                courseId={courseId}
              />
            ) : (
              <EmptyQuizState courseId={courseId} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
