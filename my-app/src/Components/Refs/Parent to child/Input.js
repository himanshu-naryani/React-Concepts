import React, { Component } from "react";

export class Input extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  focusInput() {
    this.inputRef.current.focus();
  }
  render() {
    return (
      <div>
        Input
        <input ref={this.inputRef} type="text" />
      </div>
    );
  }
}

export default Input;
