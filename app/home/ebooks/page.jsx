"use client";
import { useState } from "react";

import HomeTabs from "@/app/components/home/HomeTabs";
import CategoryFilters from "@/app/components/home/CategoryFilters";
import CourseList from "@/app/components/home/CourseList";

import { courses } from "@/app/lib/courseData";

export default function EbooksPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const ebooks = courses.filter(
    (course) => course.type === "ebook"
  );

  const categories = ["All", ...new Set(ebooks.map(c => c.category))];

  const filteredEbooks =
    activeCategory === "All"
      ? ebooks
      : ebooks.filter(c => c.category === activeCategory);

  return (
    <>
      <HomeTabs />

      <h2 className="text-xl font-semibold mb-4">
        E-Books
      </h2>

      <CategoryFilters
        categories={categories}
        active={activeCategory}
        onChange={setActiveCategory}
      />

      <CourseList courses={filteredEbooks} />
    </>
  );
}
