import React from "react";
import CourseRegistrationForm from "./components/CourseRegistrationForm";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 font-sans overflow-hidden">
      
      {/* Decorative Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>

      {/* Main Content */}
      <div className="relative flex min-h-screen items-center justify-center px-4 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 w-full max-w-6xl items-center">
          
          {/* LEFT PANEL */}
          <div className="space-y-7 text-center lg:text-left">
            
            {/* Badge */}
            <div className="inline-block px-4 py-1 text-sm font-medium bg-blue-100 text-blue-600 rounded-full shadow-sm">
              🚀 Industry-Based Learning
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Become a Job-Ready Developer
            </h1>

            {/* Subtitle */}
            <p className="text-gray-600 text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Stop wasting time on endless tutorials. Belajar langsung lewat project nyata, 
              bangun portfolio, dan siap masuk dunia kerja dengan skill yang relevan.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                Get Started
              </button>

              <button className="px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300">
                View Curriculum
              </button>
            </div>

            {/* Social Proof */}
            <div className="pt-6 flex flex-col sm:flex-row items-center gap-4 text-gray-500 text-sm">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full border" src="https://i.pravatar.cc/40?img=1" alt="" />
                <img className="w-8 h-8 rounded-full border" src="https://i.pravatar.cc/40?img=2" alt="" />
                <img className="w-8 h-8 rounded-full border" src="https://i.pravatar.cc/40?img=3" alt="" />
              </div>
              <p>Trusted by 500+ students across Indonesia</p>
            </div>

            {/* Stats */}
            <div className="pt-4 grid grid-cols-3 gap-6 text-center lg:text-left">
              <div>
                <p className="text-2xl font-bold text-gray-900">500+</p>
                <p className="text-sm text-gray-500">Students</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">30+</p>
                <p className="text-sm text-gray-500">Projects</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">100%</p>
                <p className="text-sm text-gray-500">Hands-on</p>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl shadow-2xl p-6 hover:shadow-blue-100 transition duration-300">
              <CourseRegistrationForm />
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-400 text-xs pb-4">
        <p>&copy; 2026 Ido Vortex. Built seriously, not just for passing grades.</p>
      </div>
    </div>
  );
}

export default App;