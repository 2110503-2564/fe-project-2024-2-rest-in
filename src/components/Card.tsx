"use client"
import styles from './card.module.css';
import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import {Rating} from "@mui/material";
import {useState} from 'react';
import {AiOutlineHeart} from 'react-icons/ai';

export default function Card({carName, imgSrc, onRating, price, seat}:{carName:string, imgSrc:string, onRating?:Function, price:number, seat:number}) {
    const  [value, setValue] = useState<number | null>(0);

    const [isLiked, setIsLiked] = useState(false);

    const handleLike = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsLiked(!isLiked);
    };
  
    return (
        <InteractiveCard>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image 
                src={imgSrc}
                alt={carName}
                fill={true}
                className='object-cover rounded-t-lg'
                />
            </div>
            <div className='w-full h-[30%] p-2 text-center text-lg font-semibold text-black flex flex-col justify-center items-center'>
                <div>{carName}</div>
                <p className="text-sm">{seat} seats</p>
                {
                    onRating? <Rating
                    name={carName+" Rating"}         
                    id={carName+" Rating"} 
                    data-testid= {carName+" Rating"} 
                    value={value}
                    onChange={(event, newValue) => {
                        event.stopPropagation;
                        setValue(newValue);
                        onRating(carName,newValue);
                    }}
                    onClick={(e)=>{e.stopPropagation();}}
                /> : ''
                }
                <div className="flex justify-between w-full items-center">
                <p className="text-base font-medium">${price}</p>
                <button onClick={handleLike} className="text-2xl">
                    <AiOutlineHeart
                    className={`${isLiked ? "text-red-500" : "text-gray-500"}`}
                    />
                </button>
                </div>
            </div>
        </InteractiveCard>
    );
}