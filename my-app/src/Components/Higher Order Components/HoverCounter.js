import React, { Component } from "react";
import UpdateComponent from "./withCounter";

export class HoverCounter extends Component {
  render() {
    const { count, countIncrement } = this.props;
    return (
      <div>
        <h3 onMouseOver={countIncrement}>Count Hover : {count}</h3>
      </div>
    );
  }
}

export default UpdateComponent(HoverCounter);
