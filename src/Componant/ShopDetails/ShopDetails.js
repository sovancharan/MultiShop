import React from 'react'
import Footer from '../Home/Footer/Footer'
import NavBar from '../Home/Navbar/NavBar'
import Breadcrumb from './Breadcrumb/Breadcrumb'
import MultipleProductCarasol from './Carasol/MultipleProductCarasol'
import Details from './Details/Details'
import ProductDescription from './ProductDescription/ProductDescription'
import Products from './Products/Products'
import Data from "../../Data/ProductData.json"

const ShopDetails = () => {
  return (
    <div>
        <NavBar/>
        <Breadcrumb/>
        <Details details={Data} />
        <ProductDescription/>

        <MultipleProductCarasol/>
        <Footer/>
    </div>
  )
}

export default ShopDetails