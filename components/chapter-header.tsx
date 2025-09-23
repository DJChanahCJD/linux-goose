import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import { Course } from "@/lib/types";
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";

interface HeaderProps {
  /** 当前章节标题，用于显示在章节选择按钮中 */
  currentChapterId: string;
  /** 章节列表数据，用于生成章节选择菜单 */
  course: Course;
  /** 点击章节时的回调函数 */
  onChapterSelect: (chapterId: string) => void;
}

/**
 * 公共头部组件
 * 包含网站Logo、章节选择按钮和主题切换按钮
 * 设计简洁，可在所有页面重用
 */
export function ChapterHeader({
  currentChapterId,
  course,
  onChapterSelect,
}: HeaderProps) {
  const currentChapter = course.chapters.find(
    (chapter) => chapter.id === currentChapterId
  );

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div
        className={
          currentChapterId ? "w-full p-2 px-8" : "container mx-auto p-2"
        }
      >
        <div className="flex items-center justify-between gap-3">
          {/* 网站Logo和标题 */}
          <div className="flex items-center gap-3">
            <a href="/" className="text-2xl">
              🐧
            </a>
            <ChapterSelector
              currentChapterTitle={currentChapter?.title || "未命名章节"}
              course={course}
              onChapterSelect={onChapterSelect}
            />
          </div>

          {/* 主题切换按钮 */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

interface ChapterSelectorProps {
  currentChapterTitle: string;
  course?: Course;
  onChapterSelect?: (chapterId: string) => void;
}

function ChapterSelector({
  currentChapterTitle,
  course,
  onChapterSelect,
}: ChapterSelectorProps) {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Menu className="h-4 w-4 md:hidden" />
          <span className="hidden md:inline">{currentChapterTitle}</span>
          <ChevronDown className="h-4 w-4 hidden md:inline" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="w-full sm:max-w-md">
        <DrawerHeader>
        <Link href={`/course/${course?.id}`}>
          <DrawerTitle>
            {course?.title}
          </DrawerTitle>
            </Link>
        </DrawerHeader>
        <div className="p-4 space-y-2">
          {course?.chapters.map((chapter) => (
            <DrawerClose key={chapter.id} asChild>
              <Button
                variant={
                  chapter.title === currentChapterTitle ? "default" : "ghost"
                }
                className="w-full justify-start"
                onClick={() => onChapterSelect?.(chapter.id)}
              >
                {chapter.title}
              </Button>
            </DrawerClose>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
