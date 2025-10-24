import { Chapter, LevelEnum } from "../../../lib/types";
import { questions } from "./questions";
import readme from "./README.md";

export const chapter: Chapter = {
  id: "chengyu-11",
  title: "对做法的形容",
  desc: "学习33个形容各种做法、方法和态度的成语，分为分析过程、向他人学习、做法的结果不好、形容做法、捡芝麻丢西瓜和踏实六大类。",
  level: LevelEnum.MEDIUM,
  questions: questions,
  readme: readme,
};