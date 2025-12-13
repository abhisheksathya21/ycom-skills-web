export default function SearchBar() {
  return (
    <div className="max-w-4xl mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          placeholder="AI will help you to choose course"
          className="
            w-full 
            px-8 
            py-12
            rounded-3xl
            border-2 
            border-gray-300 
            text-xl
            focus:outline-none 
            focus:border-gray-400
          "
        />

        <button
          className="
            absolute 
            right-4 
            top-1/2 
            -translate-y-1/2 
            bg-gray-100 
            p-4
            rounded-full 
            hover:bg-gray-200
          "
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
