import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/lightswind/button"; // Tận dụng button cũ của bạn
import { useCart } from "@/data/CartContext.jsx";
import { productService } from "@/data/productService";

export default function ProductDetail() {
  const { id } = useParams(); // Lấy ID từ URL (ví dụ: /product/1)
  const { addToCart } = useCart();

  // State cho sản phẩm và loading
  const [product, setProduct] = useState(null);

  // --- STATES ---
  // 1. Ảnh đang hiển thị
  const [mainImage, setMainImage] = useState(product?.image);
  // 2. Size đang chọn
  const [selectedSize, setSelectedSize] = useState(null);
  // 3. Số lượng
  const [quantity, setQuantity] = useState(1);
  // 4. Tab đang chọn (Mô tả / Đánh giá)
  const [activeTab, setActiveTab] = useState("desc");

  // Fetch dữ liệu khi ID thay đổi
  useEffect(() => {
    window.scrollTo(0, 0);
    setProduct(null); // Reset product khi id thay đổi
    productService
      .getById(id)
      .then((prod) => {
        setProduct(prod);
        setMainImage(prod.image);
      })
      .catch((err) => {
        console.error(err);
        // Có thể set state lỗi để hiển thị trang 404
      });
  }, [id, product]);

  if (!product)
    return <div className="pt-32 text-center">Loading product...</div>;

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size!");
      return;
    }
    addToCart(product, selectedSize, quantity);
    alert("Added to cart!");
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* BREADCRUMB (Đường dẫn) */}
        <div className="text-sm text-gray-500 mb-8 flex items-center gap-2">
          <Link to="/" className="hover:text-black">
            Home
          </Link>{" "}
          /
          <Link to="/san-pham" className="hover:text-black">
            Products
          </Link>{" "}
          /<span className="text-black font-medium">{product.name}</span>
        </div>

        {/* --- MAIN CONTENT (Chia 2 cột) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* CỘT TRÁI: ẢNH SẢN PHẨM */}
          <div className="flex flex-col gap-4">
            {/* Ảnh lớn */}
            <div className="w-full aspect-square bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center border border-gray-200 relative group">
              <img
                src={mainImage}
                alt="Main"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-xs font-bold rounded">
                -40%
              </div>
            </div>
            {/* List ảnh nhỏ */}
            <div className="grid grid-cols-6 gap-4">
              {product.images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setMainImage(img)}
                  className={`aspect-square bg-gray-50 rounded-xl cursor-pointer border-2 flex items-center justify-center overflow-hidden
                                ${
                                  mainImage === img
                                    ? "border-black"
                                    : "border-transparent hover:border-gray-300"
                                }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* CỘT PHẢI: THÔNG TIN */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-yellow-400 text-sm">★★★★★</div>
              <span className="text-gray-500 text-sm">
                ({product.reviews || 0} reviews)
              </span>
            </div>

            {/* Giá */}
            <div className="flex items-end gap-4 mb-6">
              <span className="text-3xl font-bold text-black">
                ₹ {product.price}
              </span>
              {product.oldPrice && (
                <span className="text-xl text-gray-400 line-through mb-1">
                  ₹ {product.oldPrice}
                </span>
              )}
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Chọn Size */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="font-bold text-gray-900">Select Size</span>
                <span className="text-sm text-gray-500 underline cursor-pointer">
                  Size Guide
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-lg border font-medium transition
                                    ${
                                      selectedSize === size
                                        ? "bg-black text-white border-black shadow-lg transform scale-105"
                                        : "bg-white text-gray-700 border-gray-200 hover:border-black"
                                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Chọn Số lượng & Nút Mua */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {/* Bộ tăng giảm số lượng */}
              <div className="flex items-center border border-gray-300 rounded-full w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center hover:bg-gray-100 rounded-l-full"
                >
                  -
                </button>
                <span className="w-12 text-center font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center hover:bg-gray-100 rounded-r-full"
                >
                  +
                </button>
              </div>

              {/* Nút thêm vào giỏ */}
              <Button
                onClick={handleAddToCart}
                className="flex-1 rounded-full h-12 text-base shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                Add to Cart
              </Button>

              {/* Nút yêu thích */}
              <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-red-50 hover:text-red-500 hover:border-red-500 transition">
                ♥
              </button>
            </div>

            {/* Cam kết */}
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 border-t pt-6">
              <div className="flex items-center gap-2">
                🚚 Free shipping on orders over ₹500
              </div>
              <div className="flex items-center gap-2">🔄 30 Days Return</div>
              <div className="flex items-center gap-2">🛡️ Genuine Warranty</div>
              <div className="flex items-center gap-2">💳 Cash on Delivery</div>
            </div>
          </div>
        </div>

        {/* --- LOWER SECTION: TABS CHI TIẾT --- */}
        <div className="mb-16">
          <div className="flex border-b border-gray-200 mb-8">
            <button
              onClick={() => setActiveTab("desc")}
              className={`pb-4 px-6 font-bold text-lg border-b-2 transition ${
                activeTab === "desc"
                  ? "border-black text-black"
                  : "border-transparent text-gray-400 hover:text-gray-600"
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`pb-4 px-6 font-bold text-lg border-b-2 transition ${
                activeTab === "reviews"
                  ? "border-black text-black"
                  : "border-transparent text-gray-400 hover:text-gray-600"
              }`}
            >
              Reviews (124)
            </button>
          </div>

          <div className="prose max-w-none text-gray-600">
            {activeTab === "desc" ? (
              <div>
                <p>
                  This is a detailed description of the product. You can add
                  information about materials, technology, care instructions...
                </p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                  <li>Upper Material: Premium Synthetic Leather + Mesh</li>
                  <li>Sole: Monolithic molded rubber, anti-slip</li>
                  <li>Insole: Soft Memory Foam</li>
                  <li>Origin: Vietnam</li>
                </ul>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Demo 1 comment */}
                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="flex justify-between mb-2">
                    <span className="font-bold">Nguyễn Văn A</span>
                    <span className="text-yellow-500">★★★★★</span>
                  </div>
                  <p className="text-sm">
                    Nice shoes, comfortable, fast delivery. Worth the money!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
