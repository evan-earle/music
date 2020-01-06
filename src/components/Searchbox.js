import React from "react";
import "./App.css";

class Searchbox extends React.Component {
  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
    this.setState({ term: "" });
  };

  onInputChange = e => {
    this.setState({ term: e.target.value });
  };

  render() {
    if (this.props.page === "home") {
      return (
        <div>
          <div className="hero">
            <h1>Discover new music or listen to your favourite artists</h1>
            <p>
              Explore unlimited free music, find similar artists, top tracks,
              lyrics, and more
            </p>

            <div
              style={{
                position: "absolute",
                left: "50%",
                transform: "translate(-50%, -50%)",
                top: "95%"
              }}
            >
              <form onSubmit={this.onFormSubmit}>
                <input
                  type="text"
                  placeholder="Search"
                  value={this.state.term}
                  onChange={this.onInputChange}
                  style={{
                    borderRadius: "5px",
                    border: "3px #34495e solid",
                    outline: "none",
                    padding: "1em",
                    width: "350px",
                    fontSize: "1em"
                  }}
                ></input>
                <i
                  className="fas fa-search"
                  style={{
                    color: "grey",
                    position: "absolute",
                    height: "1em",
                    lineHeight: "2.25em",
                    cursor: "pointer",
                    textIndent: "-60px",
                    fontSize: "1.5em"
                  }}
                ></i>
              </form>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          style={{
            position: "absolute",
            marginRight: "2em",
            top: "1em",
            right: 0
          }}
        >
          <form onSubmit={this.onFormSubmit}>
            <input
              type="text"
              placeholder="Search"
              value={this.state.term}
              onChange={this.onInputChange}
              style={{
                borderRadius: "5px",
                border: "3px #34495e solid",
                outline: "none",
                padding: "0.5em",
                fontSize: "1em"
              }}
            ></input>
            <i
              className="fas fa-search"
              style={{
                color: "grey",
                position: "absolute",
                height: "1em",
                lineHeight: "2em",
                cursor: "pointer",
                textIndent: "-30px",
                fontSize: "1.25em"
              }}
            ></i>
          </form>
        </div>
      );
    }
  }
}

export default Searchbox;
