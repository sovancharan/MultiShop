import React from 'react'
import FeaturesProductCard from './FeaturesProductCard';
import ProductData from "../../../Data/ProductData.json"

const FeaturedProduct = () => {
  return (
      <div>
          {/* <!-- Products Start --> */}
          <div className="container-fluid pt-5 pb-3">
              <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
                  <span className="bg-secondary pr-3">Featured Products</span>
              </h2>
              <div className="row px-xl-5">
                  
                 {ProductData.FerturedProduct.map((item,index)=>{
                       
                        return (
                            <div
                                className="col-lg-3 col-md-4 col-sm-6 pb-1"
                                key={index}
                            >
                                <FeaturesProductCard product={item}/>
                            </div>
                        );
                 })}
              </div>
          </div>
          {/* <!-- Products End --> */}
      </div>
  );
}

export default FeaturedProduct