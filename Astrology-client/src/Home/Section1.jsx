import React from 'react'
import { useEffect, useState } from "react"

const Section1 = () => {
  const [stars, setStars] = useState([])

  useEffect(() => {
    const generateStars = () => {
      const newStars = []
      const starCount = 300

      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 2,
          animationDelay: Math.random() * 3,
          animationDuration: Math.random() * 2 + 1,
        })
      }

      setStars(newStars)
    }

    generateStars()
  }, [])

  return (
    <section className="relative w-full bg-black overflow-hidden flex flex-col items-center justify-center px-4 py-16">
      {/* Starry Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Generate scattered stars */}
        {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.animationDelay}s`,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-extralight text-[#C89B6D] font-cinzel mb-6 leading-tight tracking-wide pt-32">
          WHAT DOES THE FUTURE HAVE
          <br />
          IN STORE FOR YOU?
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg md:text-xl mb-16 font-light font-inter">
          Now is time to discover the day's possibilities! Pick a card!
        </p>

        {/* Tarot Cards */}
        <div className="flex justify-center items-end mt-5 translate-y-40">
          {Array.from({ length: 7 }).map((_, index) => (
            <div
              key={index}
              className="group cursor-pointer transition-transform duration-500 ease-out hover:-translate-y-20 hover:z-20 relative "
              style={{
                marginLeft: index > 0 ? "-12.5rem" : "0",
                zIndex: index,
              }}
            >
              <div className="w-36 h-64 md:w-44 md:h-80 lg:w-[350px] lg:h-[450px] bg-amber-50 rounded-2xl shadow-lg border border-gray-300 flex flex-col items-center justify-start transition-shadow duration-300 group-hover:shadow-xl">
            <img src="https://i.pinimg.com/736x/cd/48/47/cd48474f69cf26d42d3aee44c0504ede.jpg" alt="" className='rounded-2xl'/>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section1
