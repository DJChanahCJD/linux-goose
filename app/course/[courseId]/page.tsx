import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Clock, Target, Shuffle } from "lucide-react";
import { getLevelColor, getLevelText, getRandomQuizUrl } from "@/lib/utils";
import { courses } from "@/lib/data";
import { Header } from "@/components/header";

interface CoursePageProps {
  params: Promise<{ courseId: string }>;
}

// 生成静态参数函数，用于静态导出
// 返回所有可能的课程ID，以便在构建时预生成页面
export async function generateStaticParams() {
  return courses.map((course) => ({
    courseId: course.id,
  }));
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { courseId } = await params;
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* 使用统一的Header组件 */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="container mx-auto px-4 py-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-4xl">{course.icon}</div>
              <div>
                <h1 className="text-3xl font-bold text-balance">
                  {course.title}
                </h1>
                <p className="text-muted-foreground text-pretty">{course.desc}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href={getRandomQuizUrl(courseId)}>
                <Button size="lg" className="gap-2">
                  <Shuffle className="h-5 w-5" />
                  测试一下
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {course.chapters.map((chapter, index) => (
            <Link
              key={chapter.id}
              href={`/course/${courseId}/chapter/${chapter.id}`}
            >
              <Card className="h-full transition-all hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                        {index + 1}
                      </div>
                      <CardTitle className="text-xl">{chapter.title}</CardTitle>
                    </div>
                    <Badge className={getLevelColor(chapter.level)}>
                      {getLevelText(chapter.level)}
                    </Badge>
                  </div>
                  <CardDescription className="text-pretty">
                    {chapter.desc}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Target className="h-4 w-4" />
                        {chapter.questions.length} 道题
                      </div>
                    </div>
                    <div className="text-sm text-primary font-medium inline-flex items-center">
                      开始学习
                      <ArrowRight />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Progress Overview */}
        <div className="mt-12 p-6 bg-card rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">学习进度</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                {course.chapters.length}
              </div>
              <div className="text-sm text-muted-foreground">章节数</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success">
                {course.chapters.reduce(
                  (acc, set) => acc + set.questions.length,
                  0
                )}
              </div>
              <div className="text-sm text-muted-foreground">总题目数</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-warning">0%</div>
              <div className="text-sm text-muted-foreground">完成进度</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
