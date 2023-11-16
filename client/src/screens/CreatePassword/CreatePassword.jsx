import React from "react";
import "./CreatePassword.css";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BiSolidLock } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

export default function CreatePassword() {
  const navigate = useNavigate();
  return (
    <div className="auth_screen create_pswd">
      <div className="meta_info">
        <div className="logo">
          <p className="logoname">
            Praxis <span>PRO</span>
          </p>
        </div>
        <div className="other_info">
          <div className="heading_container">
            <h1> First Time Here?</h1>
          </div>
          <div className="meta_details">
            <p>
              Register here to get a free 60 days trial of Praxis Pro
              Management.
            </p>
            <p>
              Effectively manage your Engagements, Teams and Documents with best
              in class analytics and visualisations.
            </p>
          </div>
          <div className="trail_btn">
            <p>Register for 60 Day Trial</p>
          </div>
        </div>
      </div>
      <div className="auth_content">
        <div className="content_header">
          <h4>Welcome Karan Gupta,</h4>
        </div>
        <div className="acc_info">
          <p>
            Your Praxis Account ID is <span>SPCN001</span>
          </p>
          <p>
            & Your Praxis Superadmin ID is <span>karan.gupta@domain.com</span>
          </p>
        </div>
        <div className="pswd_input">
          <div className="tags">
            <h5>Create Password</h5>
            <p>You are Just one step away to start the on-boarding process</p>
          </div>
          <div className="input_container">
            <div className="input_label">
              <p>Password</p>
            </div>
            <div className="input_section">
              <input type="password" placeholder="**********" />
              <div className="meta_icon">
                <BiSolidLock className="icon" />
              </div>
            </div>
          </div>
          <div className="input_container">
            <div className="input_label">
              <p>Confirm Password</p>
            </div>
            <div className="input_section">
              <input type="password" placeholder="**********" />
              <div className="meta_icon">
                <BiSolidLock className="icon" />
              </div>
            </div>
          </div>

          <div className="authBtn">
            <button
              onClick={() => {
                navigate("/onboard");
              }}
            >
              Save Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
