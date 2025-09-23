import { Course } from "@/lib/types"
import { fileSystemChapter } from "./file-system"
import { testChapter } from "./test"

export const linuxBasics : Course = {
    id: "linux-basics",
    title: "Linux 基础",
    desc: "学习Linux系统的基本概念和常用命令",
    icon: "🏠",
    chapters: [
        fileSystemChapter,
        testChapter,
    ],
}