import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decBtnA, incBtnA } from '../../../Rdux/Action/Action';

const CartCard = ({ cartData }) => {
    const dispatch = useDispatch();
    

    const IncBtn = () => {
        dispatch(incBtnA(cartData.productId));
    };
    const decBtn=()=>{
        dispatch(decBtnA(cartData.productId));
    }
    const Total = () => {
        return parseInt(cartData.productPrice) * cartData.productQuantity;
    };
    return (
        <>
            {/* <tr> */}
            <td className="align-middle">
                <img
                    src={cartData.productImage}
                    alt=""
                    style={{ width: '50px' }}
                />{' '}
                {cartData.productName}
            </td>
            <td className="align-middle">${cartData.productPrice}</td>
            <td className="align-middle">
                <div
                    className="input-group quantity mx-auto"
                    style={{ width: '100px' }}
                >
                    <div className="input-group-btn">
                        <button
                            className="btn btn-sm btn-primary btn-minus"
                            onClick={decBtn}
                        >
                            <i className="fa fa-minus"></i>
                        </button>
                    </div>
                    <input
                        type="text"
                        className="form-control form-control-sm bg-secondary border-0 text-center"
                        value={cartData.productQuantity}
                    />
                    <div className="input-group-btn">
                        <button
                            className="btn btn-sm btn-primary btn-plus"
                            onClick={IncBtn}
                        >
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
            </td>
            <td className="align-middle">${Total()}</td>
            <td className="align-middle">
                <button className="btn btn-sm btn-danger">
                    <i className="fa fa-times"></i>
                </button>
            </td>
            {/* </tr> */}
        </>
    );
};

export default CartCard;
