"use client";
import Image from "next/image";
import ycom from "../../../public/Assets/Logo/logo (2).png";

const items = [
  { label: "Switch\nLanguage", img: "/Assets/Landing Page/switch.svg", x: 0, y: -1 },
  { label: "Learning\nReport", img: "/Assets/Landing Page/learning repost.svg", x: 0.7, y: -0.7 },
  { label: "AI\nSupport", img: "/Assets/Landing Page/bot.svg", x: 1, y: 0 },
  { label: "AI Find\nCourse", img: "/Assets/Landing Page/search-3d-icon-png-download-9744410.svg", x: 0.7, y: 0.7 },
  { label: "Note", img: "/Assets/Landing Page/note taking.svg", x: 0, y: 1 },
  { label: "Cross\nPlatform", img: "/Assets/Landing Page/cross platforme.svg", x: -0.7, y: 0.7 },
  { label: "Complete\nCertification", img: "/Assets/Landing Page/certifiaction.svg", x: -1, y: 0 },
  { label: "Live\nClasses", img: "/Assets/Landing Page/live.svg", x: -0.7, y: -0.7 },
];

export default function SkillsRadial() {
  return (
    <section className="w-full py-20 sm:py-24 flex flex-col items-center overflow-hidden">
      
      <h1 className="mb-12 sm:mb-16 text-center text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
        Learn Valuable Skills
      </h1>

      {/* Wrapper */}
      <div
        className="
          relative flex items-center justify-center
          w-[300px] h-[300px]
          sm:w-[440px] sm:h-[440px]
          lg:w-[680px] lg:h-[680px]
        "
        style={{
          // responsive orbit radius
          // mobile → tablet → desktop
          ["--radius"]: "clamp(120px, 32vw, 300px)",
        }}
      >
        {/* Glow */}
        <div
          className="
            absolute rounded-full bg-gray-100 blur-3xl
            w-[160px] h-[160px]
            sm:w-[240px] sm:h-[240px]
            lg:w-[360px] lg:h-[360px]
          "
        />

        {/* Center Logo */}
        <div
          className="
            z-10 flex items-center justify-center
            w-[90px] h-[90px]
            sm:w-[120px] sm:h-[120px]
            lg:w-[170px] lg:h-[170px]
            rounded-full bg-white shadow-2xl
          "
        >
          <Image
            src={ycom}
            alt="Ycom"
            className="w-10 sm:w-14 lg:w-20 object-contain"
            priority
          />
        </div>

        {/* ORBIT */}
        <div className="absolute inset-0 orbit">
          {items.map((item, index) => (
            <div
              key={index}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `
                  translate(-50%, -50%)
                  translate(
                    calc(${item.x} * var(--radius)),
                    calc(${item.y} * var(--radius))
                  )
                `,
              }}
            >
              <div
                className="
                  flex items-center justify-center flex-col
                  w-[80px] h-[80px]
                  sm:w-[110px] sm:h-[110px]
                  lg:w-[150px] lg:h-[150px]
                  rounded-2xl sm:rounded-3xl
                  bg-white text-center shadow-lg
                  transition hover:scale-105
                "
              >
                <Image
                  src={item.img}
                  alt={item.label}
                  width={36}
                  height={36}
                  className="sm:w-10 sm:h-10"
                />
                <p className="whitespace-pre-line text-[11px] sm:text-sm font-medium mt-2 text-gray-700">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
