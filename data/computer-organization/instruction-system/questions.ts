import { Question, QuestionTypeEnum } from "@/lib/types";

export const questions: Question[] = [
  {
    type: QuestionTypeEnum.CHOICE,
    content: "指令的基本格式通常包括哪两部分？",
    choices: ["操作码和地址码", "操作数和结果", "程序和数据", "指令和数据"],
    answers: [0],
    hint: "指令的基本格式包括操作码（指明操作类型）和地址码（指明操作数的地址）。",
  },
  {
    type: QuestionTypeEnum.CHOICE,
    content: "以下哪种寻址方式的指令执行速度最快？",
    choices: ["立即寻址", "直接寻址", "间接寻址", "寄存器寻址"],
    answers: [3],
    hint: "寄存器寻址直接从CPU寄存器中获取操作数，不需要访问内存，因此速度最快。",
  },
  {
    type: QuestionTypeEnum.CHOICE,
    content: "指令周期是指什么？",
    choices: ["CPU从内存取出并执行一条指令的时间", "CPU执行一条指令的时间", "CPU访问一次内存的时间", "CPU时钟的一个周期"],
    answers: [0],
    hint: "指令周期是指CPU从内存取出并执行一条指令所需的全部时间。",
  },
  {
    type: QuestionTypeEnum.FILL,
    content: "计算机执行指令的过程通常分为取指、______、执行和写回四个阶段。",
    answer: "译码",
    hint: "计算机执行指令的四个基本阶段是：取指令、指令译码、执行指令和写回结果。",
  },
];