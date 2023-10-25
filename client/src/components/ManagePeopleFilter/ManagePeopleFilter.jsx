import React from "react";
import "./ManagePeopleFilterStyle.css";
import { BiSolidDashboard } from "react-icons/bi";
import { FaBarsStaggered } from "react-icons/fa6";

export default function ManagePeopleFilter() {
  return (
    <div className="filter_container">
      <div className="inputs">
        <div className="input_box">
          <div className="option_input">
            <label htmlFor="departmane">Department</label>
            <select name="" id="">
              <option value="">ABc</option>
            </select>
          </div>
          <div className="text_input">
            <input type="text" />
          </div>
        </div>
        <div className="input_box">
          <div className="option_input">
            <label htmlFor="departmane">Designation</label>
            <select name="" id="">
              <option value="">ABc</option>
            </select>
          </div>
          <div className="text_input">
            <input type="text" />
          </div>
        </div>
        <div className="input_box">
          <div className="option_input">
            <label htmlFor="departmane">Reporting to</label>
            <select name="" id="">
              <option value="">ABc</option>
            </select>
          </div>
          <div className="text_input">
            <input type="text" />
          </div>
        </div>
        <div className="input_box">
          <div className="option_input">
            <label htmlFor="departmane">Status</label>
            <select name="" id="">
              <option value="">ABc</option>
            </select>
          </div>
          <div className="text_input">
            <button>search</button>
          </div>
        </div>
      </div>
      <div className="settings">
        <div className="setting_button">
          <BiSolidDashboard className="icon" />
        </div>
        <div className="setting_button">
          <FaBarsStaggered className="icon" />
        </div>
      </div>
    </div>
  );
}
