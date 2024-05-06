// import { FaCartPlus } from "react-icons/fa6";
// import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const ProductCards = ({ products }) => {
  return (
    <div className="mt-9 grid lg:grid-cols- md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-5 gap-3 gap-y-8">
      {products?.map((product) => (
        <div key={product?._id} className="flex flex-col justify-between border">
          <Link to={`/products/${product?._id}`}>
            <div className="overflow-hidden bg-ghost relative">
              <img
                className=" h-full w-full scale-100 hover:scale-105 duration-300 aspect-square"
                src={product?.images[0]}
                alt={product?.title}
              />
              <div
                className={cn(
                  "bg-primary text-ghost text-xs absolute top-1 left-1 w-8 h-8 rounded-full",
                  product?.disc ? "block" : "hidden"
                )}
              >
                <p className="p-2 px-1">{product?.disc}&#37;</p>
              </div>
            </div>

            <p className="text-sm md:text-base font-thin mt-3 mx-2 text-center capitalize line-clamp-1 text-black hover:text-primary duration-500">
              {product?.title}
            </p>
          </Link>

          <div className="">
            <div className="mt-3 font-thin flex items-center justify-center gap-3 mb-3">
              <s
                className={cn(
                  " text-gray-400 block",
                  product?.disc ? "block" : "hidden"
                )}
              >
                ৳ {product?.price}
              </s>
              {/* current price */}
              <p className="text-lg">
                <span className="text-base ">৳</span>{" "}
                {product?.disc
                  ? Math.floor(((100 - product?.disc) / 100) * product?.price)
                  : product?.price}
              </p>
            </div>
            {/* 
            <Link
              to="/checkout"
            //   onClick={() => handleAddToCart(product)}
              className={cn(
                buttonVariants({ size: "lg" }),
                "flex justify-center items-center gap-2 w-full"
              )}
            >
              <FaCartPlus /> <span>Order Now</span>
            </Link> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
