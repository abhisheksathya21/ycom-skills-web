"use client";
import Image from "next/image";
import google from "../../../public/Assets/Landing Page/google.svg"
// import logo from "../../../public/Assets/Logo/logo (2).png"
import register from "../../../public/Assets/LoginSignUP/SignUP (Register).svg"
import { useRouter } from "next/navigation";
export default function LoginPage() {
    const router=useRouter();
  return (
    <div className="min-h-screen flex bg-white">
      
      {/* Left side */}
      <div className="w-1/2 flex flex-col justify-center items-center p-10">
       

        <Image
          src={register}
          alt="Illustration"
          className="w-96"
        />
      </div>

      {/* Right side */}
      <div className="w-1/2 flex justify-center items-center bg-gray-50">
        <div className="w-96 bg-white shadow-md p-8 rounded-xl">
          <h1 className="text-2xl font-semibold mb-6 text-center">Register</h1>





          {/* email */}
          <label className="font-medium text-sm">Email/Mobile No.</label>
          <input
            type="text"
            placeholder="Enter Email or Mobile"
            className="w-full border rounded-md px-3 py-2 mt-1 mb-4"
          />





              {/* name */}
          <label className="font-medium text-sm">Full Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full border rounded-md px-3 py-2 mt-1 mb-4"
          />




          {/* Create Password */}
          <label className="font-medium text-sm">Create Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full border rounded-md px-3 py-2 mt-1 mb-4"
          />



        {/* Confirm Password */}
           <label className="font-medium text-sm">Confirm Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full border rounded-md px-3 py-2 mt-1 mb-4"
          />

        

          {/* Login Button */}
          <button className="w-full mt-5 bg-black text-white py-2 rounded-md text-lg font-medium cursor-pointer">
            Next
          </button>

          {/* Create Account */}
          <button className="w-full mt-4 border py-2 rounded-md cursor-pointer" onClick={()=>router.push("/auth/login")}>
            
            Login
          </button>

          {/* Google Login */}
          <button className="w-full mt-3 border py-2 rounded-md flex justify-center items-center gap-2 cursor-pointer">
            <Image src={google} className="w-5"  alt="logo"/>
            <span>Sign in with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}
