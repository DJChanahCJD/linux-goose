import { Question, QuestionTypeEnum } from "@/lib/types";

export const questions: Question[] = [
  {
    type: QuestionTypeEnum.CHOICE,
    content: "计算机的中央处理器（CPU）主要由哪两部分组成？",
    choices: ["控制器和运算器", "内存和硬盘", "输入和输出设备", "系统总线和接口"],
    answers: [0],
    hint: "CPU主要由控制器和运算器组成，是计算机的核心部件。",
  },
  {
    type: QuestionTypeEnum.CHOICE,
    content: "以下哪个部件不属于计算机的五大组成部分？",
    choices: ["控制器", "存储器", "显卡", "输入设备"],
    answers: [2],
    hint: "计算机的五大组成部分是控制器、运算器、存储器、输入设备和输出设备。",
  },
  {
    type: QuestionTypeEnum.CHOICE,
    content: "RAM的特点是什么？",
    choices: ["断电后数据不丢失", "断电后数据丢失", "存储容量大", "读写速度慢"],
    answers: [1],
    hint: "RAM（随机存取存储器）是易失性存储器，断电后数据会丢失。",
  },
  {
    type: QuestionTypeEnum.FILL,
    content: "计算机的存储体系中，通常速度最快但容量最小的是______。",
    answer: "寄存器",
    hint: "在计算机的存储体系中，寄存器位于CPU内部，速度最快但容量最小。",
  },
];