import React from "react";
import favicon from "./assets/favicon.png";

class Header extends React.Component {
  render() {
    if (this.props.page === "home") {
      return (
        <div
          className="header"
          style={{
            position: "absolute",
            padding: "1em",
            cursor: "pointer",
            color: "white",
            boxSizing: "border-box",
            lineHeight: "2.5em"
          }}
        >
          <a href="https://ozark19.github.io/music/">
            <img
              src={favicon}
              height="24px"
              alt="logo"
              width="24px"
              style={{ paddingRight: "0.25em", marginBottom: "-0.25em" }}
            ></img>
            ASTRAL
          </a>
        </div>
      );
    } else {
      return (
        <div
          className="header"
          style={{
            position: "absolute",
            padding: "1em",
            cursor: "pointer",
            color: "white",
            boxSizing: "border-box",
            lineHeight: "2.5em",
            backgroundColor: "#1C1C25",
            width: "100%",
            borderBottom: "solid black 1px"
          }}
        >
          <a href="https://ozark19.github.io/music/">
            <img
              src={favicon}
              alt="logo"
              height="24px"
              width="24px"
              style={{ paddingRight: "0.25em", marginBottom: "-0.25em" }}
            ></img>
            ASTRAL
          </a>
        </div>
      );
    }
  }
}

export default Header;
