import { Chapter } from "@/lib/types";
import { Level } from "@/lib/types";
import README from './README.md'
import { questions } from './questions'

export const chapter: Chapter = {
  id: "template",
  title: "模板",
  desc: "...",
  level: Level.EASY,
  readme: README,
  questions: questions,
};