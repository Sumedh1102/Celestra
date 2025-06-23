import React from 'react'
import { Star } from "lucide-react"
import img1 from '../../Images/numberimg1-Photoroom.jpg'
import heart from '../../Images/heart.png'
import destiny from '../../Images/destiny.png'

const Section1 = () => {
  return (
    <div className="min-h-screen bg-stone-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-2 h-2 bg-amber-400 rounded-full"></div>
        <div className="absolute top-40 right-40 w-1 h-1 bg-amber-600 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-amber-700 font-medium tracking-wider uppercase text-sm">CONSULTATION FOR FREE</p>

              <h1 className="text-4xl lg:text-6xl font-medium text-gray-900 leading-tight font-cinzel">
                Infinite power of numerology
              </h1>

              <div className="space-y-4 text-gray-600 text-lg">
                <p>Fusce sit amet velit eleifend, iaculis velit quis, malesuada lacus.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

              <button className="relative text-amber-900 hover:text-amber-800 p-0 h-auto font-medium tracking-wide flex items-center bg-transparent border-none cursor-pointer transition-colors group">
              <Star className="w-4 h-4 mr-2 fill-current transition-transform duration-300 group-hover:rotate-180" />
              <span className="relative">
                GET STARTED
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-900 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-8 pt-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img src={destiny} className="w-32 h-32 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 text-lg mb-2 font-cinzel">Destiny</h3>
                  <p className="text-gray-600">Understand current issues in your live</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img src={heart} className="w-32 h-32 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 text-lg mb-2 font-cinzel">Life path</h3>
                  <p className="text-gray-600">Discover your innate abilities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Simple Image with Overlay */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative pt-20">
              {/* Main background image */}
              <img
                src={img1}
                alt="Mystical numerology illustration"
                width={400}
                height={400}
                className="rounded-t-[200px] h-[700px] bg-black object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1
