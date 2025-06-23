import React from 'react'

const Section5 = () => {
     const testimonials = [
    {
      name: "Aiyana Murphy",
      role: "Singer",
      image: "https://i.pinimg.com/736x/7c/64/af/7c64afa557cf85d000cfd2d97513c30e.jpg",
    },
    {
      name: "Judith Gardner",
      role: "Dancer",
      image: "https://i.pinimg.com/736x/de/b2/99/deb2991ad6942f53f3c1c40e39e3f940.jpg",
    },
    {
      name: "Sara Starks",
      role: "Director",
      image: "https://i.pinimg.com/736x/f3/5d/12/f35d121e8d8d8b96b23f9b5b8829e4e0.jpg",
    },
  ]
  const quote =
    "I came to consultation, because I was puzzled with current life situation and Stargaze gave me clear ways to develop."

  return (
     <div className="w-full bg-stone-100 border-t-[0.2px] border-b-[0.2px] border-[#C89B6D]">
      <div className="grid grid-cols-1 md:grid-cols-3 min-h-[350px]">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`relative ${testimonial.bgColor} p-8 flex flex-col justify-center items-center text-center ${
              index < 2 ? "border-r border-stone-200" : ""
            }`}
          >
            {/* Profile Photo */}
            <div className="w-24 h-24 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white shadow-lg mb-6">
              <img
                src={testimonial.image || "/placeholder.svg"}
                alt={`${testimonial.name} profile`}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Testimonial Content */}
            <div className="space-y-8 max-w-[85%]">
              {/* Quote */}
              <blockquote className="text-lg md:text-xl font-light text-amber-900 leading-relaxed font">
                "{quote}"
              </blockquote>

              {/* Name and Role */}
              <div className="space-y-1">
                <div className="text-lg font-cinzel font-medium text-amber-900 tracking-wide">{testimonial.name}</div>
                <div className="text-sm font-medium text-amber-800 tracking-wider uppercase">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Section5
