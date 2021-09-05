import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <section id="contact" className="contact-area ptb-100 bg-f9f9f9">
                <div className="container">
                    <div className="section-title">
                        <h2>Contact Us</h2>
                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-12">
                            <form id="contactForm">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input type="text" className="form-control" required={true} />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" className="form-control" required={true} />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Subject</label>
                                            <input type="text" className="form-control" required={true} />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Phone Number</label>
                                            <input type="text" className="form-control" required={true} />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Message</label>
                                            <textarea className="form-control" cols="30" rows="4" required={true} />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <button type="submit" className="btn btn-primary">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="contact-info-box">
                                <ul>
                                    <li>
                                        <i className="fas fa-map-marker-alt"></i>
                                        <span>Address:</span>

                                        1828 Johns Drive Glenview, IL 60025
                                    </li>

                                    <li>
                                        <i className="fas fa-envelope"></i>
                                        <span>Email:</span>
                                        
                                        <a href="mailto:support@ganial.com">support@ganial.com</a>
                                    </li>

                                    <li>
                                        <i className="fas fa-phone"></i>
                                        <span>Phone:</span>
                                        
                                        <a href="tel:2242288475">(224) 228-8475</a>
                                    </li>

                                    <li>
                                        <i className="fas fa-globe"></i>
                                        <span>Website:</span>
                                        
                                        <a href="#" target="_blank">www.ganial.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
