import { courses } from "@/data";
import { RandomQuizClient } from "./page-client";

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
  return <RandomQuizClient params={params}/>;
}
