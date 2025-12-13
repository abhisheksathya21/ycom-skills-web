"use client";
import Image from "next/image";
import React from 'react';
import googlePlaystore from '../../public/Assets/Landing Page/GooglePlay.svg'
import appstore from '../../public/Assets/Landing Page/AppStore.svg'
import customer1 from '../../public/Assets/Landing Page/persons (1).svg'
import customer2 from '../../public/Assets/Landing Page/persons (2).svg'
import customer3 from '../../public/Assets/Landing Page/persons (3).svg'
import customer4 from '../../public/Assets/Landing Page/persons (4).svg'
import yskills_logo from '../../public/Assets/Logo/logo (1).png'
import yskills_logo2 from '../../public/Assets/Logo/skills.png';
import Qrcode from "../../public/Assets/Landing Page/QR.svg"
const LearningAppSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[3rem] shadow-lg px-12 py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                Get the learning app
              </h2>
              
              <p className="text-xl text-gray-500 leading-relaxed">
                Download Ycom App and learn anytime, anywhere with the Ycom app
              </p>

              {/* App Store Buttons */}
              <div className="flex gap-4">
                <a href="#" className="block">
                  <Image
                    src={googlePlaystore}
                    alt="Get it on Google Play"
                    width={160}
                    height={48}
                    className="h-12 w-auto"
                  />
                  
                </a>
                <a href="#" className="block">
                  <Image
                    src={appstore}
                    alt="Download on the App Store"
                    width={160}
                    height={48}
                    className="h-12 w-auto"
                  />
                </a>
              </div>

              {/* Customer Stats */}
              <div className="bg-gray-50 rounded-3xl p-6 inline-block">
                <div className="flex items-center gap-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Trusted By Our Customer</p>
                    <div className="flex -space-x-2">
                      <Image
                        src={customer1}
                        alt="Customer"
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      />
                      <Image
                        src={customer2}
                        alt="Customer"
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      />
                      <Image
                        src={customer3}
                        alt="Customer"
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      />
                      <Image
                        src={customer4}
                        alt="Customer"
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="border-l-2 border-gray-300 pl-6">
                    <p className="text-3xl font-bold text-gray-900">
                      <span className="text-yellow-500">2,35</span>,646
                    </p>
                    <p className="text-sm text-gray-600">Total Students</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Phone Mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Phone Frame */}
                <div className="relative w-[320px] h-[640px] bg-gray-900 rounded-[3rem] border-[14px] border-gray-900 shadow-2xl overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-10"></div>
                  
                  {/* Screen Content */}
                  <div className="relative w-full h-full bg-white flex flex-col items-center justify-center p-8">
                    {/* Logo */}
                    <div className="mb-8">
                      <Image
                        src={yskills_logo}
                        alt="YSkills Logo"
                        width={720}
                        height={340}
                        className="h-10 w-auto"
                      />
                      <Image
                        src={yskills_logo2}
                        alt="YSkills Logo"
                        width={720}
                        height={740}
                        className="h-10 w-auto"
                      />
                    </div>

                    <p className="text-center text-gray-600 text-sm mb-8 px-4">
                      Scan the QR code to download Seekho app
                    </p>

                    {/* QR Code */}
                    <div className="bg-white p-4 rounded-2xl shadow-lg">
                      <Image
                        src={Qrcode}
                        alt="QR Code"
                        width={180}
                        height={180}
                        className="w-44 h-44"
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