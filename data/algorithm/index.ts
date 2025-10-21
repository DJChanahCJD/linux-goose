import { Course } from "@/lib/types"
import { chapter as sortChapter } from "./sort";


const allChapters = [
  sortChapter,
];

export const linuxBasics : Course = {
    id: "基础算法",
    title: "基础算法",
    desc: "",
    icon: "🔢",
    chapters: allChapters
}
