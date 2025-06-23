import React from 'react'
import { Star } from "lucide-react"
import img1 from '../Images/destiny.png'
import img from '../Images/saturn.png'

const Section1 = () => {
  return (
    <>
    <section className=" bg-black relative overflow-hidden">
      {/* Starry background */}
      <div className="absolute inset-0">
        {/* Generate random stars */}
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
        {/* Larger twinkling stars */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-2 h-2 bg-white rounded-full opacity-80 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Main headline */}
            <h1 className="text-5xl lg:text-6xl font-cinzel text-[#b69066] leading-tight tracking-wide">
             Our Sacred Mission

            </h1>

            {/* Description paragraph */}
            <p className="text-gray-300 text-lg leading-relaxed max-w-lg font-poppins">
              Our certified professional astrologer with over 15 years of consulting experience is ready to help you
              comprehend the secrets of your fate encoded in position of celestial bodies at the time of your birth.
              Absolute confidentiality is guaranteed.
            </p>

            {/* Achievement list */}
            <div className="space-y-4">
              {["Award Winning Author", "Best Seller 2022", "A Guide Through Life", "Horoscope of Future"].map(
                (item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <span className="text-2xl">✨</span>
                    <span className="text-[#b69066] text-lg font-light tracking-wide">{item}</span>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Right side - Portrait with decorative elements */}
          <div className="relative flex justify-center">
            {/* Main portrait card */}
            <div className="relative">
              <div className="w-96 h-96 rounded-xl overflow-hidden bg-gray-800 relative">
                <img
                  src="https://i.pinimg.com/736x/f1/37/dc/f137dca5f5cb1126718bc48641458aea.jpg"
                  alt="Augustin James - Professional Astrologer"
                  fill
                  className="object-cover"
                />

               
              </div>

              {/* Crescent moon - top left */}
              <div className="absolute -top-4 -left-10 w-28 h-28 text-[#b69066]">
                <img src={img1} alt="" />
              </div>

              {/* Mars-like planet - top right */}
              <div className="absolute top-44 -right-20 w-56 h-56">
               
                  <img src={img} alt="" />
                
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Dancing+Script:wght@400;700&display=swap');
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
        .font-script {
          font-family: 'Dancing Script', cursive;
        }
      `}</style>
    </section>
    </>
  )
}

export default Section1
