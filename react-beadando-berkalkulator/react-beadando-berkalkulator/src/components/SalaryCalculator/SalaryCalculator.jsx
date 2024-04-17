import React, { useEffect } from "react";
import { MDBRange } from "mdb-react-ui-kit";
import { useState } from "react";


const SalaryCalculator = ({ active, onSubmit }) => {

  const handleSubmit = () => {
    let name = document.querySelector("#nev").value;
    let brber = document.querySelector("#brber").value;
    onSubmit(name, +brber);
  };


  return (
    <div>
      <h1>{active.name} BÉRÉNEK KISZÁMÍTÁSA</h1>

      
        <strong>
          <label htmlFor="nev">Családtag neve</label>
        </strong>{" "}
        <br />
        <input
          type="text"
          name="nev"
          id="nev"
          value={active.name}
          onChange={handleSubmit}
        />
        <p>Add meg a családtagod nevét!</p>
        <strong>
          <label htmlFor="brber">Bruttó bér</label>
        </strong>{" "}
        <br />
        <input
          type="number"
          name="brber"
          id="brber"
          value={active.brber}
          onChange={handleSubmit}
        />
        <p>Add meg a bruttó béredet!</p>

      <MDBRange defaultValue={50} id="customRange" label="Example range" />
    </div>
  );
};

export default SalaryCalculator;
