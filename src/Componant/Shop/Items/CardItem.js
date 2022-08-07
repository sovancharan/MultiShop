import React from 'react';
import { Link } from 'react-router-dom';
import { addToCart, addToWishlist } from '../../../Rdux/Action/Action';
import { useDispatch } from 'react-redux/es/exports';

const CardItem = ({ shopListProduct }) => {
    const dispatch = useDispatch();

    const cart = () => {
        console.log(shopListProduct);
        dispatch(
            addToCart(
                shopListProduct.shopingProductId,

                shopListProduct.shopingProductName,
                shopListProduct.shopinigProductImg,

                shopListProduct.shopingProductPrice,
                shopListProduct.shopingProductRateing,
                shopListProduct.shopingProductQuantity
            )
        );
    };
    const wishList = () => {
        dispatch(addToWishlist());
    };
    return (
        <>
            {/* <div className="col-lg-4 col-md-6 col-sm-6 pb-1"> */}
            <div className="product-item bg-light mb-4">
                <div className="product-img position-relative overflow-hidden">
                    <img
                        className="img-fluid w-100"
                        src={shopListProduct.shopinigProductImg}
                        alt=""
                    />
                    <div className="product-action">
                        <Link
                            className="btn btn-outline-dark btn-square"
                            onClick={cart}
                            to=""
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
                        <a className="btn btn-outline-dark btn-square" href="/">
                            <i className="fa fa-sync-alt"></i>
                        </a>
                        <a className="btn btn-outline-dark btn-square" href="/">
                            <i className="fa fa-search"></i>
                        </a>
                    </div>
                </div>
                <div className="text-center py-4">
                    <a
                        className="h6 text-decoration-none text-truncate"
                        href="/"
                    >
                        {shopListProduct.shopingProductName}
                    </a>
                    <div className="d-flex align-items-center justify-content-center mt-2">
                        <h5>{shopListProduct.shopingProductPrice}</h5>
                        <h6 className="text-muted ml-2">
                            <del>$123</del>
                        </h6>
                    </div>
                    <div className="d-flex align-items-center justify-content-center mb-1">
                        <small className="fa fa-star text-primary mr-1"></small>
                        <small className="fa fa-star text-primary mr-1"></small>
                        <small className="fa fa-star text-primary mr-1"></small>
                        <small className="fa fa-star text-primary mr-1"></small>
                        <small className="fa fa-star text-primary mr-1"></small>
                        <small>({shopListProduct.shopingProductRateing})</small>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    );
};

export default CardItem;
