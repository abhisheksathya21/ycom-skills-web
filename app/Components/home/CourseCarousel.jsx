"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CourseCarousel({ title, children }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const scrollAmount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
   <div className="mb-8 relative overflow-hidden">

      
      {/* TITLE */}
      {title && (
        <h2 className="text-xl font-semibold mb-4">
          {title}
        </h2>
      )}

      {/* LEFT ARROW */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 
                   bg-white shadow-md p-2 rounded-full hidden md:flex"
      >
        <ChevronLeft size={20} />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 
                   bg-white shadow-md p-2 rounded-full hidden md:flex"
      >
        <ChevronRight size={20} />
      </button>

      {/* SCROLL CONTAINER */}
   <div
  ref={scrollRef}
  className="
    flex gap-4 overflow-x-auto scrollbar-hide px-8
    max-w-full
    sm:max-w-[640px]
    md:max-w-[900px]
    lg:max-w-[1100px]
    xl:max-w-[1300px]
  "
>

  {children}
</div>

    </div>
  );
}
