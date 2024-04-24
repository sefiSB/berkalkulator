import React from "react";
import DatePopUp from "./components/DatePopUp/DatePopUp";
import { useState } from "react";
import Sustained from "./components/Sustained/Sustained";


const TaxRelief = ({ active, onChecked,showDate,showInput, changeData}) => {
  const handleCheck = (e) => {
    console.log(e.target.checked, e.target.id+ " checked")
    onChecked(e.target.checked, e.target.id);
  };


  const dateChange = (date) => {
    changeData(date);
  }
  /* const [datePopUp, setDatePopUp] = useState(false); */

  return (
    <>
    {console.log(active)}
    <div className="form-check form-switch">
      <input
        defaultChecked={active.szja==1}
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
        defaultChecked={active.frissHazasok==1}
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
    <DatePopUp active={active} onDateChange={dateChange} show={showDate} />

    <div className="form-check form-switch">
      <input
        defaultChecked={active.szemelyiKedvezmeny==1}
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
        defaultChecked={active.csaladiKedvezmeny}
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
    <Sustained show={showInput}/>
    </>
  );
};

export default TaxRelief;
