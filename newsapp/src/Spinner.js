import React, { Component } from "react";
import loading from "./spinner/loading.gif";

export class Spinner extends Component {
  render() {
    return (
      <div className = "text-center">
        <img src={loading} alt="loading"></img>
      </div>
    );
  }
}

export default Spinner;
