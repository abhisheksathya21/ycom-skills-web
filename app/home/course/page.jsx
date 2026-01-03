"use client";
import { useState } from "react";

import HomeTabs from "@/app/components/home/HomeTabs";
import CourseCarousel from "@/app/components/home/CourseCarousel";
import CourseCard from "@/app/components/home/CourseCard";
import CategoryFilters from "@/app/components/home/CategoryFilters";
import CourseList from "@/app/components/home/CourseList";

import { courses } from "@/app/lib/courseData";

export default function CoursePage() {
  const [activeCategory, setActiveCategory] = useState("All Courses");

  const categories = ["All Courses", ...new Set(courses.map(c => c.category))];

  const filteredCourses =
    activeCategory === "All Courses"
      ? courses
      : courses.filter(course => course.category === activeCategory);

  return (
    <>
      <HomeTabs />

      <CourseCarousel title="Explore Courses">
        {courses.map(course => (
          <CourseCard key={course.id} {...course} />
        ))}
      </CourseCarousel>

      <CategoryFilters
        categories={categories}
        active={activeCategory}
        onChange={setActiveCategory}
      />

      <CourseList courses={filteredCourses} />
    </>
  );
}
