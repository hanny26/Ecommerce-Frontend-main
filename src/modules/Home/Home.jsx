import React from 'react'
import Hero from '../../components/Hero/Hero.jsx'
import Products from '../../components/Products/Products.jsx'
import FeatureCard from '../../components/FeatureCard/FeatureCard.jsx'
import StatCard from '../../components/StatCard/StatCard.jsx'
import Footer from '../../components/Footer/Footer.jsx'
const Home = () => {
  return (
    <div>
        <Hero />
        <Products />
        <FeatureCard />
        <StatCard />
        {/* <Footer /> */}
    </div>
  )
}

export default Home