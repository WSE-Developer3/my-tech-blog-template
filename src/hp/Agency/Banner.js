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
                  <h1>
                    高速で表示されるブログ機能付きサイトを構築いたします。
                  </h1>
                  <p>
                    ヘッドレスCMSを使い、Jamstackなサイトを構築します。Jamstackなサイトは静的htmlファイルをサーバーに設置するので、Wordpressなどで作られたサイトよりも高いパフォーマンスを発揮します。
                  </p>

                  <div className="btn-box">
                    <Link href="#about">
                      <a className="btn btn-primary">About</a>
                    </Link>
                    <Link href="#contact">
                      <a className="btn btn-primary">Contact Me</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Banner;
