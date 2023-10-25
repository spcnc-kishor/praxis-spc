import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./ProgressBarStyle.css";

export default function ProgressBar({
  title,
  value,
  textcolor,
  trackcolor,
  progresscolor,
  bgcolor,
}) {
  return (
    <div className="progressbar_box">
      <div className="title">
        <p>{title}</p>
      </div>
      <div className="bar">
        <CircularProgressbar
          value={value}
          text={`${value ? value : "0"}`}
          className="bars"
          background
          styles={buildStyles({
            strokeLinecap: "butt",
            textSize: "30px",
            textColor: textcolor ? textcolor : "transparent",
            trailColor: trackcolor ? trackcolor : "transparent",
            pathColor: progresscolor ? progresscolor : "transparent",
            backgroundColor: bgcolor ? bgcolor : "transparent",
          })}
        />
      </div>
    </div>
  );
}
