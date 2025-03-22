"use client"

import BookingList from "@/components/BookingList"
import AllBookings from "@/components/AllBookings"

export default function CartPage(){
    return (
        <main>
            <BookingList></BookingList>
            <AllBookings></AllBookings>
        </main>
    )
}