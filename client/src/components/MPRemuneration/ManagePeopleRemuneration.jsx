import React from "react";
import "./ManagePeopleRemunerationStyle..css";
import { AiOutlineForm } from "react-icons/ai";

export default function ManagePeopleRemuneration() {
  return (
    <div className="remuneration">
      <div className="tag">
        <p>Remuneration *</p>
        <div className="edit_button">
          <AiOutlineForm />
        </div>
      </div>
      <div className="content">
        <div className="half">
          <div className="qtr">
            <p>
              Annual Cost : <span className="dark">₹ 32,50,000</span>
            </p>
            <p>
              Monthly Cost : <span className="dark">₹ 32,50,000</span>
            </p>
            <p>
              Hourly Cost : <span className="dark">₹ 32,50,000</span>
            </p>
          </div>
          <div className="qtr">
            <p>
              Annual Cost : <span className="dark">₹ 32,50,000</span>
            </p>
            <p>
              Monthly Cost : <span className="dark">₹ 32,50,000</span>
            </p>
            <p>
              Hourly Cost : <span className="dark">₹ 32,50,000</span>
            </p>
          </div>
        </div>
        <div className="half">
          <div className="qtr">
            <p>
              Annual Cost : <span className="dark">₹ 32,50,000</span>
            </p>
            <p>
              Monthly Cost : <span className="dark">₹ 32,50,000</span>
            </p>
            <p>
              Hourly Cost : <span className="dark">₹ 32,50,000</span>
            </p>
          </div>
          <div className="qtr">
            <p>
              Annual Cost : <span className="dark">₹ 32,50,000</span>
            </p>
            <p>
              Monthly Cost : <span className="dark">₹ 32,50,000</span>
            </p>
            <p>
              Hourly Cost : <span className="dark">₹ 32,50,000</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
