import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import AddressCard from './AddressCard';

function ADDRESS() {
    const fName = useRef();
    const lName = useRef();
    const email = useRef();
    const mNumber = useRef();
    const A1 = useRef();
    const A2 = useRef();
    const city = useRef();
    const state = useRef();
    const zipCode = useRef();
    const data = useSelector((state) => state.ActionReducer.products);

    const subTotal = () => {
        let subTotalData = 0;

        data.map((item) => {
            subTotalData += parseInt(item.productPrice) * item.productQuantity;
        });
        return subTotalData;
    };
    const placeOrder = () => {
        console.log(`First Name: ${fName.current.value}`);
        console.log(`Last Name: ${lName.current.value}`);
        console.log(`Email: ${email.current.value}`);
        console.log(`Mobile Number: ${mNumber.current.value}`);
        console.log(`Address Line1: ${A1.current.value}`);
        console.log(`Address Line2 : ${A2.current.value}`);
        console.log(`City: ${city.current.value}`);
        console.log(`State: ${state.current.value}`);
        console.log(`Zip Code: ${zipCode.current.value}`);
        console.log(`Total Amount: ${data.length === 0 ? 0 : subTotal() + 10}`);
    };

    return (
        <div>
            {/* <!-- Checkout Start --> */}
            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-lg-8">
                        <h5 className="section-title position-relative text-uppercase mb-3">
                            <span className="bg-secondary pr-3">
                                Billing Address
                            </span>
                        </h5>
                        <div className="bg-light p-30 mb-5">
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <label>First Name</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Enter your first name"
                                        ref={fName}
                                    />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Last Name</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Enter your last name"
                                        ref={lName}
                                    />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>E-mail</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Enter your email"
                                        ref={email}
                                    />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Mobile No</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="enter your mobile number"
                                        ref={mNumber}
                                    />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Address Line 1</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Enter your adderss line 1"
                                        ref={A1}
                                    />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Address Line 2</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Enter your address line 2"
                                        ref={A2}
                                    />
                                </div>

                                <div className="col-md-6 form-group">
                                    <label>Country</label>
                                    <select
                                        className="custom-select"
                                        name="Country"
                                    >
                                        <option value="india">India</option>
                                        <option value="Afganistan">
                                            Afghanistan
                                        </option>
                                        <option value="albania">Albania</option>
                                        <option value="alreria">Algeria</option>
                                    </select>
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>City</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Enter your city"
                                        ref={city}
                                    />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>State</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Enter your state"
                                        ref={state}
                                    />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>ZIP Code</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Enter your zip code"
                                        ref={zipCode}
                                    />
                                </div>
                                <div className="col-md-12 form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="newaccount"
                                        />
                                        <label
                                            className="custom-control-label"
                                            htmlFor="newaccount"
                                        >
                                            Create an account
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="shipto"
                                        />
                                        <label
                                            className="custom-control-label"
                                            htmlFor="shipto"
                                            data-toggle="collapse"
                                            data-target="#shipping-address"
                                        >
                                            Ship to different address
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="collapse mb-5" id="shipping-address">
                            <h5 className="section-title position-relative text-uppercase mb-3">
                                <span className="bg-secondary pr-3">
                                    Shipping Address
                                </span>
                            </h5>
                            <div className="bg-light p-30">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <label>First Name</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>Last Name</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Doe"
                                        />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>E-mail</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="example@email.com"
                                        />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>Mobile No</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="+123 456 789"
                                        />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>Address Line 1</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="123 Street"
                                        />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>Address Line 2</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="123 Street"
                                        />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>Country</label>
                                        <select className="custom-select">
                                            <option selected>
                                                United States
                                            </option>
                                            <option>Afghanistan</option>
                                            <option>Albania</option>
                                            <option>Algeria</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>City</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="New York"
                                        />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>State</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="New York"
                                        />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>ZIP Code</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="123"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <h5 className="section-title position-relative text-uppercase mb-3">
                            <span className="bg-secondary pr-3">
                                Order Total
                            </span>
                        </h5>
                        <div className="bg-light p-30 mb-5">
                            {data.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <AddressCard productData={item} />
                                    </div>
                                );
                            })}

                            <div className="border-bottom">
                                <h6 className="mb-3">Products</h6>
                            </div>
                            <div className="border-bottom pt-3 pb-2">
                                <div className="d-flex justify-content-between mb-3">
                                    <h6>Subtotal</h6>
                                    <h6>${subTotal()}</h6>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-medium">
                                        Shipping
                                    </h6>
                                    <h6 className="font-weight-medium">
                                        ${data.length === 0 ? 0 : 10}
                                    </h6>
                                </div>
                            </div>
                            <div className="pt-2">
                                <div className="d-flex justify-content-between mt-2">
                                    <h5>Total</h5>
                                    <h5>
                                        $
                                        {data.length === 0
                                            ? 0
                                            : subTotal() + 10}
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="mb-5">
                            <h5 className="section-title position-relative text-uppercase mb-3">
                                <span className="bg-secondary pr-3">
                                    Payment
                                </span>
                            </h5>
                            <div className="bg-light p-30">
                                <div className="form-group">
                                    <div className="custom-control custom-radio">
                                        <input
                                            type="radio"
                                            className="custom-control-input"
                                            name="payment"
                                            id="paypal"
                                        />
                                        <label
                                            className="custom-control-label"
                                            htmlFor="paypal"
                                        >
                                            Paypal
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="custom-control custom-radio">
                                        <input
                                            type="radio"
                                            className="custom-control-input"
                                            name="payment"
                                            id="directcheck"
                                        />
                                        <label
                                            className="custom-control-label"
                                            htmlFor="directcheck"
                                        >
                                            Direct Check
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group mb-4">
                                    <div className="custom-control custom-radio">
                                        <input
                                            type="radio"
                                            className="custom-control-input"
                                            name="payment"
                                            id="banktransfer"
                                        />
                                        <label
                                            className="custom-control-label"
                                            htmlFor="banktransfer"
                                        >
                                            Bank Transfer
                                        </label>
                                    </div>
                                </div>
                                <button
                                    className="btn btn-block btn-primary font-weight-bold py-3"
                                    onClick={placeOrder}
                                >
                                    Place Order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Checkout End --> */}
        </div>
    );
}

export default ADDRESS;
