import { Button } from "@/components/lightswind/button";
import anhGiay from "@/assets/anh_giay.png"; // Đảm bảo đường dẫn đúng

const Banner = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 relative flex overflow-hidden">
      {/* --- LEFT PANEL --- */}
      <div className="w-1/2 bg-white flex items-center justify-center pt-20 flex-col">
        <p className="text-black-400 text-[100px] font-bold w-3/4 leading-[1.1] ">
          Find Your Sole Mate with Us
        </p>
        <p className="text-gray-600 text-[20px] w-3/4 mt-6 text-[18px]">
          Lorem ipsum dolor sit amet, consectetur
          <br /> adipiscing elit, sed do eiusmod{" "}
        </p>
        <Button className=" mt-8 px-6 py-3 bg-black text-white rounded-lg transition mr-135">
          Shop Now
        </Button>
      </div>

      {/* --- RIGHT PANEL --- */}
      <div className="w-1/2 bg-gradient-to-l from-[#FAFAFA] to-[#E4E4E4] h-screen relative flex items-center justify-center">
        {/* 1. CHỮ ULTIMATE */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center">
          <h1 className="font-['Poppins'] text-[120px] font-extrabold text-white whitespace-nowrap mt-8  -rotate-90 -translate-x-[28%] select-none leading-[0.8] -translate-x-[44%]">
            ULTIMATE
          </h1>
        </div>

        {/* 2. ẢNH NẰM GIỮA */}
        <div className="z-10 w-[700px] h-[600px] overflow-hidden relative">
          <img
            src={anhGiay}
            alt="Giày Sneaker"
            className="w-full h-full object-cover object-center"
          />
          <div className="mt-90 z-1000 absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center text-[20px]">
            <div>Trendy slick pro</div>
            <div>₹ 3999.00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;