import { cn } from "@/lib/utils";
import categories from "../../public/categories.json";
import { Button, buttonVariants } from "./ui/button";

const PopularCategories = () => {
  return (
    <section className="mt-14 bg-white p-6">
      <div className="flex items-center justify-between">
        <div className="border-b flex flex-col">
          <h6 className="font-semibold pb-4">Explore Popular Categories</h6>
          <span className="bg-primary w-20 h-1"></span>
        </div>
        <Button className={cn(buttonVariants({ variant: "link" }))}>
          View More
        </Button>
      </div>
      <div className="mt-9 grid grid-cols-4 md:grid-cols-7 justify-between gap-4">
        {categories.map((cat) => (
          <div key={cat?._id}>
            <img src={cat?.img} alt="" />
            <p className="text-lg font-semibold text-center">{cat?.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;
