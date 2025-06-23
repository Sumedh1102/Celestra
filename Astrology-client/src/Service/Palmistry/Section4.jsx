import React from 'react'
import img from '../../PalmistryImages/halfmoon.png'

const Section4 = () => {
  return (
   <div className=" bg-slate-900 text-white relative border-b-[0.2px] border-t-[0.2px] border-[#C89B6D]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('https://i.pinimg.com/736x/40/ba/e9/40bae966e844210ccda8b80e0a6ce286.jpg')",
        }}
      />
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-orange-300 text-sm font-medium tracking-wider uppercase">Gift Cards</div>

            <h1 className="text-4xl md:text-5xl lg:text-5xl font-cinzel font-light leading-tight">
              Free astrological express consultation
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
              The way that I see astrology is as a repository of thought and psychology. A system we've created as a
              culture as way to make things mean things.
            </p>

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

          <div className="flex justify-center lg:justify-end">
            <img
              src={img}
              alt="Astrological moon and stars illustration"
              width={400}
              height={400}
              className=" max-w-md lg:max-w-lg w-96 h-96 pb-5 pr-5"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section4
