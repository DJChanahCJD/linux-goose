import { QuestionTypeEnum } from "@/lib/types";
import type { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    type: QuestionTypeEnum.CHOICE,
    content: '"未雨绸缪"这个成语中，"绸缪"是什么意思？',
    choices: [
      "A. 缠绕，引申指修缮",
      "B. 担忧，忧虑",
      "C. 准备，筹备",
      "D. 预测，预见",
    ],
    answers: [0],
    hint:
      '"未雨绸缪"中的"绸缪"意思是缠绕，引申指修缮。比喻事先做好防备工作。',
  },
  {
    type: QuestionTypeEnum.CHOICE,
    content: '"防微杜渐"这个成语中，"微"和"渐"分别指什么？',
    choices: [
      "A. 微小和逐渐",
      "B. 事物的苗头和事物的开头",
      "C. 细小和缓慢",
      "D. 微弱和渐进",
    ],
    answers: [1],
    hint:
      '"防微杜渐"中，"微"指细小，指事物的苗头；"渐"指事物的开头。整个成语指在不良的事物刚刚露出苗头时，就加以制止和杜绝。',
  },
  {
    type: QuestionTypeEnum.CHOICE,
    content: '"曲突徙薪"这个成语的比喻意义是什么？',
    choices: [
      "A. 形容房屋装修",
      "B. 比喻事先采取措施，防止灾祸",
      "C. 形容勤俭节约",
      "D. 比喻改变旧习惯",
    ],
    answers: [1],
    hint:
      '"曲突徙薪"原义是把烟囱改建成弯的，把灶旁的柴草搬走；比喻事先采取措施，才能防止灾祸。',
  },
  {
    type: QuestionTypeEnum.CHOICE,
    content: '"高枕无忧"这个成语形容的是什么样的状态？',
    choices: [
      "A. 形容睡眠质量好",
      "B. 形容无所忧虑",
      "C. 形容枕头很高",
      "D. 形容生活安逸",
    ],
    answers: [1],
    hint:
      '"高枕无忧"意思是垫高枕头睡觉，无所忧虑。形容准备充分，没有后顾之忧。',
  },
  {
    type: QuestionTypeEnum.CHOICE,
    content: '"临渴掘井"这个成语比喻什么？',
    choices: [
      "A. 形容口渴难耐",
      "B. 比喻平时没有准备，事到临头才想办法",
      "C. 形容做事困难",
      "D. 比喻临时抱佛脚",
    ],
    answers: [1],
    hint:
      '"临渴掘井"意思是感到口渴才挖井。比喻平时没有准备，事到临头才想办法。',
  },
  {
    type: QuestionTypeEnum.CHOICE,
    content: '"居安思危"这个成语强调的是什么？',
    choices: [
      "A. 安居乐业",
      "B. 居住环境安全",
      "C. 在安定的环境中能想到可能出现的危难",
      "D. 思考安全问题",
    ],
    answers: [2],
    hint:
      '"居安思危"指处在安定的环境时而能想到可能会出现的危难。强调要有忧患意识，提前做好准备。',
  },
  {
    type: QuestionTypeEnum.CHOICE,
    content: '"江心补漏"这个成语比喻什么情况？',
    choices: [
      "A. 修补船只",
      "B. 比喻临到紧急关头才设法补救，为时已晚",
      "C. 形容江中航行危险",
      "D. 比喻及时补救",
    ],
    answers: [1],
    hint:
      '"江心补漏"指船到江心才补漏洞。比喻临到紧急关头才设法补救，为时已晚。',
  },
  {
    type: QuestionTypeEnum.CHOICE,
    content: '"有备无患"这个成语的核心思想是什么？',
    choices: [
      "A. 有备无患",
      "B. 事先有准备，可以避免祸患",
      "C. 准备充足",
      "D. 防止意外",
    ],
    answers: [1],
    hint:
      '"有备无患"指事先有准备，才可以避免祸患。强调提前准备的重要性。',
  },
  {
    type: QuestionTypeEnum.CHOICE,
    content: '"亡羊补牢"这个成语有两层含义，下列哪项描述不正确？',
    choices: [
      "A. 比喻出了问题以后及时想法补救，以免继续受损失",
      "B. 指出了问题才想法补救，已经太晚了",
      "C. 比喻预防措施做得不够",
      "D. 比喻事后补救是无用的",
    ],
    answers: [3],
    hint:
      '"亡羊补牢"有两层含义：一是比喻出了问题以后及时想法补救，以免继续受损失；二是指出了问题才想法补救，已经太晚了。它并不表示事后补救是无用的，而是强调及时补救的重要性。',
  },
  {
    type: QuestionTypeEnum.CHOICE,
    content: '"常备不懈"这个成语强调的是什么？',
    choices: [
      "A. 经常准备",
      "B. 时刻准备着，毫不松懈",
      "C. 准备充足",
      "D. 防备不懈",
    ],
    answers: [1],
    hint:
      '"常备不懈"意思是时刻准备着，毫不松懈。强调持续保持警惕和准备状态。',
  },
];
