import React from 'react'
import ProductData from "../../../Data/ProductData.json"
import CatagoriesCard from './CatagoriesCard';

const Categories = () => {
  return (
      <div>
          {/* <!-- Categories Start --> */}
          <div className="container-fluid pt-5">
              <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
                  <span className="bg-secondary pr-3">Categories</span>
              </h2>
              <div className="row px-xl-5 pb-3">
                  {ProductData.CATEGORIES.map((item,index)=>{
                      
                        return(
                                <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={index}>
                              <CatagoriesCard catagories={item}/>
                              </div>
                        )
                })}
              </div>
          </div>
          {/* <!-- Categories End --> */}
      </div>
  );
}

export default Categories