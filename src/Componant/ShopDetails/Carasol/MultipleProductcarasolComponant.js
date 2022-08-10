import React from 'react';
import { Link } from 'react-router-dom';
import { addToCart, addToWishlist } from '../../../Rdux/Action/Action';
import { useDispatch } from 'react-redux';

const MultipleProductcarasolComponant = ({ productData }) => {
       const dispatch = useDispatch();

       const cart = () => {
           dispatch(
               addToCart(
                   productData.productId,
                   productData.productName,
                   productData.productImage,
                   productData.productPrice,
                   productData.productRateing,
                   productData.productQuantity
               )
           );
       };

       const wishList = () => {
           dispatch(addToWishlist());
       };

    return (
        <div className="product-item bg-light">
            <div className="product-img position-relative overflow-hidden">
                <img
                    className="img-fluid w-75"
                    src={productData.productImage}
                    alt=""
                />
                <div className="product-action">
                    <Link
                        className="btn btn-outline-dark btn-square"
                        to=""
                        onClick={cart}
                    >
                        <i className="fa fa-shopping-cart"></i>
                    </Link>
                    <Link
                        className="btn btn-outline-dark btn-square"
                        to=""
                        onClick={wishList}
                    >
                        <i className="far fa-heart"></i>
                    </Link>
                    <Link className="btn btn-outline-dark btn-square" to="/">
                        <i className="fa fa-sync-alt"></i>
                    </Link>
                    <Link className="btn btn-outline-dark btn-square" to="/">
                        <i className="fa fa-search"></i>
                    </Link>
                </div>
            </div>
            <div className="text-center py-4">
                <Link className="h6 text-decoration-none text-truncate" to="/">
                    Product Name Goes Here
                </Link>
                <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5>$123.00</h5>
                    <h6 className="text-muted ml-2">
                        <del>$123.00</del>
                    </h6>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                    <small className="fa fa-star text-primary mr-1"></small>
                    <small className="fa fa-star text-primary mr-1"></small>
                    <small className="fa fa-star text-primary mr-1"></small>
                    <small className="fa fa-star text-primary mr-1"></small>
                    <small className="fa fa-star text-primary mr-1"></small>
                    <small>(99)</small>
                </div>
            </div>
        </div>
    );
};

export default MultipleProductcarasolComponant;
