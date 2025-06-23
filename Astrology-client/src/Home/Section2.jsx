import React from 'react'
import img from '../Images/moon.png'
import img2 from '../Images/moon2.png'

const Section2 = () => {
  return (
   <div className="min-h-[600px] sm:min-h-[700px] lg:h-[800px] flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-16 bg-[#101112]">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center">
        {/* Left side - Portrait with celestial elements */}
        <div className="relative flex justify-center lg:justify-start order-1 lg:order-1">
          <div className="relative">
            {/* Main portrait image */}
            <div className="relative w-64 h-80 sm:w-72 sm:h-[360px] md:w-80 md:h-96 lg:w-96 lg:h-[480px]">
              <img
                src="https://i.pinimg.com/736x/8d/58/6f/8d586fa2a8d76f0d1f061f797cdf24d1.jpg"
                alt="Portrait of Augustin James with mystical lighting"
                className="object-cover rounded-2xl sm:rounded-3xl shadow-2xl w-full h-full"
              />

              {/* Rainbow light overlay effect */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-transparent via-purple-500/20 to-transparent opacity-60"></div>
            </div>

            {/* Crescent Moon - Responsive positioning */}
            <div className="absolute -top-8 -left-4 sm:-top-12 sm:-left-6 md:-top-16 md:-left-8 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 opacity-80">
              <img
                src={img2}
                alt="Crescent moon"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Mars/Red Planet - Responsive positioning */}
            <div className="absolute bottom-0 -right-6 sm:bottom-2 sm:-right-8 md:bottom-4 md:-right-10 lg:top-[410px] lg:-right-12 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 opacity-90 animate-spin-slow">
              <img src={img} alt="Planet" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col justify-center space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-2">
          <h1 className="font-cinzel text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-thin text-[#C89B6D] leading-tight">
            CONSULTATION WITH
            <br />
            <span className="block mt-1 sm:mt-2">AUGUSTIN JAMES</span>
          </h1>

          <p className="font-poppins text-gray-300 text-sm sm:text-base md:text-lg lg:text-lg leading-relaxed max-w-full lg:max-w-lg mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labo
          </p>

          <div className="flex justify-center lg:justify-start pt-2 sm:pt-4">
            <button className="bg-white hover:bg-gray-100 text-black font-serif text-sm sm:text-base px-6 sm:px-8 shadow-lg hover:shadow-xl h-12 sm:h-14 lg:h-16 w-48 sm:w-56 lg:w-60 whitespace-nowrap flex items-center justify-center transition-all duration-300 group">
              <span className="text-[#C89B6D] mr-2 sm:mr-3 text-lg sm:text-xl group-hover:rotate-180 transition-transform duration-300">
                ✦
              </span>
              SCHEDULE SESSION
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2
