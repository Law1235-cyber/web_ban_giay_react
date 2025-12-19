import { SlidingLogoMarquee } from "../lightswind/sliding-logo-marquee"; // Giả sử file này tồn tại dưới dạng .jsx

import shopping from "../../assets/shopping.png";

// 1. Tạo danh sách logo gốc
const originalLogos = [
  {
    id: "1",
    // TĂNG KÍCH THƯỚC: Đổi h-10 thành h-24 (khoảng 96px) hoặc h-32 (128px)
    // mx-8: Thêm khoảng cách chiều ngang giữa các logo để thoáng hơn
    content: (
      <img
        src={shopping}
        alt="Amazon"
        className="h-34 w-auto object-contain mx-8 "
      />
    ),
  },
  {
    id: "2",
    content: (
      <img
        src={shopping}
        alt="Amazon"
        className="h-34 w-auto object-contain mx-8"
      />
    ),
  },
  {
    id: "3",
    content: (
      <img
        src={shopping}
        alt="Amazon"
        className="h-34 w-auto object-contain mx-8"
      />
    ),
  },
  {
    id: "4",
    content: (
      <img
        src={shopping}
        alt="Amazon"
        className="h-34 w-auto object-contain mx-8"
      />
    ),
  },
  {
    id: "5",
    content: (
      <img
        src={shopping}
        alt="Amazon"
        className="h-34 w-auto object-contain mx-8"
      />
    ),
  },
  {
    id: "6",
    content: (
      <img
        src={shopping}
        alt="Amazon"
        className="h-34 w-auto object-contain mx-8"
      />
    ),
  },
  {
    id: "7",
    content: (
      <img
        src={shopping}
        alt="Amazon"
        className="h-34 w-auto object-contain mx-8"
      />
    ),
  },
];

// 2. NHÂN BẢN LOGO: Lặp lại danh sách gốc 5 lần để đảm bảo nó dài hơn chiều rộng màn hình
// Điều này giúp hiệu ứng chạy liên tục từ góc này sang góc kia
const logos = [
  ...originalLogos,
  ...originalLogos,
  ...originalLogos,
  ...originalLogos,
  ...originalLogos,
].map((item, index) => ({
  ...item,
  id: `item-${index}`, // Tạo id mới để không bị trùng lặp key
}));

export default function SlidingMarqueeDemo() {
  return (
    // w-full: Đảm bảo khung bao phủ toàn bộ chiều ngang
    <div className="bg-black py-8 w-full overflow-hidden">
      <SlidingLogoMarquee
        items={logos}
        speed={40}
        height="150px" // Tăng chiều cao container chứa (lớn hơn chiều cao ảnh h-24)
        enableBlur={false} // Tắt mờ
        pauseOnHover={true}
        showGridBackground={false}
        className="w-full"
        onItemClick={(item) => console.log("Clicked:", item.id)}
      />
    </div>
  );
}
