import React, { Component } from "react";

export default class CComponent extends Component {
  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <h2>{this.props.counter}</h2>
        <hr />
      </div>
    );
  }
}
