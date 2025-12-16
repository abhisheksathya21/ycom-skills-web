"use client";

import Image from "next/image";
import React from "react";

import googlePlaystore from "../../../public/Assets/Landing Page/GooglePlay.svg";
import appstore from "../../../public/Assets/Landing Page/AppStore.svg";
import customer1 from "../../../public/Assets/Landing Page/persons (1).svg";
import customer2 from "../../../public/Assets/Landing Page/persons (2).svg";
import customer3 from "../../../public/Assets/Landing Page/persons (3).svg";
import customer4 from "../../../public/Assets/Landing Page/persons (4).svg";
import yskills_logo from "../../../public/Assets/Logo/logo (1).png";
import yskills_logo2 from "../../../public/Assets/Logo/skills.png";
import Qrcode from "../../../public/Assets/Landing Page/QR.svg";

const LearningAppSection = () => {
  return (
    <section className="bg-gray-50 py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl sm:rounded-[3rem] shadow-lg px-6 sm:px-10 lg:px-12 py-10 sm:py-14 lg:py-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* ---------- LEFT ---------- */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Get the learning app
              </h2>

              <p className="text-base sm:text-lg lg:text-xl text-gray-500 leading-relaxed">
                Download Ycom App and learn anytime, anywhere with the Ycom app
              </p>

              {/* App buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Image
                  src={googlePlaystore}
                  alt="Google Play"
                  width={160}
                  height={48}
                  className="h-12 w-auto cursor-pointer"
                />
                <Image
                  src={appstore}
                  alt="App Store"
                  width={160}
                  height={48}
                  className="h-12 w-auto cursor-pointer"
                />
              </div>

              {/* Stats */}
              <div className="bg-gray-50 rounded-3xl p-4 sm:p-6 inline-block">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  
                  <div>
                    <p className="text-sm text-gray-600 mb-2">
                      Trusted By Our Customer
                    </p>
                    <div className="flex -space-x-2 justify-center sm:justify-start">
                      {[customer1, customer2, customer3, customer4].map(
                        (img, i) => (
                          <Image
                            key={i}
                            src={img}
                            alt="Customer"
                            width={40}
                            height={40}
                            className="w-10 h-10 rounded-full border-2 border-white"
                          />
                        )
                      )}
                    </div>
                  </div>

                  <div className="sm:border-l-2 border-gray-300 sm:pl-6 text-center sm:text-left">
                    <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                      <span className="text-yellow-500">2,35</span>,646
                    </p>
                    <p className="text-sm text-gray-600">Total Students</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ---------- RIGHT (PHONE) ---------- */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                
                <div
                  className="
                    relative
                    w-[240px] h-[480px]
                    sm:w-[280px] sm:h-[560px]
                    lg:w-[320px] lg:h-[640px]
                    bg-gray-900 rounded-[3rem]
                    border-[12px] border-gray-900
                    shadow-2xl overflow-hidden
                  "
                >
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-10" />

                  {/* Screen */}
                  <div className="w-full h-full bg-white flex flex-col items-center justify-center p-6 sm:p-8">
                    <div className="mb-6">
                      <Image
                        src={yskills_logo}
                        alt="Logo"
                        width={120}
                        height={40}
                        className="mx-auto"
                      />
                      <Image
                        src={yskills_logo2}
                        alt="Logo"
                        width={120}
                        height={40}
                        className="mx-auto"
                      />
                    </div>

                    <p className="text-center text-gray-600 text-sm mb-6 px-2">
                      Scan the QR code to download Seekho app
                    </p>

                    <div className="bg-white p-4 rounded-2xl shadow-lg">
                      <Image
                        src={Qrcode}
                        alt="QR Code"
                        width={160}
                        height={160}
                        className="w-36 h-36 sm:w-40 sm:h-40"
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningAppSection;
