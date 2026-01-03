"use client";
import Image from "next/image";

export default function CoursePricingCard({ course }) {
  return (
    <div className="bg-white border rounded-lg p-4 space-y-3">

      <Image
        src={course.thumbnail}
        alt={course.title}
        className="rounded-md h-36 w-full object-cover"
      />

      <h3 className="text-sm font-semibold">
        {course.title}
      </h3>

      <p className="text-xs text-gray-500">
        By {course.instructor}
      </p>

      <div className="text-sm text-gray-600">
        ⭐ {course.rating} ({course.reviews})
      </div>

      <div className="text-sm text-gray-600">
        🌐 {course.language}
      </div>

      {course.badge && (
        <span className="inline-block text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
          {course.badge}
        </span>
      )}

      <div className="text-2xl font-bold">
        ₹{course.price}/-
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter Coupon"
          className="border rounded px-2 py-1 text-sm w-full"
        />
        <button className="border px-3 text-sm rounded">
          Apply
        </button>
      </div>

      <p className="text-xs text-gray-500 text-center">
        30-Day Money-Back Guarantee<br />
        Full Lifetime Access
      </p>

      <button className="w-full bg-black text-white py-2 rounded">
        Enroll Now
      </button>

      <button className="w-full border py-2 rounded">
        Add to Cart
      </button>
    </div>
  );
}
