import React from "react";
import blankVideo from "./assets/blankvideo.PNG";

class Youtube extends React.Component {
  render() {
    if (!this.props.play) {
      return (
        <img className="youtube-image" alt="blank video" src={blankVideo}></img>
      );
    } else {
      return (
        <div className="video">
          <iframe
            title={this.props.videoId}
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${this.props.videoId}?autoplay=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      );
    }
  }
}
export default Youtube;
