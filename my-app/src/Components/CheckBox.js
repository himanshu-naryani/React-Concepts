import React from "react";

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      guests: 2,
    };
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <label>
          In Going...
          <input
            type="checkbox"
            name="isGoing"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          <input
            name="guests"
            type="number"
            value={this.state.guests}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}

export default CheckBox;