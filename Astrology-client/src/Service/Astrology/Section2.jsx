import React from 'react'
import { Star } from "lucide-react"

const Section2 = () => {
  return (
<div className="w-full bg-stone-100 border-t-[0.2px] border-b-[0.2px] border-[#C89B6D]">
      <div className="grid grid-cols-1 md:grid-cols-3 min-h-[250px]">
        {/* Latest Articles Section */}
        <div className="relative bg-stone-100 p-8 flex flex-col justify-center items-start border-r border-stone-200">
          <div className="absolute top-12 right-12 w-24 h-24 md:w-44 md:h-44 rounded-tr-[90px] overflow-hidden">
            <img
              src="https://i.pinimg.com/736x/c0/58/5e/c0585e33f1a93ddcfc8286a46e384706.jpg"
              alt="Artistic portrait with flowers"
              width={128}
              height={128}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="space-y-4 max-w-[60%]">
            <h2 className="text-2xl md:text-3xl font-cinzel font-light text-amber-900 tracking-wide">
              Expert Astrologers
            </h2>
            <button className="relative text-amber-900 hover:text-amber-800 p-0 h-auto font-medium tracking-wide flex items-center bg-transparent border-none cursor-pointer transition-colors group">
              <Star className="w-4 h-4 mr-2 fill-current transition-transform duration-300 group-hover:rotate-180" />
              <span className="relative">
                LEARN MORE
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-900 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
          </div>
        </div>

        {/* Free Birth Chart Section */}
        <div className="relative bg-stone-50 p-8 flex flex-col justify-center items-start border-r border-stone-200">
          <div className="absolute top-8 right-10 w-24 h-24 md:w-40 md:h-40 rounded-t-3xl">
            <img src="https://i.pinimg.com/736x/c7/fa/06/c7fa06d761dab0db5a19948ba354339b.jpg" alt="" className='rounded-t-full' width={140}
              height={140} />
          </div>
          <div className="space-y-4 max-w-[60%]">
            <h2 className="text-2xl font-cinzel md:text-3xl font-light text-amber-900 tracking-wide">
             Accurate 
              <br />
             Predictions
            </h2>
            <button className="relative text-amber-900 hover:text-amber-800 p-0 h-auto font-medium tracking-wide flex items-center bg-transparent border-none cursor-pointer transition-colors group">
              <Star className="w-4 h-4 mr-2 fill-current transition-transform duration-300 group-hover:rotate-180" />
              <span className="relative">
                LEARN MORE
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-900 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
          </div>
        </div>

        {/* Magic Jewellery Section */}
        <div className="relative bg-stone-100 p-8 flex flex-col justify-center items-start">
          <div className="absolute top-12 right-10 w-24 h-24 md:w-44 md:h-44 rounded-tl-[90px] overflow-hidden">
            <img
              src="https://i.pinimg.com/736x/2e/e3/a0/2ee3a0e79c421495f9cb4c29db90e9fc.jpg"
              alt="Hands wearing magical jewelry"
              width={128}
              height={128}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="space-y-4 max-w-[60%]">
            <h2 className="text-2xl font-cinzel md:text-3xl font-light text-amber-900 tracking-wide">
             Personalized 
              <br />
              Guidance
            </h2>
            <button className="relative text-amber-900 hover:text-amber-800 p-0 h-auto font-medium tracking-wide flex items-center bg-transparent border-none cursor-pointer transition-colors group">
              <Star className="w-4 h-4 mr-2 fill-current transition-transform duration-300 group-hover:rotate-180" />
              <span className="relative">
                SHOP NOW
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-900 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2
