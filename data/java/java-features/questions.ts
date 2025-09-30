import { Question, QuestionTypeEnum } from "../../../lib/types";

/**
 * 本文件包含Java特点章节的练习题，涵盖Java特点、优势劣势、跨平台原理、JVM/JDK/JRE关系等知识点
 */
export const questions: Question[] = [
  {
    content: "Java的'编写一次，到处运行'（WORA）特性主要依赖于什么技术？",
    choices: [
      "Java编译器",
      "Java虚拟机(JVM)",
      "Java标准库",
      "Java开发工具包(JDK)"
    ],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,
    hint: "Java的跨平台性主要依赖于Java虚拟机(JVM)，它负责将字节码翻译成特定平台的机器码。"
  },
  {
    content: "以下哪一项不是Java的面向对象编程特性？",
    choices: [
      "封装",
      "继承",
      "多态",
      "指针操作"
    ],
    answers: [3],
    type: QuestionTypeEnum.CHOICE,
    hint: "Java不支持直接的指针操作，这是它与C/C++的主要区别之一。"
  },
  {
    content: "Java的垃圾回收机制主要解决了什么问题？",
    choices: [
      "提高程序执行速度",
      "减少内存泄漏问题",
      "增强代码安全性",
      "优化CPU利用率"
    ],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,
    hint: "垃圾回收机制自动管理内存，回收不再使用的对象，减少内存泄漏问题。"
  },
  {
    content: "以下哪一项是Java的主要劣势？",
    choices: [
      "跨平台性差",
      "不支持面向对象",
      "性能开销较大",
      "学习曲线陡峭"
    ],
    answers: [2],
    type: QuestionTypeEnum.CHOICE,
    hint: "相比C++等原生编译语言，Java由于JVM的存在，性能开销较大。"
  },
  {
    content: "Java字节码的文件扩展名是什么？",
    choices: [
      ".java",
      ".class",
      ".jar",
      ".exe"
    ],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,
    hint: "Java源代码(.java)编译后生成字节码文件(.class)。"
  },
  {
    content: "JVM、JDK和JRE的关系，以下描述正确的是？",
    choices: [
      "JVM包含JRE，JRE包含JDK",
      "JDK包含JRE，JRE包含JVM",
      "JRE包含JDK，JDK包含JVM",
      "JVM、JDK和JRE相互独立"
    ],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,
    hint: "JDK(开发工具包)包含JRE(运行时环境)，JRE包含JVM(虚拟机)。"
  },
  {
    content: "Java的JIT编译器的主要作用是什么？",
    choices: [
      "将Java源代码编译成字节码",
      "将字节码编译成机器码以提高执行效率",
      "检查代码语法错误",
      "管理内存分配"
    ],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,
    hint: "JIT(即时编译器)将热点代码(频繁执行的代码)编译成机器码并缓存，提高执行效率。"
  },
  {
    content: "相比编译型语言，解释型语言的主要优势是什么？",
    choices: [
      "执行速度更快",
      "跨平台性更好",
      "内存占用更少",
      "适合高性能计算"
    ],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,
    hint: "解释型语言由解释器逐行解释执行，跨平台性通常更好。"
  },
  {
    content: "以下哪种说法关于Java跨平台性是错误的？",
    choices: [
      "Java程序可以在任何安装了JVM的平台上运行",
      "JVM本身可以跨平台",
      "Java源代码只需要编译一次",
      "不同平台需要安装不同版本的JVM"
    ],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,
    hint: "JVM本身不能跨平台，不同平台需要安装不同版本的JVM。跨平台的是Java程序。"
  },
  {
    content: "Java与Python相比，以下哪项是Java的优势？",
    choices: [
      "代码更简洁",
      "启动速度更快",
      "静态类型检查",
      "适合快速原型开发"
    ],
    answers: [2],
    type: QuestionTypeEnum.CHOICE,
    hint: "Java是静态类型语言，编译时进行类型检查，可以提前发现类型错误。"
  },
  {
    content: "Java的沙箱机制主要用于增强什么特性？",
    choices: [
      "性能",
      "安全性",
      "跨平台性",
      "可维护性"
    ],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,
    hint: "沙箱机制限制Java程序的权限，防止恶意代码的执行，增强安全性。"
  },
  {
    content: "以下哪项不是Java的主要应用场景？",
    choices: [
      "企业级应用开发",
      "Android移动应用开发",
      "系统级编程",
      "大数据处理"
    ],
    answers: [2],
    type: QuestionTypeEnum.CHOICE,
    hint: "Java不适合系统级编程，这类应用通常使用C/C++等语言。"
  }
];
