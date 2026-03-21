export interface Parking {
  id: number;
  name: string;
  prefecture: string;
  city: string;
  address: string;
  station: string;
  capacity: number;
  price_per_hour: number;
  price_per_day: number;
  pricePerHour: string;
  pricePerDay: string;
  latitude: number;
  longitude: number;
  features: string[];
  images: string[];
  description: string;
  available: boolean;
  parking_type?: string;
  receiptPhoneNumber?: string;
  receiptOfficeName?: string;
  priceDetail?: string;
}


