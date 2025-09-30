import { Question, QuestionTypeEnum } from "@/lib/types";

/**
 * 太阳章节的题目列表
 * 包含太阳结构、能量来源、太阳活动和相关现象的知识点
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
    content: "太阳的核心温度大约是多少？",
    choices: ["5500℃", "10万℃", "100万℃", "1500万℃"],
    answers: [3],
    type: QuestionTypeEnum.CHOICE,
    hint: "太阳核心的温度极高，约为1500万℃，这是核聚变反应所需的条件。",
  },
  {
    content: "下列哪一项是光球层上的太阳活动现象？",
    choices: ["黑子", "耀斑", "日珥", "太阳风"],
    answers: [0],
    type: QuestionTypeEnum.CHOICE,
    hint: "黑子是光球层上的暗黑区域，温度相对较低，是太阳活动的重要标志。",
  },
  {
    content: "太阳活动周期大约是多少年？",
    choices: ["1年", "5年", "11年", "22年"],
    answers: [2],
    type: QuestionTypeEnum.CHOICE,
    hint: "太阳活动（如黑子数量）呈现大约11年的周期性变化。",
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
  {
    content: "太阳的直径约为地球直径的多少倍？",
    choices: ["39倍", "109倍", "333倍", "1300倍"],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,
    hint: "太阳的直径约为139.2万公里，是地球直径的109倍。",
  },
  {
    content: "太阳质量占太阳系总质量的比例约为多少？",
    choices: ["50%", "75%", "90%", "99.86%"],
    answers: [3],
    type: QuestionTypeEnum.CHOICE,
    hint: "太阳是太阳系中质量最大的天体，占太阳系总质量的99.86%。",
  },
  {
    content: "下列哪种太阳活动现象最剧烈？",
    choices: ["黑子", "耀斑", "日珥", "太阳风"],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,
    hint: "耀斑是太阳表面突然增亮的爆发现象，释放出巨大的能量，是最剧烈的太阳活动。",
  },
];
