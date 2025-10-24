import { Question, QuestionTypeEnum } from "../../../lib/types";

/**
 * 第9章：影响教育 - 练习题
 * 包含10道选择题，涵盖了本章所有成语的含义辨析和应用场景
 */
export const questions: Question[] = [
  {
    content: "下列成语中，哪个最适用于形容长时间在不知不觉中受到的影响？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "耳濡目染",
      "潜移默化",
      "如沐春风",
      "润物无声"
    ],
    answers: [1],
    hint: "潜移默化指受到外来影响而在不知不觉中发生变化，侧重长时间的影响。"
  },
  {
    content: "小明从小在书香门第长大，经常看到父母读书，自己也养成了爱读书的习惯，这种情况可以用哪个成语来形容？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "潜移默化",
      "耳濡目染",
      "如沐春风",
      "润物无声"
    ],
    answers: [1],
    hint: "耳濡目染指因经常听到看到而不知不觉受到影响，侧重身处某种外在环境中。"
  },
  {
    content: "下列成语中，哪个比喻给人灌输智慧，使人从迷惑中醒悟或彻底觉悟？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "振聋发聩",
      "醍醐灌顶",
      "成风化人",
      "春风化雨"
    ],
    answers: [1],
    hint: "醍醐灌顶比喻给人灌输智慧，使人从迷惑中醒悟或彻底觉悟。"
  },
  {
    content: "老师对学生耐心细致的教导，可以用哪个成语来形容？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "耳提面命",
      "苦口婆心",
      "循循善诱",
      "诲人不倦"
    ],
    answers: [0],
    hint: "耳提面命形容教诲殷切，多指长辈对晚辈、上级对下级恳切地教导。"
  },
  {
    content: "下列成语中，哪个比喻唤醒糊涂麻木之人？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "醍醐灌顶",
      "振聋发聩",
      "成风化人",
      "春风化雨"
    ],
    answers: [1],
    hint: "振聋发聩比喻唤醒糊涂麻木之人。"
  },
  {
    content: "通过倡导树立一种社会风气来影响、教育感化社会大众，这种情况可以用哪个成语来形容？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "成风化人",
      "春风化雨",
      "和风细雨",
      "润物无声"
    ],
    answers: [0],
    hint: "成风化人指通过倡导树立一种社会风气来影响、教育感化社会大众。"
  },
  {
    content: "下列成语中，哪个指顺着事物的发展趋势而加以引导？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "因势利导",
      "揠苗助长",
      "越俎代庖",
      "放任自流"
    ],
    answers: [0],
    hint: "因势利导指顺着事物的发展趋势而加以引导，是褒义词。"
  },
  {
    content: "父母替孩子做本该孩子自己做的事情，这种情况可以用哪个成语来形容？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "揠苗助长",
      "越俎代庖",
      "放任自流",
      "因势利导"
    ],
    answers: [1],
    hint: "越俎代庖比喻处理超过自己职权范围的事情。"
  },
  {
    content: "下列关于\"春风化雨\"和\"和风细雨\"的描述，哪项是正确的？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "两者都比喻良好的教育",
      "两者都比喻耐心地和颜悦色地批评或劝说",
      "春风化雨比喻良好的教育，和风细雨比喻耐心地和颜悦色地批评或劝说",
      "春风化雨比喻耐心地和颜悦色地批评或劝说，和风细雨比喻良好的教育"
    ],
    answers: [2],
    hint: "春风化雨比喻良好的教育，多用来称颂师长对学生及晚辈潜移默化的教诲；和风细雨比喻耐心地和颜悦色地批评或劝说。"
  },
  {
    content: "下列成语中，哪个形容教导人时很有耐心而不知疲倦？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "耳提面命",
      "苦口婆心",
      "循循善诱",
      "诲人不倦"
    ],
    answers: [3],
    hint: "诲人不倦指教导人时很有耐心而不知疲倦。"
  }
];