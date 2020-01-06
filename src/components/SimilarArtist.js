import React from "react";

class SimilarArtist extends React.Component {
  state = { term: "" };

  clickPhoto = () => {
    this.props.onPhotoClick(this.state.term);
  };

  render() {
    return (
      <div className="similar-container">
        <div className="similar-title">
          <div style={{ paddingLeft: "2em" }}>Similar Artists</div>
        </div>
        <div className="similar-boxes">
          <div>
            <img
              src={this.props.similarImages[0]}
              alt="similar artist"
              onClick={() => {
                this.setState({ term: this.props.similarArtist[0] }, () => {
                  this.clickPhoto();
                });
              }}
            ></img>
          </div>
          <div>
            <img
              src={this.props.similarImages[1]}
              alt="similar artist"
              onClick={() => {
                this.setState({ term: this.props.similarArtist[1] }, () => {
                  this.clickPhoto();
                });
              }}
            ></img>
          </div>
          <div>
            <img
              src={this.props.similarImages[2]}
              alt="similar artist"
              onClick={() => {
                this.setState({ term: this.props.similarArtist[2] }, () => {
                  this.clickPhoto();
                });
              }}
            ></img>
          </div>
          <div>
            <img
              src={this.props.similarImages[3]}
              alt="similar artist"
              onClick={() => {
                this.setState({ term: this.props.similarArtist[3] }, () => {
                  this.clickPhoto();
                });
              }}
            ></img>
          </div>
          <div>
            <img
              src={this.props.similarImages[4]}
              alt="similar artist"
              onClick={() => {
                this.setState({ term: this.props.similarArtist[4] }, () => {
                  this.clickPhoto();
                });
              }}
            ></img>
          </div>
          <div>
            <img
              src={this.props.similarImages[5]}
              alt="similar artist"
              onClick={() => {
                this.setState({ term: this.props.similarArtist[5] }, () => {
                  this.clickPhoto();
                });
              }}
            ></img>
          </div>
          <div>
            <img
              src={this.props.similarImages[6]}
              alt="similar artist"
              onClick={() => {
                this.setState({ term: this.props.similarArtist[6] }, () => {
                  this.clickPhoto();
                });
              }}
            ></img>
          </div>
          <div>
            <img
              src={this.props.similarImages[7]}
              alt="similar artist"
              onClick={() => {
                this.setState({ term: this.props.similarArtist[7] }, () => {
                  this.clickPhoto();
                });
              }}
            ></img>
          </div>
          <div>
            <img
              src={this.props.similarImages[8]}
              alt="similar artist"
              onClick={() => {
                this.setState({ term: this.props.similarArtist[8] }, () => {
                  this.clickPhoto();
                });
              }}
            ></img>
          </div>
        </div>
      </div>
    );
  }
}

export default SimilarArtist;
