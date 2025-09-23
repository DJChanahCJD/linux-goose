import { courses } from "@/lib/data";
import { RandomQuizClient } from "./page-client";
import { getRandomQuestionsFromCourse } from "@/lib/utils";

export interface RandomQuizPageProps {
  params: { courseId: string };
}

export async function generateStaticParams() {
  const params = [];
  for (const course of courses) {
    params.push({
      courseId: course.id,
    });
  }
  return params;
}

export default async function RandomQuizPage({ params }: RandomQuizPageProps) {
  const { courseId } = params;
  const course = courses.find((c) => c.id === courseId);
  // 在服务器端生成随机题目
  const randomQuestions = course ? getRandomQuestionsFromCourse(course) : [];

  // 将生成的随机题目作为 props 传递给客户端组件
  return <RandomQuizClient params={params} randomQuestions={randomQuestions} />;
}
