"use client";
import Image from "next/image";
import React, { useState, useRef } from 'react';
import course1 from '../../public/Assets/Landing Page/course_banner2.svg';
import course2 from '../../public/Assets/Landing Page/course_banner3.svg';
import course3 from '../../public/Assets/Landing Page/course_banner4.svg';
import course4 from '../../public/Assets/Landing Page/course_banner5.svg';
import course5 from '../../public/Assets/Landing Page/course_banner6.svg'
const CoursesCarousel = () => {
  const [activeCategory, setActiveCategory] = useState('All Courses');
  const scrollContainerRef = useRef(null);

  const categories = [
    'All Courses',
    'Marketing',
    'Artificial intelligence',
    'App Development',
    'Web Development'
  ];

  const courses = [
    {
      id: 1,
      title: 'Digital marketing for Beginners',
      instructor: 'By YashBusinessman',
      rating: 4.8,
      reviews: '450+',
      languages: 'Hindi + English',
      price: '₹499/-',
      thumbnail: course1,
      isBestseller: true,
      playIcon: true
    },
    {
      id: 2,
      title: 'Digital marketing for Beginners',
      instructor: 'By YashBusinessman',
      rating: 4.8,
      reviews: '450+',
      languages: 'Hindi + English',
      price: '₹499/-',
      thumbnail: course2,
      isBestseller: true,
      playIcon: true
    },
    {
      id: 3,
      title: 'Digital marketing for Beginners',
      instructor: 'By YashBusinessman',
      rating: 4.8,
      reviews: '450+',
      languages: 'Hindi + English',
      price: '₹499/-',
      thumbnail:course3,
      isBestseller: true,
      playIcon: true
    },
    {
      id: 4,
      title: 'Digital marketing for Beginners',
      instructor: 'By YashBusinessman',
      rating: 4.8,
      reviews: '450+',
      languages: 'Hindi + English',
      price: '₹499/-',
      thumbnail: course4,
      isBestseller: true,
      playIcon: true
    },
    {
      id: 5,
      title: 'Digital marketing for Beginners',
      instructor: 'By YashBusinessman',
      rating: 4.8,
      reviews: '450+',
      languages: 'Hindi + English',
      price: '₹499/-',
      thumbnail: course5,
      isBestseller: true,
      playIcon: true
    }
  ];

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 350;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-12">
          Skills to transform your career and life
        </h2>

        {/* Category Pills */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition ${
                activeCategory === category
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Cards Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {courses.map((course) => (
              <div
                key={course.id}
                className="flex-shrink-0 w-80 bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                {/* Thumbnail */}
                <div className="relative h-56 bg-gray-200">
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  {/* Play Button Overlay */}
                  {course.playIcon && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-4 shadow-lg">
                        <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}
                  {/* Wishlist Heart */}
                  <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:scale-110 transition">
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{course.instructor}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg font-bold text-gray-900">{course.rating}</span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">({course.reviews})</span>
                  </div>

                  {/* Languages */}
                  <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                    <span>{course.languages}</span>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      {course.isBestseller && (
                        <span className="inline-block bg-yellow-300 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                          Bestseller
                        </span>
                      )}
                      <p className="text-2xl font-bold text-gray-900">{course.price}</p>
                    </div>
                  </div>

                  {/* Enroll Button */}
                  <button className="w-full mt-4 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-900 hover:text-white hover:border-gray-900 transition">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
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
};

export default CoursesCarousel;