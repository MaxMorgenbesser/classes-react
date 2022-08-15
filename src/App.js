import React, { Component } from "react";
import FunctionalComponents from "./FunctionalComponents";
import "./App.css";
import ClassComponent from "./ClassComponent";

let count = 1;
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          components go here
          <br />
          <FunctionalComponents count={count} />
          <ClassComponent count={count} />
        </header>
      </div>
    );
  }
}

export default App;
