"use client";

import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import logo from "@/public/Assets/Logo/logo (1).png";
import skills from "@/public/Assets/Logo/skills.png";

const navItems = [
  { label: "Products", href: "/" },
  { label: "Launch Business", href: "/pages/launch" },
  { label: "AI Products", href: "/ai-products" },
  { label: "Teach on Ycom", href: "/teach" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src={logo} alt="Ycom" width={40} height={40} />
          <h1 className="text-2xl font-bold">Ycom</h1>
          <Image src={skills} alt="Skills" width={50} height={50} className="hidden sm:block" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`px-4 py-2 rounded-lg transition
                ${
                  isActive(item.href)
                    ? "bg-black text-white"
                    : "hover:text-gray-600"
                }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="/auth/login"
            className={`px-5 py-2 border-2 rounded-lg ${
              pathname.startsWith("/auth/login")
                ? "border-black bg-gray-100"
                : "border-black hover:bg-gray-50"
            }`}
          >
            Login
          </a>

          <a
            href="/auth/register"
            className={`px-5 py-2 rounded-lg ${
              pathname.startsWith("/auth/register")
                ? "bg-gray-900 text-white"
                : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            Sign Up
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`block px-3 py-2 rounded-md
                ${
                  isActive(item.href)
                    ? "bg-black text-white"
                    : "hover:bg-gray-100"
                }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
