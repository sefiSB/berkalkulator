import React, { useState } from "react";
import { act } from "react";

const Sustained = ({ show, sendValue,active }) => {
  const [eltartott, setEltartott] = useState(1);
  const [kedvezm, setKedvezm] = useState(1);

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

  if (show && active.eltartott!=0 && active.csaladiKedvezmeny!=0) {
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
            min={0}
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
            min={0}
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
