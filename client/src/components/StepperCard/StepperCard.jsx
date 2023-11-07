import React from "react";
import "./StepperCardStyle.css";
import { BsCheckCircleFill } from "react-icons/bs";

export default function StepperCard({ status, tag }) {
  return (
    <div className="stepper_tag">
      <div className={`check_icon ${status ? "check" : "uncheck"}`}>
        <BsCheckCircleFill />
      </div>
      <p>{tag}</p>
    </div>
  );
}
