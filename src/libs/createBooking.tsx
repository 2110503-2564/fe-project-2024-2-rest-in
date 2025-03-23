// libs/createBooking.js
export const createBooking = async (token: string, carId: string, bookingData: any) => {
  const response = await fetch(`https://fe-project-2024-2-rest-in-api.vercel.app/api/v1/cars/${carId}/bookings`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`, // ส่ง Token ใน Header
      'Content-Type': 'application/json',  // กำหนด Content-Type เป็น JSON
    },
    body: JSON.stringify(bookingData),  // ส่งข้อมูลการจองในรูปแบบ JSON
  });

  if (!response.ok) {
    if (response.status === 401) {
      console.log('Unauthorized, clearing token');
      sessionStorage.removeItem('token');
      localStorage.removeItem('token');
      return;
    }
    throw new Error('Error creating booking');
  }

  const data = await response.json();
  return data;  // คืนค่าข้อมูลการจองที่สร้างขึ้นจาก API
};
