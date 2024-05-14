import { Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";

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

const AllDepartments = ({ phone, setShowCategories }) => {
  return (
    <div className="bg-white shadow-md pb-6 h-full overflow-y-scroll max-md:text-sm">
      {/* for phone */}
      {phone && (
        <div className="flex items-center justify-between px-3 my-6">
          <h4 className="text-primary">{phone}</h4>
          <button className="text-sm hover:text-primary flex items-center gap-1">
            <IoCloseOutline />
            Close
          </button>
        </div>
      )}

      <div className="border-t max-md:mb-16">
        {departments.map((department, index) => (
          <Link
            key={index}
            to={`/shop/${department?.category}`}
            onClick={() => setShowCategories(false)}
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
