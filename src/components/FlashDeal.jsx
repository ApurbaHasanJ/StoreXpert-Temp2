import { useMemo } from "react";
import products from "../../public/products.json";
import { SectionHeader } from "./shared/SectionHeader";
import ProductCards from "./shared/ProductCards";
const FlashDeal = () => {

    const memoizedProducts = useMemo(() => products.slice(0, 4), []);

    return (
      <section id="flash-deal" className="mt-12 bg-white py-10 px-6 shadow">
        <SectionHeader title="Flash Deal" category={memoizedProducts[0]?.category}/>
        <ProductCards products={memoizedProducts}/>
      </section>
    )
  }
  
  export default FlashDeal
  