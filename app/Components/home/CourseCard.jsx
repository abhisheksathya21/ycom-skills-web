"use client";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

export default function CourseCard({
  id,
  thumbnail,
  title,
  instructor,
  rating,
  reviews,
  language,
  price,
  badge,
}) {
  return (
    <Link href={`/home/course/${id}`} className="block">
      <div
        className="
          w-[240px] bg-white border rounded-xl overflow-hidden 
          flex-shrink-0 cursor-pointer
          hover:shadow-md transition
        "
      >
        {/* IMAGE */}
        <div className="relative">
          <Image
            src={thumbnail}
            alt={title}
            className="w-full h-[140px] object-cover"
          />

          {/* Wishlist (click-safe) */}
          <button
            onClick={(e) => e.preventDefault()}
            className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow"
          >
            <Heart size={14} />
          </button>
        </div>

        {/* CONTENT */}
        <div className="p-3 space-y-1.5">
          <h3 className="text-sm font-semibold leading-tight line-clamp-2">
            {title}
          </h3>

          <p className="text-xs text-gray-500">
            By {instructor}
          </p>

          <div className="text-xs">
            ⭐ {rating}
            <span className="text-gray-400"> ({reviews})</span>
          </div>

          <div className="flex gap-2 flex-wrap text-[11px]">
            {badge && (
              <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">
                {badge}
              </span>
            )}
            <span className="text-gray-500">{language}</span>
          </div>

          <div className="font-semibold text-sm">
            ₹{price}/-
          </div>

          <button
            onClick={(e) => e.preventDefault()}
            className="w-full mt-2 bg-black text-white text-xs py-1.5 rounded hover:bg-gray-800"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </Link>
  );
}
