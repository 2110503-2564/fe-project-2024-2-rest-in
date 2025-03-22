import styles from './topmenu.module.css'
import Image from 'next/image'
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import Link from 'next/link';

export default async function TopMenu() {
    const session = await getServerSession(authOptions);

    return (
        <div className={styles.menucontainer}>
            <TopMenuItem title='Booking' pageRef='/booking' />
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
                    <Link href="/api/auth/signout" prefetch={true} className="text-cyan-600 text-sm">
                        Sign-Out of {session.user?.name}
                    </Link>
                ) : (
                    <Link href="/api/auth/signin" prefetch={true} className="text-cyan-600 text-sm">
                        Sign-In
                    </Link>
                )}
                <TopMenuItem title='My Booking' pageRef='/mybooking' />
            </div>
        </div>
    );
}
