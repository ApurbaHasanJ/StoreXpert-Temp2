import { Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa6";

const departments = [
  {
    item: "Women & Girls Fashion",
    category: "girls-fashion",
  },
  {
    item: "Watch’s Bags & Jewellery",
    category: "accessories",
  },
  {
    item: "Kid’s & Men’s Fashion",
    category: "mens-fashion",
  },
  {
    item: "Kitchen Products",
    category: "kitchen",
  },
  {
    item: "Household & Outdoor",
    category: "household-outdoor",
  },
  {
    item: "TC & Home Appliances",
    category: "home-appliances",
  },
  {
    item: "Electronic Accessories",
    category: "electronic-accessories",
  },
  {
    item: "Gadget & Accessories",
    category: "gadget-accessories",
  },
  {
    item: "Women & Girls Fashion",
    category: "girls-fashion",
  },
  {
    item: "Watch’s Bags & Jewellery",
    category: "accessories",
  },
  {
    item: "Kid’s & Men’s Fashion",
    category: "mens-fashion",
  },
  {
    item: "Kitchen Products",
    category: "kitchen",
  },
];

const AllDepartments = ({ setShowMenu }) => {
  return (
    <div className="bg-white shadow-md pb-6 h-full overflow-y-scroll max-md:text-sm">
      <div className="max-md:mb-16">
        {departments.map((department, index) => (
          <Link
            key={index}
            to={`/shop/${department?.category}`}
            onClick={() => setShowMenu(false)}
            className="max-md:pl-3 md:py-4 md:pl-2 md:pr-10 flex items-center gap-2 whitespace-nowrap border-b py-4 text-secondary hover:md:text-primary hover:bg-gray-100/70"
          >
            <FaCaretRight /> <span>{department.item}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllDepartments;
