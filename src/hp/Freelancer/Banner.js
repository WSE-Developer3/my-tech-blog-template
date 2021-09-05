import React, { Component } from "react";
import Link from "next/link";
// import dynamic from "next/dynamic";
import { url } from "../../libs/config";
// const ModalVideo = dynamic(() => import('react-modal-video'), {
//     ssr: false
// });

class Banner extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => {
    this.setState({ isOpen: true });
  };
  render() {
    return (
      <>
        <div
          id="home"
          className="freelancer-banner"
          style={{ position: "relative" }}
        >
          <img
            src={url("/imgs/banner01.jpg")}
            style={{ position: "absolute", zIndex: -1 }}
          />
          <div
            style={{
              position: "absolute",
              zIndex: -0,
              backgroundColor: "rgba(0,0,0,.5)",
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          />
          <div className="d-table" style={{ position: "absolute", zIndex: 2 }}>
            <div className="d-table-cell">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-8">
                    <div className="freelancer-banner-content">
                      <h1>
                        I'm A Full Stack Web <span>Developer</span>
                      </h1>
                      <ul>
                        <li>
                          <Link href="https://github.com/paths-are">
                            <a target="_blank">
                              <i className="fab fa-github"></i>
                            </a>
                          </Link>
                        </li>
                        {/* <li>
                          <Link href="#">
                            <a target="_blank">
                              <i className="fab fa-codepen"></i>
                            </a>
                          </Link>
                        </li> */}
                        <li>
                          <Link href="https://twitter.com/paths_are">
                            <a target="_blank">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.instagram.com/paths_are/">
                            <a target="_blank">
                              <i className="fab fa-instagram"></i>
                            </a>
                          </Link>
                        </li>
                        {/* <li>
                          <Link href="#">
                            <a target="_blank">
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </Link>
                        </li> */}
                        {/* <li>
                          <Link href="#">
                            <a target="_blank">
                              <i className="fab fa-stack-overflow"></i>
                            </a>
                          </Link>
                        </li> */}
                        {/* <li>
                          <Link href="#">
                            <a target="_blank">
                              <i className="fab fa-gitlab"></i>
                            </a>
                          </Link>
                        </li> */}
                      </ul>

                      <div className="btn-box">
                        <Link href="#">
                          <a className="btn btn-primary">Get Started</a>
                        </Link>

                        {/* <div
                          onClick={(e) => {
                            e.preventDefault();
                            this.openModal();
                          }}
                          className="video-btn popup-youtube"
                        >
                          <i className="fas fa-play"></i>
                        </div> */}
                      </div>
                    </div>
                  </div>

                  {/* <div className="col-lg-6 col-md-4">
                    <div className="freelancer-banner-image">
                      <img src={url("/images/developer.png")} alt="image" />
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <div className="back-text">
            <h1>Developer</h1>
          </div>
        </div>

        {/* <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='szuchBiLrEM' 
                    onClose={() => this.setState({isOpen: false})} 
                /> */}
      </>
    );
  }
}

export default Banner;
