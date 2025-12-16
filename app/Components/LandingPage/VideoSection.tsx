import Image from "next/image";
import thumbnail from "@/public/Assets/Landing Page/Thumbnail.svg";

export default function VideoSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
      
      {/* Heading */}
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
          How Ycom Helps You
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-500">
          India&apos;s No.1 Skill Learning Platform
        </p>
      </div>

      {/* Video Card */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg">
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={thumbnail}
            alt="Video background"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Overlay (optional for contrast) */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Content */}
        <div
          className="
            relative z-10
            flex items-center justify-center
            h-[220px]
            sm:h-[320px]
            md:h-[420px]
            lg:h-[520px]
          "
        >
          {/* Play Button */}
          <button className="group relative">
            
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-white/40 blur-xl scale-110 group-hover:scale-125 transition-transform duration-300" />

            {/* Button */}
            <div className="
              relative
              w-20 h-20
              sm:w-24 sm:h-24
              lg:w-32 lg:h-32
              bg-white rounded-full shadow-2xl
              flex items-center justify-center
              transition-transform duration-300
              group-hover:scale-110
            ">
              <div className="
                ml-1
                border-t-[12px] border-t-transparent
                border-b-[12px] border-b-transparent
                border-l-[20px] border-l-black
                sm:border-t-[14px] sm:border-b-[14px] sm:border-l-[24px]
                lg:border-t-[18px] lg:border-b-[18px] lg:border-l-[30px]
              " />
            </div>

            {/* Ripple */}
            <div className="absolute inset-0 rounded-full border-4 border-white opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500" />
          </button>
        </div>
      </div>
    </section>
  );
}
