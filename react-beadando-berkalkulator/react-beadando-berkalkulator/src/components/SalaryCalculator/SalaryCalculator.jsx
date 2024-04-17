import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Stack } from "@mui/material";

const SalaryCalculator = ({ active, onSubmit }) => {
  const handleSubmit = () => {
    let name = document.querySelector("#nev").value;
    let brber = document.querySelector("#brber").value;
    onSubmit(name, +brber);
  };

  const handleSliderChange = () => {
    let slider = document.querySelector("#slider").value;
    onSubmit(active.name, +slider);
  };

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
    console.log(active.brber);
  }
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
      <input
        id="slider"
        type="range"
        min="0"
        max="1000000"
        value={active.brber}
        onChange={handleSliderChange}
      />
       <Stack spacing={2} direction="row">
      <Button onClick={handleButton} variant="outlined">-5%</Button>
      <Button onClick={handleButton} variant="outlined">-1%</Button>
      <Button onClick={handleButton} variant="outlined">+1%</Button>
      <Button onClick={handleButton} variant="outlined">+5%</Button>
    </Stack>
    </div>
  );
};

export default SalaryCalculator;
