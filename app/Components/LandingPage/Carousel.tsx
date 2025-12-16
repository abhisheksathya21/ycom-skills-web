"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import image1 from "../../../public/Assets/Landing Page/image (1).png";
import image2 from "../../../public/Assets/Landing Page/image (2).png";
import image3 from "../../../public/Assets/Landing Page/image (3).png";
import image4 from "../../../public/Assets/Landing Page/image (4).png";
import image5 from "../../../public/Assets/Landing Page/image (5).png";

export default function WhatsWaitingSection() {
  const categories = [
    "All Catagory",
    "Social media growth",
    "Digital Marketing",
    "YouTube growth",
    "Carrier & Job",
    "Freelancing",
    "Business Devlopment",
    "Life Hacks",
  ];

  const courses = [
    {
      id: 1,
      title: "PHOTO KI TRENDING STORY",
      badge: "INSTA STORY IDEAS",
      image: image1,
      bgColor: "bg-gradient-to-br from-yellow-200 to-yellow-400",
    },
    {
      id: 2,
      title: "CHUTKIYON MEIN",
      badge: "YOUTUBE SECRETS",
      image: image2,
      bgColor: "bg-gradient-to-br from-red-800 to-red-600",
    },
    {
      id: 3,
      title: "A.I CHANNEL SE KAMAI HOGI?",
      badge: "YOUTUBE SECRETS",
      image: image3,
      bgColor: "bg-gradient-to-br from-red-600 to-red-500",
    },
    {
      id: 4,
      title: "INSTAGRAM REFER AND EARN",
      badge: "INSTAGRAM SECRETS",
      image: image4,
      bgColor: "bg-gradient-to-br from-orange-400 to-orange-600",
    },
    {
      id: 5,
      title: "INSTAGRAM GROWTH",
      badge: "INSTAGRAM SECRETS",
      image: image5,
      bgColor: "bg-gradient-to-br from-purple-900 to-orange-600",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All Catagory");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  /* ---------- Responsive items per page ---------- */
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 640) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(4);
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const maxIndex = Math.max(0, courses.length - itemsPerPage);

  const handlePrev = () =>
    setCurrentIndex((prev) => Math.max(0, prev - 1));

  const handleNext = () =>
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));

  return (
    <section className="w-full bg-white py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ---------- Header ---------- */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            What&apos;s Waiting For You?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-400">
            Well Structured Course videos, 50+ categories, and trusted mentors
          </p>
        </div>

        {/* ---------- Categories ---------- */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all
                ${
                  activeCategory === category
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ---------- Carousel ---------- */}
        <div className="relative">

      
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4
              w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center
              hover:bg-gray-100 disabled:opacity-50 z-10"
          >
            ‹
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4
              w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center
              hover:bg-gray-100 disabled:opacity-50 z-10"
          >
            ›
          </button>

          {/* Cards */}
          <div className="overflow-hidden">
            <div
              className="flex gap-4 sm:gap-6 transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
              }}
            >
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
                >
                  <div
                    className={`${course.bgColor} rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform`}
                  >
                    <div className="relative h-72 sm:h-80 flex items-center justify-center p-6 text-center">
                      
                      <span className="absolute top-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold">
                        {course.badge}
                      </span>

                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover"
                      />

                      <h3 className="relative z-10 text-white text-xl font-bold drop-shadow-lg">
                        {course.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === i ? "bg-black w-8" : "bg-gray-300 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
