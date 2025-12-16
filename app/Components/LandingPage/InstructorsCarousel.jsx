"use client";

import { useState } from "react";
import Image from "next/image";


const instructors = [
  {
    id: 1,
    name: "YashBusinessman",
    role: "Founder & Digital Marketer",
    courses: "03 Courses",
    videos: "256 Videos",
    image: "/Assets/Landing Page/persons (1).svg",
  },
  {
    id: 2,
    name: "Instructor Two",
    role: "Founder & Digital Marketer",
    courses: "05 Courses",
    videos: "180 Videos",
    image: "/Assets/Landing Page/persons (3).svg",
  },
  {
    id: 3,
    name: "Instructor Three",
    role: "Founder & Digital Marketer",
    courses: "04 Courses",
    videos: "320 Videos",
    image: "/Assets/Landing Page/persons (1).svg",
  },
  {
    id: 4,
    name: "Instructor Four",
    role: "Founder & Digital Marketer",
    courses: "02 Courses",
    videos: "140 Videos",
    image: "/Assets/Landing Page/persons (3).svg",
  },
  {
    id: 5,
    name: "Instructor Five",
    role: "Founder & Digital Marketer",
    courses: "06 Courses",
    videos: "410 Videos",
    image: "/Assets/Landing Page/persons (1).svg",
  },
];

export default function InstructorsCarousel() {
  const [active, setActive] = useState(0);
  const total = instructors.length;

  const prev = () =>
    setActive((prev) => (prev - 1 + total) % total);

  const next = () =>
    setActive((prev) => (prev + 1) % total);

  return (
    <section className="w-full py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ycom Instructors
          </h1>

        {/* Header */}
        <h2 className="text-3xl md:text-4xl ext-gray-500  mb-16">
          Learn From the Best’s
        </h2>
       

        <div className="relative flex items-center justify-center h-[540px]">

          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute left-0 z-40 w-10 h-10 rounded-full border bg-white shadow hover:bg-gray-100"
          >
            ‹
          </button>

          {/* Cards */}
          <div className="relative w-full flex items-center justify-center">
            {instructors.map((item, index) => {
              let position = index - active;

              // Circular normalization
              if (position > total / 2) position -= total;
              if (position < -total / 2) position += total;



              let style = "opacity-0 pointer-events-none";

              if (position === 0) {
                // CENTER
                style = "z-50";
              }
              else if (position === -1) {
                // LEFT NEAR
                style = "z-40 -translate-x-[220px]";
              }
              else if (position === 1) {
                // RIGHT NEAR
                style = "z-40 translate-x-[220px]";
              }
              else if (position === -2) {
                // LEFT FAR
                style = "z-30 -translate-x-[360px]";
              }
              else if (position === 2) {
                // RIGHT FAR
                style = "z-30 translate-x-[360px]";
              }


              return (
                <div
                  key={item.id}
                  className={`absolute transition-all duration-500 ease-out ${style}`}
                >
                  <div
                    className={`
    relative
    rounded-3xl
    bg-[#FFF7E6]
    shadow-xl
    flex flex-col items-center
    p-6
    transition-all duration-500 ease-out

    ${position === 0 && "shadow-2xl -translate-y-2"

                        ? "w-[380px] h-[500px] border-2 border-yellow-400"
                        : position === -1 || position === 1
                          ? "w-[340px] h-[440px] border border-gray-200"
                          : "w-[300px] h-[400px] border border-gray-200"
                      }
  `}
                  >

                    {/* Role Badge — FLOATING ON BORDER */}
                    <span
                      className="
      absolute
      -top-4
      left-1/2
      -translate-x-1/2
      px-5 py-1
      text-xs
      rounded-full
      bg-[#FFF7E6]
      border
      border-yellow-400
      font-medium
      whitespace-nowrap
    "
                    >
                      {item.role}
                    </span>

                    {/* Image */}
                    <div className="w-40 h-40 rounded-full bg-gray-200 mb-6 mt-6 overflow-hidden">
                      {item.image && (
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={160}
                          height={160}
                          className="object-cover"
                        />
                      )}
                    </div>

                    {/* Name */}
                    <h3 className="text-xl font-bold">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-6">
                      Founder & CEO at YcomSkills
                    </p>

                    {/* Stats */}
                    <div className="mt-auto bg-white rounded-2xl px-6 py-4 shadow-sm">
                      <div className="flex items-center justify-center gap-6">

                        <div className="flex flex-col items-center text-center">
                          <span className="text-xl">🎓</span>
                          <p className="text-sm font-semibold">{item.courses}</p>
                        </div>

                        <div className="h-10 w-px bg-gray-300" />

                        <div className="flex flex-col items-center text-center">
                          <span className="text-xl">🎬</span>
                          <p className="text-sm font-semibold">{item.videos}</p>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute right-0 z-40 w-10 h-10 rounded-full border bg-white shadow hover:bg-gray-100"
          >
            ›
          </button>

        </div>
      </div>
    </section>
  );
}
