import { GoRocket } from "react-icons/go";
import { PiKeyReturn } from "react-icons/pi";
import { BsTruck } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";

const ServiceDesc = () => {
  return (
    <div className="bg-primary/5 max-lg:mt-9 p-5 text-sm border drop-shadow-sm lg:max-w-72 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-2 gap-8 justify-between">
      <div className="flex gap-2 items-start w-full">
        <GoRocket className="text-2xl mt-1 text-purple-700" />{" "}
        <div className="w-full">
          <p className="border-b-2 text-base text-purple-700 border-gray-300 pb-1">
            ডেলিভারি খরচঃ
          </p>
          <ul className="text-secondary/80 py-2">
            <li className="flex gap-4 ">
              <p>ঢাকা শহরের ভিতরেঃ</p>
              <span>৬০ টাকা</span>
            </li>
            <li className="flex mt-2 gap-4 ">
              <p>ঢাকা শহরের বাইরেঃ</p>
              <span>১৫০ টাকা</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex gap-2 items-start">
        <PiKeyReturn className="md:text-3xl text-2xl text-purple-700" />{" "}
        <div className="w-full">
          <p className="border-b-2 text-base text-purple-700 border-gray-300 pb-1">রিটার্নঃ</p>
          <p className="text-secondary/80 py-2">
            ৭ দিনের মধ্যে ফ্রি রিটার্ন (
            <span className="text-purple-700 px-1">যদি পণ্যে কোন সমস্যা থাকে</span>
            )
          </p>
        </div>
      </div>
      <div className="flex gap-2 items-start">
        <BsTruck className="md:text-3xl text-2xl md:-mt-1 text-purple-700" />{" "}
        <div className="w-full">
          <p className="border-b-2 text-base text-purple-700 border-gray-300 pb-1">
            পণ্য হাতে পেয়ে পেমেন্টঃ
          </p>
          <p className="text-secondary/80 py-2">
            ৪৮-৭২ ঘণ্টার মধ্যে সারা দেশে ক্যাশ অন ডেলিভারি
          </p>
        </div>
      </div>
      <div className="flex gap-2 items-start">
        <RiCustomerService2Line className="md:text-3xl text-2xl text-purple-700" />{" "}
        <div className="w-full">
          <p className="border-b-2 text-base text-purple-700 border-gray-300 pb-1">
            কাস্টমার সার্ভিসঃ
          </p>
          <p className="text-secondary/80 py-2">
            সকাল ১০ টা থেকে রাত ১১ টা পর্যন্ত আমাদের কল অথবা হোয়াটসঅ্যাপ করতে
            পারেন
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDesc;
