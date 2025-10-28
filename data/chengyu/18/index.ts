import { Chapter, LevelEnum } from "../../../lib/types";
import { questions } from "./questions";
import readme from "./README.md";

export const chapter: Chapter = {
  id: "18",
  title: "技艺设计风格",
  desc: "本章介绍与技艺、设计、风格相关的成语，共13个成语，分为4类：技艺十分精湛（巧夺天工、精雕细琢、鬼斧神工、精益求精、炉火纯青、登堂入室、登峰造极）、技能用得熟练（得心应手）、做得质量差（粗制滥造）、心思独特创新（匠心独运、别具匠心、标新立异、别出心裁）。",
  level: LevelEnum.EASY,
  questions,
  readme
};