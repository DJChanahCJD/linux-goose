import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { ReactNode } from "react";

interface HeaderProps {
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
}

export function Header({ leftSlot, rightSlot }: HeaderProps) {
  return (
    <header className="top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className={"container mx-auto p-2"}>
        <div className="flex items-center justify-between gap-3">
          {/* 网站Logo和标题 */}
          <div className="flex items-center px-2">
            {!leftSlot ? (
              <Link href="/" className="text-2xl gap-3">
                🐧
                <span className="ml-2 text-xl font-bold text-balance">
                  Linux Goose
                </span>
              </Link>
            ) : (
              leftSlot
            )}
          </div>

          {/* 右侧内容，包含主题切换和其他子组件 */}
          <div className="flex items-center gap-3">
            {rightSlot}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}