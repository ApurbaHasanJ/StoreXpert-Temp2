import { HashLink as NavLink } from "react-router-hash-link";


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

const NavItems = () => {
  return (
    <>
      {navItems.map((nav, index) => (
        <NavLink
          key={index}
          to={nav?.url}
          smooth
          className="nav-item capitalize">
          {nav?.title}
        </NavLink>
      ))}
    </>
  );
};

export default NavItems;
