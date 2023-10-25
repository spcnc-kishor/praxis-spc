import React from "react";
import "./NavbarStyle.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import navbar_user from "../../assets/images/navbar_user.png";
import {
  BsSearch,
  BsGearFill,
  BsFillCaretDownFill,
  BsFillCaretUpFill,
} from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { useState } from "react";

function TopNavbar() {
  const [isDropdownOption, setisDropdownOption] = useState(true);
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar-cstm">
      <Container fluid>
        <div className="appinfo">
          <div className="logo">
            <p className="logoname">
              Praxis <span>PRO</span>
            </p>
          </div>
          <div className="searchcontainer">
            <BsSearch />
            <input type="text" className="seachbox" placeholder="Search..." />
          </div>
        </div>
        <div className="userinfo">
          <div className="notification_box">
            <div className="count">
              <p>1</p>
            </div>
            <FaBell className="bellicon" />
          </div>
          <Nav>
            <div
              className="nav_option_container"
              onClick={() => setisDropdownOption(!isDropdownOption)}
            >
              <div style={{ width: "40px", height: "40px" }}>
                <img src={navbar_user} className="userimg" alt="userimg"/>
              </div>
              <div className="user_name">
                <p>Kishor Gupta</p>
                {isDropdownOption ? (
                  <BsFillCaretDownFill className="updowmicon" />
                ) : (
                  <BsFillCaretUpFill className="updowmicon" />
                )}
                <div
                  className={`navbar_option  ${
                    !isDropdownOption ? "show" : ""
                  }`}
                >
                  <ul>
                    <li>
                      <div className="option_icon">
                        <BsGearFill />
                      </div>
                      <div className="option_link">
                        <p>Setting</p>
                      </div>
                    </li>
                    <li>
                      <div className="option_icon">
                        <BsSearch />
                      </div>
                      <div className="option_link">
                        <p>Setting</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <NavDropdown title={"Kishor Gupta"}>
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
            </NavDropdown> */}
            </div>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
