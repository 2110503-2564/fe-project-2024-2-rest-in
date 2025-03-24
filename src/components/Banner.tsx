"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./banner.module.css";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Banner() {
  const covers = [
    "/img/cover1.png",
    "/img/cover2.jpg",
    "/img/cover3.jpg",
    "/img/cover4.jpg",
  ];
  const [index, setIndex] = useState(0);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);
  const [minSeat, setMinSeat] = useState(0);
  const [maxSeat, setMaxSeat] = useState(4);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    router.push(`/cars?minprice=${minPrice}&maxprice=${maxPrice}&minseat=${minSeat}&maxseat=${maxSeat}&relevance=&province=&toplike=&price=&seat=&page=&limit=`);
  };

  const router = useRouter();

  const { data: session } = useSession();
  console.log(session?.user.token);

  return (
    // <div className={styles.banner} onClick={()=>{setIndex(index+1)}}>
    //     <Image src={covers[index%4]}
    <div className={styles.banner}>
      <Image
        src={"/img/cover1.png"}
        alt="Event"
        fill={true}
        priority={true}
        style={{ objectFit: "cover" }}
      />
      <div className={styles.bannerText}>
        <h1 className="text-6xl font-semibold text-[#5C4590]">
          Fast And Easy Way <br /> To Rent A Car
        </h1>
      </div>
      {/* {
                session? <div className="z-30 absolute top-5 right-10 font-semibold text-cyan-800 text-xl">
                    Welcome {session.user?.name}</div> 
                : null
            } */}

      <div className="absolute bottom-10 left-10 transform -translate-y-20 bg-white bg-opacity-80 p-4 rounded-lg shadow-lg z-20 w-80 flex flex-col gap-4">
        {/* เลือกจำนวนที่นั่ง */}
        <div>
          <div className="flex justify-between">
            <label htmlFor="minSeat" className="text-black">
              Min Seats: {minSeat}
            </label>
            <label htmlFor="maxSeat" className="text-black">
              Max Seats: {maxSeat}
            </label>
          </div>
          <div className="flex justify-between">
            <input
              id="minSeat"
              type="number"
              value={minSeat}
              min="0"
              max={maxSeat - 1}
              onChange={(e) => setMinSeat(Number(e.target.value))}
              className="w-1/2 p-2 rounded-md border border-gray-400"
            />
            <input
              id="maxSeat"
              type="number"
              value={maxSeat}
              min={minSeat + 1}
              max="8"
              onChange={(e) => setMaxSeat(Number(e.target.value))}
              className="w-1/2 p-2 rounded-md border border-gray-400"
            />
          </div>
        </div>

        {/* เลือกช่วงราคา */}
        <div>
          <div className="flex justify-between">
            <label htmlFor="minPrice" className="text-black">
              Min Price: ${minPrice}
            </label>
            <label htmlFor="maxPrice" className="text-black">
              Max Price: ${maxPrice}
            </label>
          </div>
          <div className="flex justify-between">
            <input
              id="minPrice"
              type="number"
              value={minPrice}
              min="0"
              max={maxPrice - 1}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              className="w-1/2 p-2 rounded-md border border-gray-400"
            />
            <input
              id="maxPrice"
              type="number"
              value={maxPrice}
              min={minPrice + 1}
              max="1000"
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-1/2 p-2 rounded-md border border-gray-400"
            />
          </div>
        </div>

        {/* <Link href="/cars" prefetch={true}> */}
          <button className="bg-[#FE7F3F] text-white border-none 
          font-bold py-3 px-5 rounded-md shadow-lg transition-transform duration-300 hover:scale-105 w-full text-center"
          onClick={handleClick}>
            Search
          </button>
        {/* </Link> */}

      </div>
    </div>
  );
}
