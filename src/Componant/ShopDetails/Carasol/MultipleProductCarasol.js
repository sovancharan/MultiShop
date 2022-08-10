import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container } from 'react-bootstrap';
// import CarasolData from '../../../Data/ProductData.json';
import MultipleProductcarasolComponant from './MultipleProductcarasolComponant';

const MultipleProductCarasol = ({ multipleProduct }) => {
    var settings = {
        //       dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
    };
    return (
        <Container className="pt-5 g-0">
            <Slider {...settings}>
                {multipleProduct.FerturedProduct.map((item, index) => {
                    return (
                        <div key={index}>
                            <MultipleProductcarasolComponant
                                productData={item}
                            />
                        </div>
                    );
                })}

                {/* <div>
                  <div class="product-item bg-light">
                      <div class="product-img position-relative overflow-hidden">
                          <img
                              class="img-fluid w-75"
                              src="/static/img/product-1.jpg"
                              alt=""
                          />
                          <div class="product-action">
                              <a
                                  class="btn btn-outline-dark btn-square"
                                  href="/"
                              >
                                  <i class="fa fa-shopping-cart"></i>
                              </a>
                              <a
                                  class="btn btn-outline-dark btn-square"
                                  href="/"
                              >
                                  <i class="far fa-heart"></i>
                              </a>
                              <a
                                  class="btn btn-outline-dark btn-square"
                                  href="/"
                              >
                                  <i class="fa fa-sync-alt"></i>
                              </a>
                              <a
                                  class="btn btn-outline-dark btn-square"
                                  href="/"
                              >
                                  <i class="fa fa-search"></i>
                              </a>
                          </div>
                      </div>
                      <div class="text-center py-4">
                          <a
                              class="h6 text-decoration-none text-truncate"
                              href="/"
                          >
                              Product Name Goes Here
                          </a>
                          <div class="d-flex align-items-center justify-content-center mt-2">
                              <h5>$123.00</h5>
                              <h6 class="text-muted ml-2">
                                  <del>$123.00</del>
                              </h6>
                          </div>
                          <div class="d-flex align-items-center justify-content-center mb-1">
                              <small class="fa fa-star text-primary mr-1"></small>
                              <small class="fa fa-star text-primary mr-1"></small>
                              <small class="fa fa-star text-primary mr-1"></small>
                              <small class="fa fa-star text-primary mr-1"></small>
                              <small class="fa fa-star text-primary mr-1"></small>
                              <small>(99)</small>
                          </div>
                      </div>
                  </div>
              </div> */}
                {/* <div>
                  <div class="product-item bg-light">
                      <div class="product-img position-relative overflow-hidden">
                          <img
                              class="img-fluid w-75"
                              src="/static/img/product-2.jpg"
                              alt=""
                          />
                          <div class="product-action">
                              <a
                                  class="btn btn-outline-dark btn-square"
                                  href="/"
                              >
                                  <i class="fa fa-shopping-cart"></i>
                              </a>
                              <a
                                  class="btn btn-outline-dark btn-square"
                                  href="/"
                              >
                                  <i class="far fa-heart"></i>
                              </a>
                              <a
                                  class="btn btn-outline-dark btn-square"
                                  href="/"
                              >
                                  <i class="fa fa-sync-alt"></i>
                              </a>
                              <a
                                  class="btn btn-outline-dark btn-square"
                                  href="/"
                              >
                                  <i class="fa fa-search"></i>
                              </a>
                          </div>
                      </div>
                      <div class="text-center py-4">
                          <a
                              class="h6 text-decoration-none text-truncate"
                              href="/"
                          >
                              Product Name Goes Here
                          </a>
                          <div class="d-flex align-items-center justify-content-center mt-2">
                              <h5>$123.00</h5>
                              <h6 class="text-muted ml-2">
                                  <del>$123.00</del>
                              </h6>
                          </div>
                          <div class="d-flex align-items-center justify-content-center mb-1">
                              <small class="fa fa-star text-primary mr-1"></small>
                              <small class="fa fa-star text-primary mr-1"></small>
                              <small class="fa fa-star text-primary mr-1"></small>
                              <small class="fa fa-star text-primary mr-1"></small>
                              <small class="fa fa-star text-primary mr-1"></small>
                              <small>(99)</small>
                          </div>
                      </div>
                  </div>
              </div> */}
                {/* <div>
                  <div class="product-item bg-light">
                      <div class="product-img position-relative overflow-hidden">
                          <img
                              class="img-fluid w-75"
                              src="/static/img/product-3.jpg"
                              alt=""
                          />
                          <div class="product-action">
                              <a
                                  class="btn btn-outline-dark btn-square"
                                  href="/"
                              >
                                  <i class="fa fa-shopping-cart"></i>
                              </a>
                              <a
                                  class="btn btn-outline-dark btn-square"
                                  href="/"
                              >
                                  <i class="far fa-heart"></i>
                              </a>
                              <a
                                  class="btn btn-outline-dark btn-square"
                                  href="/"
                              >
                                  <i class="fa fa-sync-alt"></i>
                              </a>
                              <a
                                  class="btn btn-outline-dark btn-square"
                                  href="/"
                              >
                                  <i class="fa fa-search"></i>
                              </a>
                          </div>
                      </div>
                      <div class="text-center py-4">
                          <a
                              class="h6 text-decoration-none text-truncate"
                              href="/"
                          >
                              Product Name Goes Here
                          </a>
                          <div class="d-flex align-items-center justify-content-center mt-2">
                              <h5>$123.00</h5>
                              <h6 class="text-muted ml-2">
                                  <del>$123.00</del>
                              </h6>
                          </div>
                          <div class="d-flex align-items-center justify-content-center mb-1">
                              <small class="fa fa-star text-primary mr-1"></small>
                              <small class="fa fa-star text-primary mr-1"></small>
                              <small class="fa fa-star text-primary mr-1"></small>
                              <small class="fa fa-star text-primary mr-1"></small>
                              <small class="fa fa-star text-primary mr-1"></small>
                              <small>(99)</small>
                          </div>
                      </div>
                  </div>
              </div> */}
                {/* <div>
                  <div class="product-item bg-light">
                      <div class="product-img position-relative overflow-hidden">
                          <img
                              class="img-fluid w-75"
                              src="/static/img/product-4.jpg"
                              alt=""
                          />
                          <div class="product-action">
                              <a
                                  class="btn btn-outline-dark btn-square"
                                  href="/"
                              >
                                  <i class="fa fa-shopping-cart"></i>
                              </a>
                              <a
                                  class="btn btn-outline-dark btn-square"
                                  href="/"
                              >
                                  <i class="far fa-heart"></i>
                              </a>
                              <a
                                  class="btn btn-outline-dark btn-square"
                                  href="/"
                              >
                                  <i class="fa fa-sync-alt"></i>
                              </a>
                              <a
                                  class="btn btn-outline-dark btn-square"
                                  href="/"
                              >
                                  <i class="fa fa-search"></i>
                              </a>
                          </div>
                      </div>
                      <div class="text-center py-4">
                          <a
                              class="h6 text-decoration-none text-truncate"
                              href="/"
                          >
                              Product Name Goes Here
                          </a>
                          <div class="d-flex align-items-center justify-content-center mt-2">
                              <h5>$123.00</h5>
                              <h6 class="text-muted ml-2">
                                  <del>$123.00</del>
                              </h6>
                          </div>
                          <div class="d-flex align-items-center justify-content-center mb-1">
                              <small class="fa fa-star text-primary mr-1"></small>
                              <small class="fa fa-star text-primary mr-1"></small>
                              <small class="fa fa-star text-primary mr-1"></small>
                              <small class="fa fa-star text-primary mr-1"></small>
                              <small class="fa fa-star text-primary mr-1"></small>
                              <small>(99)</small>
                          </div>
                      </div>
                  </div>
              </div> */}
                {/* <div>
                  <div class="product-item bg-light">
                      <div class="product-img position-relative overflow-hidden">
                          <img
                              class="img-fluid w-75"
                              src="/static/img/product-5.jpg"
                              alt=""
                          />
                          <div class="product-action">
                              <a
                                  class="btn btn-outline-dark btn-square"
                                  href="/"
                              >
                                  <i class="fa fa-shopping-cart"></i>
                              </a>
                              <a
                                  class="btn btn-outline-dark btn-square"
                                  href="/"
                              >
                                  <i class="far fa-heart"></i>
                              </a>
                              <a
                                  class="btn btn-outline-dark btn-square"
                                  href="/"
                              >
                                  <i class="fa fa-sync-alt"></i>
                              </a>
                              <a
                                  class="btn btn-outline-dark btn-square"
                                  href="/"
                              >
                                  <i class="fa fa-search"></i>
                              </a>
                          </div>
                      </div>
                      <div class="text-center py-4">
                          <a
                              class="h6 text-decoration-none text-truncate"
                              href="/"
                          >
                              Product Name Goes Here
                          </a>
                          <div class="d-flex align-items-center justify-content-center mt-2">
                              <h5>$123.00</h5>
                              <h6 class="text-muted ml-2">
                                  <del>$123.00</del>
                              </h6>
                          </div>
                          <div class="d-flex align-items-center justify-content-center mb-1">
                              <small class="fa fa-star text-primary mr-1"></small>
                              <small class="fa fa-star text-primary mr-1"></small>
                              <small class="fa fa-star text-primary mr-1"></small>
                              <small class="fa fa-star text-primary mr-1"></small>
                              <small class="fa fa-star text-primary mr-1"></small>
                              <small>(99)</small>
                          </div>
                      </div>
                  </div>
              </div> */}
            </Slider>
        </Container>
    );
};

export default MultipleProductCarasol;
