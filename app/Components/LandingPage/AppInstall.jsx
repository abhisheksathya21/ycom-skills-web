"use client";
import Image from "next/image";

import update from "@/public/Assets/Landing Page/update.svg";
import watch from "@/public/Assets/Landing Page/watch any where.svg";
import adfree from "@/public/Assets/Landing Page/no ads.svg";

export default function AppInstallFeature() {
  return (
    <section className="w-full py-12 sm:py-16 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Outer Card */}
        <div
          className="
            rounded-3xl border border-gray-200 bg-white
            px-6 py-10 sm:px-10 sm:py-12 lg:px-14
            text-center shadow-sm
          "
        >
          {/* Heading */}
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
            Start Learning Today
          </h2>

          <p className="text-xl sm:text-2xl lg:text-3xl font-bold mb-8 sm:mb-10">
            <span className="text-yellow-500">20% OFF</span>{" "}
            <span className="text-gray-900">with App Install</span>
          </p>

          {/* Feature Cards */}
          <div
            className="
              grid grid-cols-1
              sm:grid-cols-3
              gap-4 sm:gap-6
              justify-items-center
              mb-8 sm:mb-10
            "
          >
            {[
              { title: "New", subtitle: "Updates", icon: update },
              { title: "Watch", subtitle: "Anywhere", icon: watch },
              { title: "100%", subtitle: "Ad free", icon: adfree },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  w-28 h-32 sm:w-32 sm:h-36
                  bg-white rounded-2xl
                  border border-gray-200
                  flex flex-col items-center justify-center
                  gap-2 shadow-sm
                "
              >
                <p className="text-xs text-gray-400">{item.title}</p>
                <p className="text-sm font-semibold text-gray-800">
                  {item.subtitle}
                </p>
                <Image
                  src={item.icon}
                  alt={item.subtitle}
                  className="w-7 h-7 sm:w-8 sm:h-8 mt-1"
                />
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button
              className="
                inline-flex items-center gap-2
                px-6 sm:px-8 py-3
                border border-gray-300
                rounded-xl
                text-sm sm:text-base
                font-semibold text-gray-900
                hover:bg-gray-100
                transition
              "
            >
              <span className="text-lg">⬇</span>
              Download Ycom App
            </button>
          </div>
        </div>

        {/* Trust Section */}
        <div className="mt-10 sm:mt-12 text-center px-2">
          <h3 className="text-lg sm:text-xl font-semibold mb-3">
            Why 40 Lakh+ Learners Trust YcomSkills?
          </h3>

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`text-lg ${i < 4 ? "text-black" : "text-gray-300"}`}
              >
                ★
              </span>
            ))}
          </div>

          <p className="text-sm text-gray-500">
            Rated 4.5 by 9L+ users
          </p>
        </div>

      </div>
    </section>
  );
}
