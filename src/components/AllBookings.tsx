"use client"
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { getBookings } from "@/libs/getBookings";  // นำเข้าฟังก์ชัน getBookings จาก libs
import { useDispatch, UseDispatch } from "react-redux"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { deleteBookings } from "@/libs/deleteBooking";

const AllBookings = () => {

  const { data: session } = useSession();
  const token = session?.user?.token;

  const [bookings, setBookings] = useState<BookingData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchBookings = async () => {
      if (!token) {
        setError("No token found");
        setLoading(false);
        return;
      }

      try {
        console.log("Token:", token);
        const data = await getBookings(token); // ใช้ getBookings ที่ส่ง token
        setBookings(data.data); // เก็บข้อมูลการจอง
        setLoading(false); // การโหลดเสร็จสมบูรณ์
      } catch (error) {
        console.error("Error fetching bookings:", error);
        setError("Failed to fetch bookings");
        setLoading(false);
      }
    };

    fetchBookings();
  }, [token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if(!token){
    return <div>No Token</div>
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-semibold text-center mb-6">All Bookings</h1>
      {bookings.length === 0 ? (
        <p className="text-center text-gray-500">No bookings available.</p>
      ) : (
        bookings.map((booking) => (
          <div key={booking._id} className="bg-white p-6 mb-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{booking.carProvider.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <p className="text-gray-700"><strong>Start Date:</strong> {new Date(booking.startDate).toLocaleDateString()}</p>
              <p className="text-gray-700"><strong>End Date:</strong> {new Date(booking.endDate).toLocaleDateString()}</p>
              <p className="text-gray-700"><strong>Car Provider:</strong> {booking.carProvider.name}</p>
              <p className="text-gray-700"><strong>Phone:</strong> {booking.carProvider.tel}</p>
              <p className="text-gray-700"><strong>Created At:</strong> {new Date(booking.createdAt).toLocaleDateString()}</p>
            </div>
            <button className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md 
              hover:bg-red-600 hover:shadow-lg transition duration-300 ease-in-out my-3 mx-1"
              onClick={async () => {
                await deleteBookings(token, booking._id); // Call API
                setBookings(bookings.filter((b) => b._id !== booking._id)); // Remove from UI
              }}>
              Remove
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md 
              hover:bg-blue-600 hover:shadow-lg focus:ring-2 focus:ring-blue-300 
              transition duration-300 ease-in-out my-3 mx-1">
              Edit
            </button>


          </div>
        ))
      )}
    </div>
  );
  
};

export default AllBookings;
