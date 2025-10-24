import { QuestionTypeEnum, ChoiceQuestion } from "../../../lib/types";

export const questions: ChoiceQuestion[] = [
  {
    content: "\"条分缕析\"这个成语中，\"缕\"的意思是什么？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. 线",
      "B. 分析",
      "C. 细致",
      "D. 条理"
    ],
    answers: [0],
    hint: "\"缕\"的本义是线，成语中用来比喻分析得像线一样有条理。"
  },
  {
    content: "下列哪个成语最能形容\"从根本上解决问题\"？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. 扬汤止沸",
      "B. 釜底抽薪",
      "C. 双管齐下",
      "D. 出谋划策"
    ],
    answers: [1],
    hint: "\"釜底抽薪\"比喻从锅底下抽出柴火，从根本上解决问题。"
  },
  {
    content: "\"作茧自缚\"这个成语比喻什么？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. 勤奋工作",
      "B. 自己束缚自己",
      "C. 互相帮助",
      "D. 自我保护"
    ],
    answers: [1],
    hint: "蚕吐丝作茧，把自己包在里面，比喻自己束缚了自己或使自己陷入困境。"
  },
  {
    content: "下列哪个成语形容\"见到有才德的人就想着与他齐平\"？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. 博采众长",
      "B. 见贤思齐",
      "C. 厚积薄发",
      "D. 量力而行"
    ],
    answers: [1],
    hint: "\"见贤思齐\"出自《论语》，指见到有才德的人就想着与他齐平。"
  },
  {
    content: "\"过犹不及\"这个成语中，\"不及\"的意思是什么？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. 来不及",
      "B. 不够",
      "C. 赶不上",
      "D. 不如"
    ],
    answers: [1],
    hint: "\"过犹不及\"中，\"过\"指过分，\"不及\"指不够，意思是事情做得过了头，就跟做得不够一样。"
  },
  {
    content: "下列哪个成语形容\"做事踏实，认真\"？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. 厚积薄发",
      "B. 脚踏实地",
      "C. 量力而行",
      "D. 与时俱进"
    ],
    answers: [1],
    hint: "\"脚踏实地\"比喻做事踏实，认真。"
  },
  {
    content: "\"刻舟求剑\"这个成语比喻什么？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. 勤奋努力",
      "B. 不变通，拘泥",
      "C. 聪明机智",
      "D. 坚持不懈"
    ],
    answers: [1],
    hint: "\"刻舟求剑\"比喻拘泥、不变通，不懂得根据实际情况处理问题。"
  },
  {
    content: "下列哪个成语形容\"所得到的抵不上所失去的\"？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. 因小失大",
      "B. 得不偿失",
      "C. 本末倒置",
      "D. 喧宾夺主"
    ],
    answers: [1],
    hint: "\"得不偿失\"指所得到的抵不上所失去的。"
  },
  {
    content: "\"矫枉过正\"这个成语中，\"矫枉\"的意思是什么？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. 矫正弯曲",
      "B. 过分纠正",
      "C. 弯曲的东西",
      "D. 纠正错误"
    ],
    answers: [0],
    hint: "\"矫枉\"指矫正弯曲，\"矫枉过正\"指纠正偏失错误，超过了应有的限度。"
  },
  {
    content: "下列哪个成语形容\"比喻心存侥幸，不劳而获\"？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. 掩耳盗铃",
      "B. 守株待兔",
      "C. 闭门造车",
      "D. 双管齐下"
    ],
    answers: [1],
    hint: "\"守株待兔\"出自寓言故事，比喻心存侥幸，不劳而获，也比喻死守狭隘经验，不知变通。"
  }
];