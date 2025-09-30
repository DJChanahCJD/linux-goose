import { Question, QuestionTypeEnum, Level } from '@/lib/types';

/**
 * 地球运动与气候章节的题目列表
 * 包含地球运动、天气气候等知识点
 */
export const questions: Question[] = [
  {
    content: "地球自转的方向是什么？",
    choices: ["自东向西", "自西向东", "顺时针", "逆时针"],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,
    hint: "地球绕地轴自转的方向是自西向东，从北极上空看呈逆时针方向，从南极上空看呈顺时针方向。",
  },
  {
    content: "昼夜交替现象是由什么引起的？",
    choices: ["地球公转", "地球自转", "月球公转", "太阳自转"],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,
    hint: "地球自转导致了昼夜的周期性变化，形成了昼夜交替现象。",
  },
  {
    content: "以下哪种降雨类型是由于空气受热膨胀上升形成的？",
    choices: ["对流雨", "锋面雨", "地形雨", "台风雨"],
    answers: [0],
    type: QuestionTypeEnum.CHOICE,
    hint: "对流雨是因高温使蒸发旺盛，富含水汽的气流剧烈上升，至高空因减压膨胀冷却而成云致雨。",
  },
  {
    content: "地中海气候的特征是什么？",
    choices: ["全年高温多雨", "全年炎热干燥", "雨热同期", "雨热不同期"],
    answers: [3],
    type: QuestionTypeEnum.CHOICE,
    hint: "地中海气候夏季受副热带高压控制，干燥少雨；冬季受西风带影响，温和多雨，具有雨热不同期的特点。",
  },
  {
    content: "经度每隔多少度，时间相差1小时？",
    choices: ["5°", "10°", "15°", "30°"],
    answers: [2],
    type: QuestionTypeEnum.CHOICE,
    hint: "由于地球自转，经度每隔15度，时间相差1小时；经度相差1度，时间相差4分钟。",
  },
  {
    content: "东八区的中央经线是多少度？",
    choices: ["0°", "90°E", "120°E", "180°"],
    answers: [2],
    type: QuestionTypeEnum.CHOICE,
    hint: "东八区以120°E为中央经线，范围是112.5°E至127.5°E。",
  },
  {
    content: "下列哪个气压带是由于空气受热膨胀上升形成的？",
    choices: ["赤道低气压带", "副热带高气压带", "副极地低气压带", "极地高气压带"],
    answers: [0],
    type: QuestionTypeEnum.CHOICE,
    hint: "赤道地区温度高，空气受热膨胀上升，形成赤道低气压带。",
  },
  {
    content: "一天中气温最高的时间通常是？",
    choices: ["日出前后", "中午12点", "下午2点左右", "傍晚"],
    answers: [2],
    type: QuestionTypeEnum.CHOICE,
    hint: "一天中，气温在凌晨最低，下午2点左右最高。",
  },
  {
    content: "北半球陆地的最高气温一般出现在哪个月份？",
    choices: ["1月", "4月", "7月", "10月"],
    answers: [2],
    type: QuestionTypeEnum.CHOICE,
    hint: "一年中，北半球陆地最高气温出现在7月，最低气温出现在1月。",
  },
  {
    content: "中国长江中下游地区的梅雨属于哪种降雨类型？",
    choices: ["对流雨", "锋面雨", "地形雨", "台风雨"],
    answers: [1],
    type: QuestionTypeEnum.CHOICE,
    hint: "锋面活动时，暖湿气流在冷气团上被迫抬升，水蒸气遇冷凝结而形成降雨。中国长江中下游地区的梅雨就是典型的锋面雨。",
  },
];