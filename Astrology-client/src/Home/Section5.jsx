import React from 'react'

const Section5 = () => {
    const cards = [
    {
      id: "fire",
      title: "FIRE",
      image: "https://i.pinimg.com/736x/09/c0/19/09c0191a8f806d4b1f7f8202d0ff882d.jpg",
      imageShape: "rounded-t-full", // arched top corners
      description: "Urna nunc id cursus metus aliquam eleifend mi ut diam",
    },
    {
      id: "earth",
      title: "EARTH",
      image: "https://i.pinimg.com/736x/e9/14/d1/e914d17e761f9eedd05de9833834c110.jpg",
      imageShape: "rounded-full", // fully rounded/oval
      description: "Urna nunc id cursus metus aliquam eleifend mi ut diam",
    },
    {
      id: "air",
      title: "AIR",
      image: "https://i.pinimg.com/736x/8a/4f/f8/8a4ff8707ba57c2735be9b17ccac0a29.jpg",
      imageShape: "rounded-none", // rectangle with sharp corners
      description: "Urna nunc id cursus metus aliquam eleifend mi ut diam",
    },
    {
      id: "water",
      title: "WATER",
      image: "https://i.pinimg.com/736x/2d/0e/d3/2d0ed383f1c17113ed621fa3eeb5cba7.jpg",
      imageShape: "rounded-t-full", // circle
      description: "Urna nunc id cursus metus aliquam eleifend mi ut diam",
    },
  ]
  return (
   <section className="bg-black ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 py-10">
          {cards.map((card, index) => (
            <div key={card.id} className="relative flex flex-col items-center text-center">
              {/* Vertical divider line - hidden on mobile, shown between cards on desktop */}
              {index > 0 && <div className="hidden lg:block absolute left-0 top-0 h-full w-px bg-gray-800" />}

              <div className="flex flex-col items-center space-y-7  px-8 border-[#C89B6D] border-[0.2px]">
                {/* Image with unique shape */}
                <div className="relative w-60 h-96 overflow-hidden py-10">
                  <img
                    src={card.image || "/placeholder.svg"}
                    alt={`${card.title} element`}
                    fill
                    className={`object-cover ${card.imageShape}`}
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-3xl font-medium tracking-wider font-cinzel text-[#C89B6D]"
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed max-w-xs text-[#B3B3B3] font-cinzel"

                >
                  {card.description}
                </p>

                {/* Button */}
                <button className="group hover:-translate-y-1 transition-all duration-300 bg-transparent border-none p-2 cursor-pointer">
              <div className="flex items-center space-x-2">
                <span 
                  className="text-yellow-500 text-lg group-hover:rotate-180 transition-transform duration-300" 
                  style={{ color: "#C89B6D" }}
                >
                  ✦
                </span>
                <span
                  className="text-white text-sm font-medium tracking-wider relative transition-all duration-300"
                >
                  LEARN MORE
                  <span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300 ease-out"
                    style={{ backgroundColor: "#C89B6D" }}
                  ></span>
                </span>
              </div>
            </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section5
