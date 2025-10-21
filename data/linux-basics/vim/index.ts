import { Chapter } from "@/lib/types";
import { LevelEnum } from "@/lib/types";
import README from './README.md'
import { questions } from './questions'

export const chapter: Chapter = {
  id: "vim",
  title: "Vim 文件操作",
  desc: "学习Vim编辑器的基本文件操作和编辑技巧",
  level: LevelEnum.MEDIUM,
  readme: README,
  questions: questions,
};