import React from "react";

const UpdateComponent = (OriginalComponent) => {
  class EnhancedComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }
    countIncrement = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };
    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          countIncrement={this.countIncrement}
        />
      );
    }
  }
  return EnhancedComponent;
};

export default UpdateComponent;
