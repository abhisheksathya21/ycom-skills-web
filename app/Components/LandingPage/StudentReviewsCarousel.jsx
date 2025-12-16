"use client";

import { useState } from "react";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    name: "Mohit Saini",
    rating: 5,
    country: "India",
    date: "Aug 05, 2024",
    review:
      "YashBusinessman sir ka Digital Marketing course beginners ke liye perfect hai. Topics simple language mein explain kiye gaye hain.",
    avatar: "/Assets/Landing Page/persons (1).svg",
  },
  {
    id: 2,
    name: "Rohit Sharma",
    rating: 4,
    country: "India",
    date: "Jul 18, 2024",
    review:
      "SEO aur social media concepts kaafi achhe se samjhaye gaye hain. Value for money.",
    avatar: "/Assets/Landing Page/persons (3).svg",
  },
  {
    id: 3,
    name: "Anjali Verma",
    rating: 5,
    country: "India",
    date: "Jun 02, 2024",
    review:
      "Content marketing aur case studies kaafi useful lagi. Beginners ke liye recommended.",
    avatar: "/Assets/Landing Page/persons (1).svg",
  },
  {
    id: 4,
    name: "Karan Patel",
    rating: 4,
    country: "India",
    date: "May 11, 2024",
    review:
      "Clear explanation aur structured content. Strong foundation milta hai.",
    avatar: "/Assets/Landing Page/persons (3).svg",
  },
];

export default function StudentReviewsCarousel() {
  const [active, setActive] = useState(1);

  const prev = () =>
    setActive((prev) => (prev - 1 + reviews.length) % reviews.length);

  const next = () =>
    setActive((prev) => (prev + 1) % reviews.length);
  const CARD_WIDTH = 600;
const GAP = 32; // gap-8 = 32px
const TOTAL_WIDTH = CARD_WIDTH + GAP;


  return (
    <section className="w-full py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Heading */}
       
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Students Reviews
          </h1>

        <div className="flex justify-center gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="text-black">★</span>
          ))}
        </div>

        <p className="text-gray-500 mb-14">
          See why thousands of Students can’t stop talking about US
        </p>

        {/* Carousel */}
        <div className="relative w-full flex justify-center">
          <div
  className="flex gap-8 transition-transform duration-500 ease-in-out"
  style={{
    transform: `translateX(calc(50% - ${
      active * (600 + 32) + 300
    }px))`,
  }}
>

          
            {reviews.map((item, index) => {
              const isActive = index === active;

              return (
                <div
                  key={item.id}
                  className={`
                    w-[600px] min-h-[500px]
                    rounded-3xl p-6 text-left
                    border transition-all duration-300
                    ${
                      isActive
                        ? "bg-[#FFF7E6] border-yellow-400 shadow-xl opacity-100"
                        : "bg-white border-gray-200 opacity-70"

                    }
                  `}
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        width={40}
                        height={40}
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {item.rating}★ · {item.country}
                      </p>
                    </div>
                    <span className="ml-auto text-xs text-gray-400">
                      {item.date}
                    </span>
                  </div>

                  {/* Review */}
                  <p className="text-sm leading-relaxed text-gray-700">
                    “{item.review}”
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border bg-white shadow"
          >
            ‹
          </button>

          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === active ? "bg-black" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border bg-white shadow"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
