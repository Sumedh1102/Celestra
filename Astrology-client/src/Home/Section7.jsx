import React from 'react'
import { Plus } from "lucide-react"
import moonbg from '../Images/moonbg.jpg'

const Section7 = () => {
  return (
    <div
      className="relative min-h-[400px] bg-black overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${moonbg})` }}
    >
      <div className="relative z-10 flex items-center min-h-[800px] border-b-[0.2px] border-[#C89B6D]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Mars Image */}
            <div className="relative">
              <div className="relative w-full max-w-lg mx-auto lg:mx-0">
                <img
                  src="https://i.pinimg.com/736x/82/28/49/822849af12d82f75d19864c27f038dd4.jpg"
                  alt="Mars - The Red Planet"
                  width={600}
                  height={600}
                  className="w-[350px] h-[350px] rounded-[300px] object-cover animate-spin "
                  style={{ animationDuration: "40s" }}
                  priority
                />
              </div>
            </div>


            {/* Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-cinzel font-light  text-amber-200 leading-tight">
                  MARS: THE PLANET
                  <br />
                  OF PASSION
                </h1>

                <p className="text-gray-300 text-lg font-cinzel md:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labo
                </p>
              </div>

              <div className="pt-4">
               <button className="group hover:-translate-y-1 transition-all duration-300 bg-transparent border-none p-2 cursor-pointer">
              <div className="flex items-center space-x-2">
                <span 
                  className="text-yellow-500 text-lg group-hover:rotate-180 transition-transform duration-300" 
                  style={{ color: "#C89B6D" }}
                >
                  ✦
                </span>
                <span
                  className="text-white text-sm font-medium tracking-wider relative transition-all duration-300"
                >
                  LEARN MORE
                  <span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300 ease-out"
                    style={{ backgroundColor: "#C89B6D" }}
                  ></span>
                </span>
              </div>
            </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom right decorative element */}
      <div className="absolute bottom-8 right-8">
        <div className="w-3 h-3 bg-white/20 rotate-45"></div>
      </div>
    </div>
  )
}

export default Section7
