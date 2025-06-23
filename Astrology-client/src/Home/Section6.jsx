
import { useState, useEffect } from "react"
import left from '../Images/leftarrow.png'
import right from '../Images/rightarrow.png'

const testimonials = [
  {
    id: 1,
    avatar: "https://i.pinimg.com/736x/1c/b4/2c/1cb42cae55c972b2185ba0e651826802.jpg",
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.",
    name: "Aiyana Murphy",
    title: "Singer",
  },
  {
    id: 2,
    avatar: "https://i.pinimg.com/736x/56/9b/f9/569bf9184e6c7026a316c7a4d4a4401c.jpg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Marcus Chen",
    title: "Producer",
  },
  {
    id: 3,
    avatar: "https://i.pinimg.com/736x/bd/47/24/bd47246e54ea7fa322ed8cef799afd5f.jpg",
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    name: "Sofia Rodriguez",
    title: "Songwriter",
  },
]

// Cosmic background elements
const CosmicBackground = () => {
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 0.5 + 0.5,
    type: Math.random() > 0.5 ? "star" : "x",
    animationDelay: Math.random() * 4, // Random delay between 0-4 seconds
    animationType: Math.random() > 0.6 ? "blink" : "twinkle", // 40% blink, 60% twinkle
    duration: Math.random() * 2 + 2, // Random duration between 2-4 seconds
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute text-white opacity-30"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            fontSize: `${star.size}rem`,
            animation: `${star.animationType} ${star.duration}s infinite`,
            animationDelay: `${star.animationDelay}s`,
          }}
        >
          {star.type === "star" ? "✦" : "×"}
        </div>
      ))}
    </div>
  )
}

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextTestimonial = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      setTimeout(() => setIsTransitioning(false), 50)
    }, 300)
  }

  const prevTestimonial = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
      setTimeout(() => setIsTransitioning(false), 50)
    }, 300)
  }

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, currentIndex])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section
      className="relative w-full h-[800px] bg-[#121010] flex items-center justify-center py-16 px-4 border-t-[0.2px] border-b-[0.2px] border-[#C89B6D]"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Cosmic Background */}
      <CosmicBackground />

      {/* Navigation Arrows */}
      <button
        onClick={prevTestimonial}
        disabled={isTransitioning}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 text-white transition-all duration-500 z-10 group disabled:opacity-50"
        aria-label="Previous testimonial"
      >
        <img src={left} alt="" className="w-8 h-8 md:w-16 md:h-16 stroke-1 group-hover:scale-125 group-hover:-translate-x-1 transition-all duration-300 ease-out" />
      </button>

      <button
        onClick={nextTestimonial}
        disabled={isTransitioning}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 text-white  transition-all duration-500 z-10 group disabled:opacity-50"
        aria-label="Next testimonial"
      >
        <img src={right} alt="" className="w-8 h-8 md:w-16 md:h-16 stroke-1 group-hover:scale-125 group-hover:translate-x-1 transition-all duration-300 ease-out" />
      </button>

      {/* Testimonial Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div
          className={`transition-all duration-500 ease-in-out transform ${
            isTransitioning ? "opacity-0 translate-y-4 scale-95" : "opacity-100 translate-y-0 scale-100"
          }`}
        >
          {/* Avatar */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-dotted border-white p-1 transition-all duration-300">
                <img
                  src={currentTestimonial.avatar || "/placeholder.svg"}
                  alt={currentTestimonial.name}
                  width={96}
                  height={96}
                  className="w-full h-full rounded-full object-cover transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {/* Quote */}
          <blockquote className="mb-8">
            <p className="text-[#C89B6D] text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed font-cinzel max-w-3xl mx-auto transition-all duration-300">
              "{currentTestimonial.quote}"
            </p>
          </blockquote>

          {/* Name and Title */}
          <div className="text-white">
            <p className="text-sm md:text-base font-cinzel transition-all duration-300">
              {currentTestimonial.name}, {currentTestimonial.title}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
