import { Chapter } from "@/lib/types";
import { LevelEnum } from "@/lib/types";
import README from './README.md'
import { questions } from './questions'

/**
 * 板块运动章节配置
 * 包含地球板块构造、地震相关知识和地质现象
 */
export const chapter: Chapter = {
  id: "plate-tectonics",
  title: "板块运动与地震",
  desc: "了解地球板块构造、地震相关知识和地质现象",
  level: LevelEnum.HARD,
  readme: README,
  questions: questions,
};