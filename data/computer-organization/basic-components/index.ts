import { Chapter } from "@/lib/types";
import { LevelEnum } from "@/lib/types";
import README from "./README.md";
import { questions } from "./questions";

export const chapter: Chapter = {
  id: "basic-components",
  title: "计算机基本组成",
  desc: "了解计算机的主要硬件组件及其功能",
  level: LevelEnum.EASY,
  readme: README,
  questions: questions,
};