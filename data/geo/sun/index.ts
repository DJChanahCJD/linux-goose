import { Chapter } from "@/lib/types";
import { Level } from "@/lib/types";
import README from './README.md'
import { questions } from './questions'

/**
 * 太阳章节配置
 * 包含太阳的基本信息、结构和相关现象
 */
export const chapter: Chapter = {
  id: "sun",
  title: "太阳",
  desc: "了解太阳的结构、能量来源和太阳活动",
  level: Level.EASY,
  readme: README,
  questions: questions,
};