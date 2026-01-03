"use client";
import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export default function CourseVideoPreview({ thumbnail }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="relative rounded-lg overflow-hidden cursor-pointer"
      >
        <Image
          src={thumbnail}
          alt="Preview"
          className="w-full h-[200px] md:h-[260px] object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-3 rounded-full">
            <Play size={24} className="ml-1" />
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
          <div className="bg-black w-[90%] max-w-3xl aspect-video relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-8 right-0 text-white"
            >
              ✕ Close
            </button>
            <div className="text-white flex items-center justify-center h-full">
              Video preview here
            </div>
          </div>
        </div>
      )}
    </>
  );
}
