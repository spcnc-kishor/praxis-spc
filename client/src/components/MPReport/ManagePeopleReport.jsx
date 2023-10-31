import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./ManagePeopleReportStyle.css"

export default function ManagePeopleReport() {
  return (
    <div className="report_container">
      <div className="count_cost_box">
        <div className="count_report">
          <ul>
            <li>22 Leave</li>
            <li>22 Client location</li>
            <li>22 Office</li>
          </ul>
          <ProgressBar
            title={"Employee Cost"}
            value={60}
            textcolor={"white"}
            trackcolor={"white"}
            progresscolor={"red"}
          />
        </div>
        <ProgressBar
          title={"Employee Cost"}
          value={50}
          textcolor={"white"}
          trackcolor={"white"}
          progresscolor={"yellow"}
        />
      </div>
      <div className="summary">
        <ProgressBar
          title={"Department"}
          value={68}
          textcolor={"black"}
          progresscolor={"#9F99D5"}
          bgcolor={"#DBE9F5"}
        />
        <ProgressBar
          title={"Designation"}
          value={43}
          textcolor={"black"}
          progresscolor={"#93BC46"}
          bgcolor={"#DAF2D9"}
        />
        <ProgressBar
          title={"Reporting to "}
          value={31}
          textcolor={"black"}
          progresscolor={"#31899D"}
          bgcolor={"#86b1a97a"}
        />
        <ProgressBar
          title={"Status"}
          value={66}
          textcolor={"black"}
          progresscolor={"#00B8C6"}
          bgcolor={"#6ac0c657"}
        />
      </div>
    </div>
  );
}
