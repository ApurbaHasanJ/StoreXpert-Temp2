import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import whatsAppImg from "/src/assets/icons/whatsapp1.png";
import instaImg from "/src/assets/icons/insta.png";
import { Link } from "react-router-dom";
import facebookImg from "/src/assets/icons/facebook.png";
import { BsTruck } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { TbBasketDiscount } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { cn } from "@/lib/utils";

// navigate to other pages
const pages = [
  { title: "Terms & Conditions", url: "/terms-and-conditions" },
  { title: "Return & Refund Policy", url: "/return-and-refund-policy" },
  { title: "After-Sale Support", url: "/after-sale-support" },
  { title: "Replacement Warranty", url: "/replacement-warranty" },
  { title: "Privacy Policy", url: "/privacy-policy" },
  { title: "Shipping or Delivery", url: "/shipping-or-delivery" },
];

// important links
const navItems = [
  {
    title: "home",
    url: "/",
  },
  {
    title: "flash sale",
    url: "/#flash-sale",
  },
  {
    title: "hot product",
    url: "/#hot-product",
  },
  {
    title: "shop",
    url: "/#shop",
  },
];

const servcies = [
  {
    name: "Cash on Delivery",
    disc: "All over the country",
    icon: BsTruck,
  },
  {
    name: "Free & Easy Returns",
    disc: "If good have problems",
    icon: GiReturnArrow,
  },
  {
    name: "Best Price Guaranteed 100%",
    disc: "Best deals for you",
    icon: TbBasketDiscount,
  },
  {
    name: "24/7 Support",
    disc: "Dedicated Support",
    icon: BiSupport,
  },
];

// const

const Footer = () => {
  const year = new Date().getFullYear();

  const handleCallClick = () => {
    const phoneNumber = "+8801884167824";
    // Create a tel URL with the phone number
    const telUrl = `tel:${phoneNumber}`;
    // Open the phone app with the provided phone number
    window.location.href = telUrl;
  };

  return (
    <footer>
      <div className="pt-16 container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:items-center lg:justify-items-center -mb-14 px-6 drop-shadow-md bg-white md:gap-10 gap-5 py-10">
          {servcies?.map((servcie, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center gap-3 lg:px-14 border-secondary/65 border-r-2 whitespace-nowrap",
                index === 3 && "lg:border-none"
              )}
            >
              <servcie.icon className="text-primary text-2xl md:text-3xl" />
              <div>
                <p>{servcie?.name}</p>
                <p className="text-xs text-secondary ">{servcie?.disc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="z-0 bg-slate-900 text-white">
        <div className="container py-10 pt-20 font-extralight lg:flex grid grid-cols-1 md:grid-cols-2 items-start justify-between lg:gap-20 gap-10">
          {/* col 1 */}
          <div className=" lg:w-4/12">
            <h3 className="text-primary">Sellora</h3>
            <p className="mt-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              odio est perspiciatis commodi ab consectetur doloremque dicta
              distinctio quis voluptas impedit, illo id, asperiores fugiat et
              tenetur ex nostrum neque.
            </p>
            <div className="mt-3 flex gap-4">
              <Link
                to="https://wa.me/+8801884167824?text=Hello! I Need Assistance."
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="h-9" src={whatsAppImg} alt="" />
              </Link>
              <Link
                to="https://www.facebook.com/ApurbaHasanJ1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="h-9" src={facebookImg} alt="" />
              </Link>
              <Link
                to="https://www.instagram.com/apurbahasanj/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="h-9" src={instaImg} alt="" />
              </Link>
            </div>
          </div>

          {/* col 2 */}
          <div className=" lg:w-2/12 ">
            <div className="flex flex-col gap-1">
              <h6 className="whitespace-nowrap">Important Links</h6>
              <div className="w-16 h-[1px] bg-white"></div>
            </div>
            <div className="flex flex-col gap-1 mt-7 capitalize">
              {navItems?.map((item, index) => (
                <Link
                  key={index}
                  to={item?.url}
                  className="hover:underline underline-offset-2"
                >
                  {item?.title}
                </Link>
              ))}
            </div>
          </div>
          {/* col 3 */}
          <div className=" lg:w-2/12 ">
            <div className="flex flex-col gap-1">
              <h6 className="whitespace-nowrap">Information</h6>
              <div className="w-16 h-[1px] bg-white"></div>
            </div>
            <div className="flex flex-col gap-1 mt-7">
              {pages?.map((link, index) => (
                <Link
                  key={index}
                  to={link?.url}
                  className="hover:underline underline-offset-2"
                >
                  {link?.title}
                </Link>
              ))}
            </div>
          </div>

          {/* col 4 */}
          <div className=" lg:w-3/12">
            <div className="flex flex-col gap-1">
              <h6 className="whitespace-nowrap">Contact Us</h6>
              <div className="w-16 h-[1px] bg-white"></div>
            </div>
            <div className="mt-7 grid grid-cols-1 gap-1">
              <p>Call us 10am-11pm (Everyday)</p>
              <p onClick={handleCallClick} className="flex items-center gap-2">
                <IoCallOutline className="text-primary" />
                <span>+8801710-696950</span>
              </p>
              <p className="flex items-center gap-2">
                <AiOutlineMail className="text-primary" />
                <span>info@wownex.com</span>
              </p>
              <p className="flex gap-2">
                <IoLocationOutline className="text-primary text-2xl md:w-9" />
                <span>
                  G3, Ground Floor, House# 307, Elephant Road, Pubali Bank
                  Building, Dhaka-1205.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-slate-950 text-ghost">
          <div className="container flex max-sm:flex-col justify-between p-6">
            <p>
              Copyright &copy; {year}{" "}
              <span className="font-semibold">Sellora</span> - All Rights
              Reserved
            </p>
            <p className="max-sm:mt-4">
              Developed by{" "}
              <Link
                target="_blank"
                to="https://apurbahasanj.netlify.app"
                className="hover:text-primary/80 hover:underline font-semibold"
              >
                VRTX-Forge
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
