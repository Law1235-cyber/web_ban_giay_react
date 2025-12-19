import { useState } from "react";
import SparkleNavbar from "@/components/lightswind/sparkle-navbar";
import { Link } from "react-router-dom"; // Import Link cho Logo
import { useCart } from "@/context/CartContext";


const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <div className="w-full flex items-center justify-between px-8 py-4 absolute top-0 left-0 z-50">
      <div className="text-2xl font-bold text-black cursor-pointer">
        <Link to="/">SLICK</Link>
      </div>
      
      {/* CẬP NHẬT PHẦN ITEMS NÀY */}
      <SparkleNavbar
        items={[
          { name: "Home", link: "/" },
          { name: "Shop All", link: "/san-pham" },
          { name: "Trending", link: "/san-pham" },
          { name: "Best Sellers", link: "/san-pham" },
          { name: "Reviews", link: "/san-pham" },
        ]}
        color="#00FFF0"
      />
      
      <div className="flex items-center gap-4">
        {/* Giỏ hàng */}
        <Link to="/cart" className="relative p-2 hover:bg-gray-100/50 rounded-full transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">{cartCount}</span>
          )}
        </Link>

        {/* Avatar */}
        <div 
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <div 
            className="w-10 h-10 rounded-full overflow-hidden border border-gray-200 cursor-pointer hover:ring-2 hover:ring-black transition"
          >
            <img src="https://api.dicebear.com/9.x/notionists/svg?seed=Felix" alt="Avatar" className="w-full h-full object-cover bg-gray-100" />
          </div>

          {isDropdownOpen && (
            <div className="absolute right-0 top-full pt-2 w-48 z-50">
              <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden">
                <Link to="/login" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-black font-medium transition-colors">Login</Link>
                <Link to="/register" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-black font-medium transition-colors">Register</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;