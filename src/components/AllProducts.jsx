import { useMemo } from "react";
import products from "../../public/products.json";
import { SectionHeader } from "./shared/SectionHeader";
import ProductCards from "./shared/ProductCards";
export const AllProducts = () => {

    const memoizedProducts = useMemo(() => products.slice(0, 8), []);

    return (
      <section className="mt-12 bg-white py-10 px-6 shadow">
        <SectionHeader title="Products"/>
        <ProductCards products={memoizedProducts}/>
      </section>
  )
}
