"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Amit Bharadwaj",
    role: "Architect",
    rating: 4,
    image: "/Assets/Landing Page/persons (5).svg",
    review:
      "Royaloak has a variety of recliner designs to fit any lifestyle and living room setup. Whether relaxing alone or on movie nights with the entire family, there is a recliner that will fit every requirement.",
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Software Engineer",
    rating: 5,
    image: "/Assets/Landing Page/persons (4).svg",
    review:
      "The learning experience was amazing. Concepts were explained clearly and practically. Highly recommended for beginners and professionals.",
  },
  {
    id: 3,
    name: "Sneha Patel",
    role: "Marketing Analyst",
    rating: 4,
    image: "/Assets/Landing Page/persons (6).svg",
    review:
      "Very structured and easy-to-follow content. Helped me gain confidence and clarity in my career path.",
  },
];

export default function StudentTestimonial() {
  const [active, setActive] = useState(0);
  const total = testimonials.length;

  const prev = () =>
    setActive((prev) => (prev - 1 + total) % total);

  const next = () =>
    setActive((prev) => (prev + 1) % total);

  const data = testimonials[active];

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">

        {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-20">
              What Students Say&apos;s
          </h1>
       

        {/* Card */}
        <div className="relative bg-[#FFF7E6] border-2 border-yellow-400 rounded-3xl px-10 pt-20 pb-12 shadow-xl">

          {/* Avatar */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2">
            <div className="w-24 h-24   border-4 border-white shadow">
              <Image
                src={data.image}
                alt={data.name}
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
          </div>

          {/* Name */}
          <h3 className="text-xl font-bold mt-6">
            {data.name}
          </h3>
          <p className="text-gray-500 mb-3">
            {data.role}
          </p>

          {/* Rating */}
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={i < data.rating ? "text-yellow-400" : "text-gray-300"}
              >
                ★
              </span>
            ))}
          </div>

          {/* Quote */}
          <div className="relative text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            <span className="absolute -left-6 -top-4 text-4xl text-gray-400">
              “
            </span>
            <p>{data.review}</p>
            <span className="absolute -right-6 -bottom-4 text-4xl text-gray-400">
              ”
            </span>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">

            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border bg-white shadow hover:bg-gray-100"
            >
              ‹
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
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
              className="w-10 h-10 rounded-full border bg-white shadow hover:bg-gray-100"
            >
              ›
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
