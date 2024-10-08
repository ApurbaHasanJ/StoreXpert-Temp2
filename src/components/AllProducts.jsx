import { useMemo } from "react";
import products from "../../public/products.json";
import { SectionHeader } from "./shared/SectionHeader";
import ProductCards from "./shared/ProductCards";
export const AllProducts = () => {
  const memoizedProducts = useMemo(() => products.slice(0, 12), []);

  return (
    <section className="section-gap bg-white shadow">
      <SectionHeader title="All Products" category={memoizedProducts[0]?.category}/>
      <ProductCards products={memoizedProducts} />
    </section>
  );
};
