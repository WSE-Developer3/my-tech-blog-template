import React, { Component } from "react";
import dynamic from "next/dynamic";
// const ModalVideo = dynamic(() => import('react-modal-video'), {
//     ssr: false
// });

class Cta extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <>
        <section className="cta-area ptb-100 jarallax pb-0">
          <div className="container">
            <div className="cta-content">
              <h2>We always try to quality work</h2>
              <p>
                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>

              <div
                className="popup-youtube video-btn"
                onClick={(e) => {
                  e.preventDefault();
                  this.openModal();
                }}
              >
                <i className="fas fa-play"></i>
              </div>
            </div>

            <div className="cta-inner-content">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="single-cta-box">
                    <i className="fas fa-layer-group"></i>
                    <h3>Modern Design</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida.
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="single-cta-box">
                    <i className="fas fa-fighter-jet"></i>
                    <h3>Fast Loading</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida.
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="single-cta-box">
                    <i className="fas fa-broom"></i>
                    <h3>Clean Code</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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

export default Cta;
