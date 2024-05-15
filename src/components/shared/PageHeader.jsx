import { cn } from "@/lib/utils";

const PageHeader = ({ props }) => {
  const viewProductPage = props.split(" ")[0];

  return (
    <div className={cn("py-3 border-b", !viewProductPage && "bg-ghost")}>
      <div className="container flex items-center justify-start gap-3 text-xs">
        <p className="text-primary">Home</p> /
        <p className="text-secondary capitalize">{props}</p>
      </div>
    </div>
  );
};

export default PageHeader;
