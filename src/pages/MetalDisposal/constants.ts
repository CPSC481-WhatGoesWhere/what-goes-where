export const POSTAL_CODE_REGEX_STR =
  "^[ABCEGHJ-NPRSTVXY][1234567890][ABCEGHJ-NPRSTVXY] [1234567890][ABCEGHJ-NPRSTVWXYZ][1234567890]";

export const POSTAL_CODE_REGEX =
  /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTVXY][ -]?\d[ABCEGHJ-NPRSTVWXYZ]\d$/;

export const METAL_RECYCLING_DEPOTS = [
  {
    id: 1,
    name: "Calgary Metal Recycling Depot",
    lat: 51.0522,
    lng: -114.0805,
    address: "2401 34 Ave NE, Calgary, AB T2E 6P4",
    pricePerPound: 0.45, // Price per pound for metal recycling
    hours: {
      Monday: "8 AM - 5 PM",
      Tuesday: "8 AM - 5 PM",
      Wednesday: "8 AM - 5 PM",
      Thursday: "8 AM - 5 PM",
      Friday: "8 AM - 5 PM",
      Saturday: "9 AM - 4 PM",
      Sunday: "Closed",
    },
  },
  {
    id: 2,
    name: "B&S Metal Recycling",
    lat: 51.0475,
    lng: -113.9822,
    address: "3838 32 St NE, Calgary, AB T1Y 5T8",
    pricePerPound: 0.5, // Price per pound for metal recycling
    hours: {
      Monday: "8 AM - 6 PM",
      Tuesday: "8 AM - 6 PM",
      Wednesday: "8 AM - 6 PM",
      Thursday: "8 AM - 6 PM",
      Friday: "8 AM - 6 PM",
      Saturday: "9 AM - 5 PM",
      Sunday: "Closed",
    },
  },
  {
    id: 3,
    name: "Metal Supermarkets Calgary",
    lat: 51.0446,
    lng: -113.9825,
    address: "1800 18 Ave NE, Calgary, AB T2E 7R7",
    pricePerPound: 0.55, // Price per pound for metal recycling
    hours: {
      Monday: "8 AM - 5 PM",
      Tuesday: "8 AM - 5 PM",
      Wednesday: "8 AM - 5 PM",
      Thursday: "8 AM - 5 PM",
      Friday: "8 AM - 5 PM",
      Saturday: "9 AM - 1 PM",
      Sunday: "Closed",
    },
  },
  {
    id: 4,
    name: "Alberta Metal Recycling",
    lat: 51.0578,
    lng: -114.0615,
    address: "901 48 Ave NE, Calgary, AB T2E 7G6",
    pricePerPound: 0.47, // Price per pound for metal recycling
    hours: {
      Monday: "8 AM - 5 PM",
      Tuesday: "8 AM - 5 PM",
      Wednesday: "8 AM - 5 PM",
      Thursday: "8 AM - 5 PM",
      Friday: "8 AM - 5 PM",
      Saturday: "9 AM - 3 PM",
      Sunday: "Closed",
    },
  },
  {
    id: 5,
    name: "Green Bin Recycling",
    lat: 51.0428,
    lng: -114.0783,
    address: "4200 16 St NE, Calgary, AB T2E 8Z2",
    pricePerPound: 0.42, // Price per pound for metal recycling
    hours: {
      Monday: "8 AM - 5 PM",
      Tuesday: "8 AM - 5 PM",
      Wednesday: "8 AM - 5 PM",
      Thursday: "8 AM - 5 PM",
      Friday: "8 AM - 5 PM",
      Saturday: "9 AM - 4 PM",
      Sunday: "Closed",
    },
  },
];
