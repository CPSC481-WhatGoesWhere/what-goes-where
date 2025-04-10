export const POSTAL_CODE_REGEX =
  /^[ABCEGHJ-NPRSTVXY][1234567890][ABCEGHJ-NPRSTVXY] [1234567890][ABCEGHJ-NPRSTVWXYZ][1234567890]$/;

export const METAL_TYPES = [
  { value: "aluminum", label: "Aluminum" },
  { value: "copper", label: "Copper" },
  { value: "steel", label: "Steel" },
  { value: "brass", label: "Brass" },
];

export const METAL_RECYCLING_DEPOTS = [
  {
    id: 1,
    name: "Calgary Metal Recycling Depot",
    lat: 51.0522,
    lng: -114.0805,
    address: "2401 34 Ave NE, Calgary, AB T2E 6P4",
    pricePerPound: {
      aluminum: 0.75, // Price per pound for aluminum recycling
      copper: 2.5, // Price per pound for copper recycling
      steel: 0.1, // Price per pound for steel recycling
      brass: 1.5, // Price per pound for brass recycling
    }, // Price per pound for metal recycling
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
    pricePerPound: {
      aluminum: 0.8, // Price per pound for aluminum recycling
      copper: 2.8, // Price per pound for copper recycling
      steel: 0.12, // Price per pound for steel recycling
      brass: 1.6, // Price per pound for brass recycling
    }, // Price per pound for metal recycling
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
    pricePerPound: {
      aluminum: 0.85, // Price per pound for aluminum recycling
      copper: 2.9, // Price per pound for copper recycling
      steel: 0.15, // Price per pound for steel recycling
      brass: 1.7, // Price per pound for brass recycling
    }, // Price per pound for metal recycling
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
    pricePerPound: {
      aluminum: 0.78, // Price per pound for aluminum recycling
      copper: 2.7, // Price per pound for copper recycling
      steel: 0.11, // Price per pound for steel recycling
      brass: 1.65, // Price per pound for brass recycling
    }, // Price per pound for metal recycling
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
    pricePerPound: {
      aluminum: 0.7, // Price per pound for aluminum recycling
      copper: 2.6, // Price per pound for copper recycling
      steel: 0.09, // Price per pound for steel recycling
      brass: 1.55, // Price per pound for brass recycling
    }, // Price per pound for metal recycling
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
