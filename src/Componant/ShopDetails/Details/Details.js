import React from 'react';
import ProductCarasol from '../Carasol/ProductCarasol';

const Details = () => {
    return (
        <div>
            {/* <!-- Shop Detail Start --> */}
            <div className="container-fluid pb-5">
                <div className="row px-xl-5">
                    <div className="col-lg-5 mb-30">
                        <ProductCarasol />
                    </div>

                    <div className="col-lg-7 h-auto mb-30">
                        <div className="h-100 bg-light p-30">
                            <h3>Product Name Goes Here</h3>
                            <div className="d-flex mb-3">
                                <div className="text-primary mr-2">
                                    <small className="fas fa-star"></small>
                                    <small className="fas fa-star"></small>
                                    <small className="fas fa-star"></small>
                                    <small className="fas fa-star-half-alt"></small>
                                    <small className="far fa-star"></small>
                                </div>
                                <small className="pt-1">(99 Reviews)</small>
                            </div>
                            <h3 className="font-weight-semi-bold mb-4">
                                $150.00
                            </h3>
                            <p className="mb-4">
                                Volup erat ipsum diam elitr rebum et dolor. Est
                                nonumy elitr erat diam stet sit clita ea. Sanc
                                ipsum et, labore clita lorem magna duo dolor no
                                sea Nonumy
                            </p>
                            <div className="d-flex mb-3">
                                <strong className="text-dark mr-3">
                                    Sizes:
                                </strong>
                                <form>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input
                                            type="radio"
                                            className="custom-control-input"
                                            id="size-1"
                                            name="size"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="size-1"
                                        >
                                            XS
                                        </label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input
                                            type="radio"
                                            className="custom-control-input"
                                            id="size-2"
                                            name="size"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="size-2"
                                        >
                                            S
                                        </label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input
                                            type="radio"
                                            className="custom-control-input"
                                            id="size-3"
                                            name="size"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="size-3"
                                        >
                                            M
                                        </label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input
                                            type="radio"
                                            className="custom-control-input"
                                            id="size-4"
                                            name="size"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="size-4"
                                        >
                                            L
                                        </label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input
                                            type="radio"
                                            className="custom-control-input"
                                            id="size-5"
                                            name="size"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="size-5"
                                        >
                                            XL
                                        </label>
                                    </div>
                                </form>
                            </div>
                            <div className="d-flex mb-4">
                                <strong className="text-dark mr-3">
                                    Colors:
                                </strong>
                                <form>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input
                                            type="radio"
                                            className="custom-control-input"
                                            id="color-1"
                                            name="color"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="color-1"
                                        >
                                            Black
                                        </label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input
                                            type="radio"
                                            className="custom-control-input"
                                            id="color-2"
                                            name="color"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="color-2"
                                        >
                                            White
                                        </label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input
                                            type="radio"
                                            className="custom-control-input"
                                            id="color-3"
                                            name="color"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="color-3"
                                        >
                                            Red
                                        </label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input
                                            type="radio"
                                            className="custom-control-input"
                                            id="color-4"
                                            name="color"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="color-4"
                                        >
                                            Blue
                                        </label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input
                                            type="radio"
                                            className="custom-control-input"
                                            id="color-5"
                                            name="color"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="color-5"
                                        >
                                            Green
                                        </label>
                                    </div>
                                </form>
                            </div>
                            <div className="d-flex align-items-center mb-4 pt-2">
                                <div
                                    className="input-group quantity mr-3"
                                    style={{ width: '130px' }}
                                >
                                    <div className="input-group-btn">
                                        <button className="btn btn-primary btn-minus">
                                            <i className="fa fa-minus"></i>
                                        </button>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control bg-secondary border-0 text-center"
                                        value="1"
                                    />
                                    <div className="input-group-btn">
                                        <button className="btn btn-primary btn-plus">
                                            <i className="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                                <button className="btn btn-primary px-3">
                                    <i className="fa fa-shopping-cart mr-1"></i>{' '}
                                    Add To Cart
                                </button>
                            </div>
                            <div className="d-flex pt-2">
                                <strong className="text-dark mr-2">
                                    Share on:
                                </strong>
                                <div className="d-inline-flex">
                                    <a className="text-dark px-2" href="/">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="text-dark px-2" href="/">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a className="text-dark px-2" href="/">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a className="text-dark px-2" href="/">
                                        <i className="fab fa-pinterest"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Shop Detail End --> */}
        </div>
    );
};

export default Details;
