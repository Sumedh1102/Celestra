import React from 'react'

const Section3 = () => {
     const services = [
    "RITUAL READINGS",
    "PERSONAL CONSULTATION",
    "NATAL CHART READINGS",
    "DAILY HOROSCOPE",
    "PSYCHIC POWER",
    "TAROT CARD READING",
    "CRYSTAL HEALING",
    "SPIRITUAL GUIDANCE",
  ]
  return (
<>
<div className="w-full bg-black text-white overflow-hidden py-4 border-t border-b border-[#C89B6D]">
      <div className="flex animate-scroll whitespace-nowrap">
        {/* First set of items */}
        <div className="flex items-center space-x-8 px-4">
          {services.map((service, index) => (
            <div key={`first-${index}`} className="flex items-center space-x-8">
              <span className="text-xl font-cinzel font-light tracking-wider text-[#C89B6D]">{service}</span>
              <span className="text-[#C89B6D] text-2xl">✦</span>
            </div>
          ))}
        </div>

        {/* Duplicate set for seamless loop */}
        <div className="flex items-center space-x-8 px-4">
          {services.map((service, index) => (
            <div key={`second-${index}`} className="flex items-center space-x-8">
              <span className="text-lg font-light tracking-wider text-amber-100">{service}</span>
              <span className="text-amber-400 text-xl">✦</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
</>
  )
}

export default Section3
