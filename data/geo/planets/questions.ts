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
];
