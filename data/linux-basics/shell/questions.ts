import { Question, QuestionTypeEnum } from "@/lib/types";

export const questions: Question[] = [
  {
    content: "Shell脚本的第一行通常以什么开头？",
    choices: ["#!/bin/bash", "#shell", "#script", "#!bash"],
    answers: [0],
    type: QuestionTypeEnum.CHOICE,
    hint: "#!/bin/bash 称为shebang，指定脚本使用的解释器。",
  },
  {
    content: "在Shell脚本中，如何定义变量？",
    choices: ["var=value", "$var=value", "set var=value", "declare var=value"],
    answers: [0],
    type: QuestionTypeEnum.CHOICE,
    hint: "变量定义格式为 变量名=值，等号两边不能有空格。",
  },
  {
    content: "如何执行一个Shell脚本？",
    choices: ["./script.sh", "bash script.sh", "sh script.sh", "以上都可以"],
    answers: [3],
    type: QuestionTypeEnum.CHOICE,
    hint: "三种方式都可以执行脚本，但需要确保脚本有执行权限。",
  },
  {
    content: "在Shell脚本中，如何获取命令的退出状态？",
    choices: ["$?", "$!", "$#", "$@"],
    answers: [0],
    type: QuestionTypeEnum.CHOICE,
    hint: "$? 变量保存上一个命令的退出状态，0表示成功，非0表示失败。",
  },
  {
    content: "以下哪些是Shell脚本中的条件判断语句？",
    choices: ["if-then-else", "case", "while", "for"],
    answers: [0, 1, 2, 3],
    type: QuestionTypeEnum.CHOICE,
    hint: "Shell脚本支持if、case条件判断和while、for循环结构。",
  },
];
