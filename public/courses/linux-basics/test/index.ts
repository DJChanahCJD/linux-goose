import { Question, Chapter, QuestionTypeEnum } from "@/lib/types";
import { Level } from "@/lib/types";
import README from './README.md'

export const testQuestions: Question[] = [
  {
    id: "q1",
    content: "Linux系统中，根目录用什么符号表示？",
    choices: ["~", "/", ".", ".."],
    answers: [1, 2],
    type: QuestionTypeEnum.CHOICE,
    hint: "根目录用 / 表示，是Linux文件系统的最顶层目录。",
  },
  {
    id: "q2",
    content: "用户的主目录通常位于哪个目录下？",
    choices: ["/usr", "/var", "/home", "/etc"],
    answers: [2],
    type: QuestionTypeEnum.CHOICE,
    hint: "/home 目录包含所有用户的主目录，每个用户都有自己的子目录。",
  },
  {
    id: "q3",
    content: "系统配置文件通常存放在哪个目录？",
    choices: ["/bin", "/etc", "/var", "/tmp"],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,  
    hint: "/etc 目录存放系统和应用程序的配置文件。",
  },
  {
    id: "q4",
    content: '符号 "~" 在Linux中代表什么？',
    choices: ["根目录", "当前目录", "用户主目录", "父目录"],
    answers: [2],
    type: QuestionTypeEnum.CHOICE,
    hint: "~ 符号是用户主目录的快捷方式，等同于 /home/username。",
  },
  {
    id: "q5",
    content: '地心说是对的',
    choices: ["对", "错"],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,
    hint: "地心说认为，地球是中心，所有的物体都围绕地球旋转。这是一个错误的说法。",
  },
];

export const testChapter: Chapter = {
  id: "test",
  title: "测试",
  desc: "测试章节",
  level: Level.EASY,
  readme: README,
  questions: testQuestions,
};