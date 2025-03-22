"use client"

import DateReserve from "@/components/DateReserve";
import { useSearchParams } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import getUserProfile from "@/libs/getUserProfile";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { useDispatch} from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";
import { TextField, Button } from "@mui/material";

export default function Booking() {

    // const urlParams = useSearchParams()
    // const vid = urlParams.get('id')
    // const model = urlParams.get('model')

    const dispatch = useDispatch<AppDispatch>();

    const [name, setName] = useState<string>('');
    const [contactNumber, setContactNumber] = useState<string>('');
    const [venue, setVenue] = useState<string>('');
    const [bookingDate, setBookingDate] = useState<Dayjs | null>(null);

    // const session = await getServerSession(authOptions)
    // if(!session || !session.user.token)return null

    // const profile = await getUserProfile(session.user.token)
    // var createdAt = new Date(profile.data.createdAt)

    const makeBooking = () => {
        if (name && contactNumber && venue && bookingDate) {
            const item: BookingData = {
                nameLastname: name,
                tel: contactNumber,
                venue: venue,
                bookDate: dayjs(bookingDate).format("YYYY/MM/DD"),
            };
            dispatch(addBooking(item));
        }
    };

    return (
        <main className="flex flex-col items-center space-y-4 py-6 bg-gray-100 min-h-screen">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
            <div className="text-xl font-medium text-center text-gray-700 mb-4">Venue Booking</div>
    
            <TextField
                id="Name-Lastname"
                name="Name-Lastname"
                label="Name-Lastname"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mb-4"
            />
            <TextField
                id="Contact-Number"
                name="Contact-Number"
                label="Contact Number"
                variant="outlined"
                fullWidth
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                className="mb-6"
            />
    
            <DateReserve
                onDateChange={(value: Dayjs) => setBookingDate(value)} 
                onLocationChange={(value: string) => setVenue(value)} 
            />
    
            <Button 
                type="submit" 
                name="Book Venue"
                className="w-full rounded-md bg-sky-600 text-white py-2 mt-4 hover:bg-sky-700 transition"
                onClick={makeBooking}>
                Book Venue
            </Button>
        </div>
    

            {/* <div className="bg-black m-5 p-5">
            <div className="text-2xl">{profile.data.name}</div>
            <table className="table-auto border-separate border-spacing-2"><tbody>
                <tr><td>Email</td><td>{profile.data.name}</td></tr>
                <tr><td>Tel.</td><td>{profile.data.tel}</td></tr>
                <tr><td>Member Since</td><td>{createdAt.toString()}</td></tr>
            </tbody></table> */}
        {/* </div> */}

        </main>
    );
}