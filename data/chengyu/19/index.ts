import { Chapter, LevelEnum } from "../../../lib/types";
import { questions } from "./questions";
import readme from "./README.md";

export const chapter: Chapter = {
  id: "19",
  title: "与传承、传播、传闻相关",
  desc: "本章介绍与传承、传播、传闻相关的成语，共18个成语，分为5类：传承不间断（一脉相承、血脉相通、薪火相传、不绝如缕、陈陈相因）、传承方式（口耳相传、衣钵相传、后继无人）、不同的传播形式（以讹传讹、无孔不入、津津乐道、喜闻乐见、铺天盖地）、传闻有关（道听途说、街谈巷议、稗官野史、逸闻轶事）、传播广泛（脍炙人口）。",
  level: LevelEnum.EASY,
  questions,
  readme
};