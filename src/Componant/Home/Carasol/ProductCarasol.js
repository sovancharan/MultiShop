import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Container } from 'react-bootstrap';

const Carasol = () => {

         const settings = {
             //      dots: true,
             infinite: true,
             speed: 500,
             slidesToShow: 5,
             slidesToScroll: 1,
             autoplay:true,
         };
  
    return (
        <Container >
            <Slider {...settings}>
                <div className="bg-light p-4">
                    <img
                        className="w-75"
                        src="/static/img/vendor-1.jpg"
                        alt=""
                    />
                </div>
                <div className="bg-light p-4">
                    <img
                        className="w-75"
                        src="/static/img/vendor-2.jpg"
                        alt=""
                    />
                </div>
                <div className="bg-light p-4">
                    <img
                        className="w-75"
                        src="/static/img/vendor-3.jpg"
                        alt=""
                    />
                </div>
                <div className="bg-light p-4">
                    <img
                        className="w-75"
                        src="/static/img/vendor-4.jpg"
                        alt=""
                    />
                </div>
                <div className="bg-light p-4">
                    <img
                        className="w-75"
                        src="/static/img/vendor-5.jpg"
                        alt=""
                    />
                </div>
                <div className="bg-light p-4">
                    <img
                        className="w-75"
                        src="/static/img/vendor-6.jpg"
                        alt=""
                    />
                </div>
                <div className="bg-light p-4">
                    <img
                        className="w-75"
                        src="/static/img/vendor-7.jpg"
                        alt=""
                    />
                </div>
                <div className="bg-light p-4">
                    <img
                        className="w-75"
                        src="/static/img/vendor-8.jpg"
                        alt=""
                    />
                </div>
            </Slider>
        </Container>
    );
  
}

export default Carasol