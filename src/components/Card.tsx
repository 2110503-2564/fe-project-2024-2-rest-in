"use client"
import styles from './card.module.css';
import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import {Rating} from "@mui/material";
import {useState} from 'react';

export default function Card({venueName, imgSrc, onRating}:{venueName:string, imgSrc:string, onRating?:Function}) {
    const  [value, setValue] = useState<number | null>(0);
    return (
        <InteractiveCard>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image 
                src={imgSrc}
                alt='Place Picture'
                fill={true}
                className='object-cover rounded-t-lg'
                />
            </div>
            <div className='w-full h-[30%] p-2 text-center text-lg font-semibold text-black flex flex-col justify-center items-center'>
                <div>{venueName}</div>
                {
                    onRating? <Rating
                    name={venueName+" Rating"}         
                    id={venueName+" Rating"} 
                    data-testid= {venueName+" Rating"} 
                    value={value}
                    onChange={(event, newValue) => {
                        event.stopPropagation;
                        setValue(newValue);
                        onRating(venueName,newValue);
                    }}
                    onClick={(e)=>{e.stopPropagation();}}
                /> : ''
                }
            </div>
        </InteractiveCard>
    );
}