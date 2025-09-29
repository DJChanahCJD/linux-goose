import { Question, QuestionTypeEnum } from "@/lib/types";

/**
 * 日食月食章节的题目列表
 * 包含日食、月食的形成原理、类型和相关天文知识
 */
export const questions: Question[] = [
  {
    content: "日食通常发生在农历的哪一天？",
    choices: ["初一", "初七", "十五", "二十三"],
    answers: [0],
    type: QuestionTypeEnum.CHOICE,
    hint: "日食发生在朔日（农历初一），当月球运行到太阳和地球之间时。",
  },
  {
    content: "月食通常发生在农历的哪一天？",
    choices: ["初一", "初七", "十五", "二十三"],
    answers: [2],
    type: QuestionTypeEnum.CHOICE,
    hint: "月食发生在望日（农历十五），当地球运行到太阳和月球之间时。",
  },
  {
    content: "下列哪种月食类型是不存在的？",
    choices: ["月偏食", "月全食", "月环食", "半影月食"],
    answers: [2],
    type: QuestionTypeEnum.CHOICE,
    hint: "由于地球的直径约为月球的4倍，地球的本影区域足够大，所以不会发生月环食。",
  },
  {
    content: "月球绕地球公转一周的时间大约是多少天？",
    choices: ["24小时", "27.3天", "30天", "365天"],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,
    hint: "月球绕地球公转一周的时间约为27.3天（以恒星为参考）。",
  },
  {
    content: "为什么我们在地球上始终只能看到月球的同一面？",
    choices: ["月球不自转", "月球自转速度太慢", "月球自转周期与公转周期相同", "月球被地球引力锁定"],
    answers: [2],
    type: QuestionTypeEnum.CHOICE,
    hint: "月球的自转周期与公转周期相同，这种现象称为同步自转，因此我们始终只能看到月球的同一面。",
  },
  {
    content: "东汉时期，谁最早对月食做出了科学解释？",
    choices: ["张衡", "祖冲之", "郭守敬", "沈括"],
    answers: [0],
    type: QuestionTypeEnum.CHOICE,
    hint: "东汉时期，张衡从日、月、地球所处的不同位置，对月食作了最早的科学解释。",
  },
];
