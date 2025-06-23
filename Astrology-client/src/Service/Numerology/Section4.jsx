import React from 'react'

const Section4 = () => {
  return (
<div className=" bg-stone-50 p-4 md:p-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 relative">
          {/* Decorative divider line - hidden on mobile, visible on large screens */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-3/4 bg-black to-transparent z-10">
          </div>

          {/* Personal Year Section */}
          <div className="overflow-hidden border-0 bg-slate-50 backdrop-blur-sm h-[700px] ">
            <div className="p-8 md:p-12 text-center">
              <div className="mb-4">
                <p className="text-sm font-medium tracking-widest text-amber-700 uppercase font-cinzel mb-2">Numerology Forecast</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-stone-800 font-cinzel mb-6">Personal Year</h1>
              </div>
              <p className="text-stone-600 text-lg leading-relaxed mb-8 max-w-md mx-auto">
                Discover the power of your personal year number in numerology and learn how it shapes your upcoming
                year, forecasts key themes, and guides your decisions.
              </p>
              <div className="relative aspect-square mx-auto overflow-hidden">
                <img src="https://i.pinimg.com/736x/02/0a/ac/020aacc099c9dfa3db512375b33ddd92.jpg" alt="img1" className='object-cover h-80 w-[500px]' />
              </div>
            </div>
          </div>

          {/* Compatibility Section */}
          <div className="overflow-hidden border-0  bg-slate-50 text-black h-[700px] ">
            <div className="p-8 md:p-12 text-center">
              <div className="mb-4">
                <p className="text-sm font-medium tracking-widest text-amber-700 uppercase mb-2 font-cinzel">Life Path Number</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-cinzel text-black mb-6">Compatibility</h1>
              </div>
              <p className="text-black text-lg leading-relaxed mb-8 max-w-md mx-auto">
                Explore the intriguing world of life path compatibility in numerology and understand how your life path
                number interacts with others, shaping relationships.
              </p>
              <div className="relative aspect-square  mx-auto overflow-hidden">
                    <img src="https://i.pinimg.com/736x/a9/bc/e0/a9bce0fb23d1c80481fc61970fb5b8a8.jpg" alt="img1" className='object-cover h-80 w-[500px]' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section4
