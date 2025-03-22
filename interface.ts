interface VenueItem {
    _id: string,
    name: string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    tel: string,
    picture: string,
    dailyrate: number,
    __v: number,
    id: string
  }
  
  interface VenueJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: VenueItem[]
  }

  interface BookingItem {
    nameLastname: string;
    tel: string;
    venue: string;
    bookDate: string;
  }
  
  // new interface

  interface CarProvider {
    _id: string;
    name: string;
    address: string;
    tel: string;
    id: string;
  }
  
  interface BookingData {
    _id: string;
    startDate: string;
    endDate: string;
    user: string;
    carProvider: CarProvider;
    createdAt: string;
    __v: number;
  }
  
  interface BookingResponse {
    success: boolean;
    count: number;
    data: BookingData[];
  }
  