import React from "react";
import "./VerificationEmailStyle.css";
import { SlEnvolopeLetter } from "react-icons/sl";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function VerificationEmail(props) {
  console.log(props);
  return (
    <Modal
      {...props}
      size="s"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="modal_body">
          <div className="notification_header">
            <h3>Email Verification</h3>
          </div>
          <div className="mail_icon">
            <SlEnvolopeLetter className="icon" />
          </div>
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vitae
              aperiam repellendus quidem, quisquam asperiores quibusdam nobis
              corporis obcaecati, beatae natus.
            </p>
          </div>
          <div className="proceed_btn" onClick={props.onHide}>
            <button>Done</button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
