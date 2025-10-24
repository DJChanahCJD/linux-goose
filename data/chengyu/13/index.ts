import { Chapter, LevelEnum } from "../../../lib/types";
import { questions } from "./questions";
import readme from "./README.md";

export const chapter: Chapter = {
  id: "chengyu-13",
  title: "作风问题",
  desc: "学习16个与作风问题相关的成语，分为爱慕名利不务实、只顾自己、虚伪敷衍不负责、谄媚、领导坑下属群众和其他错误六大类。",
  level: LevelEnum.MEDIUM,
  questions: questions,
  readme: readme,
};