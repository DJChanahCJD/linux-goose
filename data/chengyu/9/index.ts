import { Chapter, LevelEnum } from "@/lib/types";
import { questions } from "./questions";
import README from "./README.md";

/**
 * 第9章：影响教育
 * 本章包含17个与影响教育相关的成语，分为四类：
 * 1. 暗中影响、感化：潜移默化、耳濡目染、如沐春风、润物无声
 * 2. 形容好的影响、教育：春风化雨、和风细雨、耳提面命、苦口婆心、循循善诱、诲人不倦
 * 3. 灌输智慧：醍醐灌顶、振聋发聩、成风化人
 * 4. 影响、教育的方式：因势利导、揠苗助长、越俎代庖、放任自流
 */
export const chapter: Chapter = {
  id: "chengyu-9",
  title: "影响教育",
  desc: "学习与影响、教育相关的成语，了解不同类型的教育方式和影响效果",
  readme: README,
  level: LevelEnum.MEDIUM,
  questions,
};