import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../public/products.json";
import ProductViewImg from "@/components/viewProduct/ProductViewImg";
import ProductDetails from "@/components/viewProduct/ProductDetails";
import ProductDesc from "@/components/viewProduct/ProductDesc";
import RelatedProducts from "@/components/viewProduct/RelatedProducts";
import PageHeader from "@/components/shared/PageHeader";
import ServiceDesc from "@/components/viewProduct/ServiceDesc";

const ViewProduct = () => {
  const param = useParams();
  const [product, setProduct] = useState();
  const [viewImg, setViewImg] = useState("");

  // setting default view img
  useEffect(() => {
    window.scrollTo({ top: 0 });
    setProduct(products?.find((product) => product._id == param.id));
    setViewImg(product?.images[0]);
  }, [param.id, product?.images]);

  return (
    <section className="bg-white pb-10">
      <PageHeader props="View Product" />

      <h5 className="container border-b border-secondary/20 py-5 mb-5 capitalize font-thin">
        {product?.title}
      </h5>

      <div className="container">
        {/* about product */}
        <div className="flex max-lg:flex-col items-center max-sm:justify-items-center gap-6 mb-10 md:mb-16">
          {/* product view IMG */}
          <div className="flex max-sm:flex-col max-sm:items-center max-sm:justify-items-center gap-6 w-full">
            <ProductViewImg
              product={product}
              viewImg={viewImg}
              setViewImg={setViewImg}
            />

            {/* productID, price, stock, discount, buttons */}
            <ProductDetails product={product} />
          </div>

          {/* services providing- delivery, customer service, cash on delivery etc */}
          <ServiceDesc />
        </div>

        {/* product details, delivery info, refund policy */}
        <ProductDesc product={product} />

        {/* show related products based on category */}
        <RelatedProducts category={product?.category} />
      </div>
    </section>
  );
};

export default ViewProduct;
