import Autoplay from "embla-carousel-autoplay";
import categories from "../../public/categories.json";
import { SectionHeader } from "./shared/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const PopularCategories = () => {
  return (
    <section className="mt-12 bg-white py-10 px-6">
      <SectionHeader title="Explore Popular Categories" />
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
        <CarouselContent className="mt-9">
          {categories.map((cat) => (
            <CarouselItem
              key={cat?._id}
              className="max-md:basis-1/4 md:basis-1/6"
            >
              <Card>
                <CardContent className="flex flex-col items-center justify-center">
                  <img src={cat?.img} alt={cat?.title} />
                  <p className="text-xs md:text-lg font-medium md:font-semibold text-center mt-2">
                    {cat?.title}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default PopularCategories;
