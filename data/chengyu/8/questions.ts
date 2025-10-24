import { Question, QuestionTypeEnum } from "../../../lib/types";

/**
 * 第8章：学习效果印象 - 练习题
 * 包含10道选择题，涵盖了本章所有成语的含义辨析和应用场景
 */
export const questions: Question[] = [
  {
    content: "下列成语中，哪个最适用于形容对抽象事物的研究不够深入？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "走马观花",
      "浮光掠影",
      "蜻蜓点水",
      "浅尝辄止"
    ],
    answers: [1],
    hint: "浮光掠影侧重于抽象语境，比喻因事物很快消逝而使人对它的印象不深。"
  },
  {
    content: "小明只看了一本小说的前几章就不再读了，这种学习方式可以用哪个成语来形容？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "囫囵吞枣",
      "不求甚解",
      "浅尝辄止",
      "浮光掠影"
    ],
    answers: [2],
    hint: "浅尝辄止指只略微尝试一下就停止，比喻做事不求深入，侧重于停止。"
  },
  {
    content: "下列成语中，哪个一般不用于形容读书？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "走马观花",
      "囫囵吞枣",
      "不求甚解",
      "浅尝辄止"
    ],
    answers: [0],
    hint: "走马观花侧重于用眼看具体事物的过程，一般不形容读书。"
  },
  {
    content: "老师讲解了一个数学公式后，小红立即能够解决其他类似的问题，这种学习能力可以用哪个成语来形容？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "举一反三",
      "融会贯通",
      "触类旁通",
      "囫囵吞枣"
    ],
    answers: [0],
    hint: "举一反三指举出一件事，就可以触类旁通，类推出许多同类事物来，侧重于具象的事物层面。"
  },
  {
    content: "下列哪个成语强调的是将各方面的知识、道理融合贯穿，从而获得全面、透彻的理解？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "举一反三",
      "融会贯通",
      "触类旁通",
      "不求甚解"
    ],
    answers: [1],
    hint: "融会贯通指把各方面的知识、道理融合贯穿，从而获得对事物全面、透彻的理解和领悟，侧重融合。"
  },
  {
    content: "下列成语中，哪个侧重于抽象的思维层面的类推能力？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "举一反三",
      "融会贯通",
      "触类旁通",
      "浅尝辄止"
    ],
    answers: [2],
    hint: "触类旁通指掌握了某一事物的规律或知识，就能够以此类推，了解同类的其他事物，侧重于抽象的思维层面。"
  },
  {
    content: "现代人碎片化的阅读习惯，往往导致对知识的理解不够深入，这种情况可以用哪个成语来形容？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "浮光掠影",
      "囫囵吞枣",
      "不求甚解",
      "浅尝辄止"
    ],
    answers: [2],
    hint: "不求甚解指只求懂个大概，不去深入理会，符合碎片化阅读的特点。"
  },
  {
    content: "下列成语中，哪个比喻只轻轻接触表面，不深入？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "浮光掠影",
      "走马观花",
      "蜻蜓点水",
      "浅尝辄止"
    ],
    answers: [2],
    hint: "蜻蜓点水比喻进行某些动作时只轻轻接触表面，也比喻肤浅不深入。"
  },
  {
    content: "小王学习新知识时，不加分析地全盘接受，这种学习方式可以用哪个成语来形容？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "浮光掠影",
      "囫囵吞枣",
      "不求甚解",
      "浅尝辄止"
    ],
    answers: [1],
    hint: "囫囵吞枣比喻笼统地接受，不加分析、甄别，不求甚解。"
  },
  {
    content: "下列关于\"举一反三\"和\"触类旁通\"的描述，哪项是正确的？",
    type: QuestionTypeEnum.CHOICE,
    choices: [
      "两者都侧重于抽象的思维层面",
      "两者都侧重于具象的事物层面",
      "举一反三侧重于具象的事物层面，触类旁通侧重于抽象的思维层面",
      "举一反三侧重于抽象的思维层面，触类旁通侧重于具象的事物层面"
    ],
    answers: [2],
    hint: "举一反三侧重于具象的事物层面，触类旁通侧重于抽象的思维层面，两者都强调类推能力。"
  }
];