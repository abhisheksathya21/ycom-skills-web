import Image from "next/image";
import thumbnail from "@/public/Assets/Landing Page/Thumbnail.svg";

export default function VideoSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-4">How Ycom Help You</h2>
        <p className="text-xl text-gray-500">India's No.1 Skill Learning Platform</p>
      </div>

      <div className="bg-linear-to-br from-gray-50 to-gray-100 rounded-3xl shadow-lg p-12 relative overflow-hidden">
        {/* SVG Background Image - Replace with your actual SVG */}
        <div className="absolute inset-0 flex items-center justify-center  ">
          <Image
            src={thumbnail}
            alt="Background"
            className="w-full h-full object-cover"
            fill
          />
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-[500px]">
          {/* Play Button */}
          <button className="group relative">
            {/* Outer glow effect */}
            <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-30 scale-110 group-hover:scale-125 transition-transform duration-300"></div>

            {/* Main play button */}
            <div className="relative w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
              {/* Play icon */}
              <div className="w-0 h-0 ml-2 border-t-20 border-t-transparent border-l-32 border-l-black border-b-20 border-b-transparent"></div>
            </div>

            {/* Ripple effect on hover */}
            <div className="absolute inset-0 rounded-full border-4 border-white opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
