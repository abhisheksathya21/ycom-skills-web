"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import loginimage from "../../../public/Assets/LoginSignUP/Login.svg";

export default function TellUsPage() {
  const [gender, setGender] = useState("male");
 const router = useRouter();
  const inputsRef = useRef([]);

  return (
    <div className="min-h-screen flex bg-white">

      {/* LEFT SIDE */}
      <div className="w-1/2 flex justify-center items-center p-10">
        <Image src={loginimage} alt="Tell Us" className="w-96" />
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 flex justify-center items-center bg-gray-50">
        <div className="w-96 bg-white shadow-md rounded-xl max-h-[60vh] flex flex-col">

          {/* SCROLLABLE FORM */}
          <div className="flex-1 overflow-y-auto p-8">
            <h1 className="text-2xl font-semibold mb-6 text-center">
              Tell Us
            </h1>

            <label className="font-medium text-sm">Country</label>
            <select className="select-input">
              <option>Select Country</option>
              <option>India</option>
            </select>

            <label className="font-medium text-sm">State</label>
            <select className="select-input">
              <option>Choose State</option>
            </select>

            <label className="font-medium text-sm">District</label>
            <select className="select-input">
              <option>Choose District</option>
            </select>

            <label className="font-medium text-sm">City</label>
            <input
              type="text"
              placeholder="Enter City"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 mb-4 text-sm focus:ring-1 focus:ring-black"
            />

            <label className="font-medium text-sm block mb-2">Gender</label>
            <div className="flex gap-3 mb-4">
              <button
                type="button"
                onClick={() => setGender("male")}
                className={`px-6 py-2 rounded-full border text-sm ${
                  gender === "male"
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-gray-300"
                }`}
              >
                Male
              </button>

              <button
                type="button"
                onClick={() => setGender("female")}
                className={`px-6 py-2 rounded-full border text-sm ${
                  gender === "female"
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-gray-300"
                }`}
              >
                Female
              </button>
            </div>

            <label className="font-medium text-sm">Choose Interests</label>
            <select className="select-input">
              <option>Choose Interest</option>
              <option>Technology</option>
              <option>Design</option>
              <option>Marketing</option>
            </select>

            <label className="font-medium text-sm">
              Type Of Course You Learn
            </label>
            <select className="select-input">
              <option>
                Ex: Digital Marketing, Graphic Designing
              </option>
            </select>

            <label className="font-medium text-sm">Learner Type</label>
            <select className="select-input">
              <option>Select Learner Type</option>
              <option>Self Learner</option>
              <option>Instructor Guided</option>
            </select>

            <label className="font-medium text-sm">What's Your Level</label>
            <select className="select-input">
              <option>Select Your Level</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>

            <label className="font-medium text-sm">Who You Are</label>
            <select className="select-input mb-4">
              <option>
                Ex: Student, Business Owner, Housewife
              </option>
            </select>
          </div>

          {/* STICKY LOGIN BUTTON */}
          <div className="p-6 border-t bg-white sticky bottom-0">
            <button className="w-full bg-black text-white py-2 rounded-md text-lg font-medium"
             onClick={() => router.push("/home")}>
              Login
              
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
