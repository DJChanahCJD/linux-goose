import { Chapter } from "@/lib/types";
import { LevelEnum } from "@/lib/types";
import README from './README.md'
import { questions } from './questions'

export const chapter: Chapter = {
  id: "1",
  title: "言语表达",
  desc: "与言论描写说话等表达相关",
  level: LevelEnum.EASY,
  readme: README,
  questions: questions,
};