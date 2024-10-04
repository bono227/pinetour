export const destinations = [
  { id: "D1", title: "Sukhbaatar square", location: "Ulaanbator" },
  { id: "D2", title: "Khuvsgul lake", location: "Khuvsgul" },
  { id: "D3", title: "Khorgiin togoo", location: "Arkhangai" },
  { id: "D4", title: "Terkhiin tsagaan lake", location: "Arkhangai" },
  { id: "D5", title: "Amarbaysgalant monastery", location: "Bulgan" },
  { id: "D6", title: "Sukhbaatar square", location: "Ulaanbator" },
];

const packs = [
  {
    name: "Starter Pack",
    included: {
      trip: true,
      hotel: true,
      breakfast: true,
      lunch: true,
      dinner: true,
    },
    price: 2100,
  },
  {
    name: "Luxury Pack",
    included: {
      trip: true,
      hotel: true,
      breakfast: true,
      lunch: true,
      dinner: true,
      flight: true,
      cruiseTrip: 2, // number of cruise trips
    },
    price: 4200,
  },
];
