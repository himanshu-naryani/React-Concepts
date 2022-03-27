import React, { Component } from "react";

export class UpdatingPhase extends Component {
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

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should Component Update");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Get Snapshot before Update");
    return "Himanshu";
  }

  componentDidUpdate(prevProps, prevState, snapshotVal) {
    console.log("Component Did Update");
  }

  render() {
    console.log("Render");
    return (
      <div>
        <h2>UpdatingPhase - {this.state.name}</h2>
        <button onClick={() => this.setState({ name: "Himanshu Naryani" })}>
          Click Here!
        </button>
      </div>
    );
  }
}

export default UpdatingPhase;
