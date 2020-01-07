import React from "react";

class Loading extends React.Component {
  render() {
    if (this.props.page === "home") {
      return (
        <div
          className="loader"
          style={{
            marginTop: "10em",
            left: "50%",
            position: "absolute",
            transform: "translate(-50%, -50%)",
            top: "50%"
          }}
        >
          <div id="loadFacebookG">
            <div id="blockG_1" className="facebook_blockG"></div>
            <div id="blockG_2" className="facebook_blockG"></div>
            <div id="blockG_3" className="facebook_blockG"></div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="loader"
          style={{
            marginTop: "10em",
            left: "50%",
            position: "absolute",
            transform: "translate(-50%, -50%)",
            top: "0%"
          }}
        >
          <div id="loadFacebookG">
            <div id="blockG_1" className="facebook_blockG"></div>
            <div id="blockG_2" className="facebook_blockG"></div>
            <div id="blockG_3" className="facebook_blockG"></div>
          </div>
        </div>
      );
    }
  }
}

export default Loading;
