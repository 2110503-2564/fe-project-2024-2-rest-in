import { useState, useEffect } from "react";
import { getBookings } from "@/libs/getBookings";  // นำเข้าฟังก์ชัน getBookings จาก libs

const AllBookings = () => {
  const [bookings, setBookings] = useState<BookingData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // ดึง token จาก localStorage หรือจากที่อื่น
    //const token = localStorage.getItem("token");

  // สำหรับการทดสอบโดยตรง  
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YzZhYjA0MmFmOTQ4ZDM1OWM0OWFlMyIsImlhdCI6MTc0MjYzNjU1NiwiZXhwIjoxNzQ1MjI4NTU2fQ.zAfTt084d60RPPOq7wCHfiPLhLDfY7VbDpDSPOZMThk";

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
          </div>
        ))
      )}
    </div>
  );
  
};

export default AllBookings;
