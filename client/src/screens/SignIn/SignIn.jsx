import React from "react";
import "./SignInStyle.css";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BiSolidLock } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  return (
    <div className="auth_screen">
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
          <h4>Sign In</h4>
        </div>
        <div className="input_container">
          <div className="input_label">
            <p>Email</p>
          </div>
          <div className="input_section">
            <input type="text" placeholder="email.name@domain.com" />
            <div className="meta_icon">
              <BsFillEnvelopeFill className="icon" />
            </div>
          </div>
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
        <div className="forgot_pswd">
          <Link to={""} className="forgot_pswrd_link">
            Forgot Password ?
          </Link>
        </div>
        <div className="authBtn">
          <button
            onClick={() => {
              navigate("/onboard");
            }}
          >
            Sign In
          </button>
        </div>
        <div className="term_cond">
          <p>
            By Signing in I{" "}
            <Link to={""} className="trm_cond_link">
              agree to Terms & Conditions
            </Link>{" "}
            and <Link className="trm_cond_link">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
