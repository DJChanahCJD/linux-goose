import { Chapter } from "@/lib/types";
import { LevelEnum } from "@/lib/types";
import README from './README.md'
import { questions } from './questions'

export const chapter: Chapter = {
  id: "sort",
  title: "排序",
  desc: "排序算法",
  level: LevelEnum.EASY,
  readme: README,
  questions: questions,
};