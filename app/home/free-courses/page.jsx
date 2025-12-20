"use client";
import { useState } from "react";

import HomeTabs from "@/app/components/home/HomeTabs";
import CategoryFilters from "@/app/components/home/CategoryFilters";
import CourseList from "@/app/components/home/CourseList";

import { courses } from "@/app/lib/courseData";

export default function FreeCoursesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const freeCourses = courses.filter(
    (course) => course.type === "free"
  );

  const categories = ["All", ...new Set(freeCourses.map(c => c.category))];

  const filteredCourses =
    activeCategory === "All"
      ? freeCourses
      : freeCourses.filter(c => c.category === activeCategory);

  return (
    <>
      <HomeTabs />

      <h2 className="text-xl font-semibold mb-4">
        Free Courses
      </h2>

      <CategoryFilters
        categories={categories}
        active={activeCategory}
        onChange={setActiveCategory}
      />

      <CourseList courses={filteredCourses} />
    </>
  );
}
