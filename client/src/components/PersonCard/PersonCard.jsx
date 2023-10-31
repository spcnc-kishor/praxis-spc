import React from "react";
import "./PersonCardStyle.css";
import userimg from "../../assets/images/navbar_user.png";
import { GrFormNext } from "react-icons/gr";
import { Link } from "react-router-dom";
export default function PersonCard() {
  return (
    <div className="person_card">
      <div className="content">
        <div className="img_box">
          <img src={userimg} alt="userimg" />
        </div>
        <div className="info">
          <div className="name">
            <p>KIshor gupta</p>
          </div>
          <p>Department - TRICS</p>
          <p>Assistant Manager</p>
          <p>Reporting to Kishor gupta</p>
        </div>
      </div>
      <div className="navigate_icon">
        <Link>
          <GrFormNext className="icon" />
        </Link>
      </div>
    </div>
  );
}
