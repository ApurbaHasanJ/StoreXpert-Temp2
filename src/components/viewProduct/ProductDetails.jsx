import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addToCart } from "@/redux/features/cart";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "../ui/button";
import { FaCartPlus } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { BsWhatsapp } from "react-icons/bs";
import ServiceDesc from "./ServiceDesc";

const ProductDetails = ({ product }) => {
  //   const dispatch = useDispatch();

  //   // dispatch cart events
  //   const handleAddToCart = (product) => {
  //     dispatch(addToCart(product));
  //   };

  // direct call
  const handleCallClick = () => {
    const phoneNumber = "+8801884167824";
    // Create a tel URL with the phone number
    const telUrl = `tel:${phoneNumber}`;
    // Open the phone app with the provided phone number
    window.location.href = telUrl;
  };

  return (
  
      <div className="w-full h-fit">
        {/* product id */}
        <div className="flex items-center gap-2">
          <p>Product ID:</p>
          <p className="text-secondary">{product?.product_id}</p>
        </div>
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

        {/* order and add to cart btn */}
        <Link
          to="/checkout"
          // onClick={() => handleAddToCart(product)}
          className={cn(
            buttonVariants({ size: "lg" }),
            "w-full text-xl mt-5 py-[10px]"
          )}
        >
          Order Now
        </Link>
        <Button
          // onClick={() => handleAddToCart(product)}
          size="lg"
          variant="outline"
          className="flex mt-4 justify-center items-center gap-2 w-full text-xl py-2"
        >
          <FaCartPlus /> <span>Add to Cart</span>
        </Button>

        {/* contact info- direct call and whatsapp msg */}
        <div
          onClick={handleCallClick}
          className="mt-14 px-7 py-3 text-center border-2 border-secondary/40 border-dashed text-secondary/80"
        >
          <p>এই পণ্য সম্পর্কে জানতে আমাদের কল করুনঃ</p>
          <div className="flex items-center justify-center gap-2 text-3xl">
            <IoCallOutline /> <span>01710-696950</span>
          </div>
        </div>

        {/* whatsapp */}
        <Link
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
        </Link>
      </div>
    
  );
};

export default ProductDetails;
