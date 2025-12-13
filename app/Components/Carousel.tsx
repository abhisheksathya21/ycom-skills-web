"use client";
import image1 from "../../public/Assets/Landing Page/image (1).png";
import image2 from "../../public/Assets/Landing Page/image (2).png";
import image3 from "../../public/Assets/Landing Page/image (3).png";
import image4 from "../../public/Assets/Landing Page/image (4).png";
import image5 from "../../public/Assets/Landing Page/image (5).png";
// import image1 from "../../public/Assets/Landing Page/image (1).png";
import { useState } from 'react';
import Image from "next/image";


// What's Waiting For You Component
export default function WhatsWaitingSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All Catagory');

  const categories = [
    'All Catagory',
    'Social media growth',
    'Digital Marketing',
    'YouTube growth',
    'Carrier & Job',
    'Freelancing',
    'Business Devlopment',
    'Life Hacks'
  ];

  const courses = [
    {
      id: 1,
      title: 'PHOTO KI TRENDING STORY',
      badge: 'INSTA STORY IDEAS',
      image: image1,
      bgColor: 'bg-gradient-to-br from-yellow-200 to-yellow-400'
    },
    {
      id: 2,
      title: 'CHUTKIYON MEIN',
      badge: 'YOUTUBE SECRETS',
      image: image2,
      bgColor: 'bg-gradient-to-br from-red-800 to-red-600'
    },
    {
      id: 3,
      title: 'A.I CHANNEL SE KAMAI HOGI?',
      badge: 'YOUTUBE SECRETS',
      image: image3,
      bgColor: 'bg-gradient-to-br from-red-600 to-red-500'
    },
    {
      id: 4,
      title: 'INSTAGRAM REFER AND EARN',
      badge: 'INSTAGRAM SECRETS',
      image: image4,
      bgColor: 'bg-gradient-to-br from-orange-400 to-orange-600'
    },
    {
      id: 5,
      title: 'INSTAGRAM GROWTH',
      badge: 'INSTAGRAM SECRETS',
      image: image5,
      bgColor: 'bg-gradient-to-br from-purple-900 to-orange-600'
    }
  ];

  const itemsPerPage = 4;
  const maxIndex = Math.max(0, courses.length - itemsPerPage);

  const handlePrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold mb-4">What's Waiting For You?</h2>
          <p className="text-gray-400 text-lg">Well Structured Course videos, 50+ categories, and trusted mentors</p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Yellow Cursor Indicator */}
          <div className="absolute -top-8 right-12 w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center z-10 shadow-lg">
            <span className="text-3xl">👆</span>
          </div>

          {/* Left Arrow */}
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Course Cards */}
          <div className="overflow-hidden">
            <div 
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage + 1.5)}%)` }}
            >
              {courses.map((course) => (
                <div key={course.id} className="shrink-0 w-[calc(25%-18px)]">
                  <div className={`${course.bgColor} rounded-xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300`}>
                    {/* Replace with actual course image */}
                    <div className="h-80 relative flex flex-col items-center justify-center p-6 text-center">
                      <div className="absolute top-4">
                        <span className="bg-white bg-opacity-90 px-4 py-1 rounded-full text-xs font-bold text-gray-800">
                          {course.badge}
                        </span>
                      </div>
                     
                     <Image
  src={course.image}
  alt={course.title}
  fill
  className="object-cover"
 />


                      {/* Placeholder for when image is not available */}
                      <h3 className="text-white text-2xl font-bold relative z-10 drop-shadow-lg">
                        {course.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index ? 'bg-black w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}