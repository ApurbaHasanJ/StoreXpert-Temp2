import { HashLink as NavLink } from "react-router-hash-link";
import { GoHome } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { SlHandbag } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useSelector } from "react-redux";
import AllDepartments from "../AllDepartments";
import { RiFireLine } from "react-icons/ri";
import NavItems from "./navbar/NavItems";
import { IoCloseOutline } from "react-icons/io5";

const PhoneNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDeals, setShowDeals] = useState(false);

  // cart quantity
  const selectedItem = useSelector((state) => state?.cart?.selectedItem);

  // direct call
  const handleCallClick = () => {
    const phoneNumber = "+8801884167824";
    // Create a tel URL with the phone number
    const telUrl = `tel:${phoneNumber}`;
    // Open the phone app with the provided phone number
    window.location.href = telUrl;
  };

  //   <div className="md:hidden flex items-center gap-3 relative">
  //   <Button
  //     size="icon"
  //     variant="icon"
  //     onClick={() => setShowNavitems(!showNavitems)}
  //     className="bg-primary hover:bg-primary/70 text-white "
  //   >
  //     <IoMdMenu className="text-xl" />
  //   </Button>
  //   <h4 className="text-primary md:hidden">Sellora</h4>
  //   {showNavitems && (
  //     <div className="bg-white border-r-2 border-b-2 grid grid-cols-1 gap-3 p-5 absolute top-[52px] -left-4 z-[11]">
  //       <NavItems />
  //     </div>
  //   )}
  // </div>

  return (
    <>
      <section className="md:hidden select-none sticky bottom-0 left-0 right-0 z-20 bg-primary py-4 px-5 phone-nav-round">
        <div className=" grid grid-cols-5 items-center justify-items-center justify-between text-white">
          {/* all departments */}
          <div
            onClick={() => {
              setShowMenu(!showMenu);
              setShowDeals(false);
            }}
            className="hover:text-ghost/80 flex flex-col gap-1 items-center capitalize"
          >
            <RxDashboard className="text-lg" />
            <span className="text-xs">Menu</span>
          </div>

          {/* Menu */}
          <div
            onClick={() => {
              setShowDeals(!showDeals);
              setShowMenu(false);
            }}
            className="hover:text-ghost/80 flex flex-col gap-1 items-center capitalize w-fit"
          >
            <RiFireLine className="text-lg" />
            <span className="text-xs">deals</span>
          </div>

          {/* home */}
          <NavLink
            to="/#navigate-top"
            smooth
            className="hover:text-ghost/80 flex flex-col gap-1 items-center capitalize w-fit"
          >
            <GoHome className="text-lg" />
            <span className="text-xs">home</span>
          </NavLink>

          {/* call */}
          <div
            onClick={handleCallClick}
            className="hover:text-ghost/80 flex flex-col gap-1 items-center capitalize w-fit"
          >
            <BsTelephone className="text-lg" />
            <span className="text-xs">call</span>
          </div>

          {/* cart */}
          <Link
            to="/cart"
            className="hover:text-ghost/80 flex relative flex-col gap-1 items-center capitalize w-fit"
          >
            <SlHandbag className="text-lg" />
            <span className="text-xs">cart</span>
            <span className="text-primary text-sm rounded-full h-5 w-5 text-center bg-ghost absolute -right-2 -top-2">
              {selectedItem}
            </span>
          </Link>
        </div>
      </section>

      {/* show menu and deals */}
      {showDeals | showMenu && (
        <div
          onClick={() => {
            setShowMenu(false);
            setShowDeals(false);
          }}
          className={cn(
            "md:hidden fixed duration-1000 bg-slate-900/20 top-0 bottom-0 z-10",
            showDeals | showMenu ? "left-0 right-0" : "-left-[1000px]"
          )}
        >
          <div className="h-full max-w-[290px] w-full bg-white">

            {/* show name and close button */}
            <div className="flex items-center border-b justify-between p-3">
              <h4 className="text-primary">Sellora</h4>
              <button className="text-sm hover:text-primary flex items-center gap-1">
                <IoCloseOutline />
                Close
              </button>
            </div>

            {/* show menu conditional */}
            <div className={!showMenu && "hidden"}>
              <AllDepartments setShowMenu={setShowMenu} />
            </div>
            {/* show deals */}
            <div
              className={cn(
                "grid grid-cols-1",
                !showDeals && "hidden"
              )}
            >
              <NavItems />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PhoneNavbar;
