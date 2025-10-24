import { Chapter, LevelEnum } from "../../../lib/types";
import { questions } from "./questions";
import readme from "./README.md";

export const chapter: Chapter = {
  id: "chengyu-12",
  title: "守旧创新",
  desc: "学习19个与守旧和创新相关的成语，分为形容守旧、形容按规矩办事、改良旧的换新的和形容创新独特四大类。",
  level: LevelEnum.MEDIUM,
  questions: questions,
  readme: readme,
};