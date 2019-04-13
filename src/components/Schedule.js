import React, { Component } from "react";
import axios from "axios";

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scheduleItems: []
    };
  }

  componentDidMount() {
    axios
      .get("https://makebuild.dev/api/schedule")
      .then(res => res.data)
      .then(scheduleItems => this.setState({ scheduleItems }));
  }

  render() {
    const { scheduleItems } = this.state;
    return (
      <div>
        <h1>Schedule</h1>
        {scheduleItems.map(item => (
          <div>
            <h1>{item.Activity}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default Schedule;
