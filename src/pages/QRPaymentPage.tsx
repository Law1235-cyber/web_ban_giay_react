import { Link } from "react-router-dom";
import { Button } from "@/components/lightswind/button";

export default function QRPaymentPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-10 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-2 text-black">QR Payment</h2>
        <p className="text-gray-500 mb-8">Please scan the code below to complete your order</p>
        
        <div className="bg-white p-4 rounded-2xl mb-8 inline-block border-2 border-black shadow-lg relative group">
            {/* QR Code giả lập từ API */}
            <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=ThanhToanDonHangSlickShoes" 
                alt="QR Code" 
                className="w-56 h-56 mix-blend-multiply"
            />
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
                SCAN ME
            </div>
        </div>

        <div className="text-left bg-gray-50 p-5 rounded-xl mb-8 text-sm space-y-3 border border-gray-200">
            <div className="flex justify-between">
                <span className="text-gray-500">Bank:</span>
                <span className="font-bold text-black">MB Bank</span>
            </div>
            <div className="flex justify-between">
                <span className="text-gray-500">Account Number:</span>
                <span className="font-bold text-black tracking-wider">0123 456 789</span>
            </div>
            <div className="flex justify-between">
                <span className="text-gray-500">Account Holder:</span>
                <span className="font-bold text-black uppercase">NGUYEN VAN A</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-gray-200 mt-2">
                <span className="text-gray-500 font-medium">Amount:</span>
                <span className="font-bold text-lg text-black">₹ 4998.00</span>
            </div>
             <div className="flex justify-between">
                <span className="text-gray-500">Description:</span>
                <span className="font-bold text-blue-600">DH123456</span>
            </div>
        </div>

        <div className="flex gap-3">
            <Link to="/checkout" className="flex-1">
                <button className="w-full py-3 border border-gray-300 rounded-full font-bold text-gray-600 hover:bg-gray-100 transition">Back</button>
            </Link>
            <Link to="/" className="flex-1">
                <Button className="w-full py-3 rounded-full shadow-lg">Paid</Button>
            </Link>
        </div>
      </div>
    </div>
  );
}