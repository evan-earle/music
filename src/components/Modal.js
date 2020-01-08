import React from "react";
import "./App.css";

class Modal extends React.Component {
  render() {
    if (this.props.toggle) {
      return (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-title">
              <div className="close-modal">
                <i className="fa fa-times" onClick={this.props.closeLyrics}></i>
              </div>
              <div className="modal-title-text">
                {this.props.artistName} - {this.props.track}
              </div>
            </div>
            <div className="modal-lyrics">
              <pre>{this.props.lyrics}</pre>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Modal;
