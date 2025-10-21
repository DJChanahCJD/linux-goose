/**
 * 本文件包含Java数据类型章节的练习题，涵盖8种基本数据类型、类型转换、装箱拆箱和BigDecimal等知识点
 */
import { Question, QuestionTypeEnum } from "@/lib/types";

export const questions: Question[] = [
  {
    content: "Java中byte类型的取值范围是？",
    choices: [
      "-128到127",
      "-32768到32767",
      "-2147483648到2147483647",
      "0到255"
    ],
    answers: [0],
    type: QuestionTypeEnum.CHOICE,
    hint: "byte类型是8位有符号整数，取值范围是-128(-2^7)到127(2^7-1)。"
  },
  {
    content: "以下哪种数据类型是Java中表示小数的默认类型？",
    choices: [
      "float",
      "double",
      "BigDecimal",
      "decimal"
    ],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,
    hint: "double是Java中表示小数的默认类型，是双精度浮点数。"
  },
  {
    content: "int类型占用多少个字节？",
    choices: [
      "1字节",
      "2字节",
      "4字节",
      "8字节"
    ],
    answers: [2],
    type: QuestionTypeEnum.CHOICE,
    hint: "int类型是32位（bit），占4个字节（byte）。"
  },
  {
    content: "以下哪种情况需要使用强制类型转换？",
    choices: [
      "将int转换为long",
      "将float转换为double",
      "将double转换为int",
      "将Integer转换为int"
    ],
    answers: [2],
    type: QuestionTypeEnum.CHOICE,
    hint: "当目标类型的范围小于源类型时，需要使用强制类型转换，例如将double转换为int。"
  },
  {
    content: "Java中的char类型占用多少个字节？",
    choices: [
      "1字节",
      "2字节",
      "4字节",
      "8字节"
    ],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,
    hint: "Java中的char类型占用2个字节，采用Unicode编码。"
  },
  {
    content: "在Java中，声明long类型的常量时，需要在数值后面添加什么？",
    choices: [
      "L或l",
      "F或f",
      "D或d",
      "无特殊要求"
    ],
    answers: [0],
    type: QuestionTypeEnum.CHOICE,
    hint: "声明long类型的常量时，需要在数值后面添加L或l，例如100L。"
  },
  {
    content: "以下哪项是Java中处理精确小数计算的推荐方式？",
    choices: [
      "使用double类型",
      "使用float类型",
      "使用BigDecimal类",
      "使用Math类"
    ],
    answers: [2],
    type: QuestionTypeEnum.CHOICE,
    hint: "BigDecimal类提供了精确的十进制计算，适合处理货币等需要精确计算的场景。"
  },
  {
    content: "以下代码执行后的输出结果是什么？\nint largeNum = 300;\nbyte b = (byte) largeNum;\nSystem.out.println(b);",
    choices: [
      "300",
      "44",
      "-44",
      "编译错误"
    ],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,
    hint: "byte类型的取值范围是-128到127，300超出范围，强制转换后会发生数据溢出，结果为44。"
  },
  {
    content: "以下哪项是自动装箱的例子？",
    choices: [
      "Integer i = 10;",
      "int n = i;",
      "String s = \"hello\";\nchar c = s.charAt(0);",
      "double d = 3.14;\nfloat f = (float) d;"
    ],
    answers: [0],
    type: QuestionTypeEnum.CHOICE,
    hint: "自动装箱是将基本数据类型转换为对应的包装类，例如将int转换为Integer。"
  },
  {
    content: "以下关于Java数据类型的描述，错误的是？",
    choices: [
      "boolean类型只有true和false两个取值",
      "char类型是无符号的，不能为负",
      "Java中的数值类型都是有符号的",
      "float类型的精度比double类型高"
    ],
    answers: [3],
    type: QuestionTypeEnum.CHOICE,
    hint: "double类型是双精度浮点数，精度比单精度的float类型高。"
  }
];