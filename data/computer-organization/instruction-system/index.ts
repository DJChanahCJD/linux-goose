import { Chapter } from "@/lib/types";
import { LevelEnum } from "@/lib/types";
import README from "./README.md";
import { questions } from "./questions";

export const chapter: Chapter = {
  id: "instruction-system",
  title: "指令系统",
  desc: "了解计算机指令的格式和执行过程",
  level: LevelEnum.MEDIUM,
  readme: README,
  questions: questions,
};