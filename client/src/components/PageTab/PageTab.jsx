import React from "react";
import "./PageTabStyle.css";
import { Link } from "react-router-dom";

export default function PageTab({ tabs, activetab }) {
  return (
    <div className="page_tabs">
      {tabs?.map((tab, index) => (
        <div
          className={`page_tab  ${activetab === index ? "active" : null}`}
          key={index}
        >
          <Link to={tab.path}>
            <p> {tab.tabname}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
