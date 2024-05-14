import PageHeader from "@/components/shared/PageHeader";
import products from "../../public/products.json";
import notFound from "../assets/others/not-found.svg";
import { useParams } from "react-router-dom";
import ProductCards from "@/components/shared/ProductCards";
import { useEffect } from "react";
export const Shop = () => {
  const params = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const filteredProducts =
    params?.id === "new-arrivals"
      ? products
      : products.filter((product) => product?.category === params?.id);

  return (
    <section className="container">
      <PageHeader props={`shop / ${params?.id}`} />

      <div className="bg-white pb-10 px-6">
        {!filteredProducts.length ? (
          <>
            <h6 className="font-thin py-3 text-primary text-right">
              Sorry, No Products Found
            </h6>
            <img
              className="max-w-[800px] w-full h-full mx-auto my-16"
              src={notFound}
              alt=""
            />
          </>
        ) : (
          <>
            <div className="font-thin pt-5 text-secondary text-right flex items-center justify-between capitalize">
              <h6>{params?.id}</h6>
              <h6>{filteredProducts?.length} Products Found</h6>
            </div>
            <ProductCards products={filteredProducts} />
          </>
        )}
      </div>
    </section>
  );
};
