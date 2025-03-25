"use client";

import { useState } from "react";

export default function SortButtons() {
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);
  const [showSeatDropdown, setShowSeatDropdown] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState("Price: Low to High");
  const [selectedSeat, setSelectedSeat] = useState("seat low to high");

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-600">Sort by</span>
      <div className="flex gap-2">
        <button className="px-3 py-1.5 text-sm rounded-full bg-gray-100 hover:bg-gray-200">
          Relevance
        </button>
        <button className="px-3 py-1.5 text-sm rounded-full bg-gray-100 hover:bg-gray-200">
          Most popular
        </button>
        <div className="relative">
          <button 
            className="px-3 py-1.5 text-sm rounded-full bg-gray-100 hover:bg-gray-200 flex items-center gap-1"
            onClick={() => {
              setShowSeatDropdown(!showSeatDropdown);
              setShowPriceDropdown(false);
            }}
          >
            {selectedSeat}
          </button>
          {showSeatDropdown && (
            <div className="absolute top-full left-0 mt-1 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-10">
              <button 
                className="w-full px-4 py-2 text-sm text-left hover:bg-gray-50"
                onClick={() => {
                  setSelectedSeat("seat low to high");
                  setShowSeatDropdown(false);
                }}
              >
                seat low to high
              </button>
              <button 
                className="w-full px-4 py-2 text-sm text-left hover:bg-gray-50"
                onClick={() => {
                  setSelectedSeat("seat high to low");
                  setShowSeatDropdown(false);
                }}
              >
                seat high to low
              </button>
            </div>
          )}
        </div>
        <div className="relative">
          <button 
            className="px-3 py-1.5 text-sm text-orange-500 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center gap-1"
            onClick={() => {
              setShowPriceDropdown(!showPriceDropdown);
              setShowSeatDropdown(false);
            }}
          >
            {selectedPrice}
          </button>
          {showPriceDropdown && (
            <div className="absolute top-full left-0 mt-1 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-10">
              <button 
                className="w-full px-4 py-2 text-sm text-left hover:bg-gray-50"
                onClick={() => {
                  setSelectedPrice("Price: Low to High");
                  setShowPriceDropdown(false);
                }}
              >
                Price: Low to High
              </button>
              <button 
                className="w-full px-4 py-2 text-sm text-left hover:bg-gray-50"
                onClick={() => {
                  setSelectedPrice("Price: High to Low");
                  setShowPriceDropdown(false);
                }}
              >
                Price: High to Low
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 