import products from "../../../public/products.json";
import { useEffect, useMemo, useState } from "react";
import { Button } from "../ui/button";
import ProductCards from "../shared/ProductCards";
import { SectionHeader } from "../shared/SectionHeader";

const RelatedProducts = ({ category }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const filteredProduct = products.filter(
      (product) => product?.category == category
    );
    setRelatedProducts(filteredProduct);
  }, [category]);

  // Memoize the sliced array of products based on the showAll state
  const displayedProducts = useMemo(() => {
    return showAll ? relatedProducts : relatedProducts.slice(0, 4);
  }, [relatedProducts, showAll]);

  return (
    <section className="mt-12 bg-ghost/30 my-10 py-10 px-6 shadow">
      <SectionHeader title="Related Products" />

      {/* <Button
          disabled={products.length == 5 || showAll}
          onClick={() => setShowAll(!showAll)}
          variant="outline"
          size="sm"
          className="">
          View All
        </Button> */}

      <ProductCards products={displayedProducts} />
    </section>
  );
};

export default RelatedProducts;
