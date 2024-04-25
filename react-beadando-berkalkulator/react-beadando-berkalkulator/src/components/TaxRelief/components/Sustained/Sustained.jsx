import React, { useState } from "react";

const Sustained = ({ show, sendValue }) => {
  const [eltartott, setEltartott] = useState(0);
  const [kedvezm, setKedvezm] = useState(0);

  const handleEltartottChange = (event) => {
    const value = parseInt(event.target.value);
    setEltartott(value > 3 ? 3 : value);
    setKedvezm((prevKedvezm) => (prevKedvezm > value ? value : prevKedvezm));
    sendValue(value > 3 ? 3 : value, kedvezm > value ? value : kedvezm);
  };

  const handleKedvezmChange = (event) => {
    const value = parseInt(event.target.value);
    setKedvezm(value > eltartott ? eltartott : value);
    sendValue(eltartott, value > eltartott ? eltartott : value);
  };

  if (show) {
    return (
      <div>
        <div>
          <label htmlFor="eltartott">Eltartottak száma:</label>
          <input
            style={{ width: "50px" }}
            type="number"
            name="eltartott"
            id="eltartott"
            max={3}
            value={eltartott}
            onChange={handleEltartottChange}
          />
          <br />
          <label htmlFor="kedv">Kedvezményezettek száma:</label>
          <input
            style={{ width: "50px" }}
            type="number"
            name="kedv"
            id="kedv"
            max={eltartott}
            value={kedvezm}
            onChange={handleKedvezmChange}
          />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Sustained;
