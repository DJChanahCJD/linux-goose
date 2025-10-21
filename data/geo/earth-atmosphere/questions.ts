import { Question, QuestionTypeEnum, LevelEnum } from '@/lib/types';

/**
 * 地球与大气章节的题目列表
 * 包含大气分层和地球坐标系统等知识点
 */
export const questions: Question[] = [
  {
    content: "地球大气层中，发生云、雾、雨等天气现象的主要层次是？",
    choices: ["对流层", "平流层", "中间层", "热层"],
    answers: [0],
    type: QuestionTypeEnum.CHOICE,
    hint: "对流层是地球大气层中最靠近地面的一层，空气对流明显，气温随高度增加而降低，是天气现象发生的主要区域。",
  },
  {
    content: "臭氧层主要位于大气层的哪一层？",
    choices: ["对流层", "平流层", "中间层", "热层"],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,
    hint: "臭氧层处于平流层，能够吸收短波紫外线，被称为'地球生命的保护神'。",
  },
  {
    content: "黄赤交角的度数约为多少？",
    choices: ["0°", "23°26′", "66°34′", "90°"],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,
    hint: "黄赤交角是地球公转轨道面（黄道面）与地球赤道面之间的夹角，约为23°26′。",
  },
  {
    content: "地球上最长的纬线是什么？",
    choices: ["赤道", "北回归线", "南回归线", "本初子午线"],
    answers: [0],
    type: QuestionTypeEnum.CHOICE,
    hint: "赤道是划分纬度的基线，纬度为0°，是地球上最长的纬线。",
  },
  {
    content: "地球在哪个月份位于远日点？",
    choices: ["1月", "4月", "7月", "10月"],
    answers: [2],
    type: QuestionTypeEnum.CHOICE,
    hint: "地球在7月份位于远日点，公转速度较慢，北半球夏季较长；1月份位于近日点，公转速度较快。",
  },
  {
    content: "以下哪个是东西半球的分界线？",
    choices: ["0°经线", "180°经线", "20°W和160°E组成的经线圈", "赤道"],
    answers: [2],
    type: QuestionTypeEnum.CHOICE,
    hint: "20°W和160°E组成的经线圈是东西半球的分界线，这样可以避免将一个国家或地区划分在两个半球上。",
  },
  {
    content: "低纬度的范围是多少？",
    choices: ["0°-30°", "30°-60°", "60°-90°", "0°-23°26′"],
    answers: [0],
    type: QuestionTypeEnum.CHOICE,
    hint: "纬度划分：低纬度为0°-30°，中纬度为30°-60°，高纬度为60°-90°。",
  },
  {
    content: "下列哪种物质会破坏臭氧层？",
    choices: ["氧气", "二氧化碳", "氟利昂", "水蒸气"],
    answers: [2],
    type: QuestionTypeEnum.CHOICE,
    hint: "氟利昂分解产生的氯原子是破坏臭氧层的主要物质之一。",
  },
];