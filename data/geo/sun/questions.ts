import { Question, QuestionTypeEnum } from "@/lib/types";

/**
 * 太阳章节的题目列表
 * 包含太阳结构、能量来源和相关现象的知识点
 */
export const questions: Question[] = [
  {
    content: "太阳的能量主要来自于什么反应？",
    choices: ["核裂变", "核聚变", "化学反应", "引力收缩"],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,
    hint: "太阳的能量来自于核心的核聚变反应，氢原子核聚变为氦原子核释放能量。",
  },
  {
    content: "下列哪一项是光球层上的太阳活动现象？",
    choices: ["黑子", "耀斑", "日珥", "太阳风"],
    answers: [0],
    type: QuestionTypeEnum.CHOICE,
    hint: "黑子是光球层上的暗黑区域，温度相对较低，是太阳活动的重要标志。",
  },
  {
    content: "极光形成的三大要素不包括以下哪一项？",
    choices: ["太阳风", "地球磁场", "大气", "月球引力"],
    answers: [3],
    type: QuestionTypeEnum.CHOICE,
    hint: "极光形成需要太阳风、地球磁场和地球大气三个要素，与月球引力无关。",
  },
  {
    content: "光年是什么单位？",
    choices: ["时间单位", "距离单位", "速度单位", "能量单位"],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,
    hint: "光年是光在真空中一年所走的距离，是天文学中常用的距离单位。",
  },
  {
    content: "太阳风中的高速带电粒子流主要来自太阳的哪一层？",
    choices: ["光球层", "色球层", "日冕层", "对流层"],
    answers: [2],
    type: QuestionTypeEnum.CHOICE,
    hint: "太阳风是从日冕层不断向外抛出的高速带电粒子流。",
  },
];
