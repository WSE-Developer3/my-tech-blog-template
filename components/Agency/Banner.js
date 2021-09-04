import React, { Component } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
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
        <div id="home" className="main-banner">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="main-banner-content">
                  <h1>Ultimate Platform to monitor your best workflow.</h1>
                  <p>
                    It should be noted that although application software is
                    thought of as a program, it can be anything that runs on a
                    computer.
                  </p>

                  <div className="btn-box">
                    <Link href="#contact">
                      <a className="btn btn-primary">Get Started</a>
                    </Link>

                    <div
                      className="popup-youtube video-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        this.openModal();
                      }}
                    >
                      <i className="fab fa-google-play"></i>
                      Watch our video
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
