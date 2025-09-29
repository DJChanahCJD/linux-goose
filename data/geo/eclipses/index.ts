import { Chapter } from "@/lib/types";
import { Level } from "@/lib/types";
import README from './README.md'
import { questions } from './questions'

/**
 * 日食月食章节配置
 * 包含日食、月食的形成原理和相关天文知识
 */
export const chapter: Chapter = {
  id: "eclipses",
  title: "日食与月食",
  desc: "了解日食和月食的形成原理、类型和相关天文知识",
  level: Level.MEDIUM,
  readme: README,
  questions: questions,
};