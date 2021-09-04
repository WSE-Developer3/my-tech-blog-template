import React from "react";
import { slide as Menu } from "react-burger-menu";
// import { elastic as Menu } from "react-burger-menu";
// import { bubble as Menu } from "react-burger-menu";
// import { push as Menu } from "react-burger-menu";
var styles = {
  bmBurgerButton: {
    // position: "fixed",
    position: "relative",
    width: "25px",
    height: "20px",
    // left: "36px",
    // right: "36px",
    // top: "36px",
  },
  bmBurgerBars: {
    // background: "#373a47",
    background: "#FFF",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    top: "0",
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#FFF",
    // color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    color: "#FFF",
    display: "block",
    // display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
    // position: "absolute",
    // top: "0",
    // left: "0",
  },
};

export default function MyMenu() {
  // const [open, setOpen] = React.useState(false);
  // var isMenuOpen = function () {
  // return state.isOpen;
  // setOpen(!oepn);
  // };
  return (
    <Menu
      styles={styles}
      right
      // isOpen={open}
      // onClick={() => {
      //   setOpen(true);
      // }}
      // onStateChange={isMenuOpen}
    >
      <a id="home" className="menu-item" href="/paths-are-tech-blog-template">
        Home
      </a>
      <a id="about" className="menu-item" href="/paths-are-tech-blog-template">
        About
      </a>
      <a
        id="contact"
        className="menu-item"
        href="/paths-are-tech-blog-template"
      >
        Contact
      </a>
    </Menu>
  );
}
