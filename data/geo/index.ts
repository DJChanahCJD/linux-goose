import { Course } from "@/lib/types"
import { chapter as sunChapter } from "./sun";
import { chapter as planetsChapter } from "./planets";
import { chapter as eclipsesChapter } from "./eclipses";
import { chapter as earthStructureChapter } from "./earth-structure";
import { chapter as plateTectonicsChapter } from "./plate-tectonics";

const allChapters = [
  sunChapter,
  planetsChapter,
  eclipsesChapter,
  earthStructureChapter,
  plateTectonicsChapter
];

export const geography : Course = {
    id: "geography",
    title: "地理知识",
    desc: "学习天文学和地球科学的基础知识，包括太阳系、地球构造和自然现象",
    icon: "🌍",
    chapters: allChapters
}
