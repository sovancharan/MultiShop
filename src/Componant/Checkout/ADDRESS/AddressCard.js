import React from 'react';

const AddressCard = ({ productData }) => {
   
    return (
        <>
            
                <div className="d-flex justify-content-between">
                    <p>{productData.productName}</p>
                    <p>$ {productData.productPrice}</p>
                </div>
           
        </>
    );
};

export default AddressCard;
