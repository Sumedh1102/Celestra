import React from 'react'
import img from '../../PalmistryImages/image copy 2.png'
import img1 from '../../PalmistryImages/image copy 3.png'
import img2 from '../../PalmistryImages/image copy 4.png'
import img3 from '../../PalmistryImages/image copy 5.png'
import img4 from '../../PalmistryImages/image copy.png'
import img5 from '../../PalmistryImages/image.png'

const Section3 = () => {
    const services = [
    {
      icon: <img src={img} className="w-8 h-8" />,
      title: "General consultation",
      description:
        "Astrology is one of the earliest attempts made by man to find the order hidden behind or within the confusing and apparent chaos that exists in the world.",
    },
    {
      icon: <img src={img1} className="w-8 h-8" />,
      title: "Personal life advice",
      description:
        "Astrology is one of the earliest attempts made by man to find the order hidden behind or within the confusing and apparent chaos that exists in the world.",
    },
    {
      icon: <img src={img2} className="w-8 h-8" />,
      title: "Annual forecast",
      description:
        "Astrology is one of the earliest attempts made by man to find the order hidden behind or within the confusing and apparent chaos that exists in the world.",
    },
    {
      icon: <img src={img3} className="w-8 h-8" />,
      title: "Work, career, finance",
      description:
        "Astrology is one of the earliest attempts made by man to find the order hidden behind or within the confusing and apparent chaos that exists in the world.",
    },
    {
      icon: <img src={img4} className="w-8 h-8" />,
      title: "Forecast of future events",
      description:
        "Astrology is one of the earliest attempts made by man to find the order hidden behind or within the confusing and apparent chaos that exists in the world.",
    },
    {
      icon: <img src={img5} className="w-8 h-8" />,
      title: "Current life situation",
      description:
        "Astrology is one of the earliest attempts made by man to find the order hidden behind or within the confusing and apparent chaos that exists in the world.",
    },
  ]
  return (
    <div className="relative min-h-screen bg-[#1C1C27] overflow-hidden">
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-600 text-sm font-medium tracking-wider uppercase mb-8">OUR SERVICES</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white leading-tight max-w-4xl mx-auto font-cinzel">
            Astrology is just a finger pointing at reality
          </h1>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="text-center group border-[0.01px] border-stone-50 p-10 ">
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-[#D97B65] rounded-full flex items-center justify-center transition-colors duration-300 ">
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-medium font-cinzel text-white mb-4 group-hover:text-amber-100 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed text-sm max-w-xs mx-auto group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Section3
