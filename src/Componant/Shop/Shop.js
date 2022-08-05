import React from 'react'
import Footer from '../Home/Footer/Footer'
import NavBar from '../Home/Navbar/NavBar'
import Breadcrumb from './Breadcrumb/Breadcrumb'
import Items from './Items/Items'

const Shop = () => {
  return (
    <div>
        <NavBar/>
        <Breadcrumb/>
        <Items/>
        <Footer/>
    </div>
  )
}

export default Shop