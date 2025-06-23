import React from 'react'
import { ChevronRight } from "lucide-react"

const Section2 = () => {
  return (
    <div className="bg-white">
      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-t-full overflow-hidden h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] w-full max-w-[525px] mx-auto lg:mx-0">
              <img
                src="https://i.pinimg.com/736x/f2/af/af/f2afaf33fb5daa00bb0934fc5bf2f4be.jpg"
                alt="Mystical tarot cards, crystals, and spiritual symbols arranged on a table"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-amber-700 font-cinzel leading-tight">
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
              <div className="border-b-2 border-amber-700 bg-white backdrop-blur-sm cursor-pointer hover:bg-amber-50 transition-colors">
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-amber-700 flex-shrink-0" />
                      <span className="font-normal text-gray-800 font-cinzel text-sm sm:text-base">
                        Cosmic Guidance Sessions
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b-2 border-amber-700 bg-white backdrop-blur-sm cursor-pointer hover:bg-amber-50 transition-colors">
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-amber-700 flex-shrink-0" />
                      <span className="font-normal text-gray-800 font-cinzel text-sm sm:text-base">
                        Divination and Insight Services
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2 sm:pt-0">
              <button className="bg-white text-black px-6 sm:px-8 py-2.5 sm:py-3 font-medium border-2 border-amber-700 text-base sm:text-lg hover:bg-amber-700 hover:text-white transition-colors w-full sm:w-auto">
                MORE INFO
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Section2
