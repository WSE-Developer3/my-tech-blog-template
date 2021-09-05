import React, { Component } from "react";
import { Progress } from "react-sweet-progress";
import { url } from "../../libs/config";

class Skill extends Component {
  render() {
    return (
      <section id="skill" className="skill-area">
        <div className="container-fluid p-0">
          <div className="row m-0">
            <div className="col-lg-6 col-md-12 p-0">
              <div className="skill-content ptb-100">
                <div className="freelancer-section-title">
                  <h2>
                    Some of My <span>Skills</span>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>

                <div className="skills">
                  <div className="skill-item">
                    <div className="skill-header">
                      <h3 className="skill-title">Html, Css, Javascript</h3>
                    </div>

                    <div className="skill-bar">
                      <Progress percent={90} />
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-header">
                      <h3 className="skill-title">
                        Wordpress制作/カスタマイズ
                      </h3>
                    </div>

                    <div className="skill-bar">
                      <Progress percent={80} />
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-header">
                      <h3 className="skill-title">
                        フロント画面制作（React, Next.js）
                      </h3>
                    </div>

                    <div className="skill-bar">
                      <Progress percent={90} />
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-header">
                      <h3 className="skill-title">
                        ツール制作（Node.js, GAS, VBA, Python）
                      </h3>
                    </div>

                    <div className="skill-bar">
                      <Progress percent={70} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 p-0">
              <div className="skill-image">
                {/* <img src={`${url("/imgs/logo03-white_v0.2.png")}`} alt="logo" /> */}
                {/* <img src={url("/images/skill-bg.jpg")} alt="skill-image" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skill;
