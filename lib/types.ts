import { Element, MDXProps } from "mdx/types";
import { ReactNode } from 'react';

export interface BaseQuestion {
  content: string
  type: QuestionTypeEnum
  hint?: string // 答案解析
}

export enum QuestionTypeEnum {
  CHOICE = "choice",  // 选择题
  FILL = "fill",      // 填空题
}

// 选择题/多选题/判断题
export interface ChoiceQuestion extends BaseQuestion {
  choices: string[]
  answers: number[]  // 当只有一个答案时，为单选题；当有多个答案时，为多选题
  type: QuestionTypeEnum.CHOICE
}

// 填空题
export interface FillQuestion extends BaseQuestion {
  answer: string
  type: QuestionTypeEnum.FILL
}

export type Question = ChoiceQuestion | FillQuestion

// 课程章节
export interface Chapter {
  id: string
  title: string
  desc: string    // 章节描述
  level: Level
  questions: Question[]
  readme: ReactNode | ((props: MDXProps) => Element); // 接受ReactNode或MDX组件函数
}

// 难度级别
export enum Level {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}


export interface Course {
  id: string
  title: string
  desc: string    // 简短描述
  icon: string
  chapters: Chapter[]
}