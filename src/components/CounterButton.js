import React, { Component } from "react";

class CounterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  onButtonClick() {
    console.log("Click!!");
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    const onClick = this.onButtonClick.bind(this);
    return (
      <div
        className="button is-primary"
        style={{ width: "150px", height: "50px" }}
        onClick={onClick}
      >
        {this.state.count}
      </div>
    );
  }
}

export default CounterButton;
