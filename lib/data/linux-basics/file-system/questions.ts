import { Question, QuestionTypeEnum } from "@/lib/types";

export const questions: Question[] = [
  {
    content: "Linux系统中，根目录用什么符号表示？",
    choices: ["~", "/", ".", ".."],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,
    hint: "根目录用 / 表示，是Linux文件系统的最顶层目录。",
  },
  {
    content: "用户的主目录通常位于哪个目录下？",
    choices: ["/usr", "/var", "/home", "/etc"],
    answers: [2],
    type: QuestionTypeEnum.CHOICE,
    hint: "/home 目录包含所有用户的主目录，每个用户都有自己的子目录。",
  },
  {
    content: "系统配置文件通常存放在哪个目录？",
    choices: ["/bin", "/etc", "/var", "/tmp"],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,  
    hint: "/etc 目录存放系统和应用程序的配置文件。",
  },
  {
    content: '符号 "~" 在Linux中代表什么？',
    choices: ["根目录", "当前目录", "用户主目录", "父目录"],
    answers: [2],
    type: QuestionTypeEnum.CHOICE,
    hint: "~ 符号是用户主目录的快捷方式，等同于 /home/username。",
  },
];
