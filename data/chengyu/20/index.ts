import { Chapter, LevelEnum } from "@/lib/types";
import { questions } from "./questions";
import readme from "./README.md";

export const chapter: Chapter = {
  id: "20",
  title: "与准备相关",
  desc: "本章学习与准备相关的成语，包括：提前准备防止危险（未雨绸缪、常备不懈、防患未然、防微杜渐、居安思危、有备无患、曲突徙薪）、准备的当后没有忧虑（高枕无忧）、出现问题进行补救（临渴掘井、江心补漏、亡羊补牢）。",
  level: LevelEnum.MEDIUM,
  questions,
  readme,
};