import React from 'react'
import { useState } from "react"
import { User, Calendar, Clock, MapPin, Mail, ChevronDown } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    birthDate: "",
    birthTime: "",
    birthLocation: "",
    email: "",
    agreeToTerms: false,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }
  return (
  <div className="min-h-screen bg-[#1C1C27] relative overflow-hidden flex items-center justify-center p-4 border-b-[0.2px] border-[#C89B6D]">
      {/* Decorative stars */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-16 text-stone-300/30 text-xs">✦</div>
        <div className="absolute top-32 right-32 text-stone-300/20 text-sm">✦</div>
        <div className="absolute top-64 left-1/4 text-stone-300/25 text-xs">✦</div>
        <div className="absolute bottom-32 right-16 text-stone-300/30 text-xs">✦</div>
        <div className="absolute top-1/3 right-1/4 text-stone-300/20 text-sm">✦</div>
        <div className="absolute bottom-1/3 left-16 text-stone-300/25 text-xs">✦</div>
        <div className="absolute top-20 left-1/3 textstone-300/20 text-xs">✦</div>
        <div className="absolute bottom-20 right-1/3 text-stone-300/30 text-sm">✦</div>
      </div>

      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-[#C89B6D] font-cinzel tracking-wider leading-tight">
            RECEIVE YOUR FREE
            <br />
            BIRTH CHART GUIDE
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-9">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
            {/* Full Name */}
            <div className="relative">
              <input
                type="text"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full bg-transparent border border-[#C89B6D] text-[#C89B6D] placeholder:text-[#C89B6D] h-14 pl-4 pr-12 focus:border-[#C89B6D] focus:ring-2 focus:ring-[#C89B6D] focus:outline-none transition-colors"
              />
              <User className="absolute right-4 top-1/2 transform -translate-y-1/2 text-amber-400/60 w-5 h-5" />
            </div>

            {/* Gender */}
            <div className="relative">
              <select
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                className="w-full bg-transparent border border-[#C89B6D] text-[#C89B6D] placeholder:text-[#C89B6D] h-14 pl-4 pr-12 focus:border-[#C89B6D] focus:ring-2 focus:ring-[#C89B6D] focus:outline-none transition-colors"
              >
                <option value="" className="bg-gray-800 text-[#C89B6D]">
                  Gender
                </option>
                <option value="male" className="bg-gray-800 text-[#C89B6D]">
                  Male
                </option>
                <option value="female" className="bg-gray-800 text-[#C89B6D]">
                  Female
                </option>
                <option value="other" className="bg-gray-800 text-[#C89B6D]">
                  Other
                </option>
                <option value="prefer-not-to-say" className="bg-gray-800 text-[#C89B6D]">
                  Prefer not to say
                </option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-amber-400/60 w-5 h-5 pointer-events-none" />
            </div>

            {/* Birth Date */}
            <div className="relative">
              <input
                type="text"
                placeholder="dd/mm/yyyy"
                value={formData.birthDate}
                onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                className="w-full bg-transparent border border-[#C89B6D] text-[#C89B6D] placeholder:text-[#C89B6D] h-14 pl-4 pr-12 focus:border-[#C89B6D] focus:ring-2 focus:ring-[#C89B6D] focus:outline-none transition-colors"
              />
              <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 text-amber-400/60 w-5 h-5" />
            </div>

            {/* Time of Birth */}
            <div className="relative">
              <input
                type="text"
                placeholder="Time of Birth"
                value={formData.birthTime}
                onChange={(e) => setFormData({ ...formData, birthTime: e.target.value })}
                className="w-full bg-transparent border border-[#C89B6D] text-[#C89B6D] placeholder:text-[#C89B6D] h-14 pl-4 pr-12 focus:border-[#C89B6D] focus:ring-2 focus:ring-[#C89B6D] focus:outline-none transition-colors"
              />
              <Clock className="absolute right-4 top-1/2 transform -translate-y-1/2 text-amber-400/60 w-5 h-5" />
            </div>

            {/* Birth Location */}
            <div className="relative">
              <input
                type="text"
                placeholder="Birth Location"
                value={formData.birthLocation}
                onChange={(e) => setFormData({ ...formData, birthLocation: e.target.value })}
                className="w-full bg-transparent border border-[#C89B6D] text-[#C89B6D] placeholder:text-[#C89B6D] h-14 pl-4 pr-12 focus:border-[#C89B6D] focus:ring-2 focus:ring-[#C89B6D] focus:outline-none transition-colors"
              />
              <MapPin className="absolute right-4 top-1/2 transform -translate-y-1/2 text-amber-400/60 w-5 h-5" />
            </div>

            {/* Email Address */}
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border border-[#C89B6D] text-[#C89B6D] placeholder:text-[#C89B6D] h-14 pl-4 pr-12 focus:border-[#C89B6D] focus:ring-2 focus:ring-[#C89B6D] focus:outline-none transition-colors"
              />
              <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 text-amber-400/60 w-5 h-5" />
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start space-x-3 pt-4">
            <div className="relative">
              <input
                type="checkbox"
                id="terms"
                checked={formData.agreeToTerms}
                onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                className="w-5 h-5 bg-transparent border border-[#C89B6D] text-[#C89B6D] focus:ring-[#C89B6D] focus:ring-2 focus:outline-none mt-1 "
              />
            </div>
            <label htmlFor="terms" className="text-[#C89B6D] font-cinzel text-base leading-relaxed cursor-pointer">
              By accepting you agree to our Terms of Service and Privacy Policy.
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-8">
            <button
              type="submit"
              className="bg-[#C89B6D] hover:bg-[#C89B6D] text-black font-medium px-12 py-4  text-base tracking-wide transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            >
              ✦ GET YOUR CHART
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
