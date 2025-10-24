import { Question, QuestionTypeEnum } from "@/lib/types";

/**
 * 第7章"熟悉了解"的练习题
 * 包含10道题目，涵盖了本章所有成语的含义辨析和应用场景
 */
export const questions: Question[] = [
  {
    content: "下列哪个成语最能形容\"对某件事物非常熟悉，了解得清清楚楚\"？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "一目了然",
      "了如指掌",
      "人尽皆知",
      "匪夷所思"
    ],
    answers: [1],
    hint: "了如指掌指对事物的了解非常清楚，像把东西放在手掌里让人看一样，形容对某件事物非常熟悉。"
  },
  {
    content: "小王对公司的业务流程非常熟悉，处理起来得心应手，可以用哪个成语来形容？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "轻车熟路",
      "一无所知",
      "明察秋毫",
      "妇孺皆知"
    ],
    answers: [0],
    hint: "轻车熟路比喻事情又轻松又熟悉，办起来很容易，符合小王对业务流程熟悉、处理得心应手的描述。"
  },
  {
    content: "下列哪个成语最能形容\"大家都知道了\"？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "鲜为人知",
      "默默无闻",
      "家喻户晓",
      "不甚了了"
    ],
    answers: [2],
    hint: "家喻户晓指家家户户都知道，形容人人皆知，符合\"大家都知道了\"的意思。"
  },
  {
    content: "对于这个新项目，我完全不了解情况，可以用哪个成语来形容？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "洞若观火",
      "一目了然",
      "一无所知",
      "如数家珍"
    ],
    answers: [2],
    hint: "一无所知意思是什么也不知道，符合对项目完全不了解情况的描述。"
  },
  {
    content: "下列哪个成语最能形容\"观察事物透彻分明，像看火一样清楚\"？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "明察秋毫",
      "洞若观火",
      "一览无余",
      "不可思议"
    ],
    answers: [1],
    hint: "洞若观火指清楚得就像看火一样，形容观察事物透彻分明。"
  },
  {
    content: "这个科学发现太神奇了，让人难以理解，可以用哪个成语来形容？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "耳熟能详",
      "匪夷所思",
      "驾轻就熟",
      "人尽皆知"
    ],
    answers: [1],
    hint: "匪夷所思形容人的思想、言谈、技艺、事情等离奇，超出寻常，指行为举止离奇古怪，超出常情，不是一般人根据常理所能想象的。"
  },
  {
    content: "老师讲解得非常清楚，使我们对这个复杂的概念______。",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "一目了然",
      "不甚了了",
      "默默无闻",
      "鲜为人知"
    ],
    answers: [0],
    hint: "一目了然指一眼就可以看清楚，符合老师讲解清楚后，学生对复杂概念的理解状态。"
  },
  {
    content: "下列哪个成语最能形容\"听得多了，也就能详尽地讲述出来\"？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "烂熟于心",
      "耳熟能详",
      "如数家珍",
      "轻车熟路"
    ],
    answers: [1],
    hint: "耳熟能详指听得多了，也就能详尽地讲述出来，符合题意。"
  },
  {
    content: "这个历史事件虽然很重要，但______，很少有人知道。",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "家喻户晓",
      "人尽皆知",
      "妇孺皆知",
      "鲜为人知"
    ],
    answers: [3],
    hint: "鲜为人知指很少有人知道，符合历史事件虽然重要但很少有人了解的语境。"
  },
  {
    content: "下列哪组成语的感情色彩相同？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "了如指掌、一无所知",
      "明察秋毫、匪夷所思",
      "轻车熟路、烂熟于心",
      "不甚了了、家喻户晓"
    ],
    answers: [2],
    hint: "轻车熟路和烂熟于心都是褒义词，形容对事物熟悉；而了如指掌是褒义，一无所知是贬义；明察秋毫是褒义，匪夷所思是贬义；不甚了了是贬义，家喻户晓是褒义。"
  }
];