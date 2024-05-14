import { BsCart3 } from "react-icons/bs";
import { LuPhoneCall } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import NavItems from "./NavItems";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Search from "./Search";
import { FiMenu } from "react-icons/fi";
import { useSelector } from "react-redux";
import AllDepartments from "@/components/AllDepartments";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [scroll, setScroll] = useState(false);
  const location = useLocation();

  const viewProduct = location.pathname.split("/")[1];
  console.log(viewProduct);

  // cart quantity
  const selectedItem = useSelector((state) => state?.cart?.selectedItem);

  // Add an event listener to track scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position
      const scrollY = window.scrollY || window.pageYOffset;

      if (scrollY > 400) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // call function
  const handleCallClick = () => {
    const phoneNumber = "+8801884167824";
    // Create a tel URL with the phone number
    const telUrl = `tel:${phoneNumber}`;
    // Open the phone app with the provided phone number
    window.location.href = telUrl;
  };

  return (
    <header className={cn(viewProduct === "view-product" && "bg-white")}>
      {/* 1st column */}
      <div>
        <div className="container flex items-center justify-between gap-1 md:gap-10 py-5">
          <h4 className="text-primary">Sellora</h4>
          {/* <img
            className="h-10 md:h-14"
            src="https://revel-html.codebasket.xyz/assets/images/logo.png"
            alt="logo"
          /> */}
          <div className="max-md:hidden max-w-2xl w-full ml-12">
            <Search />
          </div>
          <div className="flex items-center gap-5">
            {/* call */}
            <div onClick={handleCallClick} className="flex items-center gap-2">
              <LuPhoneCall className="text-secondary/90 text-2xl md:text-4xl" />
              <div className="font-medium text-slate-950 max-md:text-xs">
                <p>Click to call:</p>
                <p>+8801884167824</p>
              </div>
            </div>
            {/* cart */}
            <Link to="/cart" className="relative">
              <BsCart3 className="text-secondary md:text-3xl text-2xl" />
              <span className="bg-primary text-sm rounded-full h-5 w-5 text-center text-white absolute -right-2 -top-2">
                {selectedItem}
              </span>
            </Link>
          </div>
        </div>
        <div className="md:hidden relative bg-white container z-10 py-3 transition-all ease-in-out">
          <Search scroll={scroll} />
        </div>
      </div>

      {/* 2nd column */}
      <div
        className={cn(
          "max-md:hidden",
          viewProduct === "view-product" ? "bg-ghost/30 drop-shadow-sm" : "bg-white"
        )}
      >
        <div className="container w-full flex items-center gap-5 justify-between">
          <div className="max-w w-fit h-full relative">
            <div
              onClick={() => {
                (location.pathname === "/" && window.scrollY >= 768) ||
                  setShowCategories(!showCategories);
              }}
              className="flex items-center justify-between gap-10 bg-primary text-white py-4 px-6"
            >
              <p className="text-lg font-semibold">All Departments</p>
              <FiMenu className="text-xl" />
            </div>
            <div
              className={cn(
                "w-full h-[530px] absolute duration-500 z-10 top-[60px]",
                location.pathname === "/" && "hidden",
                showCategories ? "left-0" : "-left-[1000px]"
              )}
            >
              <AllDepartments setShowCategories={setShowCategories} />
            </div>
          </div>

          <div className="max-md:hidden py-5 flex items-center lg:gap-10 gap-4">
            <NavItems />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
