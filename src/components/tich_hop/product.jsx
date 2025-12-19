import { Link } from "react-router-dom";
import anh1 from "@/assets/product/Untitled design(119) 1.png";
import { useEffect, useState } from "react";
import { productService } from "@/data/productService.js";

export default function Product() {
  const [bestSellingProducts, setBestSellingProducts] = useState([]);

  useEffect(() => {
    productService.getAll().then((allProducts) => {
      setBestSellingProducts(allProducts.slice(0, 3));
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center py-10 px-4">
      {/* Tiêu đề */}
      <div className="text-4xl font-bold text-black mb-8">--Best Selling--</div>

      {/* LƯỚI SẢN PHẨM (GRID) */}
      {/* grid-cols-1: 1 cột trên mobile */}
      {/* md:grid-cols-3: 3 cột trên màn hình vừa và lớn (giống thiết kế) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {bestSellingProducts.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 rounded-2xl p-4 relative hover:shadow-xl transition duration-300 bg-white group flex flex-col"
          >
            {/* Badge "New" */}
            {product.isNew && (
              <span className="absolute top-4 left-4 bg-black text-white text-[10px] font-bold px-2 py-1 rounded z-10">
                NEW
              </span>
            )}

            {/* Ảnh sản phẩm */}
            <div className="w-full h-64 flex items-center justify-center mb-4 bg-gray-50 rounded-xl overflow-hidden relative">
              <Link to={`/product/${product.id}`}>
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  src={product.image || anh1}
                  alt={product.name}
                />
              </Link>
              {/* Nút Quick View hiện khi hover */}
              <Link
                to={`/product/${product.id}`}
                className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition translate-y-2 group-hover:translate-y-0 bg-white text-black text-sm font-bold px-4 py-2 rounded-full shadow-lg"
              >
                Quick View
              </Link>
            </div>

            <div className="mt-auto">
              {/* Tên sản phẩm */}
              <div className="text-left font-bold text-lg mb-2 text-gray-800 line-clamp-1">
                {product.name}
              </div>

              {/* Giá và Nút */}
              <div className="flex justify-between items-end">
                <div className="flex flex-col items-start">
                  <span className="text-xl font-bold text-gray-900">
                    ₹ {product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="text-sm text-gray-400 line-through decoration-gray-400">
                      ₹ {product.oldPrice}
                    </span>
                  )}
                </div>

                <Link
                  to={`/product/${product.id}`}
                  className="bg-black text-white p-3 rounded-full hover:bg-[#00fffc] hover:text-black transition transform hover:rotate-12 shadow-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
