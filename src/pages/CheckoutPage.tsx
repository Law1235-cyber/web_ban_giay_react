import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/lightswind/button";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("cod"); // 'cod' hoặc 'qr'

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (paymentMethod === "qr") {
      navigate("/payment-qr");
    } else {
      alert("Order placed successfully! (COD)");
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h1 className="text-3xl font-bold mb-8 text-black">Checkout</h1>
        
        <form onSubmit={handleOrder} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Cột trái: Thông tin giao hàng */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-gray-900">Shipping Information</h2>
            <div className="space-y-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
                <input required type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none transition" placeholder="Nguyễn Văn A" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Phone Number</label>
                <input required type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none transition" placeholder="0901234567" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Shipping Address</label>
                <input required type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none transition" placeholder="Số 123, Đường ABC, Quận X" />
              </div>
               <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Note (Optional)</label>
                <textarea className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none transition" rows={3} placeholder="Ex: Deliver during office hours..." />
              </div>
            </div>
          </div>

          {/* Cột phải: Phương thức thanh toán & Tổng kết */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-gray-900">Payment Method</h2>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-6 space-y-3">
              
              <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-black bg-gray-50 ring-1 ring-black' : 'border-gray-200 hover:border-gray-300'}`}>
                <input type="radio" name="payment" value="cod" checked={paymentMethod === "cod"} onChange={() => setPaymentMethod("cod")} className="mr-3 w-5 h-5 accent-black" />
                <span className="font-bold text-gray-800">Cash on Delivery (COD)</span>
              </label>

              <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${paymentMethod === 'qr' ? 'border-black bg-gray-50 ring-1 ring-black' : 'border-gray-200 hover:border-gray-300'}`}>
                <input type="radio" name="payment" value="qr" checked={paymentMethod === "qr"} onChange={() => setPaymentMethod("qr")} className="mr-3 w-5 h-5 accent-black" />
                <div className="flex flex-col">
                    <span className="font-bold text-gray-800">Bank Transfer (QR Code)</span>
                    <span className="text-xs text-gray-500">Scan QR code for quick payment</span>
                </div>
              </label>

            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
               <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-100">
                <span className="text-gray-600">Total Payment</span>
                <span className="font-bold text-2xl text-black">₹ 4998.00</span>
              </div>
              <Button type="submit" className="w-full rounded-full py-6 text-base shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                {paymentMethod === 'qr' ? 'Proceed to Payment' : 'Place Order'}
              </Button>
              <p className="text-center text-xs text-gray-400 mt-4">
                By placing an order, you agree to our terms of service.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}