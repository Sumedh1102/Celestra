import React from 'react'


const services = [
  {
    id: 1,
    title: "Job Seekers",
    description: "Compare your synastry and potential couple challenges.",
    image: "https://morningstarnews.org/wp-content/uploads/2014/10/Flag-of-India.-Wikipedia-Mellisa-Anthony-Jones.jpg",
    alt: "Meditation pose with chakra symbols",
  },
  {
    id: 2,
    title: "Corporate Professionals",
    description: "Unlock the secrets of your unique birth chart, including your Sun.",
    image: "https://i.pinimg.com/736x/3c/84/ad/3c84ad8034c1b1f11de8dd5c0f9b7cb3.jpg",
    alt: "Astrological birth chart with planetary positions",
  },
  {
    id: 3,
    title: "Career Transition",
    description: "Helping you prepare for opportunities and challenges.",
    image: "https://i.pinimg.com/736x/8a/f4/8b/8af48b33134e0a1a27e823830e495d24.jpg",
    alt: "Tarot cards spread on wooden surface",
  },
  {
    id: 4,
    title: "Entrepreneurs",
    description: "Gain a deeper understanding of your personality traits, strengths.",
    image: "https://i.pinimg.com/736x/3f/0e/7d/3f0e7d06c818af074d6991b755466f32.jpg",
    alt: "Zodiac wheel with sun symbol in center",
  },
]

const Section4 = () => {
    
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        {services.map((service) => (
          <div key={service.id} className="flex flex-col md:flex-row h-[400px] border-2 border-slate-100">
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
            <div className="flex-1 bg-orange-300 flex items-center justify-center p-8">
              <div className="text-center text-black space-y-4 max-w-xs">
                <h2 className="text-2xl font-light tracking-wide leading-tight font-cinzel">{service.title}</h2>

                <p className="text-gray-800 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Section4
