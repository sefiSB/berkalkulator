import React from "react";
import DatePopUp from "./components/DatePopUp/DatePopUp";
import { useState } from "react";
import Sustained from "./components/Sustained/Sustained";


const TaxRelief = ({ active, onChecked,showDate,showInput, changeData,familyInputs,popUpClose}) => {

  const [validDate, setValidDate] = useState(false);

  const handleCheck = (e) => {
    onChecked(e.target.checked, e.target.id);
  };
  const getValue = (eltartott, kedvezm) => {
    familyInputs(eltartott, kedvezm);
  }

  const dateChange = (date) => {
    const msDay = 86400000;
    if((new Date()-new Date(date) < 2*365*msDay) && (new Date()-new Date(date) > 0)){
      setValidDate(true);
    }
    else{
      setValidDate(false);
    }
    changeData(date);
  }

  const closePopUp = () => {
    popUpClose();
  }
  

  return (
    <>
    <div className="form-check form-switch">
      <input
        checked={active.szja==1}
        onChange={handleCheck}
        className="form-check-input"
        type="checkbox"
        id="szja"
      />
      <label
        id="szjab"
        className="form-check-label"
        htmlFor="flexSwitchCheckDefault"
      >
        25 év alattiak SZJA mentessége
      </label>
    </div>
    <div className="form-check form-switch">
      <input
        checked={active.frissHazasok==1}
        onChange={handleCheck}
        className="form-check-input"
        type="checkbox"
        id="frissHazasok"
      />
      <label
        id="szjab"
        className="form-check-label"
        htmlFor="flexSwitchCheckDefault"
      >
        Friss házasok kedvezménye
      </label>
    </div>
    

    <DatePopUp active={active} dateChange={dateChange} show={showDate} validate={validDate}/>

    <div className="form-check form-switch">
      <input
        checked={active.szemelyiKedvezmeny==1}
        onChange={handleCheck}
        className="form-check-input"
        type="checkbox"
        id="szemelyiKedvezmeny"
      />
      <label
        id="szjab"
        className="form-check-label"
        htmlFor="flexSwitchCheckDefault"
      >
        Személyi kedvezmény
      </label>
    </div>


    <div className="form-check form-switch">
      <input
        checked={active.csaladiKedvezmeny!=0}
        onChange={handleCheck}
        className="form-check-input"
        type="checkbox"
        id="csaladiKedvezmeny"
      />
      <label
        id=""
        className="form-check-label"
        htmlFor="csaladiKedvezmeny"
      >
        Családi kedvezmény
      </label>
    </div>
    <Sustained show={showInput} sendValue={getValue} active={active}/>
    </>
  );
};

export default TaxRelief;
