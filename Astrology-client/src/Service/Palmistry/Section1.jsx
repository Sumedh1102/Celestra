import React from 'react'
import img from '../../Images/circlebg.png'
import pattern from '../../Images/pattern1.png'

const Section1 = () => {
  return (
   <>
   <div
      className="relative overflow-hidden min-h-screen"
      style={{
        backgroundImage: `url('${pattern}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-stone-50/80"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh] lg:min-h-[70vh]">
          {/* Left content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-orange-400 font-medium tracking-wider text-xs sm:text-sm uppercase">
                Ask one question for free
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-gray-900 leading-tight font-serif">
                Learn more about <br className="hidden sm:block" />
                <span className="block sm:inline">your destiny</span>
              </h1>

              <div className="space-y-3 sm:space-y-4 text-gray-600 text-base sm:text-lg max-w-lg mx-auto lg:mx-0">
                <p>Fusce sit amet velit eleifend, iaculis velit quis, malesuada lacus.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            <button className="group hover:-translate-y-1 transition-all duration-300 bg-transparent border-none p-2 cursor-pointer mx-auto lg:mx-0 block">
              <div className="flex items-center space-x-2">
                <span
                  className="text-yellow-500 text-lg group-hover:rotate-180 transition-transform duration-300"
                  style={{ color: "#C89B6D" }}
                >
                  ✦
                </span>
                <span className="text-black text-sm font-medium tracking-wider relative transition-all duration-300">
                  LEARN MORE
                  <span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300 ease-out"
                    style={{ backgroundColor: "#C89B6D" }}
                  ></span>
                </span>
              </div>
            </button>
          </div>

          {/* Right content - Astrology Chart */}
          <div className="relative flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
              {/* Main astrology image */}
              <div className="relative mx-auto">
                <img
                  src="https://i.pinimg.com/736x/fb/41/f7/fb41f758d0457b7b65e060ed84f83b78.jpg"
                  alt="Astrology chart with zodiac signs and celestial symbols"
                  className="object-cover opacity-70 rounded-t-full rounded-2xl shadow-2xl w-48 h-80 sm:w-56 sm:h-96 md:w-64 md:h-[28rem] lg:w-72 lg:h-[32rem] xl:w-80 xl:h-[36rem] mx-auto"
                />

                {/* Overlay spinning circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[28rem] xl:h-[28rem] rounded-full opacity-90 animate-spin"
                    style={{
                      backgroundImage: `url(${img})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      animation: "spin 20s linear infinite",
                    }}
                  />
                </div>
              </div>

              {/* Decorative elements for larger screens */}
              <div className="hidden lg:block absolute -top-4 -right-4 w-8 h-8 bg-orange-400/20 rounded-full"></div>
              <div className="hidden lg:block absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-400/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default Section1
