"use client"; // Interaktivlik uchun kerak

import { ShieldCheck, TrendingUp } from "lucide-react";
import Link from 'next/link'; // Link import qilindi

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Orqa fon uchun dekorativ shakllar */}
      <div className="absolute inset-0">
        <div className="absolute top-[-50px] left-[-50px] w-72 h-72 bg-emerald-100 rounded-full opacity-50 animate-float"></div>
        <div className="absolute bottom-[-50px] right-[-50px] w-80 h-80 bg-teal-100 rounded-full opacity-50 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Matn mazmuni */}
          <div className="text-center lg:text-left">
            <h1 data-aos="fade-up" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
              <span className="block">KundalikCOM</span>
              <span className="block text-emerald-600">Auto Login Xizmati</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="200" className="mt-4 max-w-md mx-auto lg:mx-0 text-lg text-slate-600 sm:max-w-xl">
              Platformamiz orqali maktabingiz reytingini oson va avtomatik tarzda oshiring. Windows va mobil ilovalarimiz barcha foydalanuvchilarni tizimga o&apos;z vaqtida kirishini ta&apos;minlaydi.
            </p>
            <div data-aos="fade-up" data-aos-delay="400" className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link 
                href="/maintenance" 
                className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transform hover:scale-105 transition-transform duration-300 text-center"
              >
                Kirish
              </Link>
              <Link 
                href="/maintenance" 
                className="inline-block bg-white px-8 py-3 rounded-lg font-semibold text-emerald-600 border-2 border-emerald-600 hover:bg-emerald-50 transition-colors duration-300 text-center"
              >
                Bepul foydalanish
              </Link>
            </div>
             <p data-aos="fade-up" data-aos-delay="500" className="mt-4 text-sm text-slate-500 text-center lg:text-left">
              <span className="font-semibold text-emerald-600">✓</span> 40+ foydalanuvchilarimiz bizga ishonadi
            </p>
          </div>
          
          {/* Ilovalar maketi */}
          <div data-aos="fade-left" data-aos-delay="300" className="relative flex justify-center items-center h-full min-h-[300px] lg:min-h-[400px]">
            {/* Desktop ilova maketi */}
            <div className="absolute w-full max-w-sm lg:max-w-md p-2 bg-slate-800 rounded-xl shadow-2xl border-4 border-slate-700 transform lg:rotate-[-6deg] lg:translate-x-4">
               <div className="flex items-center gap-1.5 p-2 border-b border-slate-700">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
               </div>
               <div className="p-4 bg-slate-900 text-white rounded-b-lg">
                  <p className="text-sm font-medium text-emerald-400">Maktab Reytingi</p>
                  <div className="mt-2 h-20 w-full bg-slate-800 rounded-md flex items-end">
                      {/* Reyting grafigi */}
                      <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                          <path d="M 0 45 Q 25 30, 50 20 T 100 5" stroke="#34d399" fill="none" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                  </div>
               </div>
            </div>

            {/* Mobil ilova maketi */}
            <div className="absolute bottom-[-20px] right-0 lg:right-[-40px] w-36 bg-slate-900 p-1.5 rounded-2xl shadow-2xl border-4 border-slate-700 transform rotate-6">
                <div className="w-full h-2 bg-slate-800 rounded-t-lg"></div>
                <div className="p-2 bg-slate-900 text-white rounded-b-lg">
                    <p className="text-xs text-emerald-400">Faollik</p>
                    <div className="mt-1 flex items-center justify-center">
                        <TrendingUp className="w-8 h-8 text-emerald-400"/>
                    </div>
                </div>
            </div>

            {/* Suzib yuruvchi ikonlar */}
            <div className="absolute top-0 left-[-20px] p-2 bg-white rounded-full shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <TrendingUp className="w-8 h-8 text-emerald-500" />
            </div>
             <div className="absolute bottom-0 left-1/4 p-2 bg-white rounded-full shadow-lg animate-float">
                <ShieldCheck className="w-8 h-8 text-teal-500" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

