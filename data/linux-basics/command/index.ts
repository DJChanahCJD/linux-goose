import { Chapter } from "@/lib/types";
import { Level } from "@/lib/types";
import README from "./README.md";
import { questions } from "./questions";

export const chapter: Chapter = {
  id: "command",
  title: "常用指令",
  desc: "了解Linux常用指令的使用方法",
  level: Level.EASY,
  readme: README,
  questions: questions,
};
