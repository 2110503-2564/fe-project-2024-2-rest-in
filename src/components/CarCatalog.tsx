"use client";

import Link from "next/link";
import Card from "./Card";
import { useEffect, useState } from "react";

export default function CarCatalog({ CarProviderJson }: { CarProviderJson: Promise<CarProviderJson> }) {
  const [CarProviderJsonReady, setCarProviderJsonReady] = useState<CarProviderJson | null>(null);
  useEffect(() => {
    CarProviderJson.then(data => setCarProviderJsonReady(data));
  }, [CarProviderJson]);

  if (!CarProviderJsonReady) {
    return <div>Loading...</div>; // Or your preferred loading state
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="w-64">
          {/* Your Filter Component Here (You'll need to create this) */}
          {/* Example: <Filter /> */}
        </div>
        <div className="flex items-center">
          Sort by:
          <select className="border border-gray-300 rounded p-2 ml-2">
            <option value="relevance">Relevance</option>
            <option value="toplike">Toplike</option>
            <option value="seats">Seat Low to High</option>
            <option value="dailyrate">Price: Low to High</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {CarProviderJsonReady.data.map((data: CarProvider) => (
          <Link key={data.id} href={`/cars/${data.id}`} className="w-full">
            <Card
              carName={data.name}
              imgSrc={data.picture}
              price={data.dailyrate}
              seat={data.seat}
            />
            <div className="text-center mt-2">
              <p>{data.seat} seats</p>
              <p>${data.dailyrate}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}