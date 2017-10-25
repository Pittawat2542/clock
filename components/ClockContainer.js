import React from "react";
import Clock from "../components/Clock";

class ClockContainer extends React.Component {
  setTime() {
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.toLocaleString("en-us", { month: "long" });
    let year = currentDate.getFullYear();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    hours = hours + "";
    minutes = minutes + "";
    seconds = seconds + "";

    if (hours.length == 1) {
      hours = "0" + hours;
    }

    if (minutes.length == 1) {
      minutes = "0" + minutes;
    }

    if (seconds.length == 1) {
      seconds = "0" + seconds;
    }

    this.setState({
      date: {
        day: day,
        month: month,
        year: year,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      }
    });
  }

  componentWillMount() {
    this.setTime();
  }

  componentDidMount() {
    window.setInterval(
      function() {
        this.setTime();
      }.bind(this),
      1000
    );
  }

  render() {
    return <Clock date={this.state.date} />;
  }
}

export default ClockContainer;
