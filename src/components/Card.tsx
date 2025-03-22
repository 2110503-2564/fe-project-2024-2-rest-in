"use client"
import styles from './card.module.css';
import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import {Rating} from "@mui/material";
import {useState} from 'react';

export default function Card({carName, imgSrc, onRating}:{carName:string, imgSrc:string, onRating?:Function}) {
    const  [value, setValue] = useState<number | null>(0);
    return (
        <InteractiveCard>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image 
                // imgSrc should be a direct image URL or a path from the public folder
                // Example: "/images/car1.jpg" for images in public/images folder
                src={imgSrc}
                alt={carName}
                fill={true}
                className='object-cover rounded-t-lg'
                onError={(e) => {
                    console.error(`Failed to load image: ${imgSrc}`);
                }}
                />
            </div>
            <div className='w-full h-[30%] p-2 text-center text-lg font-semibold text-black flex flex-col justify-center items-center'>
                <div>{carName}</div>
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
            </div>
        </InteractiveCard>
    );
}