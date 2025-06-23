import React from 'react'
import { ChevronRight } from "lucide-react"
import img from '../../Images/image copy.png'

const Section2 = () => {
  return (
    <>
<div className="bg-white">
      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Images */}
          <div className="relative order-2 lg:order-1">
            {/* Main Image */}
            <div className="relative overflow-hidden h-64 sm:h-80 lg:h-96 xl:h-[400px] w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-[400px] mx-auto lg:mx-0 border border-gray-200 rounded-t-full">
              <img
                src="https://i.pinimg.com/736x/00/5f/fc/005ffcd14a1e6210b8440ab1cf66f542.jpg"
                alt="Mystical tarot cards, crystals, and spiritual symbols arranged on a table"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Secondary Image - Overlapping */}
            <div className="absolute -bottom-12 sm:-bottom-16 lg:-bottom-24 right-4 sm:right-8 lg:right-44 w-32 sm:w-48 lg:w-64 xl:w-[350px] h-48 sm:h-72 lg:h-96 xl:h-[700px] hidden sm:block">
              <img
                src={img}
                alt="Crystal healing stones and spiritual elements"
                className="w-full h-full object-cover rounded-lg "
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal text-blue-300 leading-tight font-cinzel">
                Mystical of Self-Discovery
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Drawing upon years of study and intuitive exploration, I offer a holistic approach to divination that
                integrates the wisdom of the stars, the symbolism of tarot cards, and the ancient art of crystal
                healing. My goal is to provide clarity and guidance to help you step into your life's journey, helping
                you uncover hidden truths.
              </p>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                My mission is to support you on your journey of self-discovery and personal growth. Whether you are
                feeling overwhelmed, seeking clarity, or striving for spiritual enlightenment, I am here to assist you
                in unlocking the mysteries of your inner self and connecting with the divine energy that surrounds us
                all.
              </p>
            </div>

            {/* Services */}
            <div className="space-y-0">
              <div className="border-b-2 border-blue-200 bg-white backdrop-blur-sm cursor-pointer hover:bg-blue-50 transition-colors">
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 flex-shrink-0" />
                      <span className="font-normal text-gray-800 text-sm sm:text-base">Cosmic Guidance Sessions</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b-2 border-blue-200 bg-white backdrop-blur-sm cursor-pointer hover:bg-blue-50 transition-colors">
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 flex-shrink-0" />
                      <span className="font-normal text-gray-800 text-sm sm:text-base">
                        Divination and Insight Services
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2 lg:pt-0">
              <button className="w-full sm:w-auto bg-white text-black px-6 sm:px-8 py-3 font-medium border-2 border-blue-400 text-base sm:text-lg hover:bg-blue-50 transition-colors">
                MORE INFO
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  )
}

export default Section2
