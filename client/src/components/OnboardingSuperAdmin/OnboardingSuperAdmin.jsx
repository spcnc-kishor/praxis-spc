import React from "react";
import "./OnboardingSuperAdminStyle.css";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import VerificationEmail from "../VerificationEmail/VerificationEmail";

export default function OnboardingSuperAdmin() {
  const [modalShow, setModalShow] = React.useState(false);
  const navigate = useNavigate();

  return (
    <div className="account_setup">
      <div className="account_setup_container">
        <div className="onboarding_tag">
          <p>Welcome to Praxis Pro‘s Intelligent On-Boarding Process</p>
        </div>
        <div className="account_setup_meta_info">
          <div className="meta_info_tag">
            <p>Generate Your Praxis Account ID</p>
          </div>
          <div className="meta_info_desc">
            <p>
              To get started, you need to generate your Praxis Account ID with
              us. Simply fill in your organization’s basic details here .You
              cannot change this later.
            </p>
          </div>
        </div>
      </div>
      <div className="genral_info">
        <div className="inputs">
          <div className="input_container">
            <div className="label">
              <p>Type</p>
            </div>
            <div className="input_box">
              <select name="" className="input_tag">
                <option value="1">ABC</option>
                <option value="2">DCE</option>
              </select>
              <div className="info_icon">
                <BsFillInfoCircleFill className="icon" />
              </div>
            </div>
          </div>
          <div className="input_container">
            <div className="label">
              <p>Name</p>
            </div>
            <div className="input_box">
              <input className="input_tag" type="text" />
              <div className="info_icon">
                <BsFillInfoCircleFill className="icon" />
              </div>
            </div>
          </div>
          <div className="input_container">
            <div className="label">
              <p>Unique Government ID</p>
            </div>
            <div className="input_box">
              <input className="input_tag" type="text" />
              <div className="info_icon">
                <BsFillInfoCircleFill className="icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="company_logo">
          <div className="add_logo">
            <FaPlus className="logo" />
            <p>Click to Add Logo</p>
          </div>
        </div>
      </div>
      <div className="account_setup_container">
        <div className="account_setup_meta_info">
          <div className="meta_info_tag">
            <p>Generate Your Praxis Superadmin ID</p>
          </div>
          <div className="meta_info_desc">
            <p>
              If you are the authorized person from your organization to manage
              this Praxis Account, simply fill in the details and we will send
              you an email start the on-boarding process.. You can re-assign
              Praxis Superadmin ID later
            </p>
          </div>
        </div>
      </div>
      <div className="genral_info">
        <div className="inputs id_genrate">
          <div className="name_inputs">
            <div className="input_container">
              <div className="label">
                <p>First Name</p>
              </div>
              <div className="input_box">
                <input type="text" className="input_tag" />
              </div>
            </div>
            <div className="input_container">
              <div className="label">
                <p>Last Name</p>
              </div>
              <div className="input_box">
                <input type="text" className="input_tag" />
              </div>
            </div>
          </div>
          <div className="contact_number">
            <div className="input_container">
              <div className="label">
                <p>Mobile</p>
              </div>
              <div className="input_box">
                <div className="input_tag">
                  <select name="" id="">
                    <option value="1">+ 91</option>
                    <option value="1">+ 110</option>
                  </select>
                  <input type="text" />
                </div>
              </div>
            </div>
          </div>
          <div className="input_container">
            <div className="label">
              <p>Email ID</p>
            </div>
            <div className="input_box">
              <input type="text" className="input_tag" />
            </div>
          </div>
        </div>
      </div>
      <div className="term_cond onboarding_term">
        <p>
          By Proceeding, I agree to{" "}
          <Link to={""} className="trm_cond_link">
            Terms & Conditions
          </Link>{" "}
          and <Link className="trm_cond_link">Privacy Policy</Link>.
        </p>
      </div>
      <div className="proceed_btn" onClick={() => setModalShow(true)}>
        <button>Proceed to Email Verification</button>
      </div>

      <VerificationEmail
        show={modalShow}
        onHide={() => {
          setModalShow(false);
          navigate("/set-password");
        }}
      />
    </div>
  );
}
