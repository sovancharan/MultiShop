import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import CartCard from './CartCard';
import { Link } from 'react-router-dom';

const Cart = () => {
    const data = useSelector((state) => state.ActionReducer);

    const subTotal = () => {
        let subTotalData = 0;
        data.products.map((item) => {
            subTotalData +=
                parseInt(item.productPrice) * parseInt(item.productQuantity);
        });
        return subTotalData;
    };

    return (
        <div>
            {/* <!-- Cart Start --> */}
            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-lg-8 table-responsive mb-5">
                        <table className="table table-light table-borderless table-hover text-center mb-0">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Products</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody className="align-middle">
                                {data.products.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <CartCard cartData={item} />
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-4">
                        <form className="mb-30" action="">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control border-0 p-4"
                                    placeholder="Coupon Code"
                                />
                                <div className="input-group-append">
                                    <button className="btn btn-primary">
                                        Apply Coupon
                                    </button>
                                </div>
                            </div>
                        </form>
                        <h5 className="section-title position-relative text-uppercase mb-3">
                            <span className="bg-secondary pr-3">
                                Cart Summary
                            </span>
                        </h5>
                        <div className="bg-light p-30 mb-5">
                            <div className="border-bottom pb-2">
                                <div className="d-flex justify-content-between mb-3">
                                    <h6>Subtotal</h6>
                                    <h6>${subTotal()}</h6>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-medium">
                                        Shipping
                                    </h6>
                                    <h6 className="font-weight-medium">
                                        ${data.products.length === 0 ? 0 : 10}
                                    </h6>
                                </div>
                            </div>
                            <div className="pt-2">
                                <div className="d-flex justify-content-between mt-2">
                                    <h5>Total</h5>
                                    <h5>
                                        $
                                        {data.products.length === 0
                                            ? 0
                                            : subTotal() + 10}
                                    </h5>
                                </div>
                                <Link to="/checkout">
                                    <button className="btn btn-block btn-primary font-weight-bold my-3 py-3">
                                        Proceed To Checkout
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Cart End --> */}
        </div>
    );
};

export default Cart;
