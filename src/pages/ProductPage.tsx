import Product_link from "@/components/tich_hop/product_link";


const ProductPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-gray-50"> 
      {/* pt-24 để nội dung không bị Header che mất */}
      <Product_link />
    </div>
  );
};

export default ProductPage;