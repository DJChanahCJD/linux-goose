import { Chapter, LevelEnum } from "@/lib/types";
import readme from "./README.md";
import { questions } from "./questions";

/**
 * 第5章：风气时尚名声
 * 本章包含14个与风气时尚名声相关的成语，分为四类：
 * 1. 形容流行：蔚然成风、靡然成风、大行其道、风靡一时
 * 2. 狂拽炫酷名声大：煊赫一时、如雷贯耳、炙手可热、名噪一时、闻名遐迩
 * 3. 不好的流行：过江之鲫、趋之若鹜、甚嚣尘上
 * 4. 突然出名：声名鹊起、名声大噪
 */
export const chapter: Chapter = {
  id: "5",
  title: "风气时尚名声",
  desc: "学习与风气、时尚和名声相关的成语，包括流行、名声大、不好的流行和突然出名四类",
  level: LevelEnum.EASY,
  readme,
  questions,
};