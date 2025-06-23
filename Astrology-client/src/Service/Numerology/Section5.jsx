import React from 'react'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from "lucide-react"
import img from '../../Images/numberimg3.jpg'

const Section5 = () => {
    const [openItems, setOpenItems] = useState([0])

  const toggleItem = (index) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqItems = [
    {
      question: "What is core numbers?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      question: "How can numerology help me?",
      answer:
        "Numerology can provide insights into your personality, life path, and potential opportunities. It helps you understand your strengths, challenges, and the energy patterns that influence your life journey.",
    },
    {
      question: "How to start using numerology?",
      answer:
        "Begin by calculating your core numbers using your birth date and full name. Start with your Life Path Number, which is derived from your birth date, as it reveals your life's purpose and direction.",
    },
  ]
  return (
    <div className="min-h-[600px] bg-stone-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Decorative Numbers Section */}
          <div className="relative flex justify-center">
            <div className="relative">
              <img src={img} alt="" className='object-cover h-[600px] w-[500px]' />
              </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-amber-700 font-medium tracking-wider uppercase text-sm font-cinzel">FAQ</p>
              <h2 className="text-5xl lg:text-5xl font-cinzel text-slate-900 leading-tight">
                Fell free to ask
                <br />
                more questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="border-b border-stone-200 pb-4">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full flex items-center justify-between text-left group"
                  >
                    <h3 className="text-xl lg:text-2xl font-serif text-slate-900 group-hover:text-amber-700 transition-colors">
                      {item.question}
                    </h3>
                    <div className="ml-4 flex-shrink-0">
                      <ChevronDown
                        className={`w-6 h-6 text-amber-600 transition-transform duration-300 ease-in-out ${
                          openItems.includes(index) ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openItems.includes(index) ? "max-h-96 opacity-100 mt-4 pr-8" : "max-h-0 opacity-0 mt-0 pr-8"
                    }`}
                  >
                    <div className="pb-2">
                      <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section5
