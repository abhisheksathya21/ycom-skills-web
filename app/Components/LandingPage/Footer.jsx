"use client";

import Image from "next/image";
import ycomskills from '@/public/Assets/Logo/logo (2).png';
import GooglePlay from "@/public/Assets/Landing Page/GooglePlay.svg";
import Appstore from "@/public/Assets/Landing Page/AppStore.svg";
import youtube from "@/public/Assets/Landing Page/youtube.svg"
import instagram from "@/public/Assets/Landing Page/instagram-3d-logo-free-png.svg"
import twitter from "@/public/Assets/Landing Page/twitter.svg"
import facebook from "@/public/Assets/Landing Page/fb.svg"
import linkedin from "@/public/Assets/Landing Page/linkedin.svg"
const socialIcons = [
  { icon: youtube, alt: "YouTube" },
  { icon: linkedin, alt: "LinkedIn" },
  { icon: twitter, alt: "Twitter" },
  { icon: instagram, alt: "Instagram" },
  { icon: facebook, alt: "Facebook" },
];

const followUs = [
  "Instagram",
  "Facebook",
  "LinkedIn",
  "Twitter",
  "Youtube",
  "WhatsApp help",
  "WhatsApp Channel",
  "WhatsApp Group",
  "Telegram Group",
  "Telegram Channel",
];

const companyLinks = [
  "Our Team",
  "About US",
  "Contact US",
  "Privacy Policy",
  "Refund Policy",
  "Cancellation Policy",
  "Plans",
  "Careers",
  "Blogs",
  "FAQ's",
];

const categories = [
  "Digital Marketing",
  "Business",
  "Career & Jobs",
  "YouTube Growth",
  "Make Money",
  "Finance",
  "Share Market",
  "Animation",
  "Video Editing",
];

const startups = [
  { name: "Adscy.io", logo: "/Assets/Landing Page/adscy.svg" },
  { name: "Calcy.ai", logo:"/Assets/Landing Page/calcy.io.svg" },
  { name: "Cybertron.ai", logo: "/Assets/Landing Page/cybertron ai logo.svg" },
  { name: "Space research", logo: "/Assets/Landing Page/space reserach.svg" },
  { name: "Orbit Brows", logo: "/Assets/Landing Page/Orbit browser.svg" },
  { name: "gigler.io", logo: "/Assets/Landing Page/gigler.io.svg" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t">

      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Image src={ycomskills} alt="Ycom Skills" width={200} height={80} />
            {/* <span className="text-xl font-bold">Ycom Skills</span> */}
          </div>
          <p className="text-sm text-gray-500 mb-6">
            parent company <b>Ycomunivercity.com</b>
          </p>

          {/* App Buttons */}
          <div className="flex gap-3 mb-6">
            <Image src={GooglePlay} alt="Google Play" width={140} height={40} />
            <Image src={Appstore} alt="App Store" width={140} height={40} />
          </div>

          {/* Social Icons */}
      <div className="flex gap-3">
  {socialIcons.map((item, index) => (
    <div
      key={index}
      className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
    >
      <Image
        src={item.icon}
        alt={item.alt}
        width={40}
        height={40}
      />
    </div>
  ))}
</div>

          {/* Address */}
          <div className="mt-8">
            <h4 className="font-semibold mb-2">Address</h4>
            <p className="text-sm text-gray-500">
              City Gajraula, District Amroha, Uttarpradesh  
              <br />244242, India
            </p>
          </div>

          {/* Contact */}
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Contact</h4>
            <p className="text-sm text-gray-500">
              Company Helpline: +91 7056847526
              <br />
              Email: support@ycomskills.com
            </p>
          </div>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="font-semibold text-lg mb-6">Follow US</h3>
          <ul className="space-y-3 text-gray-600 text-sm">
            {followUs.map((item) => (
              <li key={item} className="hover:text-black cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-lg mb-6">Company</h3>
          <ul className="space-y-3 text-gray-600 text-sm">
            {companyLinks.map((item) => (
              <li key={item} className="hover:text-black cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold text-lg mb-6">Categories</h3>
          <ul className="space-y-3 text-gray-600 text-sm">
            {categories.map((item) => (
              <li key={item} className="hover:text-black cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* STARTUPS SECTION */}
      <div className="border-t py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-10">Our Startups</h3>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {startups.map((item) => (
              <div
                key={item.name}
                className="px-6 py-3 border rounded-xl flex items-center gap-2 bg-white shadow-sm"
              >
                <Image src={item.logo} alt={item.name} width={40} height={40} />
                <span className="text-sm font-medium">{item.name}</span>
              </div>
            ))}
          </div>

          <button className="px-8 py-3 border rounded-xl font-medium hover:bg-gray-100">
            See All Startups
          </button>

          {/* Managed By */}
          <div className="mt-16 text-center">
            <p className="text-gray-500 mb-2">Managed & Developed By</p>
            <h4 className="text-xl font-bold mb-4">Adymir Digital</h4>
            <button className="px-6 py-3 bg-black text-white rounded-xl flex items-center gap-2 mx-auto">
              Hire US Adymire →
            </button>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t py-6 text-center text-sm text-gray-500">
        © Copyright Ycomskills 2025 All right Reserved
      </div>
    </footer>
  );
}
