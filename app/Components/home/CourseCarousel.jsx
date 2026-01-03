"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CourseCarousel({ title, children }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    scrollRef.current.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="mb-8 relative">

      {title && (
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
      )}

      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 
                   bg-white shadow p-2 rounded-full hidden md:flex"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 
                   bg-white shadow p-2 rounded-full hidden md:flex"
      >
        <ChevronRight size={20} />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide px-2"
      >
        {children}
      </div>
    </div>
  );
}
