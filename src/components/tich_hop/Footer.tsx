import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#020617] text-white overflow-hidden relative font-sans">
      
      {/* --- PART 1: HEADER STRIP --- */}
      <div className="w-full bg-gradient-to-r from-[#091E3A] to-[#1e3a8a] py-4 relative">
         {/* Giữ nguyên cấu trúc div trống theo code của bạn hoặc thêm tiêu đề nếu cần */}
         <div className="absolute -bottom-1 left-0 w-full h-4 bg-[#020617] rounded-t-[100%] scale-x-110"></div>
      </div>

      {/* --- PART 2: MAIN CONTENT --- */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        
        {/* Decor Shape */}
        <div className="absolute top-20 left-10 opacity-80 animate-pulse pointer-events-none hidden lg:block mt-60">
            <svg width="60" height="20" viewBox="0 0 98 32" fill="none">
                <path d="M7.5 24.5C21.5 24.5 21.5 7.5 35.5 7.5C49.5 7.5 49.5 24.5 63.5 24.5C77.5 24.5 77.5 7.5 91.5 7.5" stroke="#8B5CF6" strokeWidth="12" strokeLinecap="round"/>
            </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20">
          
          {/* COLUMN 1: Customer Support */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-xl font-bold border-l-4 border-[#00C2FF] pl-3">Customer Support</h3>
            <div className="flex flex-col space-y-4 text-sm md:text-base text-gray-300">
              
              {/* Email */}
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="bg-white/10 p-2 rounded-full group-hover:bg-[#00C2FF] transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <span>support@slickshoes.com</span>
              </div>

              {/* Address (New Random Address) */}
              <div className="flex items-start gap-3 group cursor-pointer">
                <div className="bg-white/10 p-2 rounded-full mt-1 group-hover:bg-[#00C2FF] transition">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <span>123 Fashion Ave, New York, NY 10001, USA</span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 group cursor-pointer">
                 <div className="bg-white/10 p-2 rounded-full group-hover:bg-[#00C2FF] transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <span className="font-bold text-white">+1 (555) 123-4567</span>
              </div>

            </div>
          </div>

          {/* COLUMN 2: Products & Policies */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-xl font-bold border-l-4 border-[#00C2FF] pl-3">Products & Policies</h3>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm md:text-base text-gray-300">
              <li><a href="#" className="hover:text-[#00C2FF] hover:underline transition">Home</a></li>
              <li><a href="#" className="hover:text-[#00C2FF] hover:underline transition">About Us</a></li>
              <li><a href="#" className="hover:text-[#00C2FF] hover:underline transition">Men's Shoes</a></li>
              <li><a href="#" className="hover:text-[#00C2FF] hover:underline transition">Return Policy</a></li>
              <li><a href="#" className="hover:text-[#00C2FF] hover:underline transition">Women's Shoes</a></li>
              <li><a href="#" className="hover:text-[#00C2FF] hover:underline transition">Size Guide</a></li>
              <li><a href="#" className="hover:text-[#00C2FF] hover:underline transition">New Arrivals</a></li>
              <li><a href="#" className="hover:text-[#00C2FF] hover:underline transition">Track Order</a></li>
            </ul>
          </div>

          {/* COLUMN 3: Newsletter */}
          <div className="flex flex-col space-y-6 relative">
             {/* Decor */}
            <div className="absolute -top-10 right-0 animate-pulse pointer-events-none hidden lg:block">
                <svg width="50" height="20" viewBox="0 0 98 32" fill="none" className="transform rotate-12">
                     <path d="M7.5 24.5C21.5 24.5 21.5 7.5 35.5 7.5C49.5 7.5 49.5 24.5 63.5 24.5C77.5 24.5 77.5 7.5 91.5 7.5" stroke="#EC4899" strokeWidth="12" strokeLinecap="round"/>
                </svg>
            </div>

            <h3 className="text-xl font-bold border-l-4 border-[#00C2FF] pl-3">Newsletter Subscription</h3>
            <p className="text-gray-400 text-sm">Get 10% off your first order immediately.</p>
            
            {/* Input Form */}
            <div className="flex items-center bg-gray-800 rounded-full overflow-hidden border border-gray-700 w-full max-w-sm focus-within:border-[#00C2FF] transition">
              <input 
                type="email" 
                placeholder="Enter your email..." 
                className="bg-transparent text-gray-300 px-4 py-3 w-full outline-none text-sm placeholder-gray-500"
              />
              <button className="bg-[#016c8d] hover:bg-[#017ba4] text-white font-bold px-6 py-3 transition text-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>

            {/* Logo Text */}
            <div className="mt-4 flex items-center gap-2">
                 {/* Icon Giày (Sneaker SVG) */}
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8l4 6v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4l-1-2"/>
                    <path d="M12 4v4"/>
                    <path d="M4 14h16"/>
                    <circle cx="12" cy="14" r="2"/>
                 </svg>
                 <span className="text-2xl font-black italic tracking-tighter">SLICK<span className="text-[#00C2FF]">SHOES</span></span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-2">
                <a href="#" className="bg-white text-blue-900 p-2 rounded-full hover:bg-gray-200 transition transform hover:-translate-y-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </a>
                <a href="#" className="bg-white text-pink-600 p-2 rounded-full hover:bg-gray-200 transition transform hover:-translate-y-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
            </div>

          </div>
        </div>
      </div>

      {/* --- PART 3: COPYRIGHT --- */}
      <div className="w-full bg-black py-5 border-t border-gray-800 text-center text-gray-500 text-xs md:text-sm">
         © 2024 <span className="text-white font-bold">Slick Shoes Store</span>. All Rights Reserved.
      </div>
      
    </footer>
  );
}