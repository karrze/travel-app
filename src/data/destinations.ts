export interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  price: number;
  imageUrl: string;
  rating: number;
}

export const destinations: Destination[] = [
  {
    id: "paris",
    name: "Paryż",
    country: "Francja",
    description:
      "Miasto miłości, sztuki i wyjątkowej kuchni. Odwiedź Wieżę Eiffla i Luwr.",
    price: 2499,
    imageUrl:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    rating: 4.8,
  },
  {
    id: "rome",
    name: "Rzym",
    country: "Włochy",
    description:
      "Wieczne miasto pełne historii, koloseum i autentycznej włoskiej pizzy.",
    price: 2199,
    imageUrl:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
    rating: 4.7,
  },
  {
    id: "barcelona",
    name: "Barcelona",
    country: "Hiszpania",
    description:
      "Słoneczne wybrzeże, architektura Gaudiego i tętniące życiem ulice.",
    price: 1999,
    imageUrl:
      "https://images.unsplash.com/photo-1583422409516-2895a84ef013?w=800&q=80",
    rating: 4.6,
  },
  {
    id: "tokyo",
    name: "Tokio",
    country: "Japonia",
    description:
      "Połączenie tradycji i nowoczesności — świątynie, sushi i neonowe dzielnice.",
    price: 4299,
    imageUrl:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
    rating: 4.9,
  },
];
