import React from 'react';
import ProductCarasol from './Carasol/ProductCarasol';
import Categories from './Categories/Categories';
import Featured from './Featured/Featured';
import FeaturedProduct from './FeaturedProduct/FeaturedProduct';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import NavBar from './Navbar/NavBar';
import Offer from './Offer/Offer';

const Home = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <Featured />
            <Categories />
            <FeaturedProduct />
            <Offer />
            <FeaturedProduct />
            <ProductCarasol/>
            <Footer/>
        </div>
    );
};

export default Home;
