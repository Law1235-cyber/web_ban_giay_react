import { Routes, Route, Outlet } from "react-router-dom"; // Import thêm Outlet
import Header from "@/components/tich_hop/Header.jsx";
import Footer from "@/components/tich_hop/Footer.jsx"; // Giả sử file này tồn tại
import ProductDetail from "@/pages/ProductDetail.jsx";
import HomePage from "@/pages/HomePage.jsx"; // Giả sử file này tồn tại
import ProductPage from "@/pages/ProductPage.jsx"; // Giả sử file này tồn tại
import Register from "@/pages/Register.jsx"; // Giả sử file này tồn tại
import Login from "@/pages/login.jsx"; // Giả sử file này tồn tại
import CartPage from "@/pages/CartPage.jsx";
import CheckoutPage from "@/pages/CheckoutPage.jsx"; // Giả sử file này tồn tại
import QRPaymentPage from "@/pages/QRPaymentPage.jsx";
import { AuthProvider } from "@/data/AuthContext.jsx";
import { CartProvider } from "@/data/CartContext.jsx";

import "./index.css";

// Tạo một component Layout ngay trong file này (hoặc tách ra file riêng)
const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <Outlet /> {/* Nơi nội dung con sẽ hiển thị */}
      </div>
      <Footer />
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="relative">
          <Routes>
            {/* Nhóm 1: Các trang CÓ Header và Footer */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/san-pham" element={<ProductPage />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/payment-qr" element={<QRPaymentPage />} />
            </Route>

            {/* Nhóm 2: Các trang KHÔNG có Header và Footer (Nằm độc lập) */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
