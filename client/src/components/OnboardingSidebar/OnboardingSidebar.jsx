import React from "react";
import "./OnboardingSidebarStyle.css";
import Logo from "../Logo/Logo";
import StepperCard from "../StepperCard/StepperCard";

export default function OnboardingSidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__menu">
        <Logo />

        <div className="roadMap_tag">
          <p>Onboarding Roadmap</p>
        </div>

        <div className="stepper">
          <div className="main_section">
            <StepperCard status={true} tag={"Account & Super Admin Setup"} />
            <div className="sub_steeper">
              <ul>
                <li>
                  <StepperCard status={true} tag={"Account ID"} />
                </li>
                <li>
                  <StepperCard status={true} tag={"Super Admin ID"} />
                </li>
                <li>
                  <StepperCard status={true} tag={"Super Admin Team"} />
                </li>
                <li>
                  <StepperCard status={true} tag={"Product Owner"} />
                </li>
              </ul>
            </div>
          </div>
          <div className="main_section">
            <StepperCard status={false} tag={"Know your Organisation"} />
            <div className="sub_steeper">
              <ul>
                <li>
                  <StepperCard status={false} tag={"Entity & Branch Master"} />
                </li>
                <li>
                  <StepperCard status={false} tag={"Org Structure & Role"} />
                </li>
                <li>
                  <StepperCard status={false} tag={"Service Master"} />
                </li>
              </ul>
            </div>
          </div>
          <div className="main_section">
            <StepperCard status={false} tag={"Know your People"} />
            <div className="sub_steeper">
              <ul>
                <li>
                  <StepperCard status={false} tag={"Employee Master"} />
                </li>
                <li>
                  <StepperCard status={false} tag={"Charge out Rates"} />
                </li>
              </ul>
            </div>
          </div>
          <div className="main_section">
            <StepperCard status={false} tag={"Know your Engagement"} />
            <div className="sub_steeper">
              <ul>
                <li>
                  <StepperCard status={false} tag={"Client Master"} />
                </li>
                <li>
                  <StepperCard status={false} tag={"Order Book"} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
