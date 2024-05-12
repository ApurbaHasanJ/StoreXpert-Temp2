import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

const CheckoutForm = ({ setDeliveryCharge }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* name */}
      <div className="w-full mb-4">
        <label htmlFor="name" className="text-gray-700 font-bold mr-4">
          আপনার নাম<span className="text-red-500 text-xl">*</span>
        </label>
        <input
          type="text"
          id="name"
          className="p-2 border border-secondary/40 drop-shadow-sm focus:outline-none w-full rounded-md"
          placeholder="এখানে আপনার নাম লিখুন"
          {...register("name", {
            required: "দয়া করে আপনার নাম লিখুন",
          })}
        />
      </div>
      {errors.name && (
        <p className="text-red-400 text-xs font-semibold text-left">
          {errors.name.message}
        </p>
      )}
      {/* phone */}
      <div className="w-full mb-4">
        <label htmlFor="phone" className="text-gray-700 font-bold mr-4">
          আপনার মোবাইল নম্বর
          <span className="text-red-500 text-xl">*</span>
        </label>
        <div className=" border border-secondary/40 drop-shadow-sm flex items-center rounded-md">
          <div className="text-secondary/60 p-2 border-r border-secondary/40">
            +88
          </div>
          <input
            type="tel"
            id="phone"
            className="focus:outline-none w-full p-2 rounded-md"
            placeholder="এখানে আপনার মোবাইল নম্বর লিখুন"
            {...register("phone", {
              required: "দয়া করে মোবাইল নম্বর লিখুন",
              minLength: {
                value: 11,
                message: "আপনার নম্বরটি সঠিক নয়",
              },
              maxLength: {
                value: 11,
                message: "আপনার নম্বরটি সঠিক নয়",
              },
            })}
          />
        </div>
      </div>
      {errors.phone && (
        <p className="text-red-400 text-xs font-semibold text-left">
          {errors.phone.message}
        </p>
      )}
      {/* address */}
      <div className="w-full mb-4">
        <label htmlFor="address" className="text-gray-700 font-bold mr-4">
          আপনার ডেলিভারি ঠিকানা
          <span className="text-red-500 text-xl">*</span>
        </label>
        <input
          type="text"
          id="address"
          className="p-2 border border-secondary/40 drop-shadow-sm focus:outline-none w-full rounded-md"
          placeholder="এখানে আপনার সম্পূর্ণ ঠিকানা লিখুন"
          {...register("address", {
            required: "দয়া করে আপনার ঠিকানা লিখুন",
          })}
        />
      </div>
      {errors.address && (
        <p className="text-red-400 text-xs font-semibold text-left">
          {errors.address.message}
        </p>
      )}

      {/* delivery area */}
      <div className="w-full mb-4">
        <label htmlFor="deliveryArea" className="text-gray-700 font-bold mr-4">
          ডেলিভারি এলাকা নির্বাচন করুন
          <span className="text-red-500 text-xl">*</span>
        </label>
        <div className="flex flex-col mt-2">
          <div className="">
            <input
              type="radio"
              onClick={() => setDeliveryCharge(60)}
              id="deliveryAreaWithinDhaka"
              name="deliveryArea"
              value="withinDhaka"
              className="mr-2 border accent-primary border-secondary/40 drop-shadow-sm rounded-md"
              {...register("deliveryArea", {
                required: "দয়া করে ডেলিভারি এলাকা নির্বাচন করুন",
              })}
            />
            <label
              htmlFor="deliveryAreaWithinDhaka"
              className="text-gray-500 text-lg font-medium w-full"
            >
              ঢাকার ভিতরে (৬০ টাকা)
            </label>
          </div>
          <div className="">
            <input
              type="radio"
              onClick={() => setDeliveryCharge(150)}
              id="deliveryAreaOutsideDhaka"
              name="deliveryArea"
              value="outsideDhaka"
              className="mr-2 border accent-primary border-secondary/40 drop-shadow-sm rounded-md"
              {...register("deliveryArea", {
                required: "দয়া করে ডেলিভারি এলাকা নির্বাচন করুন",
              })}
            />
            <label
              htmlFor="deliveryAreaOutsideDhaka"
              className="text-gray-500 text-lg font-medium w-full"
            >
              ঢাকার বাইরে (১৫০ টাকা)
            </label>
          </div>
        </div>
        {errors.deliveryArea && (
          <p className="text-red-400 text-xs font-semibold text-left">
            {errors.deliveryArea.message}
          </p>
        )}
      </div>

      {/* Apply discount */}
      <div className="w-full mb-4">
        <label htmlFor="address" className="text-gray-700 font-bold mr-4">
          Apply Discount Code{" "}
          <span className="text-gray-500 font-thin text-xs">(optional)</span>
        </label>
        <input
          type="text"
          id="discountCode"
          className="p-2 border border-secondary/40 drop-shadow-sm focus:outline-none w-full rounded-md"
          placeholder="এখানে আপনার ডিসকাউন্ট কুপন লিখুন"
          {...register("discountCode", )}
        />
      </div>
      {errors.discountCode && (
        <p className="text-red-400 text-xs font-semibold text-left">
          {errors.discountCode.message}
        </p>
      )}
      <Button type="submit" size="lg" className="w-full font-semibold">
        অর্ডার কনফার্ম করুন
      </Button>
      <p className="text-sm text-slate-500 text-center mt-2">
        ১০০% সিউর হয়ে অর্ডার করুন, অহেতুক অর্ডার করবেন না
      </p>
    </form>
  );
};

export default CheckoutForm;
