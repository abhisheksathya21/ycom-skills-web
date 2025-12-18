"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import otp from "../../../public/Assets/LoginSignUP/OTP.svg"

import google from "../../../public/Assets/Landing Page/google.svg";

export default function OtpPage() {
  const router = useRouter();
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value && index < 3) {
      inputsRef.current[index + 1].focus();
    }
  };

  return (
    <div className="min-h-screen flex bg-white">
      
      {/* LEFT SIDE */}
      <div className="w-1/2 flex justify-center items-center p-10">
        <Image
          src={otp}
          alt="OTP Illustration"
          className="w-96"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 flex justify-center items-center bg-gray-50">
        <div className="w-96 bg-white shadow-md p-8 rounded-xl">
          
          <h1 className="text-2xl font-semibold mb-2 text-center">
            Login
          </h1>

          <p className="text-sm text-gray-500 text-center mb-6">
            Email / Mobile No.
          </p>

          {/* OTP INPUTS */}
          <div className="flex justify-between mb-6">
            {[0, 1, 2, 3].map((_, index) => (
              <input
                key={index}
                ref={(el) => (inputsRef.current[index] = el)}
                type="text"
                maxLength="1"
                onChange={(e) => handleChange(e, index)}
                className="w-14 h-14 text-center text-xl border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            ))}
          </div>

          {/* NEXT BUTTON */}
          <button
            className="w-full bg-black text-white py-2 rounded-md text-lg font-medium"
            onClick={() => router.push("/")}
          >
            Next
          </button>

          {/* CREATE ACCOUNT */}
          <button
            className="w-full mt-4 border py-2 rounded-md"
            onClick={() => router.push("/auth/tell-us")}
          >
            Create an Account
          </button>

          {/* GOOGLE SIGN IN */}
          <button className="w-full mt-3 border py-2 rounded-md flex justify-center items-center gap-2">
            <Image src={google} className="w-5" alt="google" />
            <span>Sign in with Google</span>
          </button>

        </div>
      </div>
    </div>
  );
}
