import { Chapter, LevelEnum } from "../../../lib/types";
import README from "./README.md";
import { questions } from "./questions";

export const chapter: Chapter = {
  id: "2",
  title: "态度观点看法",
  desc: "与态度、观点和看法相关的成语",
  level: LevelEnum.EASY,
  readme: README,
  questions,
};