"use client"
import {useState} from "react";
import { useRouter } from "next/navigation";
import styles from "./banner.module.css";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Banner() {
    const covers =['/img/cover1.jpg', '/img/cover2.jpg', '/img/cover3.jpg', '/img/cover4.jpg']
    const [index, setIndex] = useState(0);
    const router = useRouter()

    const {data:session} = useSession()
    console.log(session?.user.token)

    return (
        <div className={styles.banner} onClick={()=>{setIndex(index+1)}}>
            <Image src={covers[index%4]} 
            alt="Event" 
            fill={true}
            priority={true}
            style={{ objectFit: 'cover' }} />
            <div className={styles.bannerText}>
                <h1 className='text-4xl font-medium text-white'>where every moment finds its car</h1>
                <h3 className='text-xl font-serif text-white'>Find the cool car you're looking for here.</h3>
            </div>
            {
                session? <div className="z-30 absolute top-5 right-10 font-semibold text-cyan-800 text-xl">
                    Welcome {session.user?.name}</div> 
                : null
            }
        </div>
        
    );
}