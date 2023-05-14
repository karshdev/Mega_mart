import React from 'react'
import Announcemet from '../components/Announcemet'
import Categories from '../components/Categories'
import Fotter from '../components/Fotter'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'

export default function Home() {
  return (
    <div>
      <Announcemet />
     <Navbar />
     <Slider />
     <Categories />
     <Products />
     <Newsletter />
     <Fotter />
    </div>
  )
}
