import React from "react";
import "./Countdown.css";

//TARGET CHEEMS, HERE CHEEMS = DATE
var countDownDate = new Date("Jan 1, 2021 15:37:25").getTime();

// GET TODAY'S CHEEMS
var now = new Date().getTime();
// FIND CHEEM'S LENGTH
var distance = countDownDate - now;

export default class Countdown extends React.Component {
  state = {
    days: Number,
    hours: Number,
    minutes: Number,
    seconds: Number,
    intervalId: "",
  };

  componentDidMount() {
    this.days();
    this.seconds();
    this.minutes();
    this.hours();
  }

  days = () => {
    let daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.setState({ days: daysLeft });
  };

  minutes = () => {
    let minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.setState({ minutes: minutesLeft });
  };

  hours = () => {
    let hoursLeft = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    this.setState({ hours: hoursLeft });
  };
  seconds = () => {
    let secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);
    this.setState({ seconds: secondsLeft });
  };

  render() {
    return (
      <div className="countdown-wrapper">
        <div className="countdown-item">
          <h1>{this.state.days}</h1>
          <body>Days</body>
        </div>
        <div className="countdown-item">
          <h1>{this.state.hours}</h1>
          <body>Hours</body>
        </div>
        <div className="countdown-item">
          <h1>{this.state.minutes}</h1>
          <body>Minutes</body>
        </div>
        <div className="countdown-item">
          <h1>{this.state.seconds}</h1>
          <body>Seconds</body>
        </div>
      </div>
    );
  }
}
