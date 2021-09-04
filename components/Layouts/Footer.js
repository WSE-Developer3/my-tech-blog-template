import React, { Component } from "react";
import Link from "next/link";
import { url } from "../../src/libs/config";

class Footer extends Component {
  render() {
    return (
      <footer className="footer-area bg-fffcf4">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="/">
                    <a>
                      <img src={url("/images/black-logo.png")} alt="logo" />
                    </a>
                  </Link>
                </div>

                <ul className="contact-info">
                  <li>1828 Johns Drive Glenview, IL 60025</li>
                  <li>
                    <Link href="tel:2242288475">
                      <a>(224) 228-8475</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:support@genial.com">
                      <a>support@genial.com</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>www.genial.com</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-sm-6">
              <div className="single-footer-widget pl-3">
                <h3>Quick Links</h3>

                <ul className="list">
                  <li>
                    <Link href="#">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Features</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Screenshots</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Pricing</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>News</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget pl-5">
                <h3>Support</h3>

                <ul className="list">
                  <li>
                    <Link href="#">
                      <a>Quick Support</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Copyright</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Terms & Conditions</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Testimonials</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget">
                <h3>My Account</h3>

                <ul className="list">
                  <li>
                    <Link href="#">
                      <a>Managed Account</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Create Account</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Download Software</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Support Center</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Account Security</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-7">
                <p>
                  <i className="far fa-copyright"></i> 2021 Genial. All Rights
                  Reserved
                </p>
              </div>

              <div className="col-lg-5 col-md-5">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="map2">
          <img src={url("/images/map2.png")} alt="map" />
        </div>
      </footer>
    );
  }
}

export default Footer;
