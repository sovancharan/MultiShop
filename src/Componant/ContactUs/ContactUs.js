import React from 'react'
import Footer from '../Home/Footer/Footer'
import NavBar from '../Home/Navbar/NavBar'
import Breadcrumb from './Breadcrumb/Breadcrumb'
import Contact from './Contact/Contact'

const ContactUs = () => {
  return (
    <div>
        <NavBar/>
        <Breadcrumb/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default ContactUs