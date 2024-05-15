import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Headline = () => {
  return (
    <div id="navigate-top" className="py-3 container max-md:text-[10px] md:text-sm flex items-center justify-between shadow-sm">
      <Marquee className="px-2">
        Sellora বাংলাদেশের বিশ্বস্ত অনলাইন শপ সারাদেশে ক্যাশ অন ডেলিভারি (৪৮ থেকে
        ৭২ ঘণ্টার মধ্যে) হটলাইন: 01710696950 &nbsp; &nbsp; &nbsp;
      </Marquee>
      <div className="flex items-center whitespace-nowrap gap-4 text-primary px-4 text drop-shadow-lg">
        <Link to="#" className="hover:underline underline-offset-2">
          FB Page
        </Link>
        <Link to="#" className="hover:underline underline-offset-2">
          FB group
        </Link>
      </div>
    </div>
  );
};

export default Headline;
