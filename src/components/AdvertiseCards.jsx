// import discImg1 from "/src/assets/others/disc-hero.jpg";
import adv1 from "/src/assets/others/big-sale.jpg";
import adv2 from "/src/assets/others/mega.jpg";
import adv3 from "/src/assets/others/monday.jpg";

const AdvertiseCards = () => {
  return (
    <section className="mt-12 grid grid-cols-3 md:gap-4 gap-2">
      <img className="object-cover h-full" src={adv1} alt="" />
      <img className="object-cover h-full" src={adv2} alt="" />
      <img className="object-cover h-full" src={adv3} alt="" />
    </section>
  );
};

export default AdvertiseCards;