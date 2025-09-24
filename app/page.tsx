import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { courses } from "@/data"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* 使用公共头部组件 */}
      <Header />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 w-full">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">选择课程开始学习</h2>
          <p className="text-muted-foreground">每个课程包含多个章节，通过实践练习掌握Linux知识</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Link key={course.id} href={`/course/${course.id}`}> 
              <Card className="h-full transition-all hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{course.icon}</span>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                  </div>
                  <CardDescription className="text-pretty">{course.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-end">
                    <div className="text-sm text-muted-foreground">点击开始学习 →</div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Features */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-lg font-semibold mb-2">闯关式学习</h3>
            <p className="text-muted-foreground text-sm">通过有趣的闯关模式，循序渐进掌握Linux技能</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-lg font-semibold mb-2">丰富内容</h3>
            <p className="text-muted-foreground text-sm">从基础命令到高级脚本，涵盖Linux学习的各个方面</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-lg font-semibold mb-2">即时反馈</h3>
            <p className="text-muted-foreground text-sm">答题后立即获得反馈，快速纠正错误，加深理解</p>
          </div>
        </div>
      </main>
    </div>
  )
}
