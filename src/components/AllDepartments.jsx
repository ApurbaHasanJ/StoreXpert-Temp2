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
];

const AllDepartments = ({ name, setShowCategories }) => {
  return (
    <div className="bg-white shadow-md p-2 pb-6 h-full pr-6 overflow-y-scroll max-md:text-sm">
      {name && <h4 className="text-primary mb-8">WoWnex</h4>}
      {departments.map((department, index) => (
        <Link
          key={index}
          to={`/shop/${department?.category}`}
          onClick={() => setShowCategories(false)}
          className="flex items-center gap-2 whitespace-nowrap mt-4 text-secondary hover:text-primary"
        >
          <FaCaretRight /> <span>{department.item}</span>
        </Link>
      ))}
    </div>
  );
};

export default AllDepartments;
