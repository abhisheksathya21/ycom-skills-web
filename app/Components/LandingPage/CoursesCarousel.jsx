"use client";

import Image from "next/image";
import React, { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import course1 from "../../../public/Assets/Landing Page/course_banner2.svg";
import course2 from "../../../public/Assets/Landing Page/course_banner3.svg";
import course3 from "../../../public/Assets/Landing Page/course_banner4.svg";
import course4 from "../../../public/Assets/Landing Page/course_banner5.svg";
import course5 from "../../../public/Assets/Landing Page/course_banner6.svg";

const categories = [
  { label: "All Courses", href: "/courses" },
  { label: "Marketing", href: "/courses/marketing" },
  { label: "Artificial Intelligence", href: "/courses/ai" },
  { label: "App Development", href: "/courses/app-development" },
  { label: "Web Development", href: "/courses/web-development" },
];

const courses = [
  { id: 1, title: "Digital marketing for Beginners", instructor: "By YashBusinessman", rating: 4.8, reviews: "450+", languages: "Hindi + English", price: "₹499/-", thumbnail: course1, isBestseller: true },
  { id: 2, title: "Digital marketing for Beginners", instructor: "By YashBusinessman", rating: 4.8, reviews: "450+", languages: "Hindi + English", price: "₹499/-", thumbnail: course2, isBestseller: true },
  { id: 3, title: "Digital marketing for Beginners", instructor: "By YashBusinessman", rating: 4.8, reviews: "450+", languages: "Hindi + English", price: "₹499/-", thumbnail: course3, isBestseller: true },
  { id: 4, title: "Digital marketing for Beginners", instructor: "By YashBusinessman", rating: 4.8, reviews: "450+", languages: "Hindi + English", price: "₹499/-", thumbnail: course4, isBestseller: true },
  { id: 5, title: "Digital marketing for Beginners", instructor: "By YashBusinessman", rating: 4.8, reviews: "450+", languages: "Hindi + English", price: "₹499/-", thumbnail: course5, isBestseller: true },
];

export default function CoursesCarousel() {
  const pathname = usePathname();
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  const isActive = (href) =>
    href === "/courses"
      ? pathname === "/courses"
      : pathname.startsWith(href);

  return (
    <section className="bg-gray-50 py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12">
          Skills to transform your career and life
        </h2>

        {/* Category Routes */}
        <nav className="flex justify-center gap-3 mb-10 flex-wrap">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-medium transition
                ${
                  isActive(cat.href)
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }
              `}
            >
              {cat.label}
            </Link>
          ))}
        </nav>

        {/* Carousel */}
        <div className="relative">

          {/* Left Arrow (desktop only) */}
          <button
            onClick={() => scroll("left")}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white p-3 rounded-full shadow-lg"
          >
            ‹
          </button>

          {/* Cards */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
          >
            {courses.map((course) => (
              <div
                key={course.id}
                className="flex-shrink-0 w-[260px] sm:w-[300px] lg:w-[320px] bg-white rounded-3xl shadow-lg overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-48 sm:h-56">
                  <Image src={course.thumbnail} alt={course.title} fill className="object-cover" />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg font-bold mb-1">{course.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{course.instructor}</p>

                  <div className="flex items-center gap-2 mb-3 text-sm">
                    <span className="font-bold">{course.rating}</span>
                    <span className="text-gray-500">({course.reviews})</span>
                  </div>

                  <p className="text-sm text-gray-600 mb-3">{course.languages}</p>

                  {course.isBestseller && (
                    <span className="inline-block bg-yellow-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                      Bestseller
                    </span>
                  )}

                  <p className="text-xl font-bold mb-4">{course.price}</p>

                  <button className="w-full py-2 border-2 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow (desktop only) */}
          <button
            onClick={() => scroll("right")}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white p-3 rounded-full shadow-lg"
          >
            ›
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
