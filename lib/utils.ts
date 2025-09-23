import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Chapter, Level } from './types'

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


// 计算章节的学习时间（单位：分钟）
// 难度倍数因子
const LEVEL_TIME_FACTOR = {
  [Level.EASY]: 1,
  [Level.MEDIUM]: 2,
  [Level.HARD]: 3,
} as const
export const getChapterTime = (chapter: Chapter) => {
  const factor = LEVEL_TIME_FACTOR[chapter.level] ?? 1
  return Math.ceil(chapter.questions.length) * factor
}
