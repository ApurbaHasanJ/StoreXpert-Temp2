import { HashLink as NavLink } from "react-router-hash-link";


const navItems = [
  {
    title: "home",
    url: "/",
  },
  {
    title: "flash deal",
    url: "/#flash-deal",
  },
  {
    title: "hot product",
    url: "/#hot-product",
  },
  {
    title: "shop",
    url: `/shop/new-arrivals`,
  },
];

const NavItems = () => {
  return (
    <>
      {navItems.map((nav, index) => (
        <NavLink
          key={index}
          to={nav?.url}
          smooth
          className="nav-item capitalize max-md:pl-3 max-md:py-4 whitespace-nowrap max-md:border-b max-md:hover:bg-gray-100/70">
          {nav?.title}
        </NavLink>
      ))}
    </>
  );
};

export default NavItems;
