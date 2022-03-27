import React, { PureComponent } from "react";

export default class PureComp extends PureComponent {
  render() {
    console.log("Pure Component");
    return (
      <div>
        PureComp
        {this.props.name}
      </div>
    );
  }
}
