import React from "react";
import "./PageTagStyle.css";
import { IoCaretBack } from "react-icons/io5";

export default function PageTag() {
  return (
    <div className="page_tag">
      <div className="arrow">
        <IoCaretBack className="arrowicon" />
      </div>
      <div className="tag_name">
        <p>employee master</p>
      </div>
    </div>
  );
}
