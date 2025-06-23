import React from 'react'
import { useState } from "react"
import img from './Gharshantiimg/sun2.png'
import img1 from './Gharshantiimg/moon1.png'
import img2 from './Gharshantiimg/mars.png'
import img3 from './Gharshantiimg/mercury.png'
import img4 from './Gharshantiimg/jupiter.png'
import img5 from './Gharshantiimg/venus1.png'
import img6 from './Gharshantiimg/saturn1.png'
import img7 from './Gharshantiimg/pluto.png'


const products = [
  {
    id: 1,
    name: "Sun",
    description: "A mystical piece crafted to bring protection and positive energy to your daily journey.",
    image: img,
    alt: "Person wearing a talisman necklace",
  },
  {
    id: 2,
    name: "Moon",
    description: "Pure amethyst crystal known for its calming properties and spiritual healing benefits.",
    image: img1,
    alt: "Clear amethyst crystal",
  },
  {
    id: 3,
    name: "Mars",
    description: "Elegant golden bracelet designed to enhance confidence and attract abundance.",
    hasAddToCart: true,
    image: img2,
    alt: "Gold bracelet on wrist",
  },
  {
    id: 4,
    name: "Mercury",
    description: "Personalized astrological reading revealing your cosmic blueprint and life path.",
    image: img3,
    alt: "Natal astrology wheel over sea background",
  },
  {
    id: 5,
    name: "Jupiter",
    description: "A mystical piece crafted to bring protection and positive energy to your daily journey.",
    image: img4,
    alt: "Person wearing a talisman necklace",
  },
  {
    id: 6,
    name: "Venus",
    description: "Pure amethyst crystal known for its calming properties and spiritual healing benefits.",
    image: img5,
    alt: "Clear amethyst crystal",
  },
  {
    id: 7,
    name: "Saturn",
    description: "Elegant golden bracelet designed to enhance confidence and attract abundance.",
    hasAddToCart: true,
    image: img6,
    alt: "Gold bracelet on wrist",
  },
  {
    id: 8,
    name: "pluto",
    description: "Personalized astrological reading revealing your cosmic blueprint and life path.",
    image: img7,
    alt: "Natal astrology wheel over sea background",
  },
]

const Section1 = () => {
 const [hoveredProduct, setHoveredProduct] = useState(null)

  return (
    <section className="bg-stone-50 py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-[#7a5737] mb-3 sm:mb-4 md:mb-6 tracking-wide leading-tight font-cinzel">
            Graha Shanti Pooja
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-xs sm:max-w-md md:max-w-2xl mx-auto px-4 font-cinzel">
            Planetary Afflictions & Solutions
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative mb-3 sm:mb-4 md:mb-6 overflow-hidden  duration-300">
                {/* Product Image */}
                <div className="aspect-square relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.alt}
                    className="object-cover w-full h-full "
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="text-center px-2">
                <h3 className="font-bold text-[#7a5737] text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 tracking-wide leading-tight font-cinzel">
                  {product.name}
                </h3>
                {/* Product Description */}
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed line-clamp-3 sm:line-clamp-none font-poppins">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: View All Button for mobile */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12 lg:hidden">
          <button className="bg-[#7a5737] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#6b4a2e] transition-colors duration-300">
            View All Planets
          </button>
        </div>
      </div>
    </section>
  )
}

export default Section1
