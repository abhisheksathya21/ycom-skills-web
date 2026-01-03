"use client";
import { useState } from "react";

export default function CourseTabs({ course }) {
  const [active, setActive] = useState("Description");

  return (
    <div className="bg-white border rounded-lg p-4">

      <div className="flex gap-6 border-b text-sm mb-4">
        {["Description", "Files", "Review"].map(tab => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`pb-2 ${
              active === tab
                ? "border-b-2 border-black font-medium"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {active === "Description" && (
        <div className="text-sm text-gray-700 space-y-3">
          <h4 className="font-medium">Why you should learn?</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>High-income potential through real-world skills.</li>
            <li>Practical techniques you can apply immediately.</li>
            <li>Suitable for beginners and intermediates.</li>
          </ul>

          <h4 className="font-medium mt-4">Requirements</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>No prior experience required</li>
            <li>Basic understanding is helpful</li>
          </ul>
        </div>
      )}
    </div>
  );
}
