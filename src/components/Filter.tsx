"use client";

import React, { useState } from "react";
import { Slider } from "@mui/material";
const Filter = () => {
  const min = 0;
  const max = 1000000;
  const step = 1;
  const [values, setValues] = useState([min, max]);
  return (
    <div className="w-64 p-4 border-r border-gray-200">
      <h2 className="text-lg font-semibold mb-4">Filter</h2>
      <input
        type="text"
        placeholder="Search"
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <div className="mb-4">
        <h3 className="text-sm font-medium mb-2">Select Price Range</h3>
        <Slider
        value={values}
        onChange={(e, newValue) => setValues(newValue as number[])}
        valueLabelDisplay="auto"
        min={min}
        max={max}
        step={step}
        sx={{
          color: "orange", // เปลี่ยนสี slider เป็นสีส้ม
          "& .MuiSlider-thumb": {
            backgroundColor: "orange",
          },
          "& .MuiSlider-track": {
            backgroundColor: "orange",
          },
          "& .MuiSlider-rail": {
            backgroundColor: "#FFD580",
          },
        }}
      />
      </div>
      <div className="mb-4">
        <h3 className="text-sm font-medium mb-2">Select Seats Range</h3>
        <Slider
        value={values}
        onChange={(e, newValue) => setValues(newValue as number[])}
        valueLabelDisplay="auto"
        min={min}
        max={max}
        step={step}
        sx={{
          color: "orange", // เปลี่ยนสี slider เป็นสีส้ม
          "& .MuiSlider-thumb": {
            backgroundColor: "orange",
          },
          "& .MuiSlider-track": {
            backgroundColor: "orange",
          },
          "& .MuiSlider-rail": {
            backgroundColor: "#FFD580",
          },
        }}
      />
      </div>
      <select className="w-full p-2 border border-gray-300 rounded">
        <option value="">province</option>
        <option value="Bangkok">Bangkok</option>
        <option value="Chiang Mai">Chiang Mai</option>
      </select>
    </div>
  );
};

export default Filter;