import FeaturedProducts from "@/components/FeaturedProducts"
import Hero from "@/components/Hero"
import PopularCategories from "@/components/PopularCategories"


const Home = () => {
  return (
    <div className="container">
      <Hero/>
      <FeaturedProducts/>
      <PopularCategories/>
    </div>
  )
}

export default Home
