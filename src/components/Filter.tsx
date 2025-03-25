"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Slider } from "@mui/material";
// import { Search } from "@mui/icons-material";

export default function Filter() {

  let searchParams = useSearchParams();


  
  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => { 
    let url = `/cars?minprice=${priceRange[0]}&maxprice=${priceRange[1]}&minseat=${seatRange[0]}&maxseat=${seatRange[1]}&relevance=${searchQuery}&province=${province}&`;
    let toplike = searchParams.get('toplike');
    let seat = searchParams.get('seat');
    let page = searchParams.get('page');
    let limit = searchParams.get('limit');
    let price = searchParams.get('price');
    
    if(toplike != "" && toplike != null){
        url += `toplike=${toplike}&`;
    }
    if(seat != "" && seat != null){
        url += `seat=${seat}&`;
    }
    if(page != "" && page != null){
        url += `page=${page}&`;
    }
    if(limit != "" && limit != null){
        url += `limit=${limit}&`;
    }
    if(price != "" && price != null){
        url += `price=${price}&`;
    }
  router.push(url);

  };
  const minPrice = 0;
  const maxPrice = 50000;
  const minSeat = 1;
  const maxSeat = 300;
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
  const [seatRange, setSeatRange] = useState([minSeat, maxSeat]);
  const [searchQuery, setSearchQuery] = useState("");
  const [province, setProvince] = useState("");

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
            className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
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
              step={1}
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
          <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            onChange={(e) => setProvince(e.target.value)}
          >
            <option value="">All Provinces</option>
            <option value="Bangkok">Bangkok</option>
            <option value="Chiang Mai">Chiang Mai</option>
            <option value="Phuket">Phuket</option>
            <option value="Pattaya">Pattaya</option>
          </select>
        </div>
      </div>

        <button className="bg-[#FE7F3F] text-white border-none 
        font-bold py-3 px-5 rounded-md shadow-lg transition-transform duration-300 hover:scale-105 w-full text-center mt-5"
        onClick={handleClick}>
          Search
        </button>
    </div>
  );
};

