import React, { Component } from "react";
import Navbar from "../src/hp/Layouts/Navbar";
import Footer from "../src/hp/Layouts/Footer";
import Banner from "../src/hp/Agency/Banner";
import About from "../src/hp/Agency/About";
import Features from "../src/hp/Agency/Features";
import Research from "../src/hp/Agency/Research";
import Cta from "../src/hp/Agency/Cta";
import Funfact from "../src/hp/Agency/Funfact";
import Pricing from "../src/hp/Agency/Pricing";
import Blog from "../src/hp/Agency/Blog";
import Contact from "../src/hp/Agency/Contact";
import Subscribe from "../src/hp/Agency/Subscribe";
import { Preloader, Placeholder } from "react-preloading-screen";
import Loader from "../src/hp/Layouts/Loader";
import GoTop from "../src/hp/Layouts/GoTop";

class Index extends Component {
  render() {
    return (
      <>
        <Preloader>
          <Navbar />
          <Banner />
          <About />
          <Features />
          <Research />
          <Cta />
          <Funfact />
          <Pricing />
          <Blog />
          <Contact />
          <Subscribe />
          <Footer />
          <GoTop scrollStepInPx="50" delayInMs="16.66" />

          <Placeholder>
            <Loader />
          </Placeholder>
        </Preloader>
      </>
    );
  }
}

export default Index;
