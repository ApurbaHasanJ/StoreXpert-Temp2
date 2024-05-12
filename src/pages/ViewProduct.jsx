import { cn } from "@/lib/utils";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import products from "../../public/products.json";
import { addToCart } from "@/redux/slices/cart/cart";
import PageHeader from "@/components/shared/PageHeader";
import { HashLink as Link } from "react-router-hash-link";
import ServiceDesc from "@/components/viewProduct/ServiceDesc";
import ProductDesc from "@/components/viewProduct/ProductDesc";
import ProductViewImg from "@/components/viewProduct/ProductViewImg";
import ProductDetails from "@/components/viewProduct/ProductDetails";
import RelatedProducts from "@/components/viewProduct/RelatedProducts";

const ViewProduct = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState();
  const [viewImg, setViewImg] = useState("");
  const [showAddToCart, setShowAddToCart] = useState(false);

  // setting default view img
  useEffect(() => {
    window.scrollTo({ top: 0 });
    setProduct(products?.find((product) => product._id == param.id));
    setViewImg(product?.images[0]);
  }, [param.id, product?.images]);

  useEffect(() => {
    const handleScroll = () => {
      setShowAddToCart(window.scrollY > 600 ? true : false);
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="bg-white pb-10">
      {/* page route */}
      <PageHeader props="View Product" />

      {/* showing add to cart on top, after scroll */}
      <div
        className={cn(
          " bg-ghost py-3 fixed left-0 right-0 z-10 duration-700",
          showAddToCart ? "top-0" : "-top-96"
        )}
      >
        <div className="container flex items-center justify-between gap-10 md:gap-20">
          <div>
            <h5 className="line-clamp-1 capitalize font-thin">
              {product?.title}
            </h5>
            <Link to="#details" smooth className="text-blue-600 hover:underline underline-offset-2">
              Details
            </Link>
          </div>

          <Button
            onClick={() => dispatch(addToCart(product))}
            size=""
            variant="outline"
            className="flex w-fit justify-center items-center gap-2 md:text-xl "
          >
            <FaCartPlus /> <span>Add to Cart</span>
          </Button>
        </div>
      </div>

      {/* product title */}
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
