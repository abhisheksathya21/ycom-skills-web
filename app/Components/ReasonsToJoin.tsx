import Image from "next/image";

import locationIcon from "@/public/Assets/Landing Page/watch any where.svg";
import update from "@/public/Assets/Landing Page/update.svg";
import Ad from "@/public/Assets/Landing Page/no ads.svg";
import user from "@/public/Assets/Landing Page/poeple.svg";
import course from "@/public/Assets/Landing Page/course.svg";
import videos from "@/public/Assets/Landing Page/videos.svg"
// More Reasons to Join Component
const Reasons=()=> {
  return (
     <>
    <section className="w-full py-10 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold">More Reasons to Join</h2>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - New Updates */}
          <div className="bg-gray-50 rounded-3xl p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <p className="text-gray-400 text-sm mb-2">New</p>
            <h3 className="text-3xl font-bold mb-8">Updates</h3>
            <div className="mt-auto">
              <Image
                src={update}
                alt="Updates Icon" 
                className="w-32 h-32 object-contain"
              />
              
            </div>
          </div>

          {/* Card 2 - Watch Anywhere */}
          <div className="bg-gray-50 rounded-3xl p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow relative">
           
            
            <p className="text-gray-400 text-sm mb-2">Watch</p>
            <h3 className="text-3xl font-bold mb-8">Enywahre</h3>
            <div className="mt-auto">
              <Image 
                src={locationIcon}
                alt="Location Icon" 
                className="w-32 h-32 object-contain"
              />
            
            
            </div>
          </div>

          {/* Card 3 - 100% Ad Free */}
          <div className="bg-gray-50 rounded-3xl p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <p className="text-gray-400 text-sm mb-2">100%</p>
            <h3 className="text-3xl font-bold mb-8">Ad free</h3>
            <div className="mt-auto">
              <Image 
                src={Ad}
                alt="Ad Free Icon" 
                className="w-32 h-32 object-contain"
              />
            
            
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full py-12 bg-linear-to-b from-white to-yellow-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="bg-yellow-50 rounded-3xl p-8 shadow-sm border border-yellow-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            {/* Stat 1 - Learners */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <Image 
                  src={user}
                  alt="Learners Icon" 
                  className="w-16 h-16 object-contain"
                />
               
             
              </div>
              <h3 className="text-5xl font-bold mb-2">40 Lakh</h3>
              <p className="text-gray-500 text-xl">Learners</p>
            </div>

            {/* Stat 2 - Videos */}
            <div className="flex flex-col items-center text-center relative">
            

              <div className="mb-4">
                <Image 
                  src={course}
                  alt="Videos Icon" 
                  className="w-16 h-16 object-contain"
                />
               
              </div>
              <h3 className="text-5xl font-bold mb-2">10,000+</h3>
              <p className="text-gray-500 text-xl">Videos</p>
            </div>

            {/* Stat 3 - Courses */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <Image 
                  src={videos}
                  alt="Courses Icon" 
                  className="w-16 h-16 object-contain"
                />
                
              </div>
              <h3 className="text-5xl font-bold mb-2">30+</h3>
              <p className="text-gray-500 text-xl">Courses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
</>
  );
}
    export default Reasons;