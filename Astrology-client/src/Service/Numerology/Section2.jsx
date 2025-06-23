import React from 'react'
import img from '../../Images/numberimg2.jpg'
import { Star } from "lucide-react"


const Section2 = () => {
  return (
    <section className="min-h-screen bg-stone-50 relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Decorative Numbers */}
          <div className="relative">
            <img src={img} alt=""  className='h-[500px] lg:h-[600px]'/>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-amber-600 font-medium tracking-wider uppercase text-sm">What we do</p>

              <h1 className="text-4xl lg:text-5xl xl:text-5xl font-cinzel text-slate-800 leading-tight">
                Numerology helps to transform you
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mi tellus, pulvinar vel tempus eget,
                finibus vitae ante. Fusce sit amet velit eleifend, iaculis velit quis, malesuada lacus. Vestibulum
                sodales magna a volutpat tempus. Mauris vestibulum id urna viverra ultrices. Nullam rhoncus elit eget
                libero varius dapibus.
              </p>
            </div>

            <button className="relative text-amber-900 hover:text-amber-800 p-0 h-auto font-medium tracking-wide flex items-center bg-transparent border-none cursor-pointer transition-colors group">
              <Star className="w-4 h-4 mr-2 fill-current transition-transform duration-300 group-hover:rotate-180" />
              <span className="relative">
                LEARN MORE
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-900 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section2
