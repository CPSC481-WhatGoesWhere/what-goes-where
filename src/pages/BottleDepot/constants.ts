import { Location } from "@/Components/LocationsMap/LocationsMap";

export const REFUND_RATES = {
  glass: 0.2,
  plastic: 0.15,
  aluminum: 0.1,
};

export const RECYCLING_DEPOTS: Location[] = [
  {
    id: 1,
    name: "Green Recycling Depot",
    lat: 51.0762,
    lng: -114.1292,
    address: "123 Green St, Calgary, AB T2P 1B4",
    hours: {
      Monday: "9 AM - 5 PM",
      Tuesday: "9 AM - 5 PM",
      Wednesday: "9 AM - 5 PM",
      Thursday: "9 AM - 5 PM",
      Friday: "9 AM - 5 PM",
      Saturday: "10 AM - 4 PM",
      Sunday: "Closed",
    },
  },
  {
    id: 2,
    name: "Blue Recycling Depot",
    lat: 51.0467,
    lng: -114.0719,
    address: "456 Blue Ave, Calgary, AB T3C 2A1",
    hours: {
      Monday: "8 AM - 6 PM",
      Tuesday: "8 AM - 6 PM",
      Wednesday: "8 AM - 6 PM",
      Thursday: "8 AM - 6 PM",
      Friday: "8 AM - 6 PM",
      Saturday: "8 AM - 6 PM",
      Sunday: "Closed",
    },
  },
  {
    id: 3,
    name: "Yellow Recycling Depot",
    lat: 51.0447,
    lng: -114.0718,
    address: "789 Yellow Blvd, Calgary, AB T3K 0C7",
    hours: {
      Monday: "8 AM - 5 PM",
      Tuesday: "8 AM - 5 PM",
      Wednesday: "8 AM - 5 PM",
      Thursday: "8 AM - 5 PM",
      Friday: "8 AM - 5 PM",
      Saturday: "Closed",
      Sunday: "Closed",
    },
  },
];
