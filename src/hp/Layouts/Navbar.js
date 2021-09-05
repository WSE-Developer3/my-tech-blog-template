import React, { Component } from "react";
import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { url } from "../../libs/config";
// import { useRouter } from "next/router";
import NextLink from "next/link";

class Navbar extends Component {
  // router = useRouter();

  state = {
    collapsed: true,
  };
  navItems = [
    {
      onClick: this.toggleNavbar,
      offset: () => 100,
      className: "nav-link active",
      href: "#home",
      text: "Home",
    },
    {
      onClick: this.toggleNavbar,
      offset: () => 0,
      className: "nav-link",
      href: "#about",
      text: "About",
    },
    {
      onClick: this.toggleNavbar,
      offset: () => 0,
      className: "nav-link",
      href: "#features",
      text: "Features",
    },
    // {
    //   onClick: this.toggleNavbar,
    //   offset: () => -10,
    //   className: "nav-link",
    //   href: "#pricing",
    //   text: "Pricing",
    // },
    {
      onClick: this.toggleNavbar,
      offset: () => -10,
      className: "nav-link",
      href: "#blog",
      text: "News",
    },
    {
      onClick: this.toggleNavbar,
      offset: () => -10,
      className: "nav-link",
      href: "#contact",
      text: "Contact",
    },
    // {
    //   onClick: null,
    //   offset: () => -10,
    //   className: "nav-link",
    //   href: "/blog",
    //   text: "Blog",
    // },
  ];

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  componentDidMount() {
    this._isMounted = true;
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);

    this.menuActiveClass();
  }

  menuActiveClass = () => {
    let mainNavLinks = document.querySelectorAll("nav ul li a");
    window.addEventListener("scroll", () => {
      let fromTop = window.scrollY;
      mainNavLinks.forEach((link) => {
        if (link.hash && link.hash !== "/blog") {
          let section = document.querySelector(link.hash);
          if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
          ) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        }
      });
    });
  };

  render() {
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "navbar-collapse collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";
    return (
      <>
        <nav
          id="navbar"
          className="navbar navbar-expand-lg navbar-style-one navbar-light bg-light"
        >
          <div className="container">
            <Link href="/">
              <a className="navbar-brand">
                <img src={`${url("/imgs/logo03-white.png")}`} alt="logo" />
                <img src={`${url("/imgs/logo03-black.png")}`} alt="logo" />
                {/* <img src={`${url("/images/white-logo.png")}`} alt="logo" />
                <img src={`${url("/images/black-logo.png")}`} alt="logo" /> */}
              </a>
            </Link>

            <button
              onClick={this.toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                {this.navItems.map((nav) => {
                  return (
                    <li className="nav-item" key={nav.href}>
                      <AnchorLink
                        onClick={nav.onClick}
                        offset={nav.offSet}
                        className={nav.className}
                        href={nav.href}
                      >
                        {nav.text}
                      </AnchorLink>
                    </li>
                  );
                })}
                <li className="nav-item">
                  <NextLink href="/blog">
                    <a target="_blank" className="nav-link">
                      Blog
                    </a>
                  </NextLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
