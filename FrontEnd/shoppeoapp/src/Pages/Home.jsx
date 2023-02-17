import React from 'react'
import Announcement from '../Components/Announcement'
import Nnavbar from '../Components/Home_Navbar'
import Slider from '../Components/Slider'
import Categories from "../Components/Categories"
import Products from '../Components/Products'
import Newsletter from '../Components/Newsletter'
const Home = () => {
  return (
    <div>
      <Announcement/>
      <Nnavbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
    </div>
  )
}

export default Home
