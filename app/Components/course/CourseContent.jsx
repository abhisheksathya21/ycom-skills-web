"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function CourseContent({ content = [] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="bg-white border rounded-lg p-4">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Course Content</h3>

        <div className="flex gap-2 text-xs text-gray-600">
          <span className="border px-2 py-1 rounded">22 Lessons</span>
          <span className="border px-2 py-1 rounded">120 Lectures</span>
          <span className="border px-2 py-1 rounded">3h 25min</span>
        </div>
      </div>

      {/* CHAPTERS */}
      <div className="space-y-2">
        {content.map((section, index) => (
          <div key={index} className="border rounded-md">

            <button
              onClick={() => setOpen(open === index ? null : index)}
              className="w-full px-4 py-3 flex justify-between items-center text-left"
            >
              <div>
                <p className="text-sm font-medium">
                  Chapter {index + 1}: {section.chapter}
                </p>
                <p className="text-xs text-gray-500">
                  {section.lectures.length} Lectures
                </p>
              </div>

              <ChevronDown
                size={16}
                className={`transition ${open === index ? "rotate-180" : ""}`}
              />
            </button>

            {open === index && (
              <div className="border-t px-4 py-2">
                {section.lectures.map((lec, i) => (
                  <div
                    key={i}
                    className="flex justify-between py-2 text-sm text-gray-600 border-b last:border-0"
                  >
                    <span>▶ {lec.title}</span>
                    <span>{lec.duration}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
