"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";  

export default function SortButtons() {
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);
  const [showSeatDropdown, setShowSeatDropdown] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState("Price: Low to High");
  const [selectedSeat, setSelectedSeat] = useState("Seat: Low to High");
  const [activeButton, setActiveButton] = useState("");
  console.log("first " + activeButton);

  const router = useRouter();
  let searchParams = useSearchParams();

  useEffect(() => {
    // เช็ค URL และตั้งค่าเริ่มต้นของปุ่ม
    const toplike = searchParams.get('toplike');
    const seat = searchParams.get('seat');
    const price = searchParams.get('price');

    if (toplike === "true") {
      setActiveButton("Most Popular");
    } else if (seat === "low") {
      setSelectedSeat("Seat: Low to High");
      setActiveButton("Seat: Low to High");
    } else if (seat === "high") {
      setSelectedSeat("Seat: High to Low");
      setActiveButton("Seat: High to Low");
    } else if (price === "low") {
      setSelectedPrice("Price: Low to High");
      setActiveButton("Price: Low to High");
    } else if (price === "high") {
      setSelectedPrice("Price: High to Low");
      setActiveButton("Price: High to Low");
    }
  }, [searchParams]);

  const handleClick = () => {  
    console.log(activeButton);

    let url = "";
    if(activeButton != ""){
      if (activeButton === "Most Popular") {
        url += `toplike=true&`;
      } else if (activeButton === "Seat: Low to High") {
        url += `seat=low&`;
      } else if (activeButton === "Seat: High to Low") {
        url += `seat=high&`;
      } else if (activeButton === "Price: Low to High") {
        url += `price=low&`;
      } else if (activeButton === "Price: High to Low") {
        url += `price=high&`;
      } 
    } 
      


    let minprice = searchParams.get('minprice');
    let maxprice = searchParams.get('maxprice');
    let minseat = searchParams.get('minseat');
    let maxseat = searchParams.get('maxseat');
    let relevance = searchParams.get('relevance');
    let province = searchParams.get('province');

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

    router.push(`/cars?${url}`);
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-600">Sort by</span>
      <div className="flex gap-2">
        <button 
          className={`px-3 py-1.5 text-sm rounded-full ${activeButton === "Most Popular" ? "bg-orange-500" : "bg-gray-100 hover:bg-gray-200"}`}
          onClick={() => {
            setActiveButton(activeButton === "Most Popular" ? "" : "Most Popular");
            handleClick();
            setShowSeatDropdown(false);
            setShowPriceDropdown(false);
          }}
        >
          Most Popular
        </button>
        <div className="relative">
          <button 
            className={`px-3 py-1.5 text-sm rounded-full ${activeButton === selectedSeat ? "bg-orange-500" : "bg-gray-100 hover:bg-gray-200"} flex items-center gap-1`}
            onClick={() => {
              setActiveButton(activeButton === selectedSeat ? "" : selectedSeat);
              handleClick();
              setShowPriceDropdown(false);
            }}
          >
            {selectedSeat}
          </button>
          <span 
            className="ml-1 cursor-pointer" 
            onClick={() => setShowSeatDropdown(!showSeatDropdown)}
          >
            ▼
          </span>
          {showSeatDropdown && (
            <div className="absolute top-full left-0 mt-1 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-10">
              <button 
                className="w-full px-4 py-2 text-sm text-left hover:bg-gray-50"
                onClick={() => {
                  setSelectedSeat("Seat: Low to High");
                  setActiveButton("Seat: Low to High");
                  handleClick();
                  setShowSeatDropdown(false);
                }}
              >
                Seat: Low to High 
              </button>
              <button 
                className="w-full px-4 py-2 text-sm text-left hover:bg-gray-50"
                onClick={() => {
                  setSelectedSeat("Seat: High to Low");
                  setActiveButton("Seat: High to Low");
                  handleClick();
                  setShowSeatDropdown(false);
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
              setActiveButton(activeButton === selectedPrice ? "" : selectedPrice);
              handleClick();
              setShowSeatDropdown(false);
            }}
          >
            {selectedPrice}
          </button>
          <span 
            className="ml-1 cursor-pointer" 
            onClick={() => setShowPriceDropdown(!showPriceDropdown)}
          >
            ▼
          </span>
          {showPriceDropdown && (
            <div className="absolute top-full left-0 mt-1 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-10">
              <button 
                className="w-full px-4 py-2 text-sm text-left hover:bg-gray-50"
                onClick={() => {
                  setSelectedPrice("Price: Low to High");
                  setActiveButton("Price: Low to High");
                  handleClick();
                  setShowPriceDropdown(false);
                }}
              >
                Price: Low to High
              </button>
              <button 
                className="w-full px-4 py-2 text-sm text-left hover:bg-gray-50"
                onClick={() => {
                  setSelectedPrice("Price: High to Low");
                  setActiveButton("Price: High to Low");
                  handleClick();
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