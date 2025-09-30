import { Question, QuestionTypeEnum } from "@/lib/types";

/**
 * 地球构造章节的题目列表
 * 包含地球的内部结构、物理参数、组成成分和地球磁场等知识点
 */
export const questions: Question[] = [
  {
    content: "地球的平均半径大约是多少公里？",
    choices: ["6371公里", "6378公里", "40076公里", "50000公里"],
    answers: [0],
    type: QuestionTypeEnum.CHOICE,
    hint: "地球的平均半径约为6371公里。",
  },
  {
    content: "地球赤道周长大约是多少公里？",
    choices: ["6371公里", "6378公里", "40076公里", "50000公里"],
    answers: [2],
    type: QuestionTypeEnum.CHOICE,
    hint: "地球赤道周长约为40076公里，有'坐地日行八万里'的说法。",
  },
  {
    content: "地球内部结构从外到内依次是什么？",
    choices: ["地核、地幔、地壳", "地壳、地幔、地核", "地幔、地壳、地核", "地壳、地核、地幔"],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,
    hint: "地球内部结构从外到内依次是地壳、地幔、地核。",
  },
  {
    content: "地球磁场的产生主要与哪一部分有关？",
    choices: ["地壳", "地幔", "外核", "内核"],
    answers: [2],
    type: QuestionTypeEnum.CHOICE,
    hint: "外核中液态金属的流动是产生地球磁场的根本原因（磁场的发电机效应）。",
  },
  {
    content: "地壳中含量最多的元素是什么？",
    choices: ["硅", "氧", "铝", "铁"],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,
    hint: "地壳中含量最多的元素是氧，约占46.6%。",
  },
  {
    content: "驱动板块构造运动的根本动力来自哪里？",
    choices: ["地壳运动", "地幔对流", "地球自转", "月球引力"],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,
    hint: "地幔中存在着地幔对流，这是驱动板块构造运动的根本动力。",
  },
  {
    content: "地球内部体积最大的一层是什么？",
    choices: ["地壳", "地幔", "外核", "内核"],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,
    hint: "地幔占地球总体积的84%，是地球内部体积最大的一层。",
  },
  {
    content: "地球内部温度最高的部分是哪里？",
    choices: ["地壳", "地幔", "外核", "内核"],
    answers: [3],
    type: QuestionTypeEnum.CHOICE,
    hint: "内核温度可达5000-6000℃，接近太阳表面温度。",
  },
  {
    content: "下列关于地球形状的描述，正确的是？",
    choices: ["完美的球体", "两极稍扁、赤道略鼓的椭球体", "梨形", "不规则的多边形"],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,
    hint: "地球并不是一个完美的球体，而是一个两极稍扁、赤道略鼓的椭球体。",
  },
  {
    content: "地幔上部存在的软流层主要作用是什么？",
    choices: ["形成地壳", "产生磁场", "是岩浆的主要发源地", "储存地下水"],
    answers: [2],
    type: QuestionTypeEnum.CHOICE,
    hint: "软流层中的岩石呈部分熔融状态，是岩浆的主要发源地。",
  },
  {
    content: "地球磁场的主要作用是什么？",
    choices: ["产生引力", "保护地球免受太阳风伤害", "影响气候", "决定地球自转"],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,
    hint: "地球磁场形成磁层，保护地球免受太阳风（来自太阳的高能带电粒子流）的直接冲击。",
  },
  {
    content: "下列关于地壳的描述，错误的是？",
    choices: ["是地球的最外层", "平均厚度约17公里", "是完整的一块", "分为大陆地壳和海洋地壳"],
    answers: [2],
    type: QuestionTypeEnum.CHOICE,
    hint: "地壳并不是完整的一块，而是由多个板块组成。",
  },
  {
    content: "地壳中含量最多的金属元素是什么？",
    choices: ["铁", "铝", "铜", "钙"],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,
    hint: "地壳中含量最多的金属元素是铝，约占8.1%。",
  },
  {
    content: "地核主要由什么元素组成？",
    choices: ["氧和硅", "铝和铁", "铁和镍", "钙和镁"],
    answers: [2],
    type: QuestionTypeEnum.CHOICE,
    hint: "地核主要由铁和镍组成，被称为'铁镍核'。",
  },
  {
    content: "地球自转速度正在发生什么变化？",
    choices: ["逐渐加快", "逐渐减慢", "保持不变", "周期性变化"],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,
    hint: "地球的自转速度正在逐渐减慢，每100年一天的长度大约增加1.4毫秒。",
  },
];
