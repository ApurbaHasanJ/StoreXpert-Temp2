import { BsCart3 } from "react-icons/bs";
import { LuPhoneCall } from "react-icons/lu";
import { Link } from "react-router-dom";
import NavItems from "./NavItems";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Categories from "@/components/Categories";
import Search from "./Search";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [scroll, setScroll] = useState(false);

  // cart quantity
  //   const selectedItem = useSelector((state) => state?.cart?.selectedItem);

  const selectedItem = 0;

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
    <header className=" ">
      <div>
        <div className="container flex items-center justify-between gap-1 md:gap-10 py-5">
          {/* <h4 className="text-primary">WoWnex</h4> */}
          <img
            className="h-10 md:h-14"
            src="https://revel-html.codebasket.xyz/assets/images/logo.png"
            alt="logo"
          />
          <div className="max-md:hidden max-w-2xl w-full">
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
      <div className="bg-white max-md:hidden">
        <div className="container w-full flex items-center gap-5 justify-between">
          <div
            onClick={() => setShowCategories(!showCategories)}
            className="flex items-center gap-3 bg-primary text-white py-4 px-6">
            <p className="text-lg font-semibold">All Departments</p>
            <FiMenu className="text-xl"/>
          </div>
          <div
            className={cn(
              "lg:hidden absolute duration-500 z-10 top-[52px]",
              showCategories ? "left-0" : "-left-[1000px]"
            )}>
            <Categories />
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
