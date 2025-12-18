"use client";
import { usePathname, useRouter } from "next/navigation";

const tabs = [
  { label: "Course", path: "/home/course" },
  { label: "Skool", path: "/home/skool" },
  { label: "Free Courses", path: "/home/free-courses" },
  { label: "E-Books", path: "/home/ebooks" },
];

export default function HomeTabs() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex gap-4 mb-6">
      {tabs.map((tab) => {
        const active = pathname === tab.path;
        return (
          <button
            key={tab.path}
            onClick={() => router.push(tab.path)}
            className={`px-4 py-2 rounded-md text-sm font-medium
              ${active ? "bg-black text-white" : "bg-white border"}
            `}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
