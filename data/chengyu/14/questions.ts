import { Question, QuestionTypeEnum } from "@/lib/types";

export const questions: Question[] = [
  {
    content: "\"前仆后继\"这个成语的意思是什么？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. 前面的人倒下了，后面的人继续跟上去",
      "B. 前面的人倒了，后面的人也倒了",
      "C. 前面的人前进，后面的人后退",
      "D. 前面的人牺牲，后面的人逃跑"
    ],
    answers: [0],
    hint: "\"前仆后继\"形容英勇斗争，不怕牺牲的精神，前面的人倒下了，后面的人继续跟上去。"
  },
  {
    content: "\"大义凛然\"这个成语中，\"凛然\"的意思是什么？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. 冷漠",
      "B. 令人敬畏的样子",
      "C. 严肃",
      "D. 威严"
    ],
    answers: [1],
    hint: "\"大义凛然\"中，\"大义\"指正义，\"凛然\"指令人敬畏的样子，整个成语形容为了坚持真理而表现出的严峻不可侵犯的样子。"
  },
  {
    content: "\"踔厉奋发\"这个成语中，\"踔\"的正确读音是什么？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. zhuó",
      "B. chuō",
      "C. zhuì",
      "D. chuò"
    ],
    answers: [1],
    hint: "\"踔厉奋发\"中，\"踔\"读作chuō，形容精神振奋，斗志昂扬。"
  },
  {
    content: "\"笃行不怠\"这个成语的意思是什么？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. 认真执行不懈怠",
      "B. 切实履行自己所学的内容，不感到倦怠",
      "C. 坚定行动不懒惰",
      "D. 诚实做事不偷懒"
    ],
    answers: [1],
    hint: "\"笃行不怠\"意思是切实履行自己所学的内容，不感到倦怠。"
  },
  {
    content: "\"赓续前行\"这个成语的意思是什么？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. 继续前进",
      "B. 不断地延续和发展，保持进步的态度和生活方式",
      "C. 持续前行",
      "D. 不断前进"
    ],
    answers: [1],
    hint: "\"赓续前行\"意思是指不断地延续和发展，保持进步的态度和生活方式。"
  },
  {
    content: "\"首当其冲\"这个成语的感情色彩是什么？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. 褒义",
      "B. 贬义",
      "C. 中性",
      "D. 褒贬两用"
    ],
    answers: [1],
    hint: "\"首当其冲\"比喻最先受到攻击或遭到灾难，是贬义词。"
  },
  {
    content: "\"并行不悖\"这个成语中，\"悖\"的意思是什么？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. 相反",
      "B. 违反，违背",
      "C. 矛盾",
      "D. 冲突"
    ],
    answers: [1],
    hint: "\"并行不悖\"中，\"悖\"指违反，违背，整个成语指同时进行而互相不违背。"
  },
  {
    content: "\"并驾齐驱\"这个成语的比喻义是什么？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. 同时前进",
      "B. 相互之间不相上下",
      "C. 一起快跑",
      "D. 并排前进"
    ],
    answers: [1],
    hint: "\"并驾齐驱\"中，\"并驾\"指几匹马并排在一起拉车，\"齐驱\"指共同快跑，比喻相互之间不相上下。"
  },
  {
    content: "\"砥砺前行\"和\"勇毅前行\"的主要区别是什么？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. \"砥砺前行\"强调克服困难，\"勇毅前行\"强调勇敢坚毅",
      "B. \"砥砺前行\"是褒义词，\"勇毅前行\"是中性词",
      "C. \"砥砺前行\"用于个人，\"勇毅前行\"用于集体",
      "D. \"砥砺前行\"强调过程，\"勇毅前行\"强调结果"
    ],
    answers: [0],
    hint: "\"砥砺前行\"强调经历磨炼，克服困难，往前进步；\"勇毅前行\"强调勇敢并且坚毅地向前进步或发展。"
  },
  {
    content: "\"一马当先\"这个成语的意思是什么？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. 一匹马跑在最前面",
      "B. 策马走在最前面",
      "C. 领先",
      "D. 率先"
    ],
    answers: [1],
    hint: "\"一马当先\"指策马走在最前面，形容率先、领先。"
  }
];