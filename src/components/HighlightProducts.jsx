import { cn } from "@/lib/utils";
import products from "../../public/products.json";
import { buttonVariants } from "./ui/button";
import { Link } from "react-router-dom";

const HighlightProducts = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <section className="mt-6 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 items-center justify-between">
      {featuredProducts.map((product) => (
        <div
          key={product?._id}
          className="flex items-center justify-between gap-2 bg-white p-5"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <p className="text-primary md:text-lg">
                ৳{" "}
                {product?.disc
                  ? Math.floor(((100 - product?.disc) / 100) * product?.price)
                  : product?.price}
              </p>
              <s
                className={cn(
                  " text-gray-400",
                  product?.disc ? "block" : "hidden"
                )}
              >
                ৳ {product?.price}
              </s>
            </div>
            <p className="text-xl sm:text-2xl md:text-[28px] font-thin">
              Sale Up To <span className="font-medium">10%</span> Off
            </p>
            <Link to={`/view-product/${product?._id}`}
              className={cn(buttonVariants({ variant: "outline" }), "mt-4")}
            >
              BUY NOW
            </Link>
          </div>
          <img
            className="w-24 md:w-28 aspect-square rounded-md"
            src={product?.images[0]}
            alt=""
          />
        </div>
      ))}
    </section>
  );
};

export default HighlightProducts;
