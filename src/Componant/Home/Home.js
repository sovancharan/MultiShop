import React from 'react';
import ProductCarasol from './Carasol/ProductCarasol';
import Categories from './Categories/Categories';
import Featured from './Featured/Featured';
import FeaturedProduct from './FeaturedProduct/FeaturedProduct';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import NavBar from './Navbar/NavBar';
import Offer from './Offer/Offer';
import { useSelector } from 'react-redux/es/exports';

const Home = () => {
    const data = useSelector((state) => state.ActionReducer);

    console.log('home', data);

    return (
        <div>
            <NavBar navbarData={data} />
            <Header />
            <Featured />
            <Categories />
            <FeaturedProduct />
            <Offer />
            <FeaturedProduct />
            <ProductCarasol />
            <Footer />
        </div>
    );
};

export default Home;
