import React from "react";
import "./OnboardingHomeStyle.css";
import OnboardingSidebar from "../../components/OnboardingSidebar/OnboardingSidebar";
import Logo from "../../components/Logo/Logo";
import OnboardingSuperAdmin from "../../components/OnboardingSuperAdmin/OnboardingSuperAdmin";

export default function OnboardingHome() {
  return (
    <div className="onboarding_home">
      <OnboardingSidebar />
      <div className="container_wrapper">
        <OnboardingSuperAdmin />
      </div>
    </div>
  );
}
