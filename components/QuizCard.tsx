"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RotateCcw } from "lucide-react";
import { ChoiceQuestion, FillQuestion, QuestionTypeEnum, Question } from "@/lib/types";
import { isAnswerCorrect } from "@/lib/utils";

import {
  QuestionContent,
  QuestionRenderer,
  SubmitButton,
  ResultDisplay,
  QuestionNavigation,
  CompletionStats,
} from "./quiz-components";

/**
 * QuizCard
 * 统一封装的答题卡片，包含题目导航功能
 */
export function QuizCard({
  currentQuestion,
  currentIndex,
  totalQuestions,
  completedQuestions,
  correctAnswers,
  selectedAnswer,
  showResult,
  onChoiceSelect,
  onFillInput,
  onSubmit,
  onReset,
  onPrev,
  onNext,
  onQuestionSelect,
  allQuestions,
  allSelectedAnswers,
  allShowResults,
  nextChapterId,
  courseId,
}: {
  currentQuestion: ChoiceQuestion | FillQuestion | null;
  currentIndex: number;
  totalQuestions: number;
  completedQuestions: number;
  correctAnswers: number;
  selectedAnswer: number[] | string | null;
  showResult: boolean;
  onChoiceSelect: (index: number) => void;
  onFillInput: (val: string) => void;
  onSubmit: () => void;
  onReset: () => void;
  onPrev: () => void;
  onNext: () => void;
  onQuestionSelect: (index: number) => void; // 新增: 用于选择题目的回调
  allQuestions: Question[]; // 新增: 所有题目列表
  allSelectedAnswers: (number[] | string | null)[]; // 新增: 所有题目的答案
  allShowResults: boolean[]; // 新增: 所有题目的显示结果状态
  nextChapterId?: string;
  courseId: string;
}) {
  if (!currentQuestion) return null;

  return (
    <Card>
      {/* Header */}
      <CardHeader>
        <CardTitle className="flex items-center justify-between h-8">
          <div className="flex items-center gap-2 w-full">
            题目 {currentIndex + 1}
            {currentQuestion.type === QuestionTypeEnum.CHOICE &&
              (currentQuestion as ChoiceQuestion).answers.length > 1 && (
                <Badge variant="secondary">多选题</Badge>
              )}
          </div>
          {showResult && (
            <Button
              variant="outline"
              size="sm"
              onClick={onReset}
              className="gap-2 bg-transparent"
            >
              <RotateCcw />
              重新答题
            </Button>
          )}
        </CardTitle>

        {/* 新增: 题目导航 */}
        <div className="flex flex-wrap gap-2 mt-2">
          {allQuestions.map((_, idx) => {
            const isAnswered = allShowResults[idx];
            const isCorrect = isAnswered &&
              isAnswerCorrect(allQuestions[idx], allSelectedAnswers[idx]);
            const isWrong = isAnswered && !isCorrect;

            return (
              <Button
                key={idx}
                variant={currentIndex === idx ? "default" : "outline"}
                size="sm"
                onClick={() => onQuestionSelect(idx)}
                className={`h-8 w-8 p-0 rounded-full ${isCorrect ? "border-2 border-success" : isWrong ? "border-2 border-destructive" : ""}`}
              >
                {idx + 1}
              </Button>
            );
          })}
        </div>
      </CardHeader>

      {/* Content */}
      <CardContent className="space-y-6">
        {/* 题干 */}
        <QuestionContent currentQuestion={currentQuestion} />

        {/* 题目内容渲染 */}
        <QuestionRenderer
          currentQuestion={currentQuestion}
          selectedAnswer={selectedAnswer}
          showResult={showResult}
          onChoiceSelect={onChoiceSelect}
          onFillInput={onFillInput}
        />

        {/* 提交按钮 */}
        <SubmitButton
          showResult={showResult}
          hasAnswer={selectedAnswer !== null}
          onSubmit={onSubmit}
        />

        {/* 答案解析 */}
        <ResultDisplay
          showResult={showResult}
          question={currentQuestion}
          userAnswer={selectedAnswer}
        />

        {/* 导航控制 */}
        <QuestionNavigation
          currentIndex={currentIndex}
          totalQuestions={totalQuestions}
          completedQuestions={completedQuestions}
          onPrev={onPrev}
          onNext={onNext}
        />

        {/* 完成统计 */}
        {completedQuestions === totalQuestions && (
          <CompletionStats
            totalQuestions={totalQuestions}
            correctAnswers={correctAnswers}
            nextChapterId={nextChapterId}
            courseId={courseId}
          />
        )}
      </CardContent>
    </Card>
  );
}
