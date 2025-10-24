import { Chapter, LevelEnum } from "../../../lib/types";
import { questions } from "./questions";
import readme from "./README.md";

export const chapter: Chapter = {
  id: "chengyu-14",
  title: "正义精神和做法",
  desc: "学习16个成语，分为正义精神和做法（11个）和先后（5个）两大类，包括形容英勇无畏、振作奋发、克服困难前进以及形容先后顺序的成语。",
  level: LevelEnum.MEDIUM,
  questions: questions,
  readme: readme,
};