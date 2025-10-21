import { Chapter } from "@/lib/types";
import { LevelEnum } from "@/lib/types";
import README from './README.md'
import { questions } from './questions'

export const chapter: Chapter = {
  id: "template",
  title: "模板",
  desc: "...",
  level: LevelEnum.EASY,
  readme: README,
  questions: questions,
};