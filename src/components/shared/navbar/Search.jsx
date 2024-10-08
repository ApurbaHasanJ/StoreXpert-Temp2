import { useState } from "react";
import products from "../../../../public/products.json";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { cn } from "@/lib/utils";
import SearchResult from "./SearchResult";
import { buttonVariants } from "@/components/ui/button";

const Search = () => {
  const [query, setQuery] = useState("");

  // filtering searched products
  const searchedProduct = products?.filter((product) =>
    query.toLocaleLowerCase() === ""
      ? ""
      : product.inStock > 0 &&
        product.title?.toLocaleLowerCase().includes(query)
  );

  return (
    <>
      <form className="max-w-2xl w-full mx-auto md:border-2 border bg-white shadow-sm flex items-center ">
        <input
          type="search"
          className="focus:outline-none w-full p-2 md:p-3"
          name=""
          id=""
          onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}
          placeholder="Search product here"
        />
        <Link
          to={query ? `/view-product/${searchedProduct[0]?._id}` : "#"}
          onClick={() => setQuery("")}
          className={cn(
            buttonVariants({ variant: "icon", size: "icon" }),
            "max-sm:p-[11px] md:p-4 bg-primary hover:bg-white text-white hover:text-secondary border border-primary  text-sm md:text-xl"
          )}
        >
          <BsSearch />
          {/* <span className="max-lg:hidden">Search</span> */}
        </Link>
      </form>
      <div
        className={cn(
          "container py-4 bg-ghost shadow-md z-10 absolute top-14 md:top-[141px] right-0 left-0 min-h-[450px] max-h-[500px] h-full overflow-y-scroll",

          !query && "hidden",
          searchedProduct?.length &&
            "grid md:grid-cols-2 grid-cols-1 gap-2 content-start"
        )}
      >
        {searchedProduct.length ? (
          searchedProduct?.map((product) => (
            <Link
              key={product?._id}
              to={`/view-product/${product?._id}`}
              onClick={() => setQuery("")}
              className="flex items-center md:gap-6 gap-3 h-fit hover:bg-primary/10 rounded-md p-2"
            >
              <SearchResult product={product} />
            </Link>
          ))
        ) : (
          <p className="text-center mt-10 text-primary font-medium">
            No products found
          </p>
        )}
      </div>
    </>
  );
};

export default Search;
