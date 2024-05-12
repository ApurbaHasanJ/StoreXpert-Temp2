import products from "../../public/products.json";
import { buttonVariants } from "./ui/button";
import { FaCartPlus } from "react-icons/fa6";
import { cn } from "@/lib/utils";
// import { Progress } from "./ui/progress";
import { SectionHeader } from "./shared/SectionHeader";
import { Link } from "react-router-dom";

const HotProduct = () => {
  const product = products[10];

  const date = new Date();

  return (
    <section id="hot-product" className="mt-12 bg-white py-10 px-6 shadow">
      <SectionHeader title="Hot Deal This Week" />
      {/* card content */}
      <div className="mt-9 flex max-md:flex-col-reverse md:items-center justify-between gap-6">
        {/* desc */}
        <div>
          <p className="md:text-3xl sm:text-2xl text-xl">{product?.title}</p>
          {/* price */}
          <div className="flex items-center gap-3 mt-2 mb-4">
            <div className="text-primary flex items-center gap-1 font-semibold md:text-lg">
              ৳
              <p className="text-xl md:text-3xl">
                {product?.disc
                  ? Math.floor(((100 - product?.disc) / 100) * product?.price)
                  : product?.price}
              </p>
            </div>
            <span
              className={`line-through text-lg text-secondary block ${
                product?.disc ? "block" : "hidden"
              }`}
            >
              ৳ {product?.price}
            </span>
          </div>

          {/* <Progress value={product?.inStock} /> */}
          <div className="flex max-md:flex-col md:items-center gap-4 my-4">
            <div className="flex items-start gap-3 text-2xl md:text-4xl font-extralight text-secondary">
              <div className="flex flex-col items-center gap-3">
                <p className="font-semibold">{date.getMonth()}</p>
                <p className="text-xs">DAYS</p>
              </div>
              |
              <div className="flex flex-col items-center gap-3">
                <p className="font-semibold">{date.getHours()}</p>
                <p className="text-xs">HOURS</p>
              </div>
              |
              <div className="flex flex-col items-center gap-3">
                <p className="font-semibold">{date.getMinutes()}</p>
                <p className="text-xs">MINS</p>
              </div>
              |
              <div className="flex flex-col items-center gap-3">
                <p className="font-semibold">{date.getSeconds()}</p>
                <p className="text-xs">SECS</p>
              </div>
            </div>
          </div>
          <p className="text-secondary mb-8">
            Hurry up!! Buy before the offer ends.
          </p>
          <Link
            to={`/view-product/${product?._id}`}
            size="lg"
            className={cn(
              buttonVariants({ size: "lg" }),
              "w-fit flex justify-center items-center gap-2"
            )}
          >
            <FaCartPlus /> <span>Order Now</span>
          </Link>
        </div>
        {/* product img */}
        <div className="max-w-xs aspect-square bg-ghost border relative w-full overflow-hidden rounded-xl">
          <Link to={`/view-product/${product?._id}`}>
            <img
              className="scale-100 hover:scale-105 duration-300"
              src={product?.images[0]}
              alt={product?.title}
            />
          </Link>
          <div className="absolute top-2 left-2 font-medium bg-primary text-ghost text-lg md:text-xl p-2 rounded-full">
            <p>{product?.disc}%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotProduct;
