import { Routes, Route, Outlet } from "react-router-dom"; // Import thêm Outlet
import Header from "@/components/tich_hop/Header";
import Footer from "@/components/tich_hop/Footer";
import ProductDetail from "@/pages/ProductDetail";
import HomePage from "@/pages/HomePage";
import ProductPage from "@/pages/ProductPage";
import Register from "@/pages/Register";
import Login from "@/pages/login";
import CartPage from "@/pages/CartPage";
import CheckoutPage from "@/pages/CheckoutPage";
import QRPaymentPage from "@/pages/QRPaymentPage";
import { CartProvider } from "@/context/CartContext";

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
  );
}

export default App;