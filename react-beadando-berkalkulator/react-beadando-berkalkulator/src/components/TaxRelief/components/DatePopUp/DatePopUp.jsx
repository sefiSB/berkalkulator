import React, { useState } from "react";
import SelectedDate from "./components/SelectDate/SelectDate";
import { green, red } from "@mui/material/colors";

const DatePopUp = ({ active, dateChange, show, validate }) => {
  const [showPopUp, setShowPopUp] = useState(false);

  const handleDateChange = (event) => {
    dateChange(event.target.value);
  };

  const showSelectDate = () => {
    setShowPopUp(true);
  };

  const closePopUp = () => {
    setShowPopUp(false);
  };

  const modalStyle = {
    display: show ? "block" : "none",
    position: "fixed",
    zIndex: 1,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    overflow: "auto",
    backgroundColor: "rgba(0,0,0,0.4)",
  };

  const modalContentStyle = {
    backgroundColor: "#fefefe",
    margin: "15% auto",
    padding: "20px",
    border: "1px solid #888",
    width: "80%",
  };
  if (show) {
    return (
      <div style={ active.frissHazasok==1 ? {display:"inline-block"} : {display:"none"}}>  
        <button onClick={showSelectDate}>Dátum hozzáadása</button>
        <SelectedDate
          active={active}
          onDateChange={handleDateChange}
          show={active.frisshazasok!=0 && showPopUp}
          close={closePopUp}
          />
          
        <div>{active.frissHazasok==1 && validate ? <p style={{color:green[500]}}>Jogosult</p> : <p style={{color:red[500]}}>Nem jogosult</p>}</div>
      </div>
    );
  } else {
    return null;
  }
};

export default DatePopUp;
