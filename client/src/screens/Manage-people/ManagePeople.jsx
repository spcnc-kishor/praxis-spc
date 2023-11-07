import React from "react";
import "./ManagePeopleStyle.css";
import { Container } from "react-bootstrap";
import PageTab from "../../components/PageTab/PageTab";
import PageTag from "../../components/PageTag/PageTag";
import ActionButton from "../../components/ActionButton/ActionButton";
import ManagePeopleFilter from "../../components/MPFilter/ManagePeopleFilter";
import ManagePeopleReport from "../../components/MPReport/ManagePeopleReport";
import PersonCard from "../../components/PersonCard/PersonCard";
import ManagePeopleRemuneration from "../../components/MPRemuneration/ManagePeopleRemuneration";
import DocPreview from "../../components/DocPreview/DocPreview";

const ManagePeopleTab = [
  { tabname: "Analytics Dashboard", path: "/" },
  { tabname: "Employee Master", path: "/" },
  { tabname: "Time & Expense Management", path: "/" },
  { tabname: "Leave Management", path: "/" },
];

export default function ManagePeople() {
  return (
    <div>
      <PageTab tabs={ManagePeopleTab} activetab={0} />
      <Container>
        <div className="tag_action">
          <PageTag />
          <ActionButton />
        </div>
        <ManagePeopleFilter />
        <ManagePeopleReport />

        <div className="people_cards">
          <PersonCard />
          <PersonCard />
          <PersonCard />
        </div>

        <ManagePeopleRemuneration />

        <div className="remuneration people_document">
          <div className="tag">
            <p>Documents</p>
          </div>
          <div className="content">
            <DocPreview
              doctype="CV"
              metainfo="Personal DOC"
              preview="url will come here or ref of doc"
            />

            <div className="add_new_doc">

              
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
