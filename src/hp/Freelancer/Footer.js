import React, { Component } from "react";
import Link from "next/link";

class Footer extends Component {
  render() {
    return (
      <footer className="footer-area-two">
        <div className="container">
          <div className="row align-items-center">
            {/* <div className="col-lg-3 col-md-6">
                            <div className="contact-info">
                                <h4>Ganial</h4>
                                <span>lorem Ipsum donor sit.</span>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="contact-info">
                                <h4>Phone No:</h4>
                                <span>
                                    <a href="tel:1234567896">(+41) 123 456 7896</a>
                                </span>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="contact-info">
                                <h4>Email:</h4>
                                <span>
                                    <a href="mailto:ganial@gmail.com">ganial@gmail.com</a>
                                </span>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="contact-info">
                                <h4>Address:</h4>
                                <span>123 lorem ipsum New York, USA.</span>
                            </div>
                        </div> */}

            <div className="col-lg-12 col-md-12">
              <div className="bar"></div>
            </div>

            <div className="col-lg-7 col-md-7">
              <p>
                <i className="far fa-copyright"></i> 2021{" "}
                <Link href="/">
                  <a>Paths are</a>
                </Link>
                . All Rights Reserved
              </p>
            </div>

            <div className="col-lg-5 col-md-5">
              <ul>
                {/* <li>
                  <Link href="/freelancer/#">
                    <a target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </Link>
                </li> */}
                <li>
                  <Link href="https://www.instagram.com/paths_are/">
                    <a target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/paths_are">
                    <a target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/paths-are">
                    <a target="_blank">
                      <i className="fab fa-github"></i>
                    </a>
                  </Link>
                </li>
                {/* <li>
                  <Link href="/freelancer/#">
                    <a target="_blank">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
