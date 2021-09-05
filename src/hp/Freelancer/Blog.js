import React, { Component, useState, useEffect } from "react";
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

function Blog(props) {
  // const { newPosts } = props;
  // console.log(props);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <section id="blog" className="blog-area ptb-100 bg-f9f9f9">
      <div className="container">
        <div className="freelancer-section-title">
          <h2>
            Latest <span>Posts</span>
          </h2>
          <p>直近の3つの技術ブログ記事です。</p>
        </div>

        <div className="row">
          {display ? (
            <>
              {props.newPosts.map((post) => {
                let date = new Date(post.publishedAt);
                date = `${date.getFullYear()}年${
                  date.getMonth() + 1
                }月${date.getDate()}日`;

                return (
                  <div className="col-xs-12 col-md-4 col-lg-4" key={post.slug}>
                    <div className="single-blog-item">
                      <div className="blog-image">
                        <Link href={`/blog/${post.slug}`}>
                          <a target="_blank">
                            <img src={post.imgUrl} alt="blog" />
                          </a>
                        </Link>

                        {/* <div className="post-tag">
                          <a href="#">{post.tag}</a>
                        </div> */}
                      </div>

                      <div className="blog-post-content">
                        <span className="date">{date}</span>
                        <h3>
                          <Link href={`/blog/${post.slug}`}>
                            <a target="_blank">{post.title}</a>
                          </Link>
                        </h3>
                        <p>{post.description}</p>

                        <Link href={`/blog/${post.slug}`}>
                          <a className="read-more-btn" target="_blank">
                            Read More <i className="icofont-double-right"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default Blog;
