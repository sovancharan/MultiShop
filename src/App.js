import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Checkout from './Componant/Checkout/Checkout';
import ContactUs from './Componant/ContactUs/ContactUs';
import HeaderCarasol from './Componant/Home/Carasol/HeaderCarasol';
import Carasol from './Componant/Home/Carasol/ProductCarasol';

import Home from './Componant/Home/Home';
import Shop from './Componant/Shop/Shop';
import ShopDetails from './Componant/ShopDetails/ShopDetails';
import ShoppingCart from './Componant/ShoppingCart/ShoppingCart';

function App() {
    const data = useSelector((state) => state.ActionReducer);
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home data={data} />} />

                    <Route path="/shop" element={<Shop />} />
                    <Route path="/contactUs" element={<ContactUs />} />
                    <Route path="/cart" element={<ShoppingCart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/shopDetails" element={<ShopDetails />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
