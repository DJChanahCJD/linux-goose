import { Chapter } from "@/lib/types";
import { Level } from "@/lib/types";
import README from './README.md'
import { questions } from './questions'

export const chapter: Chapter = {
  id: "file-system",
  title: "文件系统基础",
  desc: "了解Linux文件系统结构和基本操作",
  level: Level.EASY,
  readme: README,
  questions: questions,
};