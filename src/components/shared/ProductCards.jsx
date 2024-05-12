// import { FaCartPlus } from "react-icons/fa6";
// import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, buttonVariants } from "../ui/button";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cart/cart";

const ProductCards = ({ products }) => {
  const [hoverProduct, setHoverProduct] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="mt-9 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 gap-y-8">
      {products?.map((product) => (
        <div
          key={product?._id}
          onMouseEnter={() => setHoverProduct(product?._id)}
          onMouseLeave={() => setHoverProduct(null)}
          className="flex flex-col justify-between border"
        >
          <div className="overflow-hidden bg-ghost relative">
            <Link to={`/view-product/${product?._id}`}>
              <img
                className=" h-full w-full aspect-square"
                src={product?.images[0]}
                alt={product?.title}
              />
            </Link>
            {/* show disccount */}
            <div
              className={cn(
                "bg-primary text-ghost text-xs absolute top-1 left-1 w-8 h-8 rounded-full",
                product?.disc ? "block" : "hidden"
              )}
            >
              <p className="p-2 px-1">{product?.disc}&#37;</p>
            </div>

            {/* show view and cart button */}
            <div
              className={cn(
                "w-full absolute left-0 duration-500 bg-gray-300",
                hoverProduct === product?._id ? "bottom-0" : "-bottom-32"
              )}
            >
              <div className="py-2 h-fit place-content-baseline flex items-center justify-center gap-3 backdrop-blur">
                <Link
                  to={`/view-product/${product?._id}`}
                  className={cn(
                    buttonVariants({ size: "icon", variant: "icon" })
                  )}
                >
                  <MdOutlineRemoveRedEye />
                </Link>
                <Button
                  size="icon"
                  variant="icon"
                  onClick={() => dispatch(addToCart(product))}
                >
                  <BsCartPlus />
                </Button>
              </div>
            </div>
          </div>

          <Link
            to={`/view-product/${product?._id}`}
            className="text-sm md:text-base font-thin mt-3 mx-2 text-center capitalize line-clamp-1 text-black hover:text-primary duration-500"
          >
            {product?.title}
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
