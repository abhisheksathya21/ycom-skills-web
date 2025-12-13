import Image from "next/image";
import logo from "@/public/Assets/Logo/logo (1).png";
import skills from "@/public/Assets/Logo/skills.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full shadow-md bg-white px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image
          src={logo}
          alt="Ycom Logo"
          width={50}
          height={50}
          className="object-contain"
        />

        <h1 className="text-4xl font-bold tracking-tight">Ycom</h1>

        <Image
          src={skills}
          alt="Skills Logo"
          width={60}
          height={60}
          className="object-contain"
        />
      </div>

      <nav className="flex gap-6">
        <a className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">Products</a>
        <a className="px-4 py-2 hover:text-gray-600">Launch Business</a>
        <a className="px-4 py-2 hover:text-gray-600">AI Products</a>
        <a className="px-4 py-2 hover:text-gray-600">Teach on Ycom</a>
      </nav>

      <div className="flex gap-4 items-center">
        
<button className="w-12 h-12 bg-white hover:bg-gray-50 rounded-lg flex items-center justify-center shadow-sm">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
            </svg>
          </button>
          
          {/* Android Icon */}
          <button className="w-12 h-12 bg-white hover:bg-gray-50 rounded-lg flex items-center justify-center shadow-sm">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396"/>
            </svg>
          </button>
          
          {/* Apple Icon */}
          <button className="w-12 h-12 bg-white hover:bg-gray-50 rounded-lg flex items-center justify-center shadow-sm">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
          </button>
          
          {/* Cart Icon */}
          <button className="w-12 h-12 bg-white hover:bg-gray-50 rounded-lg flex items-center justify-center shadow-sm">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
          </button>
        <a href="/auth/login" className="px-6 py-2 border-2 border-black rounded-lg hover:bg-gray-50">Login</a>
        <a href="/auth/register" className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800">SignUP</a>
      </div>
    </header>
  );
}
