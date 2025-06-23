import React from 'react'


const services = [
  {
    id: 1,
    title: "Astrological Compatibility",
    description: "Compare your synastry and potential couple challenges.",
    image: "https://i.pinimg.com/736x/e5/5a/9a/e55a9a6ad6831e722eccfe08cdaa13b3.jpg",
    alt: "Meditation pose with chakra symbols",
  },
  {
    id: 2,
    title: "Birth Chart Astrology",
    description: "Unlock the secrets of your unique birth chart, including your Sun.",
    image: "https://i.pinimg.com/736x/36/5c/4f/365c4faca8de50d126961b257559a827.jpg",
    alt: "Astrological birth chart with planetary positions",
  },
  {
    id: 3,
    title: "Annual Horoscope",
    description: "Helping you prepare for opportunities and challenges.",
    image: "https://i.pinimg.com/736x/bd/5f/e0/bd5fe0c57b86e8f37bfa54710773ad35.jpg",
    alt: "Tarot cards spread on wooden surface",
  },
  {
    id: 4,
    title: "Sun Sign Personality",
    description: "Gain a deeper understanding of your personality traits, strengths.",
    image: "https://i.pinimg.com/736x/65/e2/8a/65e28a9339f083e669762df31a894e4d.jpg",
    alt: "Zodiac wheel with sun symbol in center",
  },
]

const Section4 = () => {
    
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {services.map((service) => (
          <div key={service.id} className="flex flex-col md:flex-row h-[400px]">
            {/* Image Section */}
            <div className="flex-1 relative overflow-hidden">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500 w-full h-full"
              />
            </div>

            {/* Info Section */}
            <div className="flex-1 bg-black flex items-center justify-center p-8">
              <div className="text-center text-white space-y-4 max-w-xs">
                <h2 className="text-2xl font-light tracking-wide leading-tight font-cinzel">{service.title}</h2>

                <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Section4
