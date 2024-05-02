import products from "../../public/products.json";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
const BestSellingProduct = () => {
  return (
    <div className="bg-white">
      <Carousel
        className="max-w-72 w-full"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}>
        <div className="bg-primary/30">
          <p className=" text-primary">BEST SELLING</p>
        </div>
        <CarouselContent>
          {products.map((hero) => (
            <CarouselItem key={hero?._id}>
              <Card>
                <CardContent className="flex items-center justify-center">
                  <img
                    className="w-full h-auto object-cover rounded-lg"
                    src={hero?.img}
                    alt=""
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default BestSellingProduct;
