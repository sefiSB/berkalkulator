import React, { useState } from "react";

const DatePopUp = ({ active, onDateChange, show }) => {
    console.log(active.date)
  const [selectedDate, setSelectedDate] = useState(active.date);

  const handleDateChange = (event) => {
    console.log(event.target.value);
    setSelectedDate(event.target.value);
  };

  const handleSubmit = () => {
    onDateChange(selectedDate);
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
      <div className="modal" style={modalStyle}>
        <div className="modal-content" style={modalContentStyle}>
          <span className="close" onClick={() => onDateChange(active?.date)}>
            X
          </span>
          <div className="row">
            <div className="col">
              <label htmlFor="date">Dátum:</label>
              <input
                type="date"
                id="date"
                name="date"
                onChange={handleDateChange}
                value={selectedDate}
              />
            </div>
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default DatePopUp;
