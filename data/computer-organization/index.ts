import { Course } from "@/lib/types"
import { chapter as basicComponentsChapter } from "./basic-components"
import { chapter as instructionSystemChapter } from "./instruction-system"

const allChapters = [
  basicComponentsChapter,
  instructionSystemChapter,
];

export const computerOrganization : Course = {
    id: "computer-organization",
    title: "计算机组成原理",
    desc: "学习计算机的基本组成和工作原理",
    icon: "💻",
    chapters: allChapters
}
