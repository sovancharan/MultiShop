import React from 'react';

const ShippingDifferentAddress = () => {
    return (
        <>
            <div className="mt-5 mb-5" id="shipping-address">
                <h5 className="section-title position-relative text-uppercase mb-3">
                    <span className="bg-secondary pr-3">Shipping Address</span>
                </h5>
                <div className="bg-light p-30">
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label>First Name</label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Enter your first name"
                            />
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Last Name</label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Enter your last name"
                            />
                        </div>
                        <div className="col-md-6 form-group">
                            <label>E-mail</label>
                            <input
                                className="form-control"
                                type="email"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Mobile No</label>
                            <input
                                className="form-control"
                                type="number"
                                placeholder="Enter your mobile number"
                            />
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Address Line 1</label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Enter your Address Line 1"
                            />
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Address Line 2</label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Enter your Address Line 2"
                            />
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Country</label>
                            <select className="custom-select">
                                <option selected>United States</option>
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
                                placeholder="Enter your city"
                            />
                        </div>
                        <div className="col-md-6 form-group">
                            <label>State</label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Enter your state"
                            />
                        </div>
                        <div className="col-md-6 form-group">
                            <label>ZIP Code</label>
                            <input
                                className="form-control"
                                type="number"
                                placeholder="Enter your zip code"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShippingDifferentAddress;
