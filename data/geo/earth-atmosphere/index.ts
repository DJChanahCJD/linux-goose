import { Level, Chapter } from '@/lib/types';
import readme from './README.md';
import { questions } from './questions';

/**
 * 地球与大气章节
 * 包含大气分层和地球坐标系统等内容
 */
export const chapter: Chapter = {
  id: 'earth-atmosphere',
  title: '地球与大气',
  desc: '学习地球的大气结构和系统，包括大气分层、地球坐标系统等',
  level: Level.EASY,
  readme: readme,
  questions,
};