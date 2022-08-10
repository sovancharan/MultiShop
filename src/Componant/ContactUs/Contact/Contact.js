import React from 'react';

const Contact = () => {
    return (
        <div>
            {/* <!-- Contact Start --> */}
            <div className="container-fluid">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
                    <span className="bg-secondary pr-3">Contact Us</span>
                </h2>
                <div className="row px-xl-5">
                    <div className="col-lg-7 mb-5">
                        <div className="contact-form bg-light p-30">
                            <div id="success"></div>
                            <form
                                name="sentMessage"
                                id="contactForm"
                                // novalidate="novalidate"
                            >
                                <div className="control-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Your Name"
                                        required="required"
                                        data-validation-required-message="Please enter your name"
                                    />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Your Email"
                                        required="required"
                                        data-validation-required-message="Please enter your email"
                                    />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="subject"
                                        placeholder="Subject"
                                        required="required"
                                        data-validation-required-message="Please enter a subject"
                                    />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <textarea
                                        className="form-control"
                                        rows="8"
                                        id="message"
                                        placeholder="Message"
                                        required="required"
                                        data-validation-required-message="Please enter your message"
                                    ></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div>
                                    <button
                                        className="btn btn-primary py-2 px-4"
                                        type="submit"
                                        id="sendMessageButton"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-5 mb-5">
                        <div className="bg-light p-30 mb-30">
                            <iframe title='my_Map'
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6912532.961290727!2d49.1916915706487!3d32.224158771670105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef7ec2ec16b1df1%3A0x40b095d39e51face!2sIran!5e0!3m2!1sen!2snl!4v1651148400254!5m2!1sen!2snl"
                                width="600"
                                height="420"
                                style={{ border: 0 }} //<-------
                                // allowFullscreen="" //<-------
                                loading="true"
                                referrerPolicy="no-referrer-when-downgrade" //<-------
                            ></iframe>
                            {/* <iframe style={{width: "100%", height: "250px"}}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                    frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> */}

                            {/* <iframe
                src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3888.211763521468!2d77.6152016!3d12.9582971!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15605263ebe3%3A0x4067d9247ec36adf!2sERIP!5e0!3m2!1sen!2sin!4v1659006780823!5m2!1sen!2sin'
                width='100%'
                height='100%'
                // style='border:0;'
                // allowfullscreen=''
                loading='lazy'
                // referrerpolicy='no-referrer-when-downgrade'
              ></iframe> */}
                        </div>
                        <div className="bg-light p-30 mb-3">
                            <p className="mb-2">
                                <i className="fa fa-map-marker-alt text-primary mr-3"></i>
                                123 Street, New York, USA
                            </p>
                            <p className="mb-2">
                                <i className="fa fa-envelope text-primary mr-3"></i>
                                info@example.com
                            </p>
                            <p className="mb-2">
                                <i className="fa fa-phone-alt text-primary mr-3"></i>
                                +012 345 67890
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Contact End --> */}
        </div>
    );
};

export default Contact;
