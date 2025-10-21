import { Chapter, LevelEnum } from "../../../lib/types";
import { questions } from "./questions";
import readme from "./README.md";

/**
 * Java特点章节定义
 */
export const chapter: Chapter = {
  id: "java-features",
  title: "Java的特点",
  desc: "本章节介绍Java语言的核心特点、优势劣势、跨平台原理以及JVM、JDK、JRE的关系等基础知识。",
  level: LevelEnum.EASY,
  questions: questions,
  readme: readme
};
