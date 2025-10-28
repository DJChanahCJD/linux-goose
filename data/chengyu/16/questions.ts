import { Question, QuestionTypeEnum } from "../../../lib/types";

export const questions: Question[] = [
  {
    content:
      "下列哪个成语最适合用来形容企业经营管理中既要开发财源又要节省支出的做法？",
    type: QuestionTypeEnum.CHOICE,
    choices: ["A. 竭泽而渔", "B. 开源节流", "C. 杀鸡取卵", "D. 寅吃卯粮"],
    answers: [1],
    hint: "这个成语强调开发财源和节省支出并重。",
  },
  {
    content: '"精打细算"这个成语主要强调的是：',
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. 做事要果断迅速",
      "B. 在使用人力物力时计算得很精细",
      "C. 要有长远的眼光",
      "D. 要大胆创新",
    ],
    answers: [1],
    hint: "这个成语强调精密计划和详细计算。",
  },
  {
    content: '"细水长流"这个成语可以用来形容：',
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. 做事要有始有终",
      "B. 节约使用财物，使经常不缺用",
      "C. 要有创新精神",
      "D. 做事要雷厉风行",
    ],
    answers: [1],
    hint: "这个成语比喻节约使用和长远打算。",
  },
  {
    content: "下列哪个成语比喻取利只顾眼前，不作长远打算？",
    type: QuestionTypeEnum.CHOICE,
    choices: ["A. 量入为出", "B. 细水长流", "C. 竭泽而渔", "D. 开源节流"],
    answers: [2],
    hint: "这个成语原意是排尽池水捕鱼。",
  },
  {
    content: '"杀鸡取卵"这个成语主要批评的是：',
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. 做事不够果断",
      "B. 贪图眼前微小的好处而损害长远的利益",
      "C. 缺乏创新精神",
      "D. 做事不够细心",
    ],
    answers: [1],
    hint: "这个成语比喻为了得到小利益而损害根本。",
  },
  {
    content: "下列哪个成语最适合用来形容经济困难，入不敷出的状况？",
    type: QuestionTypeEnum.CHOICE,
    choices: ["A. 寅吃卯粮", "B. 精打细算", "C. 降本增效", "D. 细水长流"],
    answers: [0],
    hint: "这个成语原意是寅年吃了卯年的粮食。",
  },
  {
    content: '"纸上谈兵"这个成语主要批评的是：',
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. 做事不够勇敢",
      "B. 空谈理论，不能解决实际问题",
      "C. 缺乏团队合作精神",
      "D. 做事不够细心",
    ],
    answers: [1],
    hint: "这个成语侧重只有理论而没有行动。",
  },
  {
    content: "下列哪个成语比喻没有根据或基础的事物？",
    type: QuestionTypeEnum.CHOICE,
    choices: ["A. 空中楼阁", "B. 无根之木", "C. 镜花水月", "D. 海市蜃楼"],
    answers: [1],
    hint: "这个成语字面意思就是'没有根的树木'。",
  },
  {
    content: '"坐而论道"这个成语主要强调的是：',
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. 要有创新精神",
      "B. 坐着空谈大道理，不见行动",
      "C. 做事要有耐心",
      "D. 要有团队合作精神",
    ],
    answers: [1],
    hint: "这个成语批评的是口头说说，不见行动。",
  },
  {
    content: "下列哪个成语最适合用来形容去做根本做不到的事情，只能徒劳无功？",
    type: QuestionTypeEnum.CHOICE,
    choices: ["A. 水中捞月", "B. 镜花水月", "C. 海市蜃楼", "D. 空中楼阁"],
    answers: [0],
    hint: "这个成语原意是在水中捞月亮。",
  },
];
