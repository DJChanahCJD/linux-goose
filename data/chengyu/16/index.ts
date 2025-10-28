import { Chapter, LevelEnum } from "../../../lib/types";
import { questions } from "./questions";
import readme from "./README.md";

export const chapter: Chapter = {
  id: "16",
  title: "收入支出",
  desc: "15个成语，分为收入支出（8个）和实践基础相关（7个）两大类。收入支出类包含开源节流、降本增效、精打细算、细水长流、量入为出、竭泽而渔、杀鸡取卵、寅吃卯粮；实践基础相关类包含纸上谈兵、无根之木、坐而论道、水中捞月、空中楼阁、镜花水月、海市蜃楼。",
  level: LevelEnum.MEDIUM,
  questions: questions,
  readme: readme,
};