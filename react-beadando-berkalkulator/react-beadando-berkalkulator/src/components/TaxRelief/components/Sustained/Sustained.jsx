import React, { useEffect, useState } from "react";
import { act } from "react";

const Sustained = ({ show, sendValue,active }) => {
  const [eltartott, setEltartott] = useState(active.eltartottak);
  const [kedvezm, setKedvezm] = useState(active.csaladiKedvezmeny);

  useEffect(() => {
    console.log("active ", active.eltartottak, active.csaladiKedvezmeny);
    setKedvezm(active.csaladiKedvezmeny);
    setEltartott(active.eltartottak);
  }, [active]
  )

  const handleEltartottChange = (event) => {
    const value = parseInt(event.target.value);
    setEltartott(value > 3 ? 3 : value);
    setKedvezm((prevKedvezm) => {return prevKedvezm > value ? value : prevKedvezm});
    sendValue(value > 3 ? 3 : value, kedvezm > value ? value : kedvezm);
  };

  const handleKedvezmChange = (event) => {
    const value = parseInt(event.target.value);
    console.log("valami ",eltartott)
    setKedvezm(value > eltartott ? eltartott : value);
    sendValue(eltartott, value > eltartott ? eltartott : value);
  };

  if (active.csaladiKedvezmeny > 0) {
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
