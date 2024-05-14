import { cn } from "@/lib/utils";

const PageHeader = ({ props }) => {
  const viewProductPage = props.split(" ")[0];

  return (
    <div className={cn(" md:pt-3 pb-3 border-b", !viewProductPage && "bg-ghost")}>
      <div className="container flex items-center justify-start gap-3 text-xs">
        <p className="text-blue-600">Home</p> /
        <p className="text-secondary capitalize">{props}</p>
      </div>
    </div>
  );
};

export default PageHeader;
