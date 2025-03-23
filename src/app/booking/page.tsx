"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";
import { TextField, Button } from "@mui/material";
import DateReserve from "@/components/DateReserve";
import { Dayjs } from "dayjs";

// ฟังก์ชันสร้างการจอง
export default function Booking({ carId }: { carId: string }) {
  const dispatch = useDispatch<AppDispatch>();
  
  const [name, setName] = useState<string>('');
  const [contactNumber, setContactNumber] = useState<string>('');
  const [pickupDate, setPickupDate] = useState<Dayjs | null>(null);
  const [returnDate, setReturnDate] = useState<Dayjs | null>(null);
  const [carModel, setCarModel] = useState<string>(''); // เพิ่มฟิลด์สำหรับ carModel ถ้าต้องการ

  // ฟังก์ชันสำหรับการส่งข้อมูลการจองไปยัง API
  const makeBooking = async () => {
    if (name && contactNumber && pickupDate && returnDate) {
      const item = {
        nameLastname: name,
        tel: contactNumber,
        car: carId, // ส่ง carId ที่รับจาก props
        pickupDate: pickupDate.format("YYYY-MM-DD"), // ส่งวันที่รับรถ
        returnDate: returnDate.format("YYYY-MM-DD"), // ส่งวันที่คืนรถ
      };

      try {
        // ส่งการจองไปยัง API
        const response = await fetch(`/api/v1/cars/${carId}/bookings`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
        });

<<<<<<< HEAD
        if (response.ok) {
          const data = await response.json();
          // บันทึกการจองใน Redux
          dispatch(addBooking(data));
          alert("Booking successful!");
        } else {
          alert("Booking failed. Please try again.");
||||||| 748d501
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
            const item: BookingItem = {
                nameLastname: name,
                tel: contactNumber,
                venue: venue,
                bookDate: dayjs(bookingDate).format("YYYY/MM/DD"),
            };
            dispatch(addBooking(item));
=======
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
>>>>>>> 6483a9590125fc393d67bbe3eea573969e18dca4
        }
      } catch (error) {
        console.error("Error booking car:", error);
        alert("Booking failed. Please try again.");
      }
    } else {
      alert("Please fill in all the fields.");
    }
  };

  return (
    <main className="flex flex-col items-center space-y-4 py-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <div className="text-xl font-medium text-center text-gray-700 mb-4">Car Booking</div>

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
          onDateChange={(value: Dayjs) => setPickupDate(value)}
          onReturnDateChange={(value: Dayjs) => setReturnDate(value)} // ฟังก์ชันที่ใช้สำหรับคืนรถ
        />

        <Button
          type="submit"
          name="Book Car"
          className="w-full rounded-md bg-sky-600 text-white py-2 mt-4 hover:bg-sky-700 transition"
          onClick={makeBooking}
        >
          Book Car
        </Button>
      </div>
    </main>
  );
}
