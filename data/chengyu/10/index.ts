import { Chapter } from "../../../lib/types";
import { questions } from "./questions";
import README from "./README.md";

/**
 * 第10章：好坏参杂与建筑排列
 * 本章包含11个成语，分为两类：
 * 1. 形容建筑排列（5个）：参差不齐、错落有致、鳞次栉比、星罗棋布、美轮美奂
 * 2. 好坏参杂（6个）：泥沙俱下、良莠不齐、鱼龙混杂、鱼目混珠、买椟还珠、滥竽充数
 */
export const chapter: Chapter = {
  id: "chengyu-10",
  title: "好坏参杂与建筑排列",
  desc: "学习与好坏参杂以及建筑排列相关的成语，掌握它们的含义、用法和区别",
  readme: README,
  level: "medium",
  questions,
  prerequisites: ["chengyu-9"],
  relatedChapters: ["chengyu-7", "chengyu-8"]
};
