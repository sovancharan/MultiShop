import React from 'react'
import Footer from '../Home/Footer/Footer'
import NavBar from '../Home/Navbar/NavBar'
import Breadcrumb from './Breadcrumb/Breadcrumb'
import Items from './Items/Items'
import { useSelector } from 'react-redux/es/exports'

const Shop = () => {
        const data = useSelector((state) => state);
  return (
      <div>
          <NavBar storeData={data.ActionReducer.list} />
          <Breadcrumb />
          <Items />
          <Footer />
      </div>
  );
}

export default Shop