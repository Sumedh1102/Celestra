import React from 'react'

const Section4 = () => {
  return (
    <section className="w-full bg-black relative overflow-hidden border-b-[0.5px] border-[#C89B6D]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center py-12 sm:py-16 lg:py-24 lg:pr-12 z-10 relative order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-thin text-[#C89B6D] font-cinzel mb-6 sm:mb-8 leading-tight">
              VENUS: THE PLANET OF LOVE & MONEY
            </h1>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-12 max-w-none lg:max-w-lg text-[#D3D3D3] font-inter">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labo
            </p>

            <button className="group hover:-translate-y-1 transition-all duration-300 bg-transparent border-none p-2 cursor-pointer self-start">
              <div className="flex items-center space-x-2">
                <span className="text-[#C89B6D] text-lg group-hover:rotate-180 transition-transform duration-300">
                  ✦
                </span>
                <span className="text-white text-sm font-medium tracking-wider relative transition-all duration-300">
                  LEARN MORE
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C89B6D] group-hover:w-full transition-all duration-300 ease-out"></span>
                </span>
              </div>
            </button>
          </div>

          {/* Right Column - Planet Image */}
          <div className="relative flex items-center justify-center lg:justify-end order-1 lg:order-2 py-8 lg:py-0">
            <div className="w-full max-w-md sm:max-w-lg lg:max-w-none lg:w-full lg:h-full lg:absolute lg:right-0 lg:top-0 flex items-center lg:items-end justify-center lg:justify-end">
              <img
                src="https://i.pinimg.com/736x/18/b6/19/18b619107839da6d4deb310cf2540b88.jpg"
                alt="Venus planet with cratered surface"
                className="w-full h-auto max-w-sm sm:max-w-md lg:max-w-none object-cover lg:object-bottom-right rounded-lg lg:rounded-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section4
