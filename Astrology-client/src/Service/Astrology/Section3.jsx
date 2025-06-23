import React from 'react'
import img from '../../Images/circle.png'

const Section3 = () => {
  return (
<section className="w-full bg-stone-50 relative overflow-hidden border-b border-[#C89B6D]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 min-h-[750px]">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center py-16 lg:py-24 pr-0 lg:pr-12 z-10 relative border-r-2 border-[#C89B6D]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-medium font-cinzel leading-tight mb-8 text-[#C89B6D]">
              VENUS: THE PLANET OF LOVE & MONEY
            </h1>

            <p className="text-lg md:text-xl leading-relaxed mb-12 font-cinzel max-w-lg text-[#666666]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labo
            </p>

            <button className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:bg-gray-900 hover:shadow-lg group w-fit">
              <span className="text-lg" style={{ color: "#C89B6D" }}>
                ✦
              </span>
              <span>LEARN MORE</span>
            </button>
          </div>

          {/* Right Column - Planet Images */}
          <div className="relative lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:h-full flex items-center justify-end">
            {/* Main Venus Image */}
            <div className="relative w-full h-full">
              <img
                src="https://i.pinimg.com/736x/c7/48/d8/c748d89a904ea664b56ccc51687898bd.jpg"
                alt="Venus planet with cratered surface"
                className="w-full h-full object-cover"
              />

              {/* Secondary Image - Positioned as overlay */}
              <div className="absolute top-40 left-40 w-32 h-32 md:w-40 md:h-40 lg:w-[450px] lg:h-[600px]  ">
               {/*
                <img
                  src=""
                  alt="Venus atmospheric view"
                  className="w-full h-full object-cover rounded-sm shadow-lg"
                />
                 */}
                <div className="absolute -top-20 -right-20 w-12 h-12 md:w-[200px] md:h-[200px] animate-spin-slow ">
                 <img src="" alt="" className='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section3
