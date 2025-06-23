import React from 'react'
import { useState } from "react"
import { ChevronLeft, ChevronRight, Check } from "lucide-react"
import img from '../../RemediesImages/image.png'


const Section5 = () => {
   
const steps = [
    {
      id: 1,
      title: "Birth Chart Analysis",
      description: "Detailed birth chart analysis for marriage and progeny prospects",
      image: "https://i.pinimg.com/736x/bb/5e/78/bb5e78416bb8f5d262fa7146aa0ce404.jpg",
      content:
        "We begin with a comprehensive analysis of your birth chart to understand your marriage prospects and potential for progeny. Our expert astrologers examine planetary positions, houses, and their influences on your romantic life and family planning.",
    },
    {
      id: 2,
      title: "Planetary Assessment",
      description: "Assessment of planetary influences affecting relationships",
      image: "https://i.pinimg.com/736x/81/f1/c4/81f1c40dd727ed2fd7c1cc9179dd2673.jpg",
      content:
        "Our astrologers carefully assess how various planetary influences impact your relationships. We analyze the positions of Venus, Mars, Jupiter, and other significant planets to understand their effects on your love life and compatibility with potential partners.",
    },
    {
      id: 3,
      title: "Remedial Plan",
      description: "Customized remedial plan including mantras, gemstones, and rituals",
      image: "https://i.pinimg.com/736x/91/81/a4/9181a4cbb4c97cc6895c98bfa49d7c9b.jpg",
      content:
        "Based on your chart analysis, we create a personalized remedial plan tailored to your specific needs. This includes powerful mantras, recommended gemstones, and sacred rituals designed to enhance your relationship prospects and remove obstacles.",
    },
    {
      id: 4,
      title: "Timing Guidance",
      description: "Guidance on timing for marriage ceremonies and conception",
      image: "https://i.pinimg.com/736x/9c/75/82/9c75820a59e2faf4bc55fb39affdc545.jpg",
      content:
        "Timing is crucial in astrology. We provide detailed guidance on the most auspicious times for your marriage ceremony and conception. Our recommendations are based on planetary transits and your personal astrological calendar.",
    },
    {
      id: 5,
      title: "Ongoing Support",
      description: "Ongoing support throughout your relationship journey",
      image: "https://i.pinimg.com/736x/16/f9/76/16f9766f03c795f576dd5c0568016874.jpg",
      content:
        "Our commitment doesn't end with the initial consultation. We provide continuous support throughout your relationship journey, offering guidance during important milestones and helping you navigate challenges with astrological wisdom.",
    },
  ]

const [currentStep, setCurrentStep] = useState(1)

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const goToStep = (stepNumber) => {
    setCurrentStep(stepNumber)
  }

  const currentStepData = steps.find((step) => step.id === currentStep)


  return (
       <div
      className="min-h-screen relative"
      style={{
        backgroundImage: `url('https://i.pinimg.com/736x/43/9d/51/439d514dcdc2966451a991c4f38310bb.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background overlay for better readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto p-6 space-y-8 min-h-screen pt-28">
        {/* Heading */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-6xl font-light text-white font-cinzel">Our Consultancy Process</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto font-cinzel">
            Follow our streamlined process to get started with our consultancy services
          </p>
        </div>

        {/* Main Content */}
        {currentStepData && (
          <div className="grid md:grid-cols-2 gap-6">
            {/* Image Section */}
            <div className="bg-white/95 overflow-hidden shadow-xl">
              <div className="p-0">
                <div className="relative h-64 md:h-96 w-full">
                  <img
                    src={currentStepData.image || "/placeholder.svg"}
                    alt={currentStepData.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="bg-transparent border-2 border-white">
              <div className="p-8 flex flex-col justify-center space-y-4 h-full">
                <div className="space-y-2">
                  <h2 className="text-2xl font-medium text-white font-cinzel">{currentStepData.title}</h2>
                  <p className="text-lg text-gray-600">{currentStepData.description}</p>
                </div>

                <p className="text-gray-700 leading-relaxed flex-grow">{currentStepData.content}</p>

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6">
                  <button
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="inline-flex items-center space-x-2 bg-amber-700 hover:bg-amber-700 disabled:bg-amber-700 disabled:cursor-not-allowed px-4 py-2 text-sm font-medium text-white border-2 border-white transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>

                  <button
                    onClick={nextStep}
                    disabled={currentStep === steps.length}
                    className="inline-flex items-center space-x-2 bg-amber-700 hover:bg-amber-700 disabled:bg-amber-700 disabled:cursor-not-allowed px-4 py-2 text-sm font-medium text-white border-2 border-white transition-colors"
                  >
                    <span>{currentStep === steps.length ? "Complete" : "Next"}</span>
                    {currentStep !== steps.length && <ChevronRight className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step Summary */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`bg-zinc-50 backdrop-blur-sm rounded-lg cursor-pointer transition-all duration-200 shadow-lg hover:shadow-xl ${
                currentStep === step.id ? "ring-2 ring-amber-900" : ""
              }`}
              onClick={() => goToStep(step.id)}
            >
              <div className="p-4 text-center space-y-2">
                <div
                  className={`w-8 h-8 rounded-full mx-auto flex items-center justify-center text-sm font-medium ${
                    currentStep === step.id
                      ? "bg-amber-600 text-white"
                      : currentStep > step.id
                        ? "bg-amber-600 text-white"
                        : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {currentStep > step.id ? <Check className="w-4 h-4" /> : step.id}
                </div>
                <h3 className="text-sm font-medium text-gray-900">{step.title}</h3>
                <p className="text-xs text-gray-500">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Section5
