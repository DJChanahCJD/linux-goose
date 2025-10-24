import { Chapter, LevelEnum } from "@/lib/types";
import readme from "./README.md";
import { questions } from "./questions";

/**
 * 第6章：管理、工作相关
 * 本章包含8个与管理、工作相关的成语，分为三类：
 * 1. 形容工作开展的局面、形势不好：尾大不掉、各行其是、各自为政、人浮于事
 * 2. 形容人工作的状态：投闲置散、如鱼得水、面面俱到、独当一面
 * 3. 强调为筹划管理付出极大心血：苦心经营、宵衣旰食
 */
export const chapter: Chapter = {
  id: "6",
  title: "管理、工作相关",
  desc: "学习与管理、工作相关的成语，包括工作开展局面、工作状态和管理筹划三类",
  level: LevelEnum.EASY,
  readme,
  questions,
};