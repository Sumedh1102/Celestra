import React from 'react'

const Section2 = () => {
  return (
    <section className="relative bg-stone-50 py-12 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Privacy */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center">
              <img src='https://i.pinimg.com/736x/39/85/98/39859895637887a1b695a1f89b87c3cf.jpg' className=" text-white rounded-full object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Privacy</h3>
              <p className="text-slate-600 leading-relaxed">Information obtained during the consultation is private.</p>
            </div>
          </div>

          {/* Result guarantee */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center">
              <img src='https://i.pinimg.com/736x/aa/2f/3c/aa2f3c78b1aca6cbf9fa7a5efcf3f7a4.jpg' className=" text-white rounded-full object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Result guarantee</h3>
              <p className="text-slate-600 leading-relaxed">We provide a guaranteed 100% result</p>
            </div>
          </div>

          {/* Competence */}
          <div className="flex items-start gap-4">
             <div className="flex-shrink-0 w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center">
              <img src='https://i.pinimg.com/736x/f8/91/a8/f891a82c8c978910ec27dcfca14d8467.jpg' className=" text-white rounded-full object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Competence</h3>
              <p className="text-slate-600 leading-relaxed">We only take on issues that we can solve</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section2
