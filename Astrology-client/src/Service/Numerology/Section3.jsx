import React from 'react'

const lifePathNumbers = [
  { number: 1, meaning: "Initiation" },
  { number: 2, meaning: "Cooperation" },
  { number: 3, meaning: "Creativity" },
  { number: 4, meaning: "Organization" },
  { number: 5, meaning: "Adventure" },
  { number: 6, meaning: "Responsibility" },
  { number: 7, meaning: "Introspection" },
  { number: 8, meaning: "Confidence" },
  { number: 9, meaning: "Fulfillment" },
  { number: 11, meaning: "Enlightenment" },
  { number: 22, meaning: "Master Builder" },
  { number: 33, meaning: "Master Teacher" },
]

const Section3 = () => {

  return (
    <div className="min-h-screen bg-[#1C1C29] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-4">What path are you on?</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-cinzel text-stone-50 mb-6">Life Path Numbers</h1>
          <div className="w-24 h-[0.2px] bg-[#C89B6D] mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Graphic and Description */}
          <div className="space-y-8">
            <div className="relative">
              <img
                src="https://i.pinimg.com/736x/c7/3b/62/c73b625e6fcbbd6c9085087b61dc1e5c.jpg"
                alt="Numerology geometric pattern with life path numbers"
                width={600}
                height={600}
                className="w-full max-w-lg mx-auto shadow-lg object-cover h-96"
                priority
              />
            </div>

            <div className="text-center lg:text-left">
              <p className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-3">Life Path Number</p>
              <h2 className="text-2xl md:text-3xl font-cinzel text-stone-50 mb-4 leading-tight">
                Life Path Number: Calculator, Numerology, and Meaning
              </h2>
              <p className="text-gray-400 text-sm">By Marisa Yakutis</p>
            </div>
          </div>

          {/* Right Column - Life Path Numbers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {lifePathNumbers.map((item) => (
              <div
                key={item.number}
                className="flex items-center font-cinzel space-x-4 p-4 bg-[#1C1C29] backdrop-blur-sm hover:border transition-all duration-200 hover:border-white"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 transition-all rounded-sm border-2 border-[#C89B6D] bg-white flex items-center justify-center">
                    <span className="text-black font-bold text-lg">{item.number}</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-light font-cinzel text-stone-50 text-lg">Life Path Number {item.number}</h3>
                  <p className="text-gray-400 text-sm font-medium">{item.meaning}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section3
