import products from "../../public/products.json";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
const BestSellingProduct = () => {
  return (
    <div className="bg-white">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        orientation="vertical"
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-72 relative"
      >
        <div className="bg-primary/5 p-4 flex items-center justify-between">
          <p className=" text-primary">BEST SELLING</p>
          <div className="mr-7 flex items-center place-content-center gap-2 justify-center relative">
            <CarouselNext className="rounded-none" />
            <CarouselPrevious className="rounded-none" />
          </div>
        </div>
        <CarouselContent className="p-2 my-1 h-[468px]">
          {products.map((product) => (
            <CarouselItem key={product?._id} className="basis-1/4">
              <Link to={`/view-product/${product?._id}`}>
                <Card>
                  <CardContent className="flex items-center gap-2">
                    <img
                      className="w-[90px] aspect-square object-cover rounded-lg"
                      src={product?.images[0]}
                      alt=""
                    />
                    <div>
                      <p className="line-clamp-2 capitalize text-sm">{product?.title}</p>
                      <div className="flex items-center gap-3 mb-3">
                        <p className="text-primary md:text-lg">
                          ৳{" "}
                          {product?.disc
                            ? Math.floor(
                                ((100 - product?.disc) / 100) * product?.price
                              )
                            : product?.price}
                        </p>
                        <s
                          className={cn(
                            " text-secondary block",
                            product?.disc ? "block" : "hidden"
                          )}
                        >
                          ৳ {product?.price}
                        </s>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default BestSellingProduct;
