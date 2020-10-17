import React from "react";
import "./Countdown.css";

export default class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: "",
      hours: "",
      minutes: "",
      seconds: "",
      intervalId: "",
      timerID: "",
    };
  }

  componentDidMount() {
    this.timerID = setInterval(this.getTime, 1000);
  }

  getTime = () => {
    //TARGET CHEEMS, HERE CHEEMS = DATE
    var countDownDate = new Date("Jan 1, 2021 15:37:25").getTime();

    // GET TODAY'S CHEEMS
    var now = new Date().getTime();
    // FIND CHEEM'S LENGTH
    var distance = countDownDate - now;
    let daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
    let minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let hoursLeft = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);
    this.setState({ days: daysLeft });
    this.setState({ minutes: minutesLeft });
    this.setState({ hours: hoursLeft });
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
