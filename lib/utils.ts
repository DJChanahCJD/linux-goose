import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  ChoiceQuestion,
  Course,
  FillQuestion,
  Level,
  Question,
  QuestionTypeEnum,
} from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getLevelColor = (level: Level) => {
  switch (level) {
    case Level.EASY:
      return "bg-success text-success-foreground";
    case Level.MEDIUM:
      return "bg-warning text-warning-foreground";
    case Level.HARD:
      return "bg-destructive text-destructive-foreground";
    default:
      return "bg-secondary text-secondary-foreground";
  }
};

export const getLevelText = (level: Level) => {
  switch (level) {
    case Level.EASY:
      return "简单";
    case Level.MEDIUM:
      return "中等";
    case Level.HARD:
      return "困难";
    default:
      return level;
  }
};

export function isAnswerCorrect(
  question: Question,
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

const GITHUB_REPO = "https://github.com/DJChanahCJD/linux-goose/tree/main";
export function getGithubEditUrl(chapterId: string, courseId: string) {
  return `${GITHUB_REPO}/lib/data/${courseId}/${chapterId}/README.md`;
}

/**
 * 生成随机刷题的URL
 * @param courseId 课程ID
 * @returns 随机刷题页面的URL
 */
export function getRandomQuizUrl(courseId: string): string {
  return `/course/${courseId}/random`;
}

/**
 * 从课程中随机选择指定数量的题目
 * @param course 课程对象
 * @param count 要选择的题目数量，默认为10
 * @returns 随机选择的题目数组
 */
export function getRandomQuestionsFromCourse(
  course: Course,
  count: number =2
): Question[] {
  // 收集所有章节的所有题目
  const allQuestions = course.chapters.flatMap(chapter => chapter.questions);
  
  // 如果题目数量不足，返回所有题目
  if (allQuestions.length <= count) {
    return allQuestions;
  }

  // 随机选择指定数量的题目
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}