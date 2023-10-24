import React from "react";
import "./ManagePeopleStyle.css";
import PageTab from "../../components/PageTab/PageTab";

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
    </div>
  );
}
