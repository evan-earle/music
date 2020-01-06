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
          <img
            src={favicon}
            height="24px"
            alt="logo"
            width="24px"
            style={{ paddingRight: "0.25em", marginBottom: "-0.25em" }}
          ></img>
          ASTRAL
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
          <img
            src={favicon}
            alt="logo"
            height="24px"
            width="24px"
            style={{ paddingRight: "0.25em", marginBottom: "-0.25em" }}
          ></img>
          ASTRAL
        </div>
      );
    }
  }
}

export default Header;
