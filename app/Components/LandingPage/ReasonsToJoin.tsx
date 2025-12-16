import Image from "next/image";

import locationIcon from "@/public/Assets/Landing Page/watch any where.svg";
import update from "@/public/Assets/Landing Page/update.svg";
import Ad from "@/public/Assets/Landing Page/no ads.svg";
import user from "@/public/Assets/Landing Page/poeple.svg";
import course from "@/public/Assets/Landing Page/course.svg";
import videos from "@/public/Assets/Landing Page/videos.svg";

const Reasons = () => {
  return (
    <>
      {/* ---------- Reasons Section ---------- */}
      <section className="w-full bg-white py-8 sm:py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-6 sm:mb-10">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold">
              More Reasons to Join
            </h2>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            
            {[
              { tag: "New", title: "Updates", img: update },
              { tag: "Watch", title: "Anywhere", img: locationIcon },
              { tag: "100%", title: "Ad Free", img: Ad },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center
                  hover:shadow-md transition"
              >
                <p className="text-gray-400 text-xs mb-1">{item.tag}</p>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <Image
                  src={item.img}
                  alt={item.title}
                  className="w-16 h-16 sm:w-20 sm:h-20"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Stats Section ---------- */}
      <section className="w-full bg-gradient-to-b from-white to-yellow-50 py-10 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-50 rounded-2xl border border-yellow-100 p-6 sm:p-8">

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              
              {[
                { value: "40 Lakh", label: "Learners", img: user },
                { value: "10,000+", label: "Videos", img: course },
                { value: "30+", label: "Courses", img: videos },
              ].map((stat, i) => (
                <div key={i}>
                  <Image
                    src={stat.img}
                    alt={stat.label}
                    className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3"
                  />
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                    {stat.value}
                  </h3>
                  <p className="text-gray-500 text-sm sm:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reasons;
