"use client";
import Image from "next/image";
import { Heart, Star } from "lucide-react";

export default function CourseCard({
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
    <div className="w-[260px] bg-white rounded-xl shadow-sm border hover:shadow-md transition">
      
      {/* THUMBNAIL */}
      <div className="relative">
        <Image
          src={thumbnail}
          alt={title}
          className="rounded-t-xl object-cover h-[150px]"
        />

        {/* FAVORITE */}
        <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
          <Heart size={16} className="text-red-500" />
        </button>
      </div>

      {/* CONTENT */}
      <div className="p-3 space-y-1">
        
        <p className="text-xs text-gray-500">{language}</p>

        <h3 className="font-semibold text-sm line-clamp-2">
          {title}
        </h3>

        <p className="text-xs text-gray-500">
          By {instructor}
        </p>

        {/* RATING */}
        <div className="flex items-center gap-1 text-xs">
          <span className="font-semibold">{rating}</span>
          <Star size={12} className="text-yellow-500 fill-yellow-500" />
          <span className="text-gray-500">({reviews})</span>
        </div>

        {/* BADGE */}
        {badge && (
          <span className="inline-block text-[10px] bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">
            {badge}
          </span>
        )}

        {/* PRICE */}
        <div className="flex items-center justify-between mt-2">
          <span className="font-semibold">₹{price}</span>
          <button className="border px-3 py-1 rounded text-xs hover:bg-black hover:text-white transition">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}
