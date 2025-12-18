"use client";
import Image from "next/image";
import { Bell, Globe, ShoppingCart, Search } from "lucide-react";

// import logo from "@/public/Assets/Logo/logo (2).png";

export default function Header() {
  return (
    <header className="h-16 w-full bg-white border-b flex items-center px-6 justify-between">
      
      {/* LEFT */}
      <div className="flex items-center gap-6">
        {/* <Image src={logo} alt="Ycomskills" className="w-32" /> */}

        <nav className="hidden md:flex gap-4 text-sm font-medium">
          <span className="cursor-pointer">Products</span>
          <span className="cursor-pointer">Launch Business</span>
          <span className="cursor-pointer">AI Products</span>
          <span className="cursor-pointer">Teach on Ycom</span>
        </nav>
      </div>

      {/* CENTER SEARCH */}
      <div className="flex items-center bg-gray-100 rounded-md px-3 py-1 w-[350px]">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search Course"
          className="bg-transparent outline-none px-2 text-sm w-full"
        />
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <Bell size={18} />
        <Globe size={18} />
        <ShoppingCart size={18} />

        {/* PROFILE */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-gray-300" />
          <span className="text-sm font-medium">Rohan</span>
        </div>
      </div>
    </header>
  );
}
