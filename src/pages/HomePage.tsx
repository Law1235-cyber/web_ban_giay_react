import Banner from "@/components/tich_hop/Banner";
import SlidingMarqueeDemo from "@/components/tich_hop/sliding-marquee";
import Ourtrendingshoes from "@/components/tich_hop/our_trending_shoes";
import Product from "@/components/tich_hop/product";
import Ourtrendingshoes2 from "@/components/tich_hop/our_trending_shoes2";
import Scrolltringgertichhop from "@/components/tich_hop/3d-scroll-tringger_tich_hop";

const HomePage = () => {
  return (
    <>
      <Banner />
      <SlidingMarqueeDemo />
      <Ourtrendingshoes />
      <Ourtrendingshoes2 />
      <Product />
      <Scrolltringgertichhop />
    </>
  );
};

export default HomePage;