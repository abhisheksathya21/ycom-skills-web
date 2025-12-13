"use client";

import React, { useState } from 'react';
import Image from "next/image";

import course1 from "../../public/Assets/Landing Page/course_banner4.svg";
import course2 from "../../public/Assets/Landing Page/course_banner6.svg";
import course3 from "../../public/Assets/Landing Page/course_banner3.svg";
import course4 from "../../public/Assets/Landing Page/course_banner4.svg";
import course5 from "../../public/Assets/Landing Page/course_banner2.svg";
import course6 from "../../public/Assets/Landing Page/course_banner1.svg";

const SkillsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const courses = [
    {
      id: 1,
      title: 'Digital Marketing',
      students: '20.4M',
      instructor: course1,
      bgGradient: 'from-pink-400 via-pink-500 to-purple-600'
    },
    {
      id: 2,
      title: 'App Development',
      students: '20.4M',
      instructor: course3,
      bgGradient: 'from-purple-900 via-purple-800 to-purple-900',
      hasSwiftIcon: true
    },
    {
      id: 3,
      title: 'Digital Marketing',
      students: '20.4M',
      instructor: course2,
      bgGradient: 'from-orange-500 via-purple-600 to-blue-500',
      hasFigmaIcon: true
    },
     {
      id: 4,
      title: 'Digital Marketing',
      students: '20.4M',
      instructor: course4,
      bgGradient: 'from-orange-500 via-purple-600 to-blue-500',
      hasFigmaIcon: true
    },
    {
      id: 5,
      title: 'Digital Marketing',
      students: '20.4M',
      instructor: course5,
      bgGradient: 'from-orange-500 via-purple-600 to-blue-500',
      hasFigmaIcon: true
    },
    {
      id: 6,
      title: 'Digital Marketing',
      students: '20.4M',
      instructor: course6,
      bgGradient: 'from-orange-500 via-purple-600 to-blue-500',
      hasFigmaIcon: true
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % courses.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + courses.length) % courses.length);
  };

  const visibleCourses = [
    courses[currentSlide],
    courses[(currentSlide + 1) % courses.length],
    courses[(currentSlide + 2) % courses.length]
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-10">
            Learn Valuable Skills
          </h1>
          
          {/* Navigation */}
          <nav className="inline-flex bg-white rounded-full shadow-sm px-2 py-2 gap-1">
            <a href="#" className="px-6 py-2 rounded-full bg-gray-900 text-white font-medium transition">
              Home
            </a>
            <a href="#" className="px-6 py-2 rounded-full text-gray-500 hover:text-gray-900 transition">
              School
            </a>
            <a href="#" className="px-6 py-2 rounded-full text-gray-500 hover:text-gray-900 transition">
              Free Courses
            </a>
            <a href="#" className="px-6 py-2 rounded-full text-gray-500 hover:text-gray-900 transition">
              E-Books
            </a>
          </nav>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-12 gap-10 items-center px-10 py-20">

      {/* LEFT SIDE — Reduced Width */}
      <div className="col-span-4">
        <div className="space-y-6">
          <h2 className="text-5xl font-bold text-gray-900 leading-tight">
            Learn essential career and life skills
          </h2>
          <p className="text-xl text-gray-500 leading-relaxed">
            YcomSkills helps you build in-demand skills fast and advance your career in a changing job market.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE — Wider Carousel */}
      <div className="col-span-8">
        <div className="flex gap-6 justify-center">

          {visibleCourses.map((course, index) => (
            <div
              key={`${course.id}-${index}`}
              className={`transition-all duration-500 ${
                index === 1 ? 'w-80' : 'w-80 opacity-40 scale-90'
              }`}
            >
              
              {/* Card */}
             <div className="bg-white rounded-3xl shadow-xl overflow-hidden aspect-square w-70 flex flex-col">


                {/* IMAGE SECTION */}
                <div className="relative h-[70%] bg-white flex justify-center items-center">
                 <Image
  src={course.instructor}
  alt="Instructor"
  className="w-full h-full object-cover"
  fill={false}
  width={400}
  height={400}
/>

                </div>

                {/* TEXT SECTION */}
                <div className="p-4 text-center h-[30%] flex flex-col justify-center">
                  
                  <div className="flex items-center justify-center gap-2 text-gray-600 mb-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                    </svg>
                    <span className="font-semibold text-xs">{course.students}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900">
                    {course.title}
                  </h3>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  



            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-6 mt-12">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition hover:bg-gray-50"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex gap-2">
                {courses.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition ${
                      index === currentSlide ? 'bg-gray-900 w-8' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition hover:bg-gray-50"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
       
    </section>
  );
};

export default SkillsSection;