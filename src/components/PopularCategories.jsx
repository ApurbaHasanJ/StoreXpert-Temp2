import categories from "../../public/categories.json";
import { SectionHeader } from "./shared/SectionHeader";

const PopularCategories = () => {
  return (
    <section className="mt-12 bg-white p-6">
      <SectionHeader title="Explore Popular Categories" />
      <div className="mt-9 grid grid-cols-4 md:grid-cols-7 justify-between gap-4">
        {categories.map((cat) => (
          <div key={cat?._id}>
            <img src={cat?.img} alt="" />
            <p className="text-lg font-semibold text-center">{cat?.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;
