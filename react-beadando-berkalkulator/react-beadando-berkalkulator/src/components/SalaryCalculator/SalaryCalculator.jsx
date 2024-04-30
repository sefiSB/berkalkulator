import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Stack } from "@mui/material";
import LabeledInput from "../LabeledInput/LabeledInput";


const SalaryCalculator = ({ active, members, onSubmit, deleteMember }) => {
  const handleSubmit = (name,brber) => {
    /* let name = document.querySelector("#nev").value;
    let brber = document.querySelector("#brber").value; */
    onSubmit(name, brber);
  };

  const handleSliderChange = () => {
    let slider = document.querySelector("#slider").value;
    onSubmit(active.name, +slider);
  };
  const delMem = () => {
    deleteMember(active.id);
  }


  const handleButton = (e) => {
    let value = active.brber;
    if (e.target.textContent === "-5%") {
      value = value - value * 0.05;
    } else if (e.target.textContent === "-1%") {
      value = value - value * 0.01;
    } else if (e.target.textContent === "+1%") {
      value = value + value * 0.01;
    } else if (e.target.textContent === "+5%") {
      value = value + value * 0.05;
    }
    onSubmit(active.name, Math.floor(value));
  };
  return (
    <> 
    <div>
      <div style={{display:"flex"}}>
        <h1 style={{textTransform:"uppercase"}}>{active.name} bérének kiszámítása</h1>
        <span onClick={delMem}>X</span>
      </div>
      {/* <strong>
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
      <p>Add meg a bruttó béredet!</p> */}

      <LabeledInput
      active={active}
      label="Családtag neve"
      msg="Add meg a családtagod nevét!"
      onChange={handleSubmit}
      type={"text"}
      name={"nev"}
      />

      <LabeledInput
      active={active}
      label="Bruttó bér"
      msg="Add meg a bruttó béredet!"
      onChange={handleSubmit}
      type={"number"}
      name={"brber"}
      />

      <input
        id="slider"
        type="range"
        min="0"
        max="1000000"
        value={active.brber}
        onChange={handleSliderChange}
        />
      <Stack spacing={2} direction="row">
        <Button onClick={handleButton} variant="outlined">
          -5%
        </Button>
        <Button onClick={handleButton} variant="outlined">
          -1%
        </Button>
        <Button onClick={handleButton} variant="outlined">
          +1%
        </Button>
        <Button onClick={handleButton} variant="outlined">
          +5%
        </Button>
      </Stack>
    </div>
        </>
  );
};

export default SalaryCalculator;
