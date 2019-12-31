import React from "react";
import Header from "./Header";
import Searchbox from "./Searchbox";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
        <Searchbox />
      </div>
    );
  }
}

export default App;
