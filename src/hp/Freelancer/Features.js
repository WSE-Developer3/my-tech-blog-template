import React, { Component } from "react";

class Features extends Component {
  render() {
    return (
      <section id="features" className="boxes-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-box">
                <i className="fas fa-bezier-curve"></i>
                <h3>HP/LP/Wordpress制作</h3>
                <p>
                  Wordpressによるホームページ、ランディングページ、CMS（コンテンツマネジメントサービス）を構築いたします。既に既存のサイトについてのカスタマイズにも対応できます。
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-box">
                <i className="fas fa-filter"></i>
                <h3>ヘッドレスCMS構築</h3>
                <p>
                  サイトの速さを重視したい方向けにヘッドレスCMSの導入支援を行います。ヘッドレスCMSを使い、Jamstackなサイトにすることで、サイトの利便性が格段に上がります。
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="single-box">
                <i className="fas fa-headset"></i>
                <h3>Web管理画面の構築</h3>
                <p>
                  こんな画面を作ってほしいという要望はありますか？普段行っている何気ない作業を自動化できたり、効率化できるようなシステムを構築いたします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Features;
