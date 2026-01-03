"use client";

import { useParams } from "next/navigation";

import CoursePricingCard from "@/app/components/course/CoursePricingCard";
import CourseTabs from "@/app/components/course/CourseTabs";
import CourseContent from "@/app/components/course/CourseContent";
import CourseVideoPreview from "@/app/components/course/CourseVideoPreview";

import { courses } from "@/app/lib/courseData";

export default function CourseDetailPage() {
  const { id } = useParams();
  const course = courses.find(c => c.id === Number(id));

  if (!course) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-xl font-semibold">Course not found</h2>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr_1fr] gap-6">

      {/* LEFT COLUMN */}
      <div className="space-y-6">
        <CourseVideoPreview thumbnail={course.thumbnail} />

        <div>
          <h1 className="text-xl font-semibold">
            {course.title}
          </h1>
          <p className="text-sm text-gray-600">
            By {course.instructor}
          </p>

          <div className="flex flex-wrap gap-3 text-sm text-gray-600 mt-2">
            <span>⭐ {course.rating} ({course.reviews})</span>
            <span>🌐 {course.language}</span>
            <span>⏱ {course.duration}</span>
          </div>
        </div>

        <CourseTabs course={course} />
      </div>

      {/* MIDDLE COLUMN (COURSE CONTENT) */}
      <div>
        <CourseContent content={course.content} />
      </div>

      {/* RIGHT COLUMN (PRICING) */}
      <div className="lg:sticky lg:top-6 h-fit">
        <CoursePricingCard course={course} />
      </div>

    </div>
  );
}
