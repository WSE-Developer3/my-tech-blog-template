import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section id="about" className="about-area-two ptb-100">
        <div className="container">
          <div className="freelancer-section-title">
            <h2>
              About <span>Me</span>
            </h2>
            {/* <p>
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis.
            </p> */}
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="freelancer-about-content">
                <h3>新川眞司</h3>
                <h2>屋号名：Paths are（パスア）</h2>
                <span>
                  個人でフロントエンドエンジニアとして活動しております。
                </span>
                <p>
                  {/* 私がWebに興味を持ち始めたのは、2020年の5月でした。当時日程調整を行う機会が多く、毎回スマホで空き時間を探して書き出すのも大変だと感じ、なんとか自動化できないかと思い気づいたらPHPを触ってGoogle
                  Calendarの予定を取得できたりして開発ってすげー！！ってなっていました。最初はPHPとjavascriptで何とか日程を書き出せるところまでできましたが、画面のUIには何も力を入れていなかったので、Material-UIを使って画面のデザインをしていくことにしました。そこで、初めてReactを学習し、無事使えるような画面になったので知人に紹介しました。 */}
                  得意分野はWeb系のフロント画面の開発です。Html, Css,
                  Javascript,
                  Wordpressを使ったサイト制作はもちろん、最近日本でも流行し始めているReactやNext.jsを使った開発も可能です。
                  <br />
                  去年ReactとMaterial-UIに魅了され、今年からはNext.jsを愛用し始めています。今後もNext.jsの勢いは強くなっていき、サイト制作はNext.jsでの開発がより増えていくと思います。まだ未知なことも多いですが日々勉強して、人の役に立てるエンジニアになっていきます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
