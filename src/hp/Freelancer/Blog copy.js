import React, { Component } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
// const OwlCarousel = dynamic(import("react-owl-carousel3"));
// const OwlCarousel = dynamic(import("react-owl-carousel"));
import { url } from "../../libs/config";

const options = {
  loop: true,
  nav: false,
  dots: true,
  autoplayHoverPause: true,
  autoplay: true,
  margin: 30,
  navText: [
    "<i class='fas fa-angle-left'></i>",
    "<i class='fas fa-angle-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
};

class Blog extends Component {
  state = { display: false };

  componentDidMount() {
    this.setState({ display: true });
  }
  render() {
    return (
      <section id="blog" className="blog-area ptb-100 bg-f9f9f9">
        <div className="container">
          <div className="freelancer-section-title">
            <h2>
              Latest <span>News</span>
            </h2>
            <p>
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis.
            </p>
          </div>

          <div className="row">
            {this.state.display ? (
              <>
                <div className="col-lg-4 col-md-12">
                  <div className="single-blog-item">
                    <div className="blog-image">
                      <Link href="/blog-details">
                        <a>
                          <img src={url("/images/blog1.jpg")} alt="blog" />
                        </a>
                      </Link>

                      <div className="post-tag">
                        <a href="#">Technology</a>
                      </div>
                    </div>

                    <div className="blog-post-content">
                      <span className="date">25 Feb, 2019</span>
                      <h3>
                        <Link href="/blog-details">
                          <a>The Most Popular New top Business Apps</a>
                        </Link>
                      </h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum.
                      </p>

                      <Link href="/blog-details">
                        <a className="read-more-btn">
                          Read More <i className="icofont-double-right"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-12">
                  <div className="single-blog-item">
                    <div className="blog-image">
                      <Link href="/blog-details">
                        <a>
                          <img src={url("/images/blog2.jpg")} alt="blog" />
                        </a>
                      </Link>

                      <div className="post-tag">
                        <a href="#">Agency</a>
                      </div>
                    </div>

                    <div className="blog-post-content">
                      <span className="date">27 Feb, 2019</span>
                      <h3>
                        <Link href="/blog-details">
                          <a>The Best Marketing top use Management Tools</a>
                        </Link>
                      </h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum.
                      </p>

                      <Link href="/blog-details">
                        <a className="read-more-btn">
                          Read More <i className="icofont-double-right"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                {/*
                  {slug:"",
                  img:"",
                  category:"",
                  date:"",
                  title:"",
                  description:"",
                  
                  }
                  
                  */}
                <div className="col-lg-4 col-md-12">
                  <div className="single-blog-item">
                    <div className="blog-image">
                      <Link href="/blog-details">
                        <a>
                          <img src={url("/images/blog3.jpg")} alt="blog" />
                        </a>
                      </Link>

                      <div className="post-tag">
                        <a href="#">IT</a>
                      </div>
                    </div>

                    <div className="blog-post-content">
                      <span className="date">28 Feb, 2019</span>
                      <h3>
                        <Link href="/blog-details">
                          <a>3 WooCommerce Plugins to Boost Sales</a>
                        </Link>
                      </h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum.
                      </p>

                      <Link href="/blog-details">
                        <a className="read-more-btn">
                          Read More <i className="icofont-double-right"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <p>Hello world</p>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Blog;
