export const images = {
  heroTerrace: "/images/hero-terrace.jpg",
  terraceLatteFries: "/images/terrace-latte-fries.jpg",
  sunsetMountAgung: "/images/sunset-mount-agung.jpg",
  icedTea: "/images/iced-tea.jpg",
  greenDrinks: "/images/green-drinks.jpg",
  spicedGrillChicken: "/images/spiced-grill-chicken.jpg",
  chickenSatay: "/images/chicken-satay.jpg",
  fruitToast: "/images/fruit-toast.jpg",
  kleponSweets: "/images/klepon-sweets.jpg",
  barExterior: "/images/bar-exterior.jpg",
  barShelf: "/images/bar-shelf.jpg",
  satayIcedTeaView: "/images/satay-iced-tea-view.jpg",
  viewAgungDeck: "/images/view-agung-deck.jpg",
} as const;

export const alts = {
  heroTerrace: "Wooden terrace café overlooking lush Balinese rice paddies",
  terraceLatteFries: "Latte and fries on a wooden table",
  sunsetMountAgung: "Dramatic sunset behind Mount Agung",
  icedTea: "Tall glass of iced tea",
  greenDrinks: "Fresh green juice",
  spicedGrillChicken: "Spiced grill chicken",
  chickenSatay: "Golden chicken satay skewers",
  fruitToast: "Rose strawberry toast",
  kleponSweets: "Traditional Balinese klepon",
  barExterior: "Exterior view of the café bar",
  barShelf: "Rustic wooden bar shelf",
  satayIcedTeaView: "Chicken satay and iced tea",
  viewAgungDeck: "Relaxing deck chairs facing Mount Agung",
} as const;

export function formatPrice(price: number | null): string {
  if (price === null) return "Ask us";
  return `${price}K`;
}

export const weRecommend = [
  { name: "Spiced Grill Chicken", price: 78, image: images.spicedGrillChicken, imageAlt: alts.spicedGrillChicken, desc: "Tender, spiced perfectly." },
  { name: "Chicken Satay", price: 34, image: images.chickenSatay, imageAlt: alts.chickenSatay, desc: "Classic peanut sauce." },
  { name: "Rose Strawberry Toast", price: 35, image: images.fruitToast, imageAlt: alts.fruitToast, desc: "Sweet & beautiful." },
];

export const popularDrinks = [
  { name: "Iced Tea", price: null, image: images.icedTea, imageAlt: alts.icedTea, desc: "Refreshing & cool" },
  { name: "Fresh Juice", price: null, image: images.greenDrinks, imageAlt: alts.greenDrinks, desc: "Healthy blend" },
  { name: "Latte", price: null, image: images.terraceLatteFries, imageAlt: "Latte", desc: "Smooth & creamy" },
];

export const siteCopy = {
  name: "Uma Café",
  heroTitle: "Coffee you fall in love with from the first sip",
  heroSubtitle: "Specialty coffee, fresh food, and the most breathtaking rice terrace views in Bali.",
  googleRating: 4.9,
  storyTitle: "Our Story",
  storyBody: "Uma Café was born from a simple idea: pair Bali's most breathtaking view with hearty, homemade dishes at honest prices. Nestled on the edge of the Tegallalang rice terraces, our open-air kitchen serves everything from slow-grilled chicken satay to freshly blended juices.",
};

export const features = [
  { id: 1, title: 'Rice Terrace Views', desc: 'Overlooking lush green valleys.' },
  { id: 2, title: 'Fresh Ingredients', desc: 'Sourced daily from local farmers.' },
  { id: 3, title: 'Friendly Service', desc: 'Welcoming you like family.' },
  { id: 4, title: 'Cozy Space', desc: 'Peaceful, calm, and beautiful.' }
];

export const storyFeatures = [
  "Direct from farmers",
  "Freshly made daily",
  "Quality in every cup"
];

export const contactInfo = {
  address: "Tegallalang, Gianyar Regency, Bali",
  hours: "Everyday 08:00 - 21:00",
  phone: "+62 812 3456 7890"
};
