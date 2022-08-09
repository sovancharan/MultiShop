import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
const HeaderCarasol = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
    };

    return (
        <Slider {...settings}>
            <div>
                <div
                    className="carousel-item position-relative active"
                    style={{ height: '430px' }}
                >
                    <img
                        className="position-absolute w-100 h-100"
                        src="/static/img/carousel-1.jpg"
                        style={{ objectFit: 'cover' }}
                        alt="carouel1"
                    />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{ maxWidth: '700px' }}>
                            <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                                Men Fashion
                            </h1>
                            <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                                Lorem rebum magna amet lorem magna erat diam
                                stet. Sadips duo stet amet amet ndiam elitr
                                ipsum diam
                            </p>
                            <a
                                className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                                href="/"
                            >
                                Shop Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div
                    className="carousel-item position-relative"
                    style={{ height: '430px' }}
                >
                    <img
                        className="position-absolute w-100 h-100"
                        src="/static/img/carousel-2.jpg"
                        style={{ objectFit: 'cover' }}
                        alt="carasol2"
                    />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{ maxWidth: '700px' }}>
                            <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                                Women Fashion
                            </h1>
                            <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                                Lorem rebum magna amet lorem magna erat diam
                                stet. Sadips duo stet amet amet ndiam elitr
                                ipsum diam
                            </p>
                            <a
                                className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                                href="/"
                            >
                                Shop Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div
                    className="carousel-item position-relative"
                    style={{ height: '430px' }}
                >
                    <img
                        className="position-absolute w-100 h-100"
                        src="/static/img/carousel-3.jpg"
                        style={{ objectFit: 'cover' }}
                        alt="carousel"
                    />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{ maxWidth: '700px' }}>
                            <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                                Kids Fashion
                            </h1>
                            <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                                Lorem rebum magna amet lorem magna erat diam
                                stet. Sadips duo stet amet amet ndiam elitr
                                ipsum diam
                            </p>
                            <a
                                className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                                href="/"
                            >
                                Shop Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
    );
};

export default HeaderCarasol;
