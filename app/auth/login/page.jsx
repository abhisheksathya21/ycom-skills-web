"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import google from "../../../public/Assets/Landing Page/google.svg";
import logo from "../../../public/Assets/Logo/logo (2).png"
import loginimage from "../../../public/Assets/LoginSignUP/Login.svg"
export default function LoginPage() {
    const router=useRouter()
  return (
    <div className="min-h-screen flex bg-white">
      
      {/* LEFT SIDE */}
      <div className="w-1/2 flex flex-col justify-center items-center p-10">
       

        <Image
          src={loginimage} 
          alt="Illustration"
          className="w-96"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 flex justify-center items-center bg-gray-50">
        <div className="w-96 bg-white shadow-md p-8 rounded-xl">
          <h1 className="text-2xl font-semibold mb-6 text-center">Login</h1>

          {/* Email */}
          <label className="font-medium text-sm">Email/Mobile No.</label>
          <input
            type="text"
            placeholder="Enter Email or Mobile"
            className="w-full border rounded-md px-3 py-2 mt-1 mb-4"
          />

          {/* Password */}
          <label className="font-medium text-sm">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full border rounded-md px-3 py-2 mt-1"
          />

          {/* Forgot password */}
          <p className="text-right text-sm text-blue-600 mt-1 cursor-pointer hover:underline">
            Forgot Password
          </p>

          {/* Login Button */}
          <button className="w-full mt-5 bg-black text-white py-2 rounded-md text-lg font-medium">
            Login
          </button>

          {/* Create Account */}
          <button className="w-full mt-4 border py-2 rounded-md cursor-pointer"
          onClick={()=>router.push("/auth/register")}>
            Create an Account
          </button>

         
          <button className="w-full mt-3 border py-2 rounded-md flex justify-center items-center gap-2 cursor-pointer">
            <Image src={google} className="w-5"  alt="google"/>
            <span>Sign in with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}
