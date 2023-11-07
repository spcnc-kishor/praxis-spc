import React from "react";
import "./DocPreviewStyle.css";

export default function DocPreview({ doctype, metainfo, preview }) {
  return (
    <div className="doc_preview_card">
      <div className="preview"></div>
      <div className="meta_info">
        <h4>{doctype}</h4>
        <div className="doc_type">
          <p>{metainfo}</p>
        </div>
      </div>
    </div>
  );
}
