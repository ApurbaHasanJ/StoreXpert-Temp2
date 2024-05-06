import { Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa6";

const departments = [
  {
    item: "Women & Girls Fashion",
  },
  {
    item: "Watch’s Bags & Jewellery",
  },
  {
    item: "Kid’s & Men’s Fashion",
  },
  {
    item: "Kitchen Products",
  },
  {
    item: "Household & Outdoor",
  },
  {
    item: "TC & Home Appliences",
  },
  {
    item: "Electronic Accessories",
  },
  {
    item: "Gadget & Accessories",
  },
  {
    item: "Kitchen Products",
  },
  {
    item: "Household & Outdoor",
  },
  {
    item: "TC & Home Appliences",
  },
  {
    item: "Electronic Accessories",
  },
  {
    item: "Gadget & Accessories",
  },
  {
    item: "Kitchen Products",
  },
  {
    item: "Household & Outdoor",
  },
  {
    item: "TC & Home Appliences",
  },
  {
    item: "Electronic Accessories",
  },
  {
    item: "Gadget & Accessories",
  },
];

const AllDepartments = ({ name }) => {
  return (
    <div className="bg-white shadow-md p-2 pb-6 h-full pr-6 overflow-y-scroll max-md:text-sm">
      {name && <h4 className="text-primary mb-8">WoWnex</h4>}
      {departments.map((department, index) => (
        <Link
          key={index}
          to="#"
          className="flex items-center gap-2 whitespace-nowrap mt-4 text-secondary hover:text-primary"
        >
          <FaCaretRight /> <span>{department.item}</span>
        </Link>
      ))}
    </div>
  );
};

export default AllDepartments;
