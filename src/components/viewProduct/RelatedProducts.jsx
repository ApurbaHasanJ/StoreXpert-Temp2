import products from "../../../public/products.json";
import { useEffect, useState } from "react";
import ProductCards from "../shared/ProductCards";
import { SectionHeader } from "../shared/SectionHeader";

const RelatedProducts = ({ category }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  // const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const filteredProduct = products.filter(
      (product) => product?.category == category
    );
    setRelatedProducts(filteredProduct);
  }, [category]);

  // Memoize the sliced array of products based on the showAll state
  const displayedProducts = relatedProducts.slice(0, 4);

  return (
    <section className="section-gap bg-ghost/30 shadow">
      <SectionHeader title="Related Products" category={displayedProducts[0]?.category}/>

      {/* <Button
          disabled={products.length == 5 || showAll}
          onClick={() => setShowAll(!showAll)}
          variant="outline"
          size="sm"
          className="">
          View All
        </Button> */}

      <ProductCards products={displayedProducts}/>
    </section>
  );
};

export default RelatedProducts;
