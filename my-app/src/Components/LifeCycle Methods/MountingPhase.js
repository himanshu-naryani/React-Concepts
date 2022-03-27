import React, { Component } from "react";

export class MountingPhase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Himanshu",
    };
    console.log("Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Get Dreived State From Props");
    return null;
  }

  componentDidMount() {
    console.log("Component Did Mount");
  }

  render() {
    console.log("Render");
    return <div>MountingPhase</div>;
  }
}

export default MountingPhase;
