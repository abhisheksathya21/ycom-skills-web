import Image from "next/image";
import HomePage from "@/public/Assets/Landing Page/BigYcom_Image.svg";

export default function HomeBanner() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16">
      <div className="bg-linear-to-br from-gray-50 to-gray-100 rounded-3xl shadow-lg p-12 relative overflow-hidden">
        
        <div className="absolute inset-0">
          <Image
            src={HomePage}
            alt="Homepage Banner"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 min-h-[500px]"></div>
      </div>
    </section>
  );
}
