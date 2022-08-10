import React, { useEffect, useState } from 'react';
import { Dropdown, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = ({ navbarData }) => {
    const data = useSelector((state) => state.ActionReducer.list);

    return (
        <div>
            {/* <!-- Topbar Start --> */}
            <div className="container-fluid">
                <div className="row bg-secondary py-1 px-xl-5">
                    <div className="col-lg-6 d-none d-lg-block">
                        <div className="d-inline-flex align-items-center h-100">
                            <a className="text-body mr-3" href="/">
                                About
                            </a>
                            <a className="text-body mr-3" href="/">
                                Contact
                            </a>
                            <a className="text-body mr-3" href="/">
                                Help
                            </a>
                            <a className="text-body mr-3" href="/">
                                FAQs
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                        <div className="d-flex justify-content-end">
                            <Dropdown className="bg-white border-0">
                                <Dropdown.Toggle
                                    variant=""
                                    id="dropdown-basic"
                                    className=" border-0"
                                >
                                    My Account
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/">
                                        Sign in
                                    </Dropdown.Item>
                                    <Dropdown.Item href="/">
                                        Sign up
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown className="mx-2 bg-white">
                                <Dropdown.Toggle
                                    variant=""
                                    id="dropdown-basic"
                                    className="border-0"
                                >
                                    USD
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">
                                        EUR
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">
                                        GBP
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        CAD
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown className="bg-white">
                                <Dropdown.Toggle
                                    variant=""
                                    id="dropdown-basic"
                                    className="border-0"
                                >
                                    EN
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">
                                        FR
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">
                                        AR
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        RU
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                        <div className="d-inline-flex align-items-center d-block d-lg-none">
                            <a href="/" className="btn px-0 ml-2">
                                <i className="fas fa-heart text-dark"></i>
                                <span
                                    className="badge text-dark border border-dark rounded-circle"
                                    style={{ paddingBottom: '2px' }}
                                >
                                    0
                                </span>
                            </a>
                            <a href="/" className="btn px-0 ml-2">
                                <i className="fas fa-shopping-cart text-dark"></i>
                                <span
                                    className="badge text-dark border border-dark rounded-circle"
                                    style={{ paddingBottom: '2px' }}
                                >
                                    0
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
                    <div className="col-lg-4">
                        <a href="/" className="text-decoration-none">
                            <span className="h1 text-uppercase  bg-dark px-2 navSpan1">
                                Multi
                            </span>
                            <span className="h1 text-uppercase text-dark px-2 ml-n1 navSpan2">
                                Shop
                            </span>
                        </a>
                    </div>
                    <div className="col-lg-4 col-6 text-left">
                        <form action="">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search for products"
                                />
                                <div className="input-group-append">
                                    <span className="input-group-text bg-transparent text-primary">
                                        <i className="fa fa-search"></i>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4 col-6 text-right">
                        <p className="m-0">Customer Service</p>
                        <h5 className="m-0">+012 345 6789</h5>
                    </div>
                </div>
            </div>
            {/* <!-- Topbar End --> */}

            {/* <!-- Navbar Start --> */}
            <div className="container-fluid bg-dark mb-30">
                <div className="row px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <a
                            className="btn d-flex align-items-center justify-content-between navSpan2 w-100"
                            data-toggle="collapse"
                            href="#navbar-vertical"
                            style={{ height: '65px', padding: '0 30px' }}
                        >
                            <h6 className="text-dark m-0">
                                <i className="fa fa-bars mr-2"></i>Categories
                            </h6>
                            <i className="fa fa-angle-down text-dark"></i>
                        </a>
                        <nav
                            className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
                            id="navbar-vertical"
                            style={{
                                width: 'calc(100% - 30px)',
                                zIndex: '999',
                            }}
                        >
                            <div className="navbar-nav w-100">
                                <div className="nav-item dropdown dropright">
                                    <a
                                        href="/"
                                        className="nav-link dropdown-toggle"
                                        data-toggle="dropdown"
                                    >
                                        Dresses{' '}
                                        <i className="fa fa-angle-right float-right mt-1"></i>
                                    </a>
                                    <div className="dropdown-menu position-absolute rounded-0 border-0 m-0">
                                        <a href="/" className="dropdown-item">
                                            Men's Dresses
                                        </a>
                                        <a href="/" className="dropdown-item">
                                            Women's Dresses
                                        </a>
                                        <a href="/" className="dropdown-item">
                                            Baby's Dresses
                                        </a>
                                    </div>
                                </div>
                                <a href="/" className="nav-item nav-link">
                                    Shirts
                                </a>
                                <a href="/" className="nav-item nav-link">
                                    Jeans
                                </a>
                                <a href="/" className="nav-item nav-link">
                                    Swimwear
                                </a>
                                <a href="/" className="nav-item nav-link">
                                    Sleepwear
                                </a>
                                <a href="/" className="nav-item nav-link">
                                    Sportswear
                                </a>
                                <a href="/" className="nav-item nav-link">
                                    Jumpsuits
                                </a>
                                <a href="/" className="nav-item nav-link">
                                    Blazers
                                </a>
                                <a href="/" className="nav-item nav-link">
                                    Jackets
                                </a>
                                <a href="/" className="nav-item nav-link">
                                    Shoes
                                </a>
                            </div>
                        </nav>
                    </div>
                    <div className="col-lg-9">
                        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                            <a
                                href="/"
                                className="text-decoration-none d-block d-lg-none"
                            >
                                <span className="h1 text-uppercase text-dark bg-light px-2">
                                    Multi
                                </span>
                                <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">
                                    Shop
                                </span>
                            </a>
                            <button
                                type="button"
                                className="navbar-toggler"
                                data-toggle="collapse"
                                data-target="#navbarCollapse"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div
                                className="collapse navbar-collapse justify-content-between"
                                id="navbarCollapse"
                            >
                                <div className="navbar-nav mr-auto py-0">
                                    <Link
                                        className="nav-item nav-link active"
                                        to="/"
                                    >
                                        Home
                                    </Link>

                                    <Link
                                        className="nav-item nav-link "
                                        to="/shop"
                                    >
                                        Shop
                                    </Link>

                                    <Link
                                        className="nav-item nav-link "
                                        to="/shopDetails"
                                    >
                                        Shop Details
                                    </Link>

                                    <NavDropdown
                                        title="Pages"
                                        id="basic-nav-dropdown"
                                        className=""
                                    >
                                        <div className="bg-bg-warning">
                                            <NavDropdown.Item className="">
                                                <Link to="/cart" className="">
                                                    Shopping Cart
                                                </Link>
                                            </NavDropdown.Item>

                                            <NavDropdown.Item>
                                                <Link to="/checkout">
                                                    Checkout
                                                </Link>
                                            </NavDropdown.Item>
                                        </div>
                                    </NavDropdown>

                                    <Link
                                        className="nav-item nav-link "
                                        to="/contactUs"
                                    >
                                        Contact
                                    </Link>
                                </div>
                                <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                                    <a href="/" className="btn px-0">
                                        <i className="fas fa-heart text-primary"></i>
                                        <span
                                            className="badge text-secondary border border-secondary rounded-circle"
                                            style={{ paddingBottom: '2px' }}
                                        >
                                            {data.addToWishlist}
                                        </span>
                                    </a>
                                    <Link to="/cart" className="btn px-0 ml-3">
                                        <i className="fas fa-shopping-cart text-primary"></i>
                                        <span
                                            className="badge text-secondary border border-secondary rounded-circle"
                                            style={{ paddingBottom: '2px' }}
                                        >
                                            {data.addToCart}
                                            {/* {console.log({data.addToCart})} */}
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            {/* <!-- Navbar End --> */}
        </div>
    );
};

export default NavBar;
