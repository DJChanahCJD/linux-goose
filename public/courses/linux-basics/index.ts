import { Course } from "@/lib/types"
import { chapter as fileSystemChapter } from "./file-system"
import { chapter as commandChapter } from "./command"

const allChapters = [
  fileSystemChapter,
  commandChapter,
];

export const linuxBasics : Course = {
    id: "linux-basics",
    title: "Linux 基础",
    desc: "学习Linux系统的基本概念和常用命令",
    icon: "🏠",
    chapters: allChapters
}