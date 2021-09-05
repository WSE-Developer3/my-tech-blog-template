import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <section id="contact" className="contact-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="contact-content">
                <h3>
                  Contact <span>Me</span>
                </h3>
                <h6>お仕事の依頼はこちらより承ります。</h6>
                <p>
                  平日12時までのメールでしたら基本その日中に返信いたします。
                  <br />
                  それ以外のメールは基本3営業日以内に返信いたします。 <br />
                  ご相談などでもお気軽にご連絡ください。
                  <br />
                </p>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <form id="contactForm" className="freelancer-contact-form">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Name"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        placeholder="Email"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        placeholder="Message"
                        className="form-control"
                        cols="30"
                        rows="5"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <button type="submit" className="btn btn-primary">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
