import React from 'react'
import { useState } from "react"

const products = [
  {
    id: 1,
    name: "Ruby",
    description: "A mystical piece crafted to bring protection and positive energy to your daily journey.",
    image: "https://i.pinimg.com/736x/b9/07/ba/b907ba43be9731283f41a1219e885d17.jpg",
    alt: "Person wearing a talisman necklace",
  },
  {
    id: 2,
    name: "Pearl",
    description: "Pure amethyst crystal known for its calming properties and spiritual healing benefits.",
    image: "https://i.pinimg.com/736x/d2/4e/af/d24eaf3925be6f38f6a1256cc54ccdd4.jpg",
    alt: "Clear amethyst crystal",
  },
  {
    id: 3,
    name: "Red Coral",
    description: "Elegant golden bracelet designed to enhance confidence and attract abundance.",
    hasAddToCart: true,
    image: "https://i.pinimg.com/736x/c0/a5/8a/c0a58aaa33517d0b6542b3b26a3f903e.jpg",
    alt: "Gold bracelet on wrist",
  },
  {
    id: 4,
    name: "Emerald",
    description: "Personalized astrological reading revealing your cosmic blueprint and life path.",
    image: "https://i.pinimg.com/736x/f1/f0/c4/f1f0c4f061ff872c10c267f77fb2fff4.jpg",
    alt: "Natal astrology wheel over sea background",
  },
  {
    id: 5,
    name: "Diamond",
    description: "A mystical piece crafted to bring protection and positive energy to your daily journey.",
    image: "https://i.pinimg.com/736x/14/df/05/14df0587d3b0e948ed18d3528cce906e.jpg",
    alt: "Person wearing a talisman necklace",
  },
  {
    id: 6,
    name: "Blue Sapphire",
    description: "Pure amethyst crystal known for its calming properties and spiritual healing benefits.",
    image: "https://i.pinimg.com/736x/a7/b0/7e/a7b07eb171b45ce382ca62c3462a2615.jpg",
    alt: "Clear amethyst crystal",
  },
  {
    id: 7,
    name: "Coral",
    description: "Elegant golden bracelet designed to enhance confidence and attract abundance.",
    hasAddToCart: true,
    image: "https://i.pinimg.com/736x/a7/df/06/a7df0651de1d26a4c4a17275f8c57ac5.jpg",
    alt: "Gold bracelet on wrist",
  },
  {
    id: 8,
    name: "blue pearl",
    description: "Personalized astrological reading revealing your cosmic blueprint and life path.",
    image: "https://i.pinimg.com/736x/2a/f9/94/2af994387190bf5e3d1443b0b8950f5b.jpg",
    alt: "Natal astrology wheel over sea background",
  },
  {
    id: 9,
    name: "blue pearl",
    description: "Personalized astrological reading revealing your cosmic blueprint and life path.",
    image: "https://i.pinimg.com/736x/49/b6/1d/49b61d121a3f8eeb18ad8d397b47de58.jpg",
    alt: "Natal astrology wheel over sea background",
  },
  {
    id: 10,
    name: "blue pearl",
    description: "Personalized astrological reading revealing your cosmic blueprint and life path.",
    image: "https://i.pinimg.com/736x/e5/02/ed/e502edf8d73aec980d895a1f52370bf4.jpg",
    alt: "Natal astrology wheel over sea background",
  },
  {
    id: 11,
    name: "blue pearl",
    description: "Personalized astrological reading revealing your cosmic blueprint and life path.",
    image: "https://i.pinimg.com/736x/85/2e/e7/852ee73110d82825dd00c41fca6da052.jpg",
    alt: "Natal astrology wheel over sea background",
  },
  {
    id: 12,
    name: "blue pearl",
    description: "Personalized astrological reading revealing your cosmic blueprint and life path.",
    image: "https://i.pinimg.com/736x/e3/40/9d/e3409d04b1272e843584db3238c52189.jpg",
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-cinzel text-[#7a5737] mb-3 sm:mb-4 md:mb-6 tracking-wide leading-tight">
            Gemstone Therapy
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl font-sans max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-4">
            Cosmic Power of Sacred Gemstones
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative mb-3 sm:mb-4 overflow-hidden  transition-shadow duration-300">
                {/* Product Image */}
                <div className="aspect-square relative bg-white">
                 <img
                    src={product.image || "/placeholder.svg?height=400&width=400"}
                    alt={product.alt}
                    className="object-cover transition-transform duration-300 group-hover:scale-110 w-full h-full"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  />

                 
                </div>
              </div>

              {/* Product Info */}
              <div className="text-center px-1 sm:px-2">
                <h3 className="font-serif text-[#7a5737] text-base sm:text-lg md:text-xl mb-2 sm:mb-3 tracking-wide leading-tight">
                  {product.name}
                </h3>
                {/* Product Description */}
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed line-clamp-3 sm:line-clamp-none">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section1
