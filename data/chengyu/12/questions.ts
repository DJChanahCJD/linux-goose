import { QuestionTypeEnum, ChoiceQuestion } from "../../../lib/types";

export const questions: ChoiceQuestion[] = [
  {
    content: "\"墨守成规\"这个成语中，\"墨守\"指的是什么？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. 墨子守城",
      "B. 墨汁书写",
      "C. 墨水保存",
      "D. 墨迹不干"
    ],
    answers: [0],
    hint: "\"墨守\"原指墨子善于守城，后引申为固执守旧。"
  },
  {
    content: "\"抱残守缺\"这个成语有两个含义，下列哪项不是其含义？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. 固守陈旧残缺的东西不放，形容保守",
      "B. 保存虽有残缺但仍有价值的古物",
      "C. 坚持有缺陷的理论不放",
      "D. 珍惜残缺的历史文物"
    ],
    answers: [2],
    hint: "\"抱残守缺\"有两个含义：一是形容保守不知改进，二是保存有价值的残缺古物。"
  },
  {
    content: "下列哪个成语形容\"办事很有条理\"？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. 按部就班",
      "B. 循规蹈矩",
      "C. 有条不紊",
      "D. 循序渐进"
    ],
    answers: [2],
    hint: "\"有条不紊\"中，\"条\"指条理，\"紊\"指乱，形容办事很有条理。"
  },
  {
    content: "\"按图索骥\"这个成语中，\"骥\"指的是什么？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. 骆驼",
      "B. 马",
      "C. 驴",
      "D. 牛"
    ],
    answers: [1],
    hint: "\"骥\"指良马，\"按图索骥\"原指照着图像去寻找良马。"
  },
  {
    content: "下列哪个成语多用于形容文化艺术方面的创新？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. 吐故纳新",
      "B. 革故鼎新",
      "C. 推陈出新",
      "D. 除旧布新"
    ],
    answers: [2],
    hint: "\"推陈出新\"多指在文化艺术方面去掉旧的糟粕，吸取其精华，创造出新的来。"
  },
  {
    content: "\"革故鼎新\"这个成语中，\"鼎新\"的意思是什么？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. 更新鼎器",
      "B. 立新",
      "C. 革新",
      "D. 新鼎"
    ],
    answers: [1],
    hint: "\"革故鼎新\"中，\"革\"指除去，\"鼎新\"指立新，整个成语指革除旧的，建立新的。"
  },
  {
    content: "下列哪个成语形容\"在某一方面的学问或技术有独到的见解，能自成体系\"？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. 独树一帜",
      "B. 另辟蹊径",
      "C. 自成一家",
      "D. 推陈出新"
    ],
    answers: [2],
    hint: "\"自成一家\"指在某一方面的学问或技术有独到的见解或独特的做法，能自成体系。"
  },
  {
    content: "\"固步自封\"这个成语中，\"封\"的意思是什么？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. 封闭",
      "B. 封赏",
      "C. 封存",
      "D. 限制在一定的范围内"
    ],
    answers: [3],
    hint: "\"固步自封\"中，\"封\"指限制在一定的范围内，整个成语比喻因循守旧，安于现状，不求创新进取。"
  },
  {
    content: "\"去芜存菁\"这个成语的意思是什么？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. 去掉坏的，保留好的",
      "B. 去除杂质，保留精华",
      "C. 去掉旧的，保留新的",
      "D. 去除糟粕，保留精华"
    ],
    answers: [1],
    hint: "\"去芜存菁\"中，\"芜\"指杂质，\"菁\"指精华，意思是除去杂质、保留精华。"
  },
  {
    content: "下列哪个成语形容\"另外开辟一条路，比喻另创一种风格或方法\"？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. 独树一帜",
      "B. 另辟蹊径",
      "C. 自成一家",
      "D. 推陈出新"
    ],
    answers: [1],
    hint: "\"另辟蹊径\"意思是另外开辟一条路，比喻另创一种风格或方法。"
  }
];