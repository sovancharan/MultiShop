import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
const ProductCarasol = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <Slider {...settings}>
            <div>
                <img
                    className="w-100 h-100"
                    src="/static/img/product-1.jpg"
                    alt=""
                />
            </div>
            <div>
                <img
                    className="w-100 h-100"
                    src="/static/img/product-2.jpg"
                    alt=""
                />
            </div>
            <div>
                <img
                    className="w-100 h-100"
                    src="/static/img/product-3.jpg"
                    alt=""
                />
            </div>
            <div>
                <img
                    className="w-100 h-100"
                    src="/static/img/product-4.jpg"
                    alt=""
                />
            </div>
        </Slider>
    );
};

export default ProductCarasol;
