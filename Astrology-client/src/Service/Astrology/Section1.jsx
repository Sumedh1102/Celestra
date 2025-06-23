
import { useState } from "react"
import { ChevronLeft, ChevronRight, Sparkles, Heart } from "lucide-react"
import img from '../../Images/moon2.png'
import imgstar from '../../Images/star2.png'
import left from '../../Images/leftarrow.png'
import right from '../../Images/rightarrow.png'

export default function CompatibilityPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showQuiz, setShowQuiz] = useState(false)
  const [formData, setFormData] = useState({
    yourName: "",
    partnerName: "",
    yourBirthdate: "",
    partnerBirthdate: "",
  })
  const [result, setResult] = useState(null)

  const slides = [
    {
      title: "ARE YOU AND YOUR LOVE PARTNER MEANT TO BE?",
      subtitle: "Discover your romantic compatibility",
      image: "https://i.pinimg.com/736x/a3/ea/df/a3eadf3ad0a18bb058b4acfda1edc585.jpg",
    },
    {
      title: "FIND YOUR PERFECT MATCH",
      subtitle: "Explore the depths of your connection",
      image: "https://i.pinimg.com/736x/66/b7/43/66b7433fda5ca9646b7ea834875793b4.jpg",
    },
    {
      title: "UNLOCK YOUR LOVE STORY",
      subtitle: "See what the stars have aligned for you",
      image: "https://i.pinimg.com/736x/2e/91/d2/2e91d2c4652fcd728c7822d9eb8f07a1.jpg",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="relative h-[600px] w-full overflow-hidden border-b-[0.2px] border-[#C89B6D]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={slides[currentSlide].image || "/placeholder.svg"}
          alt="Romantic couple"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 "
        aria-label="Previous slide"
      >
        <img src={left} className="w-4 h-4 sm:w-5 sm:h-5 lg:w-12 lg:h-12" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 "
        aria-label="Next slide"
      >
        <img src={right} className="w-4 h-4 sm:w-5 sm:h-5 lg:w-12 lg:h-12" />
      </button>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[600px] text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          {/* Decorative Sun Icon */}
          <div className="mb-6 sm:mb-8 lg:mb-12 flex justify-center">
           {/* <img src="" alt="" className="h-32 w-28 animate-spin-slow object-cover"/> */}
          </div>

          {/* Main Title */}
          <h1 className="text-2xl font-cinzel text-[#C89B6D] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light mb-3 sm:mb-4 lg:mb-6 max-w-6xl mx-auto leading-tight tracking-wider px-2">
            {slides[currentSlide].title}
          </h1>

          {/* Subtitle */}
          <p className="text-base font-cinzel sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto px-2">
            {slides[currentSlide].subtitle}
          </p>

          {/* CTA Button */}
          <button
            onClick={() => setShowQuiz(true)}
            className="bg-white text-gray-800 hover:bg-gray-100 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-base sm:text-base lg:text-base font-medium tracking-wide transition-all duration-500 flex items-center justify-center mx-auto mb-8 sm:mb-12 lg:mb-16"
          >
            <img src={imgstar} className="w-4 h-4 sm:w-5 sm:h-5 mr-2 hover:animate-spin " />
            CHECK COMPATIBILITY
          </button>        
        </div>
      </div>
    </div>
  )
}
