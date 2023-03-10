import React from 'react'
import Announcement from '../Components/Announcement'
import Home_Navbar from '../Components/Home_Navbar'
import Slider from '../Components/Slider'
import Categories from "../Components/Categories"
import Products from '../Components/Products'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/footer'
import ProductList from './ProductList'
import Product from './Product'


import Cart from './Cart'
import Login from './Login'
import Register from './Register_Page'
const Home = () => {
  
  //let ankita=ankita
  return (
    <div>
      <Announcement/>
      <Home_Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
      {/* <ProductList/> */}
      {/* <Product/> */}
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <Cart/> */}
    </div> 
  )
}

export default Home
