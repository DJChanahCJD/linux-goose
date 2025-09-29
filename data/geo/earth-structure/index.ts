import { Chapter } from "@/lib/types";
import { Level } from "@/lib/types";
import README from './README.md'
import { questions } from './questions'

/**
 * 地球构造章节配置
 * 包含地球的内部结构、物理参数和组成成分
 */
export const chapter: Chapter = {
  id: "earth-structure",
  title: "地球构造",
  desc: "了解地球的内部结构、物理参数和组成成分",
  level: Level.MEDIUM,
  readme: README,
  questions: questions,
};