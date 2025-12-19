import chung from "@/assets/man-brown-suede-sneakers 1.png";

import anh1 from '@/assets/giay/Untitled design(111) 1.png';
import anh2 from '@/assets/giay/Untitled design(111) 2.png';
import anh3 from '@/assets/giay/Untitled design(111) 3.png';
export default function Ourtrendingshoes2() {
  return (
    <div className="pt-20 pb-20">
      {/* Main container with relative positioning for absolute children */}
      <div className="w-[90%] mx-auto h-[450px] bg-[#091E3A] rounded-2xl relative flex items-center shadow-lg mt-5">
        
        {/* Background text "Slick" */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 font-[inter] text-[400px] leading-none text-white opacity-10 font-bold select-none pointer-events-none mt-[81px]">
          Slick
        </div>

        {/* Left side container for the shoe image */}
        <div className="w-full h-full relative mb-[400px] flex justify-center items-center">
          {/* Absolutely positioned image to break out of the container */}
          <div className="absolute -top-20 left-5 w-full h-full">
            <img
              src={chung}
              alt="shoe"
              className="w-[800px] h-[800px] object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Right side container for the text content */}
        <div className="w-[1010px] mb-[50px] flex flex-col justify-center items-start text-white z-10 flex flex-col justify-center items-center ml-100">
          <div className="font-[inter] text-[58px] leading-tight">
            Are you ready<br />
             to lead the way
          </div>
          <div className="font-[medium] text-[24px] mt-4">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do.
          </div>
          <div className="font-[inter] text-[28px] w-40 text-center mt-5 bg-white text-black py-2 cursor-pointer">
            Explore
          </div>
          <div className="w-80 h-10 flex gap-8 mt-10 ">
            <div><img src={anh1} alt="anh1"/></div>
            <div><img src={anh2} alt="anh2"/></div>
            <div><img src={anh3} alt="anh3"/></div>
          </div>
        </div>

      </div>
    </div>
  );
}