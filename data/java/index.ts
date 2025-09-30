import { Course } from "@/lib/types"
import { chapter as javaFeaturesChapter } from "./java-features";

const allChapters = [
  javaFeaturesChapter,
];

export const javaBasics : Course = {
    id: "java-basics",
    title: "Java基础",
    desc: "Java编程语言的基础知识，包括语言特点、核心概念和应用场景。",
    icon: "☕️",
    chapters: allChapters
}
