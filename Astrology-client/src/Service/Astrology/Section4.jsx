import React from 'react'
import img from '../../Images/landscape.jpg'


const Section4 = () => {
  return (
<div className="relative h-[550px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${img})`,
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-cinzel font-normal text-white mb-8 leading-tight">
          WHAT DOES YOUR BIRTH CHART
          <br />
          TELL{" "}
          YOU
          ? LEARN TODAY!
        </h1>

         <button className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium tracking-wider uppercase  hover:shadow-lg group w-fit">
              <span className="text-lg" style={{ color: "#C89B6D" }}>
                ✦
              </span>
              <span>LEARN MORE</span>
            </button>
      </div>
    </div>
  )
}

export default Section4
