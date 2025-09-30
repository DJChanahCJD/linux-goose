import { Question, QuestionTypeEnum } from "@/lib/types";

/**
 * 日食月食章节的题目列表
 * 包含日食、月食的形成原理、类型、观测安全和相关天文知识
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
  {
    content: "日全食发生时，我们可以看到太阳外围的什么结构？",
    choices: ["日珥", "日冕", "色球层", "光球层"],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,
    hint: "日全食时，太阳的光球层被完全遮挡，可以看到太阳外围的日冕。",
  },
  {
    content: "月全食时，月球表面通常呈现什么颜色？",
    choices: ["黑色", "灰色", "暗红色", "蓝色"],
    answers: [2],
    type: QuestionTypeEnum.CHOICE,
    hint: "月全食时，地球大气层将阳光中的红光折射到月球表面，使月球呈现暗红色，也称为'血月'。",
  },
  {
    content: "观测日食时，下列哪种做法是安全的？",
    choices: ["直接用肉眼观看", "通过墨镜观看", "使用专门的太阳观测眼镜", "通过普通望远镜观看"],
    answers: [2],
    type: QuestionTypeEnum.CHOICE,
    hint: "观测日食时必须使用专门的太阳观测眼镜或滤光片，否则可能会对眼睛造成永久性伤害。",
  },
  {
    content: "为什么日食和月食不是每月都会发生？",
    choices: ["月球有时不会运行到地球和太阳之间", "地球有时不会运行到太阳和月球之间", "月球轨道与地球轨道有夹角", "太阳有时会被其他天体遮挡"],
    answers: [2],
    type: QuestionTypeEnum.CHOICE,
    hint: "由于月球绕地球公转的轨道与地球绕太阳公转的轨道之间存在约5°的夹角，所以太阳、地球和月球三者并不总是能够正好排成一条直线。",
  },
  {
    content: "当月球运行到离地球较远的位置时，可能会发生什么类型的日食？",
    choices: ["日全食", "日偏食", "日环食", "全环食"],
    answers: [2],
    type: QuestionTypeEnum.CHOICE,
    hint: "当月球运行到离地球较远的位置时，由于视大小较小，无法完全遮挡太阳，会在太阳周围形成一个明亮的环形光圈，即日环食。",
  },
  {
    content: "同一地点平均大约多少年才能看到一次日全食？",
    choices: ["1-2年", "50-100年", "300年左右", "1000年以上"],
    answers: [2],
    type: QuestionTypeEnum.CHOICE,
    hint: "同一地点平均约300年才能看到一次日全食，而月全食则相对更常见。",
  },
  {
    content: "农历初七、初八时，我们能看到什么月相？",
    choices: ["新月", "上弦月", "满月", "下弦月"],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,
    hint: "农历初七、初八时，月球右半边明亮，称为上弦月。",
  },
  {
    content: "日全食的持续时间最长大约是多少？",
    choices: ["几分钟", "十几分钟", "半小时", "一小时"],
    answers: [0],
    type: QuestionTypeEnum.CHOICE,
    hint: "日全食的持续时间最长不超过7分钟31秒。",
  },
  {
    content: "1919年的日全食观测验证了哪位科学家的理论？",
    choices: ["牛顿", "爱因斯坦", "霍金", "居里夫人"],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,
    hint: "1919年的日全食观测验证了爱因斯坦的广义相对论，成为科学史上的重要事件。",
  },
];
