import { Question, QuestionTypeEnum } from "@/lib/types";

export const questions: Question[] = [
  {
    content: "在Vim中，如何进入插入模式？",
    choices: ["按i键", "按a键", "按o键", "以上都可以"],
    answers: [3],
    type: QuestionTypeEnum.CHOICE,
    hint: "i键在当前光标前插入，a键在当前光标后插入，o键在当前行下方插入新行。",
  },
  {
    content: "在Vim中，如何保存文件并退出？",
    choices: [":wq", ":q!", ":w", ":x"],
    answers: [0, 3],
    type: QuestionTypeEnum.CHOICE,
    hint: ":wq保存并退出，:x也是保存并退出，:q!强制退出不保存，:w只保存不退出。",
  },
  {
    content: "在Vim中，如何删除当前行？",
    choices: ["dd", "dw", "d$", "D"],
    answers: [0],
    type: QuestionTypeEnum.CHOICE,
    hint: "dd命令删除当前行，dw删除当前单词，d$删除到行尾，D删除从光标到行尾的内容。",
  },
  {
    content: "在Vim中，如何撤销上一次操作？",
    choices: ["u", "Ctrl+r", ":undo", "U"],
    answers: [0],
    type: QuestionTypeEnum.CHOICE,
    hint: "u键撤销上一次操作，Ctrl+r重做被撤销的操作。",
  },
  {
    content: "在Vim中，如何搜索文本？",
    choices: ["/pattern", "?pattern", ":search pattern", "Ctrl+f"],
    answers: [0, 1],
    type: QuestionTypeEnum.CHOICE,
    hint: "/向前搜索，?向后搜索，n键继续搜索下一个匹配项。",
  },
];
