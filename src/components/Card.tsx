import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import {useState} from 'react';
import {AiOutlineHeart} from 'react-icons/ai';

export default function Card({carName, imgSrc, onRating, price, seat}:{carName:string, imgSrc:string, onRating?:Function, price:number, seat:number}) {

    const [isLiked, setIsLiked] = useState(false);

    const handleLike = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsLiked(!isLiked);
        e.preventDefault();
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
                <p className="text-sm text-gray-400">{seat} seats</p>
                <div className="flex justify-between w-full items-center">
                <p className="text-base font-medium">${price}</p>
                <div onClick={(e: React.MouseEvent<HTMLDivElement>) => { e.stopPropagation(); handleLike(e); }} className="text-2xl">
                    <AiOutlineHeart
                    className={`${isLiked ? "text-red-500" : "text-gray-500"}`}
                    />
                </div>
                </div>
            </div>
        </InteractiveCard>
    );
}