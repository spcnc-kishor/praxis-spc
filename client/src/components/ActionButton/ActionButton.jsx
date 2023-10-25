import React from "react";
import "./ActionButtonStyle.css";
import { Button } from "react-bootstrap";
import { BsFillCaretDownFill } from "react-icons/bs";

export default function ActionButton() {
  return (
    <div className="action_button_box">
      <div className="action_button">
        <Button variant="primary" onClick={() => console.log("Primary")}>
          Add New
        </Button>
      </div>
      <div className="other_action">
        <BsFillCaretDownFill className="downicon" />
      </div>
    </div>
  );
}
