import React from 'react'


const services = [
  {
    id: 1,
    title: "Academic Performance",
    description: "Compare your synastry and potential couple challenges.",
    image: "https://i.pinimg.com/736x/91/f7/70/91f770e05b90c4f3d8d8bbca79951d0d.jpg",
    alt: "Meditation pose with chakra symbols",
  },
  {
    id: 2,
    title: "Competitive Exams",
    description: "Unlock the secrets of your unique birth chart, including your Sun.",
    image: "https://i.pinimg.com/736x/84/91/30/8491305aa9efb604f78fd55e4a61e76f.jpg",
    alt: "Astrological birth chart with planetary positions",
  },
  {
    id: 3,
    title: "Higher Education",
    description: "Helping you prepare for opportunities and challenges.",
    image: "https://i.pinimg.com/736x/6c/3e/6b/6c3e6b222a309de7ec7c304d36540291.jpg",
    alt: "Tarot cards spread on wooden surface",
  },
  {
    id: 4,
    title: "Career Transition",
    description: "Gain a deeper understanding of your personality traits, strengths.",
    image: "https://i.pinimg.com/736x/ba/67/5a/ba675aa654c12a92e33328bc26447543.jpg",
    alt: "Zodiac wheel with sun symbol in center",
  },
]

const Section4 = () => {
    
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        {services.map((service) => (
          <div key={service.id} className="flex flex-col md:flex-row h-[400px] ">
            {/* Image Section */}
            <div className="flex-1 relative overflow-hidden">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500 h-full w-full"
              />
            </div>

            {/* Info Section */}
            <div className="flex-1 bg-blue-900 flex items-center justify-center p-8">
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
