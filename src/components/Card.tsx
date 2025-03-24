import { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import styles from './card.module.css';

export default function Card({ carName, imgSrc, price, seat }: { carName: string, imgSrc: string, price: number, seat: number }) {
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
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
                <p className="text-sm text-gray-400">{seat} seats</p>
                <div className="flex justify-between w-full items-center">
                    <p className="text-white font-medium bg-[#FE7F3F]">${price}</p>
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
