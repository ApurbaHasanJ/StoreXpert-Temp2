import { useMemo } from "react";
import products from "../../public/products.json";
import { SectionHeader } from "./shared/SectionHeader";
import ProductCards from "./shared/ProductCards";
const FeaturedProducts = () => {
 
  const memoizedProducts = useMemo(() => products.slice(0, 8), []);

  return (
    <section className="section-gap bg-white shadow">
      <SectionHeader title="Featured Products" category={memoizedProducts[1]?.category}/>
      <ProductCards products={memoizedProducts}/>
    </section>
  );
};

export default FeaturedProducts;
