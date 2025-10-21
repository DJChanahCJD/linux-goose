import { Chapter, LevelEnum } from "@/lib/types";
import readme from "./README.md";
import { questions } from "./questions";

/**
 * 第4章：发展情况
 * 本章包含29个与发展情况相关的成语，分为三类：
 * 1. 形容发展迅速：风起云涌、方兴未艾、如火如荼、雨后春笋、高歌猛进、突飞猛进、水涨船高、蒸蒸日上、横空出世、异军突起、如日中天、势如破竹、一日千里、日新月异、阪上走丸
 * 2. 形容发展衰落：背道而驰、南辕北辙、分道扬镳、日渐式微、每况愈下、江河日下
 * 3. 形容发展趋势：此消彼长、推波助澜、顺势而为、顺水推舟、大势所趋、势在必行
 */
export const chapter: Chapter = {
  id: "4",
  title: "发展情况",
  desc: "学习与发展情况相关的成语，包括发展迅速、发展衰落和发展趋势三类",
  level: LevelEnum.EASY,
  readme,
  questions,
};