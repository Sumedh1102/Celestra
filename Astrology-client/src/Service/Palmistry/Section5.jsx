import React from 'react'
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import img from '../../PalmistryImages/astrolhand.png'


const zodiacSigns = [
  { name: "Aries", image:"https://i.pinimg.com/736x/93/59/82/9359825b07e306e4d044c8e506ede579.jpg" },
  { name: "Taurus", image: "https://i.pinimg.com/736x/d6/db/f3/d6dbf36ac8b3eff5c2567a6b746fb8b4.jpg" },
  { name: "Gemini", image: "https://i.pinimg.com/736x/e7/d9/70/e7d970d7c636bf3ef564a5b509188315.jpg" },
  { name: "Cancer", image: "https://i.pinimg.com/736x/3b/8a/b4/3b8ab4594bc6ba1c28a2bb9f0d7f6cf8.jpg" },
  { name: "Leo", image: "https://i.pinimg.com/736x/b9/cc/aa/b9ccaa565444641d6025907bbfcb2c4f.jpg" },
  { name: "Virgo", image: "https://i.pinimg.com/736x/87/d6/53/87d65363cfe7c001ce59183b6392985f.jpg" },
  { name: "Libra", image: "https://i.pinimg.com/736x/f6/e8/47/f6e84763cb23cc5fe35462dc4610c48c.jpg" },
  { name: "Scorpio", image: "https://i.pinimg.com/736x/57/9f/d0/579fd0cc3987e71cb982fa6427eb84e2.jpg" },
  { name: "Sagittarius", image: "https://i.pinimg.com/736x/1a/14/6e/1a146e0df55eae10db45151bf8ab4eaf.jpg" },
  { name: "Capricorn", image: "https://i.pinimg.com/736x/b1/4a/1c/b14a1c2401fe65df373a34d91538ed90.jpg" },
  { name: "Aquarius", image: "https://i.pinimg.com/736x/b9/3d/93/b93d93ce3ed292ae47f1e5ff6a9e967c.jpg" },
  { name: "Pisces", image: "https://i.pinimg.com/736x/e3/a3/0c/e3a30cf7b03e16861990922808e756b6.jpg" },
];

const Section5 = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
  const signsPerSlide = 6

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(zodiacSigns.length / signsPerSlide))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const getCurrentSigns = () => {
    const start = currentSlide * signsPerSlide
    return zodiacSigns.slice(start, start + signsPerSlide)
  }
  return (
   <div className="bg-gradient-stone-50 relative overflow-hidden">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[300px]">
          {/* Left side - Illustration */}
          <div className="flex justify-center relative">
            <div className="relative w-[400px] h-[400px]">
              {/* Second image (base layer) */}
              <img
                src="https://i.pinimg.com/736x/fb/41/f7/fb41f758d0457b7b65e060ed84f83b78.jpg"
                alt="Crystal Ball"
                width={300}
                height={300}
                className="rounded-full w-full h-full object-cover"
              />

              {/* First main image (overlay) */}
              <img
                src={img || "/placeholder.svg"}
                alt="Mystical Element"
                width={300}
                height={150}
                className="absolute object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-b-full opacity-80 z-10 w-[500px] h-[500px]"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <p className="text-orange-500 font-medium tracking-wider uppercase text-sm mb-4">WHAT WE DO</p>
              <h1 className="text-4xl lg:text-5xl font-medium font-cinzel text-slate-800 leading-tight mb-6">
                We know everything about astrology
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mi tellus, pulvinar vel tempus eget,
                finibus vitae ante. Fusce sit amet velit eleifend, iaculis velit quis, malesuada lacus. Vestibulum
                sodales magna a volutpat tempus. Mauris vestibulum id urna viverra ultrices. Nullam rhoncus elit eget
                libero varius dapibus.
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
                  className="text-black text-sm font-medium tracking-wider relative transition-all duration-300"
                >
                  GET STARTED
                  <span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300 ease-out"
                    style={{ backgroundColor: "#C89B6D" }}
                  ></span>
                </span>
              </div>
            </button>
            </div>
          </div>
        </div>

        {/* Zodiac signs slider at bottom */}
        <div className="mt-20 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex justify-center items-center space-x-8 lg:space-x-12"
            >
             {getCurrentSigns().map((sign, index) => (
              <motion.div
                key={`${currentSlide}-${index}`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="flex flex-col items-center space-y-2 group cursor-pointer"
              >
                <div className="w-16 h-16 lg:w-32 lg:h-32 rounded-full shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow duration-200">
                  <img
                    src={sign.image}
                    alt={sign.name}
                    className="w-28 h-28 object-cover rounded-full"
                  />
                </div>
                <span className="text-sm text-slate-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {sign.name}
                </span>
              </motion.div>
            ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default Section5
