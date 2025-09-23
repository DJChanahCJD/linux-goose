import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className={"container mx-auto p-2"}>
        <div className="flex items-center justify-between gap-3">
          {/* 网站Logo和标题 */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl gap-3">
              🐧
              <span className="ml-2 text-xl font-bold text-balance">
                Linux Goose
              </span>
            </Link>
          </div>

          {/* 主题切换按钮 */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
