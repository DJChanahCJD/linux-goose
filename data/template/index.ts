import { Course } from "@/lib/types"
import { chapter as templateChapter } from "./template";


const allChapters = [
  templateChapter,
];

export const linuxBasics : Course = {
    id: "template课程",
    title: "模板课程",
    desc: "",
    icon: "🪵",
    chapters: allChapters
}
