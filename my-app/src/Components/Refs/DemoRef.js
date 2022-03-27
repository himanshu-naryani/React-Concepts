import React, { Component } from "react";

export class DemoRef extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.inputRef);
    this.inputRef.current.focus();
  }

  handleClick() {
    alert(`Value : ${this.inputRef.current.value}`);
  }

  render() {
    return (
      <div>
        DemoRef
        <input ref={this.inputRef} type="text" />
        <button onClick={() => this.handleClick()}>Click Me!</button>
      </div>
    );
  }
}

export default DemoRef;
