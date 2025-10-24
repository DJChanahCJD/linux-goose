import { LevelEnum } from "@/lib/types";
import { Chapter } from "@/lib/types";
import readme from "./README.md";
import { questions } from "./questions";

/**
 * 第7章：熟悉了解
 * 
 * 本章收录了19个与熟悉了解相关的成语，分为五类：
 * - 形容很熟悉：驾轻就熟、轻车熟路、了如指掌、耳熟能详、如数家珍、烂熟于心
 * - 一下就能很了解：洞若观火、明察秋毫、一目了然、一览无余
 * - 谁都知道：人尽皆知、妇孺皆知、家喻户晓
 * - 不知道：一无所知、不甚了了、默默无闻、鲜为人知
 * - 难以想象、相信：匪夷所思、不可思议
 */
export const chapter: Chapter = {
  id: "7",
  title: "熟悉了解",
  desc: "学习与熟悉了解相关的成语，包括形容很熟悉、一下就能很了解、谁都知道、不知道以及难以想象相信的成语",
  level: LevelEnum.EASY,
  readme,
  questions
};