import { courses } from "@/lib/data";
import ChapterPageClient from "./page-client";

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

export default function ChapterPage({ params }: { params: { courseId: string; chapterId: string } }) {
  const course = courses.find((b) => b.id === params.courseId);
  const chapter = course?.chapters.find((qs) => qs.id === params.chapterId);

  if (!course || !chapter) {
    return <div>Course or chapter not found</div>;
  }

  return <ChapterPageClient params={params} />;
}