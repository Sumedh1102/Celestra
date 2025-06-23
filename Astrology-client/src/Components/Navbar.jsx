import { Search, ShoppingBag, Settings } from "lucide-react"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  return (
 <header className="bg-black text-white border-b-[0.2px] border-stone-200">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-28 px-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl md:text-4xl font-light tracking-wider font-cinzel">CELESTARA</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10 font-poppins text-base font-medium">
            <a href="/" className="hover:text-gray-300 transition-colors flex items-center gap-1 group relative">
              <span className="text-[#C89B6D] group-hover:rotate-180 transition-transform duration-300">✦</span>
              HOME
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300 ease-out"
                style={{ backgroundColor: "#C89B6D" }}
              ></span>
            </a>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="hover:text-gray-300 flex items-center gap-1 group relative">
                <span className="text-[#C89B6D] group-hover:rotate-180 transition-transform duration-300">✦</span>
                SERVICES
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300 ease-out"
                  style={{ backgroundColor: "#C89B6D" }}
                ></span>
              </button>
              <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out bg-black border border-[#C89B6D] mt-2 py-2 px-4 space-y-2 shadow-xl z-50 min-w-[150px]">
                <a
                  href="/service/astrology"
                  className="block hover:text-[#C89B6D] py-1 transform hover:translate-x-2 transition-transform duration-200"
                >
                  Astrology
                </a>
                <a
                  href="/service/palmistry"
                  className="block hover:text-[#C89B6D] py-1 transform hover:translate-x-2 transition-transform duration-200"
                >
                  Palmistry
                </a>
                <a
                  href="/service/numerology"
                  className="block hover:text-[#C89B6D] py-1 transform hover:translate-x-2 transition-transform duration-200"
                >
                  Numerology
                </a>
              </div>
            </div>

            {/* Remedies Dropdown */}
            <div className="relative group">
              <button className="hover:text-gray-300 flex items-center gap-1 group relative">
                <span className="text-[#C89B6D] group-hover:rotate-180 transition-transform duration-300">✦</span>
                REMEDIES
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300 ease-out"
                  style={{ backgroundColor: "#C89B6D" }}
                ></span>
              </button>
              <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out bg-black border border-[#C89B6D] mt-2 py-2 px-4 space-y-2 shadow-xl z-50 min-w-[150px]">
                <a
                  href="/remedies/marriage"
                  className="block hover:text-[#C89B6D] py-1 transform hover:translate-x-2 transition-transform duration-200"
                >
                  Marriage
                </a>
                <a
                  href="/remedies/education"
                  className="block hover:text-[#C89B6D] py-1 transform hover:translate-x-2 transition-transform duration-200"
                >
                  Education
                </a>
                <a
                  href="/remedies/career"
                  className="block hover:text-[#C89B6D] py-1 transform hover:translate-x-2 transition-transform duration-200"
                >
                  Career
                </a>
                <a
                  href="/remedies/muhurat"
                  className="block hover:text-[#C89B6D] py-1 transform hover:translate-x-2 transition-transform duration-200"
                >
                  Muhurat
                </a>
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button className="hover:text-gray-300 flex items-center gap-1 group relative">
                <span className="text-[#C89B6D] group-hover:rotate-180 transition-transform duration-300">✦</span>
                ASTROLOGICAL
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300 ease-out"
                  style={{ backgroundColor: "#C89B6D" }}
                ></span>
              </button>
              <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out bg-black border border-[#C89B6D] mt-2 py-2 px-4 space-y-2 shadow-xl z-50 min-w-[180px]">
                <a
                  href="/solution/gemstones"
                  className="block hover:text-[#C89B6D] py-1 transform hover:translate-x-2 transition-transform duration-200"
                >
                  Gemstones
                </a>
                <a
                  href="/solution/pooja"
                  className="block hover:text-[#C89B6D] py-1 transform hover:translate-x-2 transition-transform duration-200"
                >
                  Grah Shanti Pooja
                </a>
              </div>
            </div>

            {/* About Us */}
            <a href="/about" className="hover:text-gray-300 transition-colors flex items-center gap-1 group relative">
              <span className="text-[#C89B6D] group-hover:rotate-180 transition-transform duration-300">✦</span>
              ABOUT US
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300 ease-out"
                style={{ backgroundColor: "#C89B6D" }}
              ></span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-white hover:text-[#C89B6D] transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black border-t border-[#C89B6D] animate-in slide-in-from-top duration-300">
            <nav className="px-4 py-6 space-y-4 font-poppins">
              <a
                href="/"
                className=" hover:text-[#C89B6D] transition-all duration-200 flex items-center gap-2 py-2 hover:translate-x-2 hover:bg-gray-900 rounded px-2 group relative"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-[#C89B6D]">✦</span>
                HOME
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300 ease-out"
                  style={{ backgroundColor: "#C89B6D" }}
                ></span>
              </a>

              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 py-2 text-[#C89B6D] font-medium">
                  <span>✦</span>
                  SERVICES
                </div>
                <div className="pl-6 space-y-2">
                  <a
                    href="/service/astrology"
                    className="block hover:text-[#C89B6D] py-1 transition-all duration-200 hover:translate-x-2 hover:bg-gray-900 rounded px-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Astrology
                  </a>
                  <a
                    href="/service/palmistry"
                    className="block hover:text-[#C89B6D] py-1 transition-all duration-200 hover:translate-x-2 hover:bg-gray-900 rounded px-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Palmistry
                  </a>
                  <a
                    href="/service/numerology"
                    className="block hover:text-[#C89B6D] py-1 transition-all duration-200 hover:translate-x-2 hover:bg-gray-900 rounded px-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Numerology
                  </a>
                </div>
              </div>

              {/* Mobile Remedies */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 py-2 text-[#C89B6D] font-medium">
                  <span>✦</span>
                  REMEDIES
                </div>
                <div className="pl-6 space-y-2">
                  <a
                    href="/remedies/marriage"
                    className="block hover:text-[#C89B6D] py-1 transition-all duration-200 hover:translate-x-2 hover:bg-gray-900 rounded px-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Marriage
                  </a>
                  <a
                    href="/remedies/education"
                    className="block hover:text-[#C89B6D] py-1 transition-all duration-200 hover:translate-x-2 hover:bg-gray-900 rounded px-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Education
                  </a>
                  <a
                    href="/remedies/career"
                    className="block hover:text-[#C89B6D] py-1 transition-all duration-200 hover:translate-x-2 hover:bg-gray-900 rounded px-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Career
                  </a>
                  <a
                    href="/remedies/muhurat"
                    className="block hover:text-[#C89B6D] py-1 transition-all duration-200 hover:translate-x-2 hover:bg-gray-900 rounded px-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Muhurat
                  </a>
                </div>
              </div>

              {/* Mobile Astrological */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 py-2 text-[#C89B6D] font-medium">
                  <span>✦</span>
                  ASTROLOGICAL
                </div>
                <div className="pl-6 space-y-2">
                  <a
                    href="/solution/gemstones"
                    className="block hover:text-[#C89B6D] py-1 transition-all duration-200 hover:translate-x-2 hover:bg-gray-900 rounded px-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Gemstones
                  </a>
                  <a
                    href="/solution/pooja"
                    className="block hover:text-[#C89B6D] py-1 transition-all duration-200 hover:translate-x-2 hover:bg-gray-900 rounded px-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Grah Shanti Pooja
                  </a>
                </div>
              </div>

              <a
                href="/about"
                className=" hover:text-[#C89B6D] transition-all duration-200 flex items-center gap-2 py-2 hover:translate-x-2 hover:bg-gray-900 rounded px-2 group relative"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-[#C89B6D]">✦</span>
                ABOUT US
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300 ease-out"
                  style={{ backgroundColor: "#C89B6D" }}
                ></span>
              </a>
            </nav>
          </div>
        )}
      </div>
      <div className="border-[0.2px] border-[#A09382] font-light" />
    </header>
  )
}

export default Navbar
