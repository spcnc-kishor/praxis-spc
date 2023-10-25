import React from "react";
import "./ManagePeopleStyle.css";
import { Container } from "react-bootstrap";
import PageTab from "../../components/PageTab/PageTab";
import PageTag from "../../components/PageTag/PageTag";
import ActionButton from "../../components/ActionButton/ActionButton";
import ManagePeopleFilter from "../../components/ManagePeopleFilter/ManagePeopleFilter";
import ManagePeopleReport from "../../components/ManagePeopleReport/ManagePeopleReport";

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
      </Container>
    </div>
  );
}
