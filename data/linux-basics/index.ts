import { Course } from "@/lib/types"
import { chapter as fileSystemChapter } from "./file-system"
import { chapter as commandChapter } from "./command"
import { chapter as vimChapter } from "./vim"
import { chapter as shellChapter } from "./shell"

const allChapters = [
  fileSystemChapter,
  commandChapter,
  vimChapter,
  shellChapter,
];

export const linuxBasics : Course = {
    id: "linux-basics",
    title: "Linux 基础",
    desc: "学习Linux系统的基本概念和常用命令",
    icon: "🏠",
    chapters: allChapters
}
