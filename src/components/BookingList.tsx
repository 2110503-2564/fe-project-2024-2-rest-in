"use client"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch, UseDispatch } from "react-redux"
import { removeBooking } from "@/redux/features/bookSlice"

export default function BookingList(){

    const bookItems = useAppSelector((state) => state.bookSlice.bookItems)
    const dispatch = useDispatch<AppDispatch>()

    if (bookItems.length === 0) {
        return (
            <div className="text-center text-lg text-gray-600">
                No Venue Booking
            </div>
        )
    }

    return(
        <>
        {
            bookItems.map((bookingItem)=>(
                <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2 text-black"
                key={bookingItem.nameLastname}>
                    <div className="text-xl">{bookingItem.nameLastname}</div>
                    <div className="text-sm">tel: {bookingItem.tel}</div>
                    <div className="text-md">Venue: {bookingItem.venue}</div>
                    <div className="text-sm">Date: {bookingItem.bookDate}</div>
                    <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm" onClick={() => dispatch(removeBooking(bookingItem))}>
                        Remove
                    </button>

                </div>
            ))}
        </>
    )
}