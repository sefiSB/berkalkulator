import React from "react";

const TaxRelief = ({ active, onCheck }) => {

    

  const handleCheck = (e) => {
    if(e.target.checked){
    onCheck(true);}
    else{
        onCheck(false)
    }
  };

  return (
    <div class="form-check form-switch">
      <input
        class="form-check-input"
        type="checkbox"
        id="flexSwitchCheckDefault"
      />
      <label onClick={handleCheck} id="szjab" class="form-check-label" for="flexSwitchCheckDefault">
        Default switch checkbox input
      </label>
    </div>
  );
};

export default TaxRelief;