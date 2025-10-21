import { Course } from "@/lib/types"
import { chapter as chapter1 } from "./1";
import { chapter as chapter2 } from "./2";
import { chapter as chapter3 } from "./3";
import { chapter as chapter4 } from "./4";


const allChapters = [
  chapter1,
  chapter2,
  chapter3,
  chapter4,
];

export const chengyu : Course = {
    id: "chengyu",
    title: "国考高频成语",
    desc: "",
    icon: "💼",
    chapters: allChapters
}
