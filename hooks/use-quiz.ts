"use client";

import { useState, useMemo } from "react";
import { Question, ChoiceQuestion } from "@/lib/types";
import { isAnswerCorrect } from "@/lib/utils";

/**
 * 通用刷题逻辑 Hook
 * 支持选择题、填空题，提供答题/重置/导航等功能
 */
export function useQuiz(questions: Question[]) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    (number[] | string | null)[]
  >(new Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState<boolean[]>(
    new Array(questions.length).fill(false)
  );

  /** ---------------- 基本数据 ---------------- */
  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  const completedQuestions = useMemo(
    () => showResults.filter(Boolean).length,
    [showResults]
  );

  const correctAnswers = useMemo(
    () =>
      selectedAnswers.filter(
        (ans, idx) => showResults[idx] && isAnswerCorrect(questions[idx], ans)
      ).length,
    [selectedAnswers, showResults, questions]
  );

  /** ---------------- 事件处理 ---------------- */
  // 选择题
  const handleChoiceSelect = (index: number) => {
    if (showResults[currentQuestionIndex]) return;

    setSelectedAnswers((prev) => {
      const next = [...prev];
      const q = currentQuestion as ChoiceQuestion;

      if (q.answers.length === 1) {
        // 单选题
        next[currentQuestionIndex] = [index];
      } else {
        // 多选题
        const current = (next[currentQuestionIndex] as number[]) || [];
        next[currentQuestionIndex] = current.includes(index)
          ? current.filter((i) => i !== index)
          : [...current, index];
      }
      return next;
    });
  };

  // 填空题
  const handleFillInput = (val: string) => {
    if (showResults[currentQuestionIndex]) return;

    setSelectedAnswers((prev) => {
      const next = [...prev];
      next[currentQuestionIndex] = val;
      return next;
    });
  };

  // 提交答案
  const handleSubmitAnswer = () => {
    if (selectedAnswers[currentQuestionIndex] !== null) {
      setShowResults((prev) => {
        const next = [...prev];
        next[currentQuestionIndex] = true;
        return next;
      });
    }
  };

  // 重置当前题目
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

  /** ---------------- 导航 ---------------- */
  const handlePrevQuestion = () => {
    setCurrentQuestionIndex((i) => Math.max(0, i - 1));
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((i) => Math.min(totalQuestions - 1, i + 1));
  };

  const handleQuestionSelect = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  /** ---------------- 对外暴露 ---------------- */
  return {
    // 状态
    currentQuestionIndex,
    currentQuestion,
    totalQuestions,
    selectedAnswers,
    showResults,
    completedQuestions,
    correctAnswers,

    // 事件
    setCurrentQuestionIndex,
    handleChoiceSelect,
    handleFillInput,
    handleSubmitAnswer,
    handleResetQuestion,
    handlePrevQuestion,
    handleNextQuestion,
    handleQuestionSelect,
  };
}
