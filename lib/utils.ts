import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Chapter, ChoiceQuestion, FillQuestion, Level, QuestionTypeEnum } from './types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getLevelColor = (level: Level) => {
  switch (level) {
    case Level.EASY:
      return "bg-success text-success-foreground"
    case Level.MEDIUM:
      return "bg-warning text-warning-foreground"
    case Level.HARD:
      return "bg-destructive text-destructive-foreground"
    default:
      return "bg-secondary text-secondary-foreground"
  }
}

export const getLevelText = (level: Level) => {
  switch (level) {
    case Level.EASY:
      return "简单"
    case Level.MEDIUM:
      return "中等"
    case Level.HARD:
      return "困难"
    default:
      return level
  }
}

export function isAnswerCorrect(
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