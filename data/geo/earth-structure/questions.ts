import { Question, QuestionTypeEnum } from "@/lib/types";

/**
 * 地球构造章节的题目列表
 * 包含地球的内部结构、物理参数和组成成分的知识点
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
];
