/**
 * Statyczna lista miast do podpowiedzi w kroku "Miejsce podróży"
 * (decyzja D-1: destynacja na poziomie miasta).
 * Użytkownik może też wpisać własne miejsce spoza listy.
 */
export interface City {
  name: string;
  country: string;
}

export const cities: City[] = [
  { name: "Amsterdam", country: "Holandia" },
  { name: "Ateny", country: "Grecja" },
  { name: "Bangkok", country: "Tajlandia" },
  { name: "Barcelona", country: "Hiszpania" },
  { name: "Berlin", country: "Niemcy" },
  { name: "Budapeszt", country: "Węgry" },
  { name: "Dubaj", country: "ZEA" },
  { name: "Dubrownik", country: "Chorwacja" },
  { name: "Edynburg", country: "Szkocja" },
  { name: "Gdańsk", country: "Polska" },
  { name: "Kopenhaga", country: "Dania" },
  { name: "Kraków", country: "Polska" },
  { name: "Lizbona", country: "Portugalia" },
  { name: "Londyn", country: "Wielka Brytania" },
  { name: "Madryt", country: "Hiszpania" },
  { name: "Malaga", country: "Hiszpania" },
  { name: "Mediolan", country: "Włochy" },
  { name: "Nicea", country: "Francja" },
  { name: "Nowy Jork", country: "USA" },
  { name: "Oslo", country: "Norwegia" },
  { name: "Palma de Mallorca", country: "Hiszpania" },
  { name: "Paryż", country: "Francja" },
  { name: "Porto", country: "Portugalia" },
  { name: "Praga", country: "Czechy" },
  { name: "Reykjavik", country: "Islandia" },
  { name: "Rzym", country: "Włochy" },
  { name: "Sztokholm", country: "Szwecja" },
  { name: "Tokio", country: "Japonia" },
  { name: "Walencja", country: "Hiszpania" },
  { name: "Warszawa", country: "Polska" },
  { name: "Wiedeń", country: "Austria" },
  { name: "Zakopane", country: "Polska" },
];

/** Filtruje miasta po prefiksie nazwy lub kraju (case-insensitive). */
export function searchCities(query: string, limit = 6): City[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  return cities
    .filter(
      (city) =>
        city.name.toLowerCase().includes(q) ||
        city.country.toLowerCase().includes(q),
    )
    .slice(0, limit);
}
