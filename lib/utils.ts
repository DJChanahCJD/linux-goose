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
 * 从给定的题目源中随机获取指定数量的题目，并打乱选择题的选项顺序
 * @param source 题目源，可以是题目数组或课程对象
 * @param count 需要获取的题目数量，默认为 5
 * @returns 随机选取并处理后的题目数组
 */
export function getRandomQuestions(
  source: Question[] | Course,
  count: number = 5
): Question[] {
  const allQuestions = Array.isArray(source) 
    ? source 
    : source.chapters.flatMap(ch => ch.questions);

  return shuffleArray(allQuestions)
    .slice(0, count)
    .map(shuffleChoiceOptions);
}

/**
 * 打乱选择题的选项顺序（如果是选择题）
 * @param question 题目
 * @returns 处理后的题目
 */
function shuffleChoiceOptions(question: Question): Question {
  if (question.type !== QuestionTypeEnum.CHOICE) {
    return question;
  }

  const choiceQuestion = question as ChoiceQuestion;

  // 生成选项的随机排列
  const originalIndices = choiceQuestion.choices.map((_, index) => index);
  const shuffledIndices = [...originalIndices].sort(() => Math.random() - 0.5);

  // 重新映射选项和答案
  const shuffledChoices = shuffledIndices.map((i) => choiceQuestion.choices[i]);
  const shuffledAnswers = choiceQuestion.answers.map((ans) =>
    shuffledIndices.indexOf(ans)
  );

  return {
    ...choiceQuestion,
    choices: shuffledChoices,
    answers: shuffledAnswers,
  };
}

function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}