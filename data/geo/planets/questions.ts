import { Question, QuestionTypeEnum } from "@/lib/types";

/**
 * 行星章节的题目列表
 * 包含太阳系八大行星的分类、特征和独特性质的知识点
 */
export const questions: Question[] = [
  {
    content: "太阳系中距离太阳最近的行星是哪一个？",
    choices: ["金星", "水星", "地球", "火星"],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,
    hint: "水星是距离太阳最近的行星，平均距离约5800万公里。",
  },
  {
    content: "下列哪一颗行星的自转方向是自东向西（与大多数行星相反）？",
    choices: ["火星", "土星", "金星", "天王星"],
    answers: [2],
    type: QuestionTypeEnum.CHOICE,
    hint: "金星的自转方向是自东向西，因此在金星上看太阳是从西边升起东边落下。",
  },
  {
    content: "太阳系中体积最大的行星是哪一个？",
    choices: ["木星", "土星", "地球", "天王星"],
    answers: [0],
    type: QuestionTypeEnum.CHOICE,
    hint: "木星是太阳系中体积最大、质量最重的行星，体积约为地球的1300倍。",
  },
  {
    content: "下列哪一颗行星拥有最明显、最美丽的行星环？",
    choices: ["木星", "土星", "天王星", "海王星"],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,
    hint: "土星拥有最明显、最美丽的行星环，由冰和岩石碎块组成。",
  },
  {
    content: "小行星带位于哪两颗行星之间？",
    choices: ["水星和金星", "金星和地球", "地球和火星", "火星和木星"],
    answers: [3],
    type: QuestionTypeEnum.CHOICE,
    hint: "小行星带位于火星和木星之间，可以用口诀'火烧木头灰烬多'帮助记忆。",
  },
  {
    content: "下列哪一颗行星被称为'冰巨行星'，且自转轴倾斜约98°？",
    choices: ["土星", "天王星", "海王星", "木星"],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,
    hint: "天王星被称为'冰巨行星'，其自转轴倾斜约98°，几乎是'躺着'公转。",
  },
  {
    content: "火星表面呈红色的主要原因是什么？",
    choices: ["含有大量氧化铁", "大气中含有红色气体", "反射红色太阳光", "表面温度高"],
    answers: [0],
    type: QuestionTypeEnum.CHOICE,
    hint: "火星表面富含氧化铁（铁锈的主要成分），因此呈现红色外观。",
  },
  {
    content: "太阳系中被称为'冰巨行星'的是哪两颗行星？",
    choices: ["木星和土星", "土星和天王星", "天王星和海王星", "海王星和木星"],
    answers: [2],
    type: QuestionTypeEnum.CHOICE,
    hint: "天王星和海王星被称为'冰巨行星'，它们含有较多的冰物质（水、氨和甲烷冰）。",
  },
  {
    content: "下列哪一颗行星被称为地球的'姊妹星'？",
    choices: ["水星", "金星", "火星", "木星"],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,
    hint: "金星的大小和质量与地球相近，因此被称为地球的'姊妹星'。",
  },
  {
    content: "太阳系中唯一能'浮'在水上的行星是哪一个？",
    choices: ["地球", "火星", "土星", "海王星"],
    answers: [2],
    type: QuestionTypeEnum.CHOICE,
    hint: "土星的密度比水还小（0.687g/cm³），是太阳系中唯一能'浮'在水上的行星。",
  },
  {
    content: "木星表面著名的'大红斑'是什么？",
    choices: ["巨大的火山", "持续数百年的风暴", "外星基地", "卫星的影子"],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,
    hint: "大红斑是木星表面一个持续数百年的巨大风暴，大小足以容纳2-3个地球。",
  },
  {
    content: "下列哪一颗行星是第一颗通过望远镜发现的行星？",
    choices: ["水星", "金星", "火星", "天王星"],
    answers: [3],
    type: QuestionTypeEnum.CHOICE,
    hint: "天王星是1781年由威廉·赫歇尔通过望远镜发现的第一颗行星。",
  },
  {
    content: "太阳系中唯一通过数学计算预测位置后发现的行星是哪一个？",
    choices: ["土星", "天王星", "海王星", "冥王星"],
    answers: [2],
    type: QuestionTypeEnum.CHOICE,
    hint: "海王星是1846年由伽勒根据勒维耶的数学计算预测位置后发现的行星。",
  },
  {
    content: "太阳系中自转速度最快的行星是哪一个？",
    choices: ["水星", "地球", "木星", "土星"],
    answers: [2],
    type: QuestionTypeEnum.CHOICE,
    hint: "木星的自转周期约为10小时，是太阳系中自转速度最快的行星。",
  },
  {
    content: "下列哪一颗行星有最多的卫星（已知有79颗）？",
    choices: ["地球", "火星", "木星", "土星"],
    answers: [2],
    type: QuestionTypeEnum.CHOICE,
    hint: "木星拥有最多的卫星，其中最大的四颗被称为伽利略卫星。",
  },
];
