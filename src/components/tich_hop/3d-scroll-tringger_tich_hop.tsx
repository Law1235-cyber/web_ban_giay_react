import { 
    ThreeDScrollTriggerContainer, 
    ThreeDScrollTriggerRow 
  } from '../lightswind/3d-scroll-trigger';

  const testimonials = [
    {
      name: "Maya Chen",
      role: "Fashion Blogger",
      avatar: "https://i.pravatar.cc/150?u=maya", 
      content: "Super comfortable, perfect for walking all day.", // 7 từ
    },
    {
      name: "Liam Patel",
      role: "Personal Trainer",
      avatar: "https://i.pravatar.cc/150?u=liam",
      content: "Stylish design and perfect fit for gym.", // 7 từ
    },
    {
      name: "Zoe Williams",
      role: "Graphic Designer",
      avatar: "https://i.pravatar.cc/150?u=zoe",
      content: "Amazing quality, feels premium and durable.", // 6 từ
    },
    {
      name: "Aria Thompson",
      role: "Office Manager",
      avatar: "https://i.pravatar.cc/150?u=aria",
      content: "Fast delivery and excellent customer support.", // 6 từ
    },
    {
      name: "Ethan Rivera",
      role: "Software Engineer",
      avatar: "https://i.pravatar.cc/150?u=ethan",
      content: "Hands down the best shoes I own.", // 7 từ
    },
  ];
export default function Scrolltringgertichhop() {
    const TestimonialCard = ({ data }) => {
        return (
          <div className="w-[350px] md:w-[400px] bg-slate-50 rounded-3xl p-6 md:p-8 mx-4 border border-slate-100 shrink-0 flex flex-col justify-between h-full select-none cursor-grab active:cursor-grabbing hover:bg-white hover:shadow-lg transition-all duration-300">
            {/* Header: Avatar + Tên */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={data.avatar}
                alt={data.name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-sm"
              />
              <div className="flex flex-col">
                <h3 className="font-bold text-gray-900 text-lg leading-tight">
                  {data.name}
                </h3>
                <span className="text-sm text-gray-500 font-medium">
                  {data.role}
                </span>
              </div>
            </div>
      
            {/* Nội dung text */}
            <p className="text-gray-600 leading-relaxed text-[15px]">
              {data.content}
            </p>
          </div>
        );
      };
  return (
    <section className="py-20 bg-white overflow-hidden">
        <div className="text-4xl font-bold text-black mb-8 w-full max-w-7xl mx-auto flex justify-center items-center pb-10 px-4">--Customer Review--</div>
      <ThreeDScrollTriggerContainer>
        
        {/* --- HÀNG 1: Chạy sang TRÁI (direction = 1) --- */}
        <div className="mb-6">
          <ThreeDScrollTriggerRow baseVelocity={1.5} direction={1}>
            {testimonials.map((t, i) => <TestimonialCard key={`r1-${i}`} data={t} />)}
            {testimonials.map((t, i) => <TestimonialCard key={`r1-d-${i}`} data={t} />)}
          </ThreeDScrollTriggerRow>
        </div>

        {/* --- HÀNG 2: Chạy sang PHẢI (direction = -1) --- */}
        {/* Đây là chỗ tạo hiệu ứng ngược chiều */}
        <div className="mb-6">
          <ThreeDScrollTriggerRow baseVelocity={1.5} direction={-1}>
            {/* Đảo ngược mảng data một chút để nhìn khác hàng trên */}
            {[...testimonials].reverse().map((t, i) => <TestimonialCard key={`r2-${i}`} data={t} />)}
            {[...testimonials].reverse().map((t, i) => <TestimonialCard key={`r2-d-${i}`} data={t} />)}
          </ThreeDScrollTriggerRow>
        </div>

        {/* --- HÀNG 3: Chạy sang TRÁI (direction = 1) --- */}
        <div>
          <ThreeDScrollTriggerRow baseVelocity={1.5} direction={1}>
            {testimonials.slice(1).concat(testimonials.slice(0, 1)).map((t, i) => <TestimonialCard key={`r3-${i}`} data={t} />)}
            {testimonials.slice(1).concat(testimonials.slice(0, 1)).map((t, i) => <TestimonialCard key={`r3-d-${i}`} data={t} />)}
          </ThreeDScrollTriggerRow>
        </div>

      </ThreeDScrollTriggerContainer>
    </section>
  )
}
