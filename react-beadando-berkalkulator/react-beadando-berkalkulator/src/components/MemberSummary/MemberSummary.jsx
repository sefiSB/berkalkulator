import React from "react";

const MemberSummary = ({ activeMember }) => {
  

  return (
    <>
        <h2>Számított nettó bér:</h2>
        <div>{activeMember.netto}</div>
    </>
  );
};

export default MemberSummary;
