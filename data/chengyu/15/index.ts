import { Chapter, LevelEnum } from "../../../lib/types";
import { questions } from "./questions";
import readme from "./README.md";

export const chapter: Chapter = {
  id: "chengyu-15",
  title: "各种关系",
  desc: "学习38个成语，分为同呼吸共命运、互相帮助、只顾自己、和邻居的关系、配合得好、结果与目标完全相反、学别人、和别人一起干坏事、旁观者得利和其他等十大类，涵盖各种人际关系的成语。",
  level: LevelEnum.MEDIUM,
  questions: questions,
  readme: readme,
};