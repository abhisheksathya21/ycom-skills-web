import Image from "next/image";
import skills from "@/public/Assets/Logo/skills.png";

export default function Hero() {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center gap-2">
        <h1 className="text-6xl font-bold tracking-tighter">Ycom</h1>

        <Image
          src={skills}
          alt="Skills Logo"
          width={120}
          height={120}
          className="object-contain"
        />
      </div>

      <p className="text-gray-500 text-xl mt-2">
        Learn Everything in One Portal
      </p>
    </div>
  );
}
