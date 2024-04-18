import React from "react";

const TaxRelief = ({ active, onChecked }) => {
  const handleCheck = (e) => {
    onChecked(e.target.checked);
  };

  return (
    <div className="form-check form-switch">
      <input
        onClick={handleCheck}
        className="form-check-input"
        type="checkbox"
        id="flexSwitchCheckDefault"
      />
      <label
        id="szjab"
        className="form-check-label"
        htmlFor="flexSwitchCheckDefault"
      >
        Default switch checkbox input
      </label>
    </div>
  );
};

export default TaxRelief;
