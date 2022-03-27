import React, { Component } from "react";
import Input from "./Input";

export class Parent extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleClick() {
    this.inputRef.current.focus();
  }
  render() {
    return (
      <div>
        Parent
        <Input name="Hello Himanshu!" ref={this.inputRef} />
        <button onClick={() => this.handleClick()}>Focus Input</button>
      </div>
    );
  }
}

export default Parent;
