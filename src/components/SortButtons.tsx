"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";  

export default function SortButtons() {
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);
  const [showSeatDropdown, setShowSeatDropdown] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState("Price: Low to High");
  const [selectedSeat, setSelectedSeat] = useState("Seat: Low to High");
  const [activeButton, setActiveButton] = useState("");

  const router = useRouter();
  let searchParams = useSearchParams();

  const handleClick = () => {  
    let url = "";
    const minprice = searchParams.get('minprice');
    const maxprice = searchParams.get('maxprice');
    const minseat = searchParams.get('minseat');
    const maxseat = searchParams.get('maxseat');
    const relevance = searchParams.get('relevance');
    const province = searchParams.get('province');
    const toplike = searchParams.get('toplike');
    const sortby = activeButton;
      if(sortby == "Most popular"){
        url += `toplike=true&`;
      }
      else if(sortby == "Seat: Low to High"){
        url += `seat=low&`;
      }
      else if(sortby == "Seat: High to Low"){
        url += `seat=high&`;
      }
      else if(sortby == "Price: Low to High"){
        url += `price=low&`;
      }
      else if(sortby == "Price: High to Low"){
        url += `price=high&`;
      }
    

      if(minprice != "" && minprice != null){
          url += `minprice=${minprice}&`;
      }
      if(maxprice != "" && maxprice != null){
          url += `maxprice=${maxprice}&`;
      }
      if(minseat != "" && minseat != null){
          url += `minseat=${minseat}&`;
      }
      if(maxseat != "" && maxseat != null){
          url += `maxseat=${maxseat}&`;
      }  
      if(relevance != "" && relevance != null){
          url += `relevance=${relevance}&`;
      }
      if(province != "" && province != null){
          url += `province=${province}&`;
      }  
      if(toplike != "" && toplike != null){
          url += `toplike=${toplike}&`;
      }
      // if(seat != "" && seat != null){
      //     url += `seat=${seat}&`;
      // }
      // if(page != "" && page != null){
      //     url += `page=${page}&`;
      // }
      // if(limit != "" && limit != null){
      //     url += `limit=${limit}&`;
      // }
      // if(price != "" && price != null){
      //     url += `price=${price}&`;
      // }
      router.push(`/cars?${url}`);
    };
  


  return (

    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-600">Sort by</span>
      <div className="flex gap-2">
        <button 
          className={`px-3 py-1.5 text-sm rounded-full ${activeButton === "Most popular" ? "bg-orange-500" : "bg-gray-100 hover:bg-gray-200"}`}
          onClick={() => {
            setActiveButton(activeButton === "Most popular" ? "" : "Most popular");
            handleClick();
            setShowSeatDropdown(false);
            setShowPriceDropdown(false);
          }}
        >
          Most popular
        </button>
        <div className="relative">
          <button 
            className={`px-3 py-1.5 text-sm rounded-full ${activeButton === selectedSeat ? "bg-orange-500" : "bg-gray-100 hover:bg-gray-200"} flex items-center gap-1`}
            onClick={() => {
              setShowSeatDropdown(!showSeatDropdown);
              setShowPriceDropdown(false);
              setActiveButton(activeButton === selectedSeat ? "" : selectedSeat);
            }}
          >
            {selectedSeat}
          </button>
          {showSeatDropdown && (
            <div className="absolute top-full left-0 mt-1 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-10">
              <button 
                className="w-full px-4 py-2 text-sm text-left hover:bg-gray-50"
                onClick={() => {
                  setSelectedSeat("Seat: Low to High");
                  setShowSeatDropdown(false);
                  setActiveButton("Seat: Low to High");
                  handleClick();
                }}
              >
                Seat: Low to High 
              </button>
              <button 
                className="w-full px-4 py-2 text-sm text-left hover:bg-gray-50"
                onClick={() => {
                  setSelectedSeat("Seat: High to Low");
                  setShowSeatDropdown(false);
                  setActiveButton("Seat: High to Low");
                  handleClick();
                }}
              >
                Seat: High to Low
              </button>
            </div>
          )}
        </div>
        <div className="relative">
          <button 
            className={`px-3 py-1.5 text-sm rounded-full ${activeButton === selectedPrice ? "bg-orange-500" : "bg-gray-100 hover:bg-gray-200"} flex items-center gap-1`}
            onClick={() => {
              setShowPriceDropdown(!showPriceDropdown);
              setShowSeatDropdown(false);
              setActiveButton(activeButton === selectedPrice ? "" : selectedPrice);
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
                  setActiveButton("Price: Low to High");
                  handleClick();
                }}
              >
                Price: Low to High
              </button>
              <button 
                className="w-full px-4 py-2 text-sm text-left hover:bg-gray-50"
                onClick={() => {
                  setSelectedPrice("Price: High to Low");
                  setShowPriceDropdown(false);
                  setActiveButton("Price: High to Low");
                  handleClick();
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