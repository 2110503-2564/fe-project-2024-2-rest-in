"use client";
import styles from './topmenu.module.css'
import Image from 'next/image'
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function TopMenu() {
    const { data: session } = useSession();

    return (
        <div className={styles.menucontainer}>
            <Link href="/" prefetch={true}>
            <Image 
                src={'/img/logo.png'} 
                className={styles.logoimg} 
                alt='logo' 
                width={0} height={0} sizes='100vh' 
            />
            </Link>
            <div className="flex items-center space-x-4 absolute right-0 h-full px-8">
                {session ? (
                    <>
                        <Link href='/booking' prefetch={true} className={styles.itemcontainer}>
                            Booking
                        </Link>
                        <Link href='/mybooking' prefetch={true} className={styles.itemcontainer}>
                            My Booking
                        </Link>
                        <Link href="/api/auth/signout" prefetch={true} className={styles.itemcontainer + "w-auto text-cyan-600 text-md"}>
                            Sign-Out of {session.user?.name}
                        </Link>
                    </>
                ) : (
                    <Link href="/api/auth/signin" prefetch={true} className={styles.itemcontainer + "w-auto text-cyan-600 text-md"}>
                        Sign-In
                    </Link>
                )}
            </div>
        </div>
    );
}
