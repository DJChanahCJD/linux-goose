import { courses } from "@/data";
import ChapterPageClient from "./page-client";

export interface ChapterPageProps {
  params: { courseId: string; chapterId: string };
}

export async function generateStaticParams() {
  const params = [];
  
  for (const course of courses) {
    for (const chapter of course.chapters) {
      params.push({
        courseId: course.id,
        chapterId: chapter.id
      });
    }
  }
  
  return params;
}

export default function ChapterPage({ params }: ChapterPageProps) {
  return <ChapterPageClient params={params} />;
}