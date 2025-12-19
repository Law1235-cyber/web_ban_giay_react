import { Link } from "react-router-dom";
import { Button } from "@/components/lightswind/button";
import { useCart } from "@/data/CartContext.jsx";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();
  const shipping = 0; // Freeship
  const total = cartTotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h1 className="text-3xl font-bold mb-8 text-black">Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
            <p className="text-gray-500 mb-4">Your cart is empty</p>
            <Link
              to="/san-pham"
              className="text-black font-bold hover:underline"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Danh sách sản phẩm */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item, index) => (
                <div
                  key={`${item.id}-${item.selectedSize}-${index}`}
                  className="bg-white p-4 rounded-2xl shadow-sm flex gap-4 items-center border border-gray-100"
                >
                  <div className="w-24 h-24 bg-gray-100 rounded-xl flex-shrink-0 overflow-hidden border border-gray-200">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain mix-blend-multiply"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Size: {item.selectedSize}
                    </p>
                    <div className="font-bold mt-1 text-black">
                      ₹ {item.price}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-3">
                    <div className="flex items-center border border-gray-300 rounded-full h-8">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.selectedSize, -1)
                        }
                        className="w-8 h-full flex items-center justify-center hover:bg-gray-100 rounded-l-full"
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-sm font-bold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.selectedSize, 1)
                        }
                        className="w-8 h-full flex items-center justify-center hover:bg-gray-100 rounded-r-full"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id, item.selectedSize)}
                      className="text-gray-400 hover:text-red-500 text-sm transition"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Tóm tắt đơn hàng */}
            <div className="bg-white p-6 rounded-2xl shadow-sm h-fit border border-gray-100 sticky top-24">
              <h3 className="text-xl font-bold mb-6 text-black">
                Order Summary
              </h3>
              <div className="space-y-3 mb-6 text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium">
                    ₹ {cartTotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? "Free" : `₹ ${shipping}`}
                  </span>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4 mb-6 flex justify-between items-end">
                <span className="font-bold text-lg text-black">Total</span>
                <span className="font-bold text-2xl text-black">
                  ₹ {total.toLocaleString()}
                </span>
              </div>
              <Link to="/checkout">
                <Button className="w-full rounded-full py-6 text-base shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                  Proceed to Checkout
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
