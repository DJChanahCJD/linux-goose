import { Question, QuestionTypeEnum } from "@/lib/types";

/**
 * 板块运动章节的题目列表
 * 包含板块构造、地震相关知识和地质现象的知识点
 */
export const questions: Question[] = [
  {
    content: "世界上主要的地震带不包括以下哪一项？",
    choices: ["环太平洋火山地震带", "欧亚地震带", "海岭地震带", "大西洋地震带"],
    answers: [3],
    type: QuestionTypeEnum.CHOICE,
    hint: "世界上主要有三大地震带：环太平洋火山地震带、欧亚地震带和海岭地震带。",
  },
  {
    content: "跨经度最大的板块是哪一个？",
    choices: ["太平洋板块", "欧亚板块", "美洲板块", "南极洲板块"],
    answers: [3],
    type: QuestionTypeEnum.CHOICE,
    hint: "南极洲板块是跨经度最大的板块，几乎覆盖了整个南极大陆和周围的海洋。",
  },
  {
    content: "有记录以来，历史上最大的地震发生在哪里？",
    choices: ["日本", "智利", "中国", "美国"],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,
    hint: "有记录以来，历史上最大的地震是1960年发生在南美洲智利的9.5级大地震。",
  },
  {
    content: "地震震级每相差1.0级，能量相差大约多少倍？",
    choices: ["10倍", "20倍", "30倍", "40倍"],
    answers: [2],
    type: QuestionTypeEnum.CHOICE,
    hint: "里克特震级中，震级每相差1.0级，能量相差大约30倍。",
  },
  {
    content: "下列哪种地震波传播速度更快？",
    choices: ["纵波（P波）", "横波（S波）"],
    answers: [0],
    type: QuestionTypeEnum.CHOICE,
    hint: "纵波（P波）传播速度较快（约6-7公里/秒），横波（S波）传播速度较慢（约3-4公里/秒）。",
  },
  {
    content: "关于地震的震源，下列说法正确的是？",
    choices: ["震源越深，破坏力越大", "震源越浅，破坏力越大，破坏范围也越大", "震源越浅，破坏力越大，但破坏范围越小", "震源深度与破坏力无关"],
    answers: [2],
    type: QuestionTypeEnum.CHOICE,
    hint: "震源越浅，地震波到达地表的能量损失越少，破坏力越大，但破坏范围相对较小。",
  },
  {
    content: "地震发生时，我们通常先感受到哪种晃动？",
    choices: ["左右晃动", "上下晃动", "同时感受到两种晃动", "不一定"],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,
    hint: "由于纵波（引起上下晃动）传播速度比横波（引起左右晃动）快，所以地震发生时，我们通常先感受到上下晃动。",
  },
  {
    content: "下列哪种地震占地震总数的90%以上？",
    choices: ["构造地震", "诱发地震", "人工地震", "火山地震"],
    answers: [0],
    type: QuestionTypeEnum.CHOICE,
    hint: "构造地震是由于地壳运动引起的地震，占地震总数的90%以上。",
  },
];
