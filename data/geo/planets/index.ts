import { Chapter } from "@/lib/types";
import { Level } from "@/lib/types";
import README from './README.md'
import { questions } from './questions'

/**
 * 行星章节配置
 * 包含太阳系八大行星的分类、特点和相关知识
 */
export const chapter: Chapter = {
  id: "planets",
  title: "太阳系行星",
  desc: "了解太阳系八大行星的分类、特征和独特性质",
  level: Level.EASY,
  readme: README,
  questions: questions,
};