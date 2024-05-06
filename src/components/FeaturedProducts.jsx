import { cn } from "@/lib/utils";
import products from "../../public/products.json";
import { Button, buttonVariants } from "./ui/button";

const featuredProducts = products.slice(0, 3);
const FeaturedProducts = () => {
  return (
    <section className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-6 justify-between">
      {featuredProducts.map((product) => (
        <div
          key={product?._id}
          className="flex items-center justify-between gap-3 bg-white p-5"
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
            <p className="text-xl sm:text-2xl md:text-3xl font-thin">
              Sale Up To <br className="max-lg:hidden"/><span className="font-medium">10%</span>{" "}Off
            </p>
            <Button
              className={cn(buttonVariants({ variant: "outline" }), "mt-4")}
            >
              BUY NOW
            </Button>
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

export default FeaturedProducts;
