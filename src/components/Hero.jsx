import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AllDepartments from "./AllDepartments";
import Autoplay from "embla-carousel-autoplay";
import hero1 from "/src/assets/hero/hero1.jpg";
import hero2 from "/src/assets/hero/hero2.jpg";
import hero3 from "/src/assets/hero/hero3.jpg";
import BestSellingProduct from "./BestSellingProduct";

const heros = [
  {
    _id: 1,
    img: hero1,
  },
  {
    _id: 2,
    img: hero2,
  },
  {
    _id: 3,
    img: hero3,
  },
];

const Hero = () => {
  return (
    <div className="lg:h-[530px] overflow-hidden flex gap-5 pt-2 md:pt-5">
      <div className="max-lg:hidden ">
        <AllDepartments />
      </div>

      <Carousel
        className="w-full h-full"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {heros.map((hero) => (
            <CarouselItem key={hero?._id}>
              <Card>
                <CardContent className="flex items-center justify-center">
                  <img
                    className="w-full lg:h-[550px] object-cover"
                    src={hero?.img}
                    alt=""
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="max-lg:hidden">
      <BestSellingProduct />
      </div>
    </div>
  );
};

export default Hero;
