import React, { Component } from "react";
import Input from "./Input";

export class Parent extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }

  handleClick() {
    this.componentRef.current.focusInput();
  }
  render() {
    return (
      <div>
        Parent
        <Input ref={this.componentRef} />
        <button onClick={() => this.handleClick()}>Focus Input!</button>
      </div>
    );
  }
}

export default Parent;
