import { Chapter, LevelEnum } from "../../../lib/types";
import { questions } from "./questions";
import readme from "./README.md";

/**
 * 第8章：学习效果印象
 * 
 * 本章主要介绍与学习效果和印象相关的成语，共9个成语，分为两类：
 * 1. 形容学习粗浅：浮光掠影、走马观花、蜻蜓点水、浅尝辄止、囫囵吞枣、不求甚解
 * 2. 形容学到一点就能推知更多：举一反三、融会贯通、触类旁通
 */
export const chapter: Chapter = {
  id: "chengyu-chapter-8",
  title: "学习效果印象",
  desc: "本章主要介绍与学习效果和印象相关的成语，包括形容学习粗浅和形容学到一点就能推知更多的成语，共9个成语。",
  level: LevelEnum.MEDIUM,
  questions,
  readme
};