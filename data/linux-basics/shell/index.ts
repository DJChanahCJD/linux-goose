import { Chapter } from "@/lib/types";
import { LevelEnum } from "@/lib/types";
import README from './README.md'
import { questions } from './questions'

export const chapter: Chapter = {
  id: "shell",
  title: "Shell 脚本基础",
  desc: "学习Shell脚本编程的基本语法和常用命令",
  level: LevelEnum.MEDIUM,
  readme: README,
  questions: questions,
};