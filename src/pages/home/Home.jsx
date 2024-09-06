import Hero from '../../components/home/Hero'
import CategorySlide from '../../components/home/CategorySlide'
import Journey from '../../components/home/Journey'
import Categories from '../../components/home/Categories'
import FeaturedCourses from '../../components/home/FeaturedCourses'
import OurSupport from '../../components/home/OurSupport'
import Blog from '../../components/home/Blog'
import FAQ from '../../components/home/FAQ'
import GetStarted from '../../components/home/GetStarted'

const Home = () => {
  return (
    <>
      <Hero />
      <CategorySlide />
      <Journey />
      <Categories />
      <FeaturedCourses />
      <OurSupport />
      <Blog />
      <FAQ />
      <GetStarted />
    </>
  )
}

export default Home