import { useState, useEffect } from "react";
import anh1 from "@/assets/product/Untitled design(119) 1.png";
import { Link } from "react-router-dom";
import { productService, categoryService } from "@/data/productService.js";

export default function ProductPage() {
  const [priceRange, setPriceRange] = useState(10000);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [prods, cats] = await Promise.all([
          productService.getAll(),
          categoryService.getAll(),
        ]);
        setProducts(prods);
        setCategories(cats);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Lọc sản phẩm theo giá (Client-side filtering tạm thời)
  const filteredProducts = products.filter((p) => p.price <= priceRange);

  return (
    <div className="w-full min-h-screen bg-gray-50 pt-24 pb-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* --- PHẦN 1: SIDEBAR BỘ LỌC (Cố định trái) --- */}
        {/* 'lg:sticky': Chỉ dính trên màn hình lớn */}
        {/* 'top-24': Cách mép trên 24 đơn vị (để tránh Header che) */}
        {/* 'h-fit': Chiều cao vừa đủ nội dung */}
        <aside className="hidden lg:block lg:col-span-1 lg:sticky lg:top-24 h-fit space-y-8 pr-4">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-4 border-b pb-2">Categories</h3>
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li
                  key={cat.id}
                  className="flex items-center gap-2 cursor-pointer hover:text-cyan-500 transition"
                >
                  <input
                    type="checkbox"
                    id={`cat-${cat.id}`}
                    className="rounded border-gray-300 w-4 h-4 accent-black"
                  />
                  <label
                    htmlFor={`cat-${cat.id}`}
                    className="text-gray-600 font-medium cursor-pointer"
                  >
                    {cat.name}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-4 border-b pb-2">
              Price Range
            </h3>
            <div className="mb-2 text-gray-600 font-medium">
              Max: ₹ {priceRange}.00
            </div>
            <input
              type="range"
              min="1000"
              max="10000"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>₹ 1000</span>
              <span>₹ 10000</span>
            </div>
          </div>
        </aside>

        {/* --- PHẦN 2: DANH SÁCH SẢN PHẨM (Bên phải) --- */}
        <main className="lg:col-span-3">
          {/* Header nhỏ của phần sản phẩm */}
          <div className="flex justify-between items-end mb-6">
            <div>
              <h2 className="text-3xl font-bold text-black">New Arrivals</h2>
              <p className="text-gray-500 mt-1">
                Showing {filteredProducts.length} products
              </p>
            </div>
            {/* Bộ lọc mobile (chỉ hiện khi màn hình nhỏ) */}
            <button className="lg:hidden border border-black px-4 py-2 rounded-full font-bold flex items-center gap-2">
              Filter <span className="text-xs">▼</span>
            </button>
            <select className="border border-gray-300 rounded-lg p-2 bg-white outline-none cursor-pointer hidden md:block">
              <option>Sort by: Popular</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          {/* LƯỚI SẢN PHẨM */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
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

                {/* Thông tin */}
                <div className="mt-auto">
                  {/* <div className="text-gray-400 text-xs mb-1 uppercase tracking-wider">{product.category}</div> */}
                  <div className="text-left font-bold text-lg mb-2 text-gray-800 line-clamp-1">
                    {product.name}
                  </div>

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
        </main>
      </div>
    </div>
  );
}
