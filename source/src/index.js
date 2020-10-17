import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Countdown from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Countdown
      timeTillDate="12 01 2021, 6:00 am"
      timeFormat="MM DD YYYY, h:mm a"
    />
  </React.StrictMode>,
  document.getElementById("root")
);
