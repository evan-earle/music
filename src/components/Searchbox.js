import React from "react";
import "./Searchbox.css";
import city from "./assets/city.jpg";
import plant from "./assets/plant.jpg";
import sky from "./assets/sky.jpg";

function backgroundPicker() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return { backgroundImage: `url(${city})` };
    case 1:
      return { backgroundImage: `url(${plant})` };
    case 2:
      return { backgroundImage: `url(${sky})` };
    default:
      return { backgroundImage: `url(${plant})` };
  }
}

class Searchbox extends React.Component {
  render() {
    return (
      <div className="container" style={backgroundPicker()}>
        <div className="hero">
          <h1>Discover. Listen. Enjoy.</h1>
          <p>
            Explore unlimited free music, find similar artists, top tracks,
            lyrics, and more.
          </p>
        </div>
        <div className="input_container">
          <form>
            <input className="search" type="text" placeholder="Search"></input>
            <i className="fas fa-search"></i>
          </form>
        </div>
      </div>
    );
  }
}

export default Searchbox;
