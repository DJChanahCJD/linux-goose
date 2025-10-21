import { LevelEnum, Chapter } from "@/lib/types";
import { questions } from "./questions";
import readme from "./README.md";

/**
 * Java数据类型章节定义
 */
export const chapter: Chapter = {
  id: "data-types",
  title: "Java数据类型",
  desc: "本章节详细介绍Java的8种基本数据类型、类型转换规则、装箱拆箱机制以及BigDecimal的使用场景等知识点。",
  level: LevelEnum.EASY,
  questions: questions,
  readme: readme
};