import { Chapter, LevelEnum } from "../../../lib/types";
import README from "./README.md";
import { questions } from "./questions";

/**
 * 第3章：明显含糊
 * 包含11个与明显性和含糊性相关的成语
 * 分为三类：形容明显、形容不明显以及形容偷偷、暗地的成语
 */
export const chapter: Chapter = {
  id: "3",
  title: "明显含糊",
  desc: "与明显性和含糊性相关的成语",
  level: LevelEnum.EASY,
  readme: README,
  questions,
};