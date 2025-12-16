export default function SearchBar() {
  return (
    <div className="mx-auto mb-8 w-full max-w-4xl px-4 sm:px-6">
      <div className="relative">
        <input
          type="text"
          placeholder="AI will help you to choose course"
          className="
            w-full
            rounded-2xl sm:rounded-3xl
            border-2 border-gray-300
            px-5 sm:px-8
            py-4 sm:py-6 lg:py-8
            text-base sm:text-lg lg:text-xl
            focus:outline-none
            focus:border-gray-400
          "
        />

        <button
          className="
            absolute
            right-3 sm:right-4
            top-1/2
            -translate-y-1/2
            rounded-full
            bg-gray-100
            p-3 sm:p-4
            hover:bg-gray-200
          "
        >
          <svg
            className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7"
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
