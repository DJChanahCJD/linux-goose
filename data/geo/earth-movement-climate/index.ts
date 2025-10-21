import { LevelEnum, Chapter } from '@/lib/types';
import readme from './README.md';
import { questions } from './questions';

/**
 * 地球运动与气候章节
 * 包含地球运动和天气气候等内容
 */
export const chapter: Chapter = {
  id: 'earth-movement-climate',
  title: '地球运动与气候',
  desc: '学习地球的运动和天气气候，包括地球的旋转、公转、天气系统等',
  level: LevelEnum.EASY,
  readme: readme,
  questions,
};