import React from "react";

const MemberSummary = ({ active, onChecked }) => {
  

  return (
    <>
        <h2>Számított nettó bér:</h2>
        <div>{active.netto}</div>
    </>
  );
};

export default MemberSummary;
