import { Question, QuestionTypeEnum } from "../../../lib/types";

/**
 * 第10章：好坏参杂与建筑排列 - 练习题
 * 包含10道选择题，涵盖了本章所有成语的含义辨析和应用场景
 */
export const questions: Question[] = [
  {
    content: "下列成语中，哪个最适合形容建筑物排列密集且整齐的样子？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "错落有致",
      "鳞次栉比",
      "星罗棋布",
      "参差不齐"
    ],
    answers: [1],
    hint: "鳞次栉比形容建筑物等密集、排列整齐的样子。"
  },
  {
    content: "形容事物数量众多，散布范围很广，可以用哪个成语？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "鳞次栉比",
      "错落有致",
      "星罗棋布",
      "美轮美奂"
    ],
    answers: [2],
    hint: "星罗棋布意思是像天空中的星星和棋盘上的棋子一样罗列、分布着，形容数量众多，散布的范围很广。"
  },
  {
    content: "下列成语中，哪个多用来形容建筑物雄伟壮观，富丽堂皇？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "错落有致",
      "鳞次栉比",
      "美轮美奂",
      "星罗棋布"
    ],
    answers: [2],
    hint: "美轮美奂多用于形容建筑物雄伟壮观，富丽堂皇；也用来形容雕刻或建筑艺术的精美效果。"
  },
  {
    content: "形容事物的布局虽然参差不齐，但却极有情趣，使人看了有好感，可以用哪个成语？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "参差不齐",
      "错落有致",
      "鳞次栉比",
      "杂乱无章"
    ],
    answers: [1],
    hint: "错落有致意思是形容事物的布局虽然参差不齐，但却极有情趣，使人看了有好感。"
  },
  {
    content: "下列成语中，哪个侧重量大且好坏混杂在一起？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "鱼龙混杂",
      "良莠不齐",
      "泥沙俱下",
      "鱼目混珠"
    ],
    answers: [2],
    hint: "泥沙俱下侧重量大且好坏都有。"
  },
  {
    content: "形容好人坏人混在一起，也可形容事物好坏混杂，可以用哪个成语？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "鱼目混珠",
      "滥竽充数",
      "鱼龙混杂",
      "买椟还珠"
    ],
    answers: [2],
    hint: "鱼龙混杂比喻坏人和好人混在一起，现在用法不止形容人，也可形容事物。"
  },
  {
    content: "比喻以假乱真，也可指以次充好，可以用哪个成语？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "滥竽充数",
      "鱼目混珠",
      "良莠不齐",
      "泥沙俱下"
    ],
    answers: [1],
    hint: "鱼目混珠比喻以假乱真，也可指以次充好。"
  },
  {
    content: "比喻没有真实本领的人混在行家队伍里充数，也比喻以次充好，可以用哪个成语？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "买椟还珠",
      "鱼目混珠",
      "滥竽充数",
      "参差不齐"
    ],
    answers: [2],
    hint: "滥竽充数比喻没有真实本领的人混在行家队伍里充数，也比喻以次充好。"
  },
  {
    content: "下列关于\"良莠不齐\"和\"鱼龙混杂\"的描述，哪项是正确的？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "两者都只能形容人，不能形容事物",
      "两者都可形容人或事物的好坏混杂",
      "良莠不齐只能形容人，鱼龙混杂只能形容事物",
      "良莠不齐可形容事物，鱼龙混杂只能形容人"
    ],
    answers: [1],
    hint: "良莠不齐和鱼龙混杂现在用法都不止形容人，也可形容事物。"
  },
  {
    content: "比喻没有眼光，不识货，取舍失当，可以用哪个成语？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "鱼目混珠",
      "滥竽充数",
      "买椟还珠",
      "泥沙俱下"
    ],
    answers: [2],
    hint: "买椟还珠比喻没有眼光，不识货，取舍失当。"
  }
];
