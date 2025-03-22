import { promises } from "dns";

// libs/getBookings.js
export const deleteBookings = async (token:string,bid:string,updateBook:BookingData) => {
    
    const response = await fetch(`https://fe-project-2024-2-rest-in-api.vercel.app/api/v1/bookings/${bid}`, {
        
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,  // ส่ง Token ใน Header
        },
        body: JSON.stringify({
            startDate: updateBook.startDate,
            endDate: updateBook.endDate,
            carProvider: updateBook.carProvider,
            createdAt: updateBook.createdAt,
        }),
    });

    if (!response.ok) {
        if (response.status === 401) {
            console.log('Unauthorized, clearing token');
            sessionStorage.removeItem('token');  // ลบ token
            localStorage.removeItem('token');  // ลบ token จาก localStorage
            return; // อาจให้ผู้ใช้ล็อกอินใหม่
        }
        throw new Error(`Error Delete booking ${bid}`);
    }

    const data = await response.json();
    return data;
};