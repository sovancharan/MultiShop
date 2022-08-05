import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, addToWishlist } from '../../../Rdux/Action/Action';

const FeaturesProductCard = ({ product }) => {
    // useEffect(() => {
    //     const data = useSelector((state) => state.ActionReducer.list);
    //     console.log('data', data.addToCart);
    // }, [data])

    const data = useSelector((state) => state.ActionReducer.list);
    const dispatch = useDispatch();

    const cart = () => {
        dispatch(addToCart());
        console.log('Cart', data);
    };
    const wishList=()=>{
        dispatch(addToWishlist())
        console.log("WishList",data);
    }

    return (
        <>
            {/* <div className="col-lg-3 col-md-4 col-sm-6 pb-1"> */}
            <div className="product-item bg-light mb-4">
                <div className="product-img position-relative overflow-hidden">
                    <img
                        className="img-fluid w-100"
                        src={product.productImage}
                        alt=""
                    />
                    <div className="product-action">
                        <a
                            className="btn btn-outline-dark btn-square"
                            onClick={cart}
                        >
                            <i className="fa fa-shopping-cart"></i>
                        </a>
                        <a className="btn btn-outline-dark btn-square" 
                        onClick={wishList}
                        >
                            <i className="far fa-heart"></i>
                        </a>
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
                        {product.productName}
                    </a>
                    <div className="d-flex align-items-center justify-content-center mt-2">
                        <h5>${product.productPrice}</h5>
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
                        <small>({product.productRateing})</small>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    );
};

export default FeaturesProductCard;
