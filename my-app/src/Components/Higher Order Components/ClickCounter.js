import React, { Component } from "react";
import UpdateComponent from "./withCounter";

export class ClickCounter extends Component {
  render() {
    const { count, countIncrement } = this.props;
    return (
      <div>
        <button onClick={countIncrement}>Count Click : {count}</button>
      </div>
    );
  }
}

export default UpdateComponent(ClickCounter);
