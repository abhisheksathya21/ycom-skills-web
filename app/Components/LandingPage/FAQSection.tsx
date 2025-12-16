"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    id: 1,
    question: "Why we are best?",
    answer:
      "We provide industry-focused courses with practical learning, expert mentors, and continuous support to ensure real growth.",
  },
  {
    id: 2,
    question: "Does we have EMI Option?",
    answer:
      "Yes, we offer easy EMI options so you can learn without financial stress.",
  },
  {
    id: 3,
    question: "What we do?",
    answer:
      "We help students and professionals upskill through structured courses, mentorship, and real-world projects.",
  },
  {
    id: 4,
    question: "Does we make custom furniture?",
    answer:
      "No, we focus on education and skill development, not physical product manufacturing.",
  },
  {
    id: 5,
    question: "Does we have Offline store?",
    answer:
      "Yes, we have offline learning centers in selected cities for in-person guidance.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState<number | null>(null);

  const toggle = (id: number) => {
    setActive(active === id ? null : id);
  };

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          FAQ&apos;s
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Image */}
          <div className="flex justify-center">
            <div className="w-100 h-100 rounded-full overflow-hidden bg-gray-200">
              <Image
                src="/Assets/Landing Page/NoPath - Copy (96).svg" // replace with your image
                alt="FAQ"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
          </div>

          {/* Right FAQs */}
          <div className="space-y-4">
            {faqs.map((item) => {
              const isOpen = active === item.id;

              return (
                <div
                  key={item.id}
                  className="bg-gray-100 rounded-xl overflow-hidden transition-all"
                >
                  {/* Question */}
                  <button
                    onClick={() => toggle(item.id)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left font-medium text-gray-800"
                  >
                    {item.question}
                    <span
                      className={`transform transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`px-6 text-gray-600 text-sm leading-relaxed transition-all duration-300 ${
                      isOpen ? "max-h-40 pb-5" : "max-h-0 overflow-hidden"
                    }`}
                  >
                    {item.answer}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
