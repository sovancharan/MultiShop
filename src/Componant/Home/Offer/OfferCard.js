import React from 'react'

const OfferCard = ({offer}) => {
      
  return (
      <>
          {/* <div className="col-md-6"> */}
          <div className="product-offer mb-30" style={{ height: '300px' }}>
              <img className="img-fluid" src={offer.OfferImg} alt="" />
              <div className="offer-text">
                  <h6 className="text-white text-uppercase">
                      Save {offer.SaveAmount}
                  </h6>
                  <h3 className="text-white mb-3">{offer.offerDescription}</h3>
                  <a href="/" className="btn btn-primary">
                      Shop Now
                  </a>
              </div>
          </div>
          {/* </div> */}
      </>
  );
}

export default OfferCard