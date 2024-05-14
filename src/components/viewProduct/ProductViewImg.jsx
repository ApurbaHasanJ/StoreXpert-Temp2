import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

const ProductViewImg = ({ setViewImg, viewImg, product }) => {
  return (
    <div className="max-w-[430px] md:max-h-[430px] md:h-full h-fit w-full mx-auto">
      {/* display selected img */}
      <div className=" bg-ghost border relative overflow-hidden">
        <img
          className="max-w-[430px] max-h-[430px] h-full w-full aspect-square"
          src={viewImg}
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
      {/* all images for view images */}
      <Carousel>
        <CarouselContent className="flex ml-0 items-center gap-3 mt-2">
          {product?.images.map((img, i) => (
            <CarouselItem
              key={i}
              onClick={() => setViewImg(img)}
              className={cn(
                "border-2 basis-auto border-secondary/20 p-0 w-20 h-20 bg-ghost/60 overflow-hidden",
                viewImg == img ? "border-primary/40" : "border-secondary/20"
              )}
            >
              <Card>
                <CardContent>
                  <img src={img} alt="" />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ProductViewImg;
