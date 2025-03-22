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
            <div className="flex items-center space-x-4 absolute left-0 h-full px-2">
                {session ? (
                    <>
                        <Link href="/api/auth/signout" prefetch={true} className="text-cyan-600 text-sm">
                            Sign-Out of {session.user?.name}
                        </Link>
                        <Link href='/booking' prefetch={true} className={styles.itemcontainer}>
                            Booking
                        </Link>
                        <Link href='/mybooking' prefetch={true} className={styles.itemcontainer}>
                            My Booking
                        </Link>
                    </>
                ) : (
                    <Link href="/api/auth/signin" prefetch={true} className="text-cyan-600 text-sm">
                        Sign-In
                    </Link>
                )}
            </div>
        </div>
    );
}
