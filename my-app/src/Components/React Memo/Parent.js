import React, { Component } from "react";
import MemoComponent from "./MemoComponent";

export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "aman",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "aman",
      });
    }, 2000);
  }

  render() {
    console.log("*************Parent****************");
    return (
      <div>
        Parent
        <MemoComponent name={this.state.name} />
      </div>
    );
  }
}
