"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import course1 from "../../../public/Assets/Landing Page/course_banner4.svg";
import course2 from "../../../public/Assets/Landing Page/course_banner6.svg";
import course3 from "../../../public/Assets/Landing Page/course_banner3.svg";
import course4 from "../../../public/Assets/Landing Page/course_banner4.svg";
import course5 from "../../../public/Assets/Landing Page/course_banner2.svg";
import course6 from "../../../public/Assets/Landing Page/course_banner1.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "School", href: "/school" },
  { label: "Free Courses", href: "/free-courses" },
  { label: "E-Books", href: "/ebooks" },
];

export default function SkillsSection() {
  const courses = [
    { id: 1, title: "Digital Marketing", students: "20.4M", instructor: course1 },
    { id: 2, title: "App Development", students: "20.4M", instructor: course3 },
    { id: 3, title: "Digital Marketing", students: "20.4M", instructor: course2 },
    { id: 4, title: "Digital Marketing", students: "20.4M", instructor: course4 },
    { id: 5, title: "Digital Marketing", students: "20.4M", instructor: course5 },
    { id: 6, title: "Digital Marketing", students: "20.4M", instructor: course6 },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const pathname = usePathname();

  const isActive = (href) =>
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);
  /* ---------- Responsive visible cards ---------- */
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % courses.length);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + courses.length) % courses.length);

  const visibleCourses = Array.from({ length: visibleCount }).map(
    (_, i) => courses[(currentSlide + i) % courses.length]
  );

  return (
    <section className="w-full bg-gray-50 py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ---------- Header ---------- */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Learn Valuable Skills
          </h1>

          <nav className="inline-flex flex-wrap justify-center bg-white rounded-full shadow px-2 py-2 gap-1">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition
            ${
              isActive(item.href)
                ? "bg-gray-900 text-white"
                : "text-gray-500 hover:text-gray-900"
            }
          `}
        >
          {item.label}
        </Link>
      ))}
    </nav>
        </div>

        {/* ---------- Content ---------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* LEFT */}
          <div className="lg:col-span-4 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4">
              Learn essential career and life skills
            </h2>
            <p className="text-base sm:text-lg text-gray-500">
              YcomSkills helps you build in-demand skills fast and advance your career.
            </p>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-8">
            <div className="flex justify-center gap-6">

              {visibleCourses.map((course, index) => (
                <div
                  key={`${course.id}-${index}`}
                  className={`transition-all duration-500
                    ${
                      visibleCount === 1
                        ? "w-72"
                        : visibleCount === 2
                        ? "w-72"
                        : index === 1
                        ? "w-80"
                        : "w-72 opacity-40 scale-90"
                    }
                  `}
                >
                  <div className="bg-white rounded-3xl shadow-xl overflow-hidden aspect-square flex flex-col">
                    
                    {/* Image */}
                    <div className="relative h-[70%]">
                      <Image
                        src={course.instructor}
                        alt={course.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Text */}
                    <div className="h-[30%] flex flex-col justify-center text-center p-4">
                      <div className="flex items-center justify-center gap-2 text-gray-600 mb-2 text-xs">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="font-semibold">{course.students}</span>
                      </div>
                      <h3 className="text-lg font-bold">{course.title}</h3>
                    </div>

                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* ---------- Controls ---------- */}
        <div className="flex justify-center items-center gap-6 mt-10">
          <button
            onClick={prevSlide}
            className="p-3 bg-white rounded-full shadow hover:bg-gray-100"
          >
            ‹
          </button>

          <div className="flex gap-2">
            {courses.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2 rounded-full transition-all
                  ${i === currentSlide ? "w-8 bg-gray-900" : "w-2 bg-gray-300"}
                `}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 bg-white rounded-full shadow hover:bg-gray-100"
          >
            ›
          </button>
        </div>

      </div>
    </section>
  );
}
