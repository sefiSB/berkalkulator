import React from "react";
import DatePopUp from "./components/DatePopUp/DatePopUp";
import { useState } from "react";
import Sustained from "./components/Sustained/Sustained";


const TaxRelief = ({ active, onChecked,showDate,showInput, changeData,familyInputs,popUpClose}) => {

  const [validDate, setValidDate] = useState(false);

  const handleCheck = (e) => {
    console.log(e.target.checked, e.target.id+ " checked")
    onChecked(e.target.checked, e.target.id);
  };
  const getValue = (eltartott, kedvezm) => {
    familyInputs(eltartott, kedvezm);
  }

  const dateChange = (date) => {
    const msDay = 86400000;
    if(new Date()-new Date(date) < 2*365*msDay){
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
    <div>{active.frissHazasok==1?validDate ? "A dátum megfelelő": "Nem megfelelő dátum":""}</div>

    <DatePopUp active={active} onDateChange={dateChange} show={showDate} close={closePopUp} />

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
        checked={active.csaladiKedvezmeny}
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
    <Sustained show={showInput} sendValue={getValue} />
    </>
  );
};

export default TaxRelief;
