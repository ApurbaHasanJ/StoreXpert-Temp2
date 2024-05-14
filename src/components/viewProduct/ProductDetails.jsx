import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cn } from "@/lib/utils";
import { addToCart } from "@/redux/slices/cart/cart";
import { Button, buttonVariants } from "../ui/button";
import { FaCartPlus } from "react-icons/fa6";
// import { IoCallOutline } from "react-icons/io5";
// import { BsWhatsapp } from "react-icons/bs";
import { ProductShortDesc } from "./ProductShortDesc";
import freeDeliveryImg from "../../assets/others/free-delivery.png";
import { useState } from "react";

// sizes here for now...
const sizes = ["M", "L", "XL", "2xl", "3xl"];

// colors here for now...
const colors = ["red", "green", "yellow", "blue"];

const ProductDetails = ({ product }) => {
  const dispatch = useDispatch();
  const [selectedColor, setColor] = useState("");
  const [selectedSize, setSize] = useState("");

  //   // dispatch cart events
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  // direct call
  // const handleCallClick = () => {
  //   const phoneNumber = "+8801884167824";
  //   // Create a tel URL with the phone number
  //   const telUrl = `tel:${phoneNumber}`;
  //   // Open the phone app with the provided phone number
  //   window.location.href = telUrl;
  // };

  return (
    <div className="w-full h-fit">
      {/* product id */}
      <div className="flex items-center gap-2">
        <p>Product ID:</p>
        <p className="text-secondary">{product?.product_id}</p>
      </div>
      <div className="flex items-center justify-between gap-3">
        {/* stock and price */}
        <div>
          {/* price */}
          <div className="my-3 font-thin flex items-center gap-3">
            {/* current price */}
            <p className="text-lg md:text-2xl font-medium text-primary">
              <span>৳</span>{" "}
              {product?.disc
                ? Math.floor(((100 - product?.disc) / 100) * product?.price)
                : product?.price}
            </p>
            <s
              className={cn(
                " text-gray-400 block",
                product?.disc ? "block" : "hidden"
              )}
            >
              ৳ {product?.price}
            </s>
          </div>
          {/* stock availability */}
          <p
            className={cn(
              "text-lg font-medium uppercase",
              product?.inStock ? "text-lime-600" : "text-red-500"
            )}
          >
            {product?.inStock ? "In Stock" : "Sold Out"}
          </p>
        </div>

        <img src={freeDeliveryImg} className="h-6" alt="" />
      </div>

      {/* select color */}
      <div className={cn("mt-3", !colors && "hidden")}>
        <p className="mb-1">Select Color:</p>
        <div className="flex items-center gap-2">
          {colors?.map((color, i) => (
            <div
              key={i}
              className={cn(
                "pb-1 h-5 md:h-7 duration-300",
                selectedColor === color && "border-b md:border-b-2 border-secondary"
              )}
            >
              <div
                style={{ backgroundColor: color }}
                onClick={() => setColor(color)}
                className="w-4 h-4 md:w-6 md:h-6 border rounded-full hover:drop-shadow-xl"
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* select size */}
      <div className={cn("mt-3", !sizes && "hidden")}>
        <p className="mb-1">Select Size:</p>
        <div className="flex items-center gap-2">
          {sizes?.map((size, i) => (
            <p
              key={i}
              onClick={() => setSize(size)}
              className={cn(
                "w-10 md:w-14 max-sm:text-xs aspect-video text-center place-content-center border border-secondary text-secondary hover:shadow-xl duration-300",
                selectedSize === size && "bg-secondary text-white"
              )}
            >
              {size}
            </p>
          ))}
        </div>
      </div>

      {/* order and add to cart btn */}
      <div className="flex items-center gap-2 mt-5 ">
        <Link
          to="/checkout"
          onClick={() => handleAddToCart(product)}
          className={cn(buttonVariants({ size: "md" }), "w-full text-xl")}
        >
          Order Now
        </Link>
        <Button
          onClick={() => handleAddToCart(product)}
          size="md"
          variant="outline"
          className="flex justify-center items-center gap-2 w-full text-xl"
        >
          <FaCartPlus /> <span>Add to Cart</span>
        </Button>
      </div>

      {/* product short description */}
      <ProductShortDesc desc={product?.short_desc} />

      {/* contact info- direct call and whatsapp msg */}
      {/* <div
        onClick={handleCallClick}
        className="mt-14 px-7 py-3 text-center border-2 border-secondary/40 border-dashed text-secondary/80"
      >
        <p>পণ্য সম্পর্কে জানতে আমাদের কল করুনঃ</p>
        <div className="flex items-center justify-center gap-2 text-3xl">
          <IoCallOutline /> <span>01710-696950</span>
        </div>
      </div> */}
      {/* whatsapp */}
      {/* <Link
        to="https://wa.me/+8801884167824?text=Hello! I Need Advice and Assistance."
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="mt-5 px-7 py-3 text-center border-2 border-secondary/40 border-dashed text-secondary/80">
          <p>WhatsApp করুনঃ</p>
          <div className="flex items-center justify-center gap-2 text-3xl">
            <BsWhatsapp /> <span>01710-696950</span>
          </div>
        </div>
      </Link> */}
    </div>
  );
};

export default ProductDetails;
