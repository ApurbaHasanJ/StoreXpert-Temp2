import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "../ui/button";

export const SectionHeader = ({ title }) => {
  return (
    <div className="border-b flex items-center justify-between">
      <div className="flex flex-col">
        <h6 className="font-semibold pb-4">{title}</h6>
        <span className="bg-primary w-20 h-1"></span>
      </div>
      <Button className={cn(buttonVariants({ variant: "link" }), "p-0")}>
        View More
      </Button>
    </div>
  );
};
