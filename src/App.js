import React, { Component } from "react";
import logo from "./logo.svg";
// import './App.css';

import Navbar from "./components/Navbar";
import CounterButton from "./components/CounterButton";
import Schedule from "./components/Schedule";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          {/* <CounterButton /> */}
          <Schedule />
        </div>
      </div>
    );
  }
}

export default App;
