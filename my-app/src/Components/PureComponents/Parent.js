import React, { Component } from "react";
import RegularComp from "./RegularComp";
import PureComp from "./PureComp";

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
        <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}
