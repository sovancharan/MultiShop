import React from 'react'
import OfferCard from './OfferCard';
import ProductData from "../../../Data/ProductData.json"

const Offer = () => {
  return (
      <div>
          {/* <!-- Offer Start --> */}
          <div className="container-fluid pt-5 pb-3">
              <div className="row px-xl-5">
                {
                        ProductData.Offer.map((item,index)=>{
                                return (
                                    <div className="col-md-6" key={index}>
                                        <OfferCard offer={item} />
                                    </div>
                                );
                        })
                }
                
              </div>
          </div>
          {/* <!-- Offer End --> */}
      </div>
  );
}

export default Offer