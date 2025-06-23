import React from 'react'
import img from '../../RemediesImages/lotus.png'
import img1 from '../../RemediesImages/astrohand.png'
import img2 from '../../RemediesImages/om.png'
import img3 from '../../RemediesImages/sun.png'

const Section3 = () => {
    const services = [
    {
      title: "Vedic Rituals",
      description: "Gain deep insights into your personality, strengths, and life path.",
      image: img,
      alt: "Astrology compass symbol",
    },
    {
      title: "Gemstone Therapy",
      description: "Explore current challenges and future possibilities through symbolic guidance.",
      image: img1,
      alt: "Tarot moon symbol",
    },
    {
      title: "Mantra Chanting",
      description: "Discover the dynamics of your relationships through astrological insight.",
      image: img2,
      alt: "Yin yang relationship symbol",
    },
    {
      title: "Fertility Enhancing",
      description: "Receive guidance and clarity on important decisions with ancient wisdom.",
      image: img3,
      alt: "Ancient rune symbol",
    },
  ]
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 min-h-[400px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center text-center space-y-4">
            <div className="relative w-32 h-32">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.alt}
                fill
                className="object-contain filter sepia opacity-60"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 tracking-wide font-cinzel">{service.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed max-w-[200px] ">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
    
  )
}

export default Section3
