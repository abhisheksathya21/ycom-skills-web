"use client";

export default function CategoryFilters({ categories, active, onChange }) {
  return (
    <div className="flex gap-3 mb-6 flex-wrap">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`px-4 py-1.5 rounded-full text-sm border transition
            ${
              active === category
                ? "bg-black text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
