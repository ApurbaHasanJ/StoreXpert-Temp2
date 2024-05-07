import AdvertiseCards from "@/components/AdvertiseCards"
import { AllProducts } from "@/components/AllProducts"
import FeaturedProducts from "@/components/FeaturedProducts"
import FlashDeal from "@/components/FlashDeal"
import Hero from "@/components/Hero"
import HighlightProducts from "@/components/HighlightProducts"
import PopularCategories from "@/components/PopularCategories"


const Home = () => {
  return (
    <div className="container">
      <Hero/>
      <HighlightProducts/>
      <FlashDeal/>
      <AdvertiseCards/>
      <PopularCategories/>
      <FeaturedProducts/>
      <AllProducts/>
    </div>
  )
}

export default Home
