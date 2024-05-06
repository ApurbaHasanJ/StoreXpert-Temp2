import FeaturedProducts from "@/components/FeaturedProducts"
import FlashDeal from "@/components/FlashDeal"
import Hero from "@/components/Hero"
import PopularCategories from "@/components/PopularCategories"


const Home = () => {
  return (
    <div className="container">
      <Hero/>
      <FeaturedProducts/>
      <FlashDeal/>
      <PopularCategories/>
    </div>
  )
}

export default Home
