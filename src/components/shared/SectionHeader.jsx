import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { Link } from "react-router-dom";

export const SectionHeader = ({ title, category }) => {
  return (
    <div className="border-b flex items-center justify-between">
      <div className="flex flex-col">
        <h6 className="font-semibold pb-4">{title}</h6>
        <span className="bg-primary w-20 h-1"></span>
      </div>
      <Link
        to={`/shop/${category}`}
        className={cn(buttonVariants({ variant: "link" }), "p-0", !category && "hidden")}
      >
        View More
      </Link>
    </div>
  );
};
