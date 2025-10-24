import { QuestionTypeEnum, ChoiceQuestion } from "../../../lib/types";

export const questions: ChoiceQuestion[] = [
  {
    content: "\"好高骛远\"这个成语中，\"骛\"的意思是什么？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. 追求",
      "B. 高远",
      "C. 骄傲",
      "D. 远大"
    ],
    answers: [0],
    hint: "\"骛\"通\"务\"，是追求的意思。\"好高骛远\"指不切实际地追求过高、过远的目标。"
  },
  {
    content: "\"沽名钓誉\"这个成语的意思是什么？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. 珍惜名誉",
      "B. 猎取名声或赞誉",
      "C. 保护名誉",
      "D. 获得赞誉"
    ],
    answers: [1],
    hint: "\"沽名钓誉\"比喻故意矫情做作，用手段猎取名声或赞誉。"
  },
  {
    content: "\"独善其身\"和\"明哲保身\"的主要区别是什么？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. \"独善其身\"强调个人修养，\"明哲保身\"强调趋安避危",
      "B. \"独善其身\"是褒义词，\"明哲保身\"是贬义词",
      "C. \"独善其身\"用于个人，\"明哲保身\"用于集体",
      "D. \"独善其身\"指保全自己，\"明哲保身\"指保全他人"
    ],
    answers: [0],
    hint: "\"独善其身\"原指不得志时也要注意自身修养，后指只顾保持自身修养而不顾他人或全局；\"明哲保身\"指聪明有智慧之人善于趋安避危，保全自身。"
  },
  {
    content: "\"虚与委蛇\"这个成语中，\"委蛇\"的意思是什么？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. 蛇",
      "B. 弯曲",
      "C. 敷衍",
      "D. 委屈"
    ],
    answers: [2],
    hint: "\"虚与委蛇\"中，\"虚\"指不真实、假意，\"委蛇\"指敷衍，整个成语指对人虚情假意，敷衍应酬。"
  },
  {
    content: "\"委曲求全\"和\"曲意逢迎\"的主要区别是什么？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. \"委曲求全\"是为了保全大局，\"曲意逢迎\"是为了讨好别人",
      "B. \"委曲求全\"是褒义词，\"曲意逢迎\"是贬义词",
      "C. \"委曲求全\"用于工作，\"曲意逢迎\"用于生活",
      "D. \"委曲求全\"是被动行为，\"曲意逢迎\"是主动行为"
    ],
    answers: [0],
    hint: "\"委曲求全\"指曲意迁就，以求事成，或保全大局；\"曲意逢迎\"指违背自己的本心，千万百计迎合或讨好别人。"
  },
  {
    content: "\"阿谀奉承\"这个成语中，\"阿谀\"的意思是什么？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. 讨好",
      "B. 恭维",
      "C. 为讨好而说好听的话",
      "D. 奉承"
    ],
    answers: [2],
    hint: "\"阿谀\"指为讨好而说好听的话，\"奉承\"指恭维别人，整个成语指为讨好而说好听的话恭维别人。"
  },
  {
    content: "\"兴师动众\"这个成语的原意是什么？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. 动用很多人力做某件事",
      "B. 大规模出兵",
      "C. 兴奋地动员群众",
      "D. 兴师问罪"
    ],
    answers: [1],
    hint: "\"兴师动众\"原意是指大规模出兵，现多指动用很多人力做某件事。"
  },
  {
    content: "\"朝令夕改\"这个成语形容的是什么？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. 政令无常",
      "B. 早晨颁布的政令，晚上就改了",
      "C. 主张、办法等经常改变",
      "D. 以上都是"
    ],
    answers: [3],
    hint: "\"朝令夕改\"指早上颁布的政令，晚上就改了，形容政令无常，也形容主张、办法等经常改变。"
  },
  {
    content: "\"重蹈覆辙\"这个成语中，\"覆\"的意思是什么？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. 覆盖",
      "B. 翻倒",
      "C. 重复",
      "D. 复制"
    ],
    answers: [1],
    hint: "\"重蹈覆辙\"中，\"蹈\"指踏上，\"覆\"指翻倒，\"辙\"指车轮轧出的痕迹，整个成语比喻不吸取失败的教训，重犯以前的错误。"
  },
  {
    content: "\"哗众取宠\"这个成语的意思是什么？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "A. 讨好群众",
      "B. 用浮夸的言词或做作的行动去迎合群众，以博取好感和支持",
      "C. 获得群众的宠爱",
      "D. 吸引群众注意"
    ],
    answers: [1],
    hint: "\"哗众取宠\"指用浮夸的言词或做作的行动去迎合群众，以博取好感和支持。"
  }
];