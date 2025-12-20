"use client";
import Image from "next/image";
import { Clock } from "lucide-react";

export default function CourseList({ courses }) {
  return (
    <div className="space-y-4">
      {courses.map((course) => (
        <div
          key={course.id}
          className="flex items-center justify-between bg-white 
                     border rounded-xl px-5 py-4 hover:shadow-sm transition"
        >
          {/* LEFT */}
          <div className="flex items-center gap-4">
            <Image
              src={course.thumbnail}
              alt={course.title}
              className="w-12 h-12 rounded-md object-cover"
            />

            <div>
              <h4 className="text-sm font-semibold leading-tight">
                {course.title}
              </h4>
              <p className="text-xs text-gray-500 mt-1">
                By {course.instructor}
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Clock size={14} />
              {course.duration}
            </div>

            <button
              className="bg-black text-white px-4 py-1.5 
                         rounded-md text-xs hover:bg-gray-800"
            >
              Enroll Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
