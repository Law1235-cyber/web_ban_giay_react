import { Button } from "@/components/lightswind/button";
import giay1 from "@/assets/Untitled design(110).png";
import giay2 from "@/assets/Untitled design(111).png";
import giay3 from "@/assets/Untitled design(114).png";
import { Link } from "react-router-dom";

const trendingProducts = [
  {
    id: 1,
    name: "Running casual shoes",
    price: "Rs. 2999.00",
    image: giay1,
  },
  {
    id: 2,
    name: "Running casual shoes",
    price: "Rs. 2999.00",
    image: giay2,
  },
  {
    id: 3,
    name: "Running casual shoes",
    price: "Rs. 2999.00",
    image: giay3,
  },
];

export default function Ourtrendingshoes() {
  return (
    <div className="flex w-full flex-row justify-between items-center pl-25 py-10 bg-white ">
      {/* Phần Text bên trái */}
      <div className="w-1/3">
        <div className="font-[Poppins] text-[24px]">---our trending shoes</div>
        <div className="font-[Poppins] text-[45px] text-black font-bold">Most popular<br/> products</div>
        <div className="font-[Poppins] text-[24px]">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,</div>
        <Button className="mt-5">Explore</Button>
      </div>

      {/* Phần Danh sách sản phẩm bên phải */}
      <div className="flex flex-row gap-x-8 w-full justify-center">
        {trendingProducts.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="group block w-[300px] rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg"
          >
            <div className="mb-4 flex h-[220px] items-center justify-center overflow-hidden">
              <img
                className="h-full w-full object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-110"
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-lg font-semibold text-gray-900">
                {product.name}
              </div>
              <div className="flex items-center justify-between">
                <div className="text-lg font-medium text-gray-900">
                  {product.price}
                </div>
                <button className="bg-black text-white p-3 rounded-full transition transform hover:bg-gray-800 group-hover:rotate-45">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}