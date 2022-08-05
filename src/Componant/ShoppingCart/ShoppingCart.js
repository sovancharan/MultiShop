import React from 'react'
import Footer from '../Home/Footer/Footer'
import NavBar from '../Home/Navbar/NavBar'
import Breadcrumb from './Breadcrumb/Breadcrumb'
import Cart from './Cart/Cart'

const ShoppingCart = () => {
  return (
      <>
          <NavBar />
          <Breadcrumb />
          <Cart/>
          <Footer />
      </>
  );
}

export default ShoppingCart