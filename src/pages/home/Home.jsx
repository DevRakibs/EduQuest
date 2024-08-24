import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import CategorySlide from './CategorySlide'
import Journey from './Journey'
import Categories from './Categories'
import FeaturedCourses from './FeaturedCourses'
import OurSupport from './OurSupport'
import Blog from './Blog'
import FAQ from './FAQ'
import Footer from './Footer'
import GetStarted from './GetStarted'

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
      <Footer />
    </>
  )
}

export default Home