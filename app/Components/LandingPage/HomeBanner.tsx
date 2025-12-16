import Image from "next/image";
import HomePage from "@/public/Assets/Landing Page/BigYcom_Image.svg";

export default function HomeBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg">
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={HomePage}
            alt="Homepage Banner"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Gradient Overlay (optional but recommended) */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-white/70 to-white/30" /> */}

        {/* Content Spacer */}
        <div
          className="
            relative z-10
            flex items-center
            h-[220px]
            sm:h-[320px]
            md:h-[420px]
            lg:h-[520px]
          "
        >
          {/* Future content goes here */}
        </div>
      </div>
    </section>
  );
}
