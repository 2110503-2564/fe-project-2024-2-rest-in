"use client";

import React, { useState } from "react";
import { Slider } from "@mui/material";
// import { Search } from "@mui/icons-material";

const Filter = () => {
  const minPrice = 0;
  const maxPrice = 1000000;
  const minSeat = 1;
  const maxSeat = 10;
  const step = 1;
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
  const [seatRange, setSeatRange] = useState([minSeat, maxSeat]);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="h-full w-full px-5">
      <h2 className="text-xl font-semibold mb-6">Filters</h2>
      
      <div className="space-y-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search cars..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {/* <Search className="absolute left-3 top-2.5 text-gray-400" /> */}
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Price Range</h3>
          <div className="px-2">
            <Slider
              value={priceRange}
              onChange={(e, newValue) => setPriceRange(newValue as number[])}
              valueLabelDisplay="auto"
              min={minPrice}
              max={maxPrice}
              step={step}
              sx={{
                color: "orange",
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
          <div className="flex justify-between text-sm text-gray-600 mt-1">
            <span>฿{priceRange[0].toLocaleString()}</span>
            <span>฿{priceRange[1].toLocaleString()}</span>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Number of Seats</h3>
          <div className="px-2">
            <Slider
              value={seatRange}
              onChange={(e, newValue) => setSeatRange(newValue as number[])}
              valueLabelDisplay="auto"
              min={minSeat}
              max={maxSeat}
              step={1}
              marks
              sx={{
                color: "orange",
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
          <div className="flex justify-between text-sm text-gray-600 mt-1">
            <span>{seatRange[0]} seats</span>
            <span>{seatRange[1]} seats</span>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Province</h3>
          <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option value="">All Provinces</option>
            <option value="Bangkok">Bangkok</option>
            <option value="Chiang Mai">Chiang Mai</option>
            <option value="Phuket">Phuket</option>
            <option value="Pattaya">Pattaya</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;