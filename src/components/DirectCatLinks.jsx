import { Link } from "react-router-dom";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

const DirectCatLinks = () => {
  return (
    <section className="mt-12 shadow text-white grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="max-md:hidden relative flex items-center justify-center bg-[url('/src/assets/others/men-fashion.jpg')] bg-cover bg-center bg-no-repeat h-[500px]">
        <div className="bg-black/30 absolute left-0 right-0 bottom-0 top-0"></div>
        <div className="z-10 text-center">
          <p className="text-sm">Season Sale!</p>
          <h4 className="my-3">New Arrivals</h4>
          <Link to="/shop/new-arrivals" className={cn(buttonVariants())}>
            Shop Now
          </Link>
        </div>
      </div>

      {/* used cal span 2 here */}
      <div className="relative col-span-2 flex items-center justify-center bg-[url('/src/assets/others/shoes-fashion.jpg')] bg-cover bg-center bg-no-repeat h-[500px]">
        <div className="bg-black/30 z-0 absolute left-0 right-0 bottom-0 top-0"></div>
        <div className="text-center z-10">
          <p className="text-sm">Season Sale!</p>
          <h4 className="my-3">Mesh Shoes MENS</h4>
          <Link
            to="/shop/mens-fashion"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "bg-none text-white border-white"
            )}
          >
            Shop Now
          </Link>
        </div>
      </div>
      <div className="max-md:hidden relative bg-blend-darken flex items-center justify-center bg-[url('/src/assets/others/girls-fashion.jpg')] bg-cover bg-center bg-no-repeat h-[500px]">
        <div className="bg-black opacity-30 z-0 inset-0 absolute left-0 right-0 bottom-0 top-0"></div>
        <div className="text-center z-10">
          <p className="text-sm">Get Up To 20% Off!</p>
          <h4 className="my-3">Girs Fashion</h4>
          <Link to="/shop/girls-fashion" className={cn(buttonVariants())}>
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DirectCatLinks;
