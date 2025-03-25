import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import {useState, useEffect} from 'react';
import {AiOutlineHeart} from 'react-icons/ai';
import { useSession } from 'next-auth/react';
import likeCar from '@/libs/likeCar';

export default function Card({carId, carName, imgSrc, price, seat, like, province}
                            :{carId:string, carName:string, imgSrc:string, price:number, seat:number, like:number, province:string}) {

    const { data: session } = useSession();
    const token = session?.user?.token;

    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(like);

    const handleLike = async(e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        if(!token || isLiked){
            return;
        }
        try {
            await likeCar(carId, token);
            setIsLiked(true);
            setLikeCount(prev => prev + 1);
        } catch (error) {
            console.error("Error liking car:", error);
        }
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
                <div className='flex flex-row items-center gap-x-4'>
                    <p className="text-sm text-gray-400">{seat} seats</p>
                    <p className="text-sm text-gray-400">{province}</p>
                </div>
                
                <div className="flex justify-between w-full items-center">
                <p className="text-base font-medium">${price}</p>
                <div onClick={(e) => { e.stopPropagation(); handleLike(e); }} className="text-2xl flex flex-row items-center">
                    <p className="text-sm text-red mr-2">{likeCount}</p>
                    <AiOutlineHeart
                    className={`${isLiked ? "text-red-500" : "text-gray-500"}`}
                    />
                </div>
                </div>
            </div>
        </InteractiveCard>
    );
}