# Słownik pojęć MVP

Definicje robocze dla języka użytego w [requirements.md](requirements.md). Tam, gdzie produkt jeszcze nie zdecydował, stoi `TBD` i odwołanie do [gaps.md](gaps.md). Po decyzji treść wraca do istniejącego BR/FR, a tutaj zostaje definicja ustalona.

---

## Podróż i plan

**Podróż**  
Konkretny wyjazd użytkownika opisany miejscem, terminem, rodzajem bagażu i planowanymi aktywnościami. Stanowi kontekst doboru garderoby i stylizacji (BR-1.1, BR-1.2).

**Plan podróży**  
Zestaw danych zebranych w Epic 1, prezentowany w podsumowaniu (FR-1.15) i zatwierdzany przed doborem garderoby (FR-1.17).

**Miejsce podróży**  
Lokalizacja wskazana przez użytkownika (FR-1.1, FR-1.2).  
`TBD` — miasto, kraj, region czy punkt z współrzędnymi: [gaps.md](gaps.md) D-1.

**Termin podróży**  
Data rozpoczęcia (FR-1.4) i data zakończenia (FR-1.5). Data zakończenia nie może być wcześniejsza niż data rozpoczęcia.

**Długość pobytu / liczba dni podróży**  
Wartość liczona automatycznie z dat (FR-1.7) i pokazywana użytkownikowi (FR-1.8).  
`TBD` — dni kalendarzowe włącznie vs liczba nocy: [gaps.md](gaps.md) D-2.

**Dzień podróży**  
Jednostka, dla której system generuje stylizację (FR-4.1) i pogodę (FR-3.2). Liczba dni wynika z D-2.

**Aktywność**  
Planowane zajęcie podczas podróży, zapisywane w planie i używane przy doborze oraz stylizacjach (FR-1.13, FR-1.14, FR-3.4, FR-4.2).  
`TBD` — zamknięta lista vs dowolny tekst; cała podróż vs per dzień: [gaps.md](gaps.md) D-4.

---

## Bagaż

**Rodzaj bagażu**  
Wybór użytkownika opisujący ograniczenie pakowania (FR-1.9, FR-1.10).  
`TBD` — słownik wartości (np. podręczny, kabinowy, rejestrowany, plecak): [gaps.md](gaps.md) D-3.

**Pojemność bagażu**  
Ograniczenie wynikające z rodzaju bagażu, używane przy rekomendacjach (FR-1.11, FR-3.6, FR-3.7).  
`TBD` — jednostka: sztuki odzieży, objętość czy waga: [gaps.md](gaps.md) D-3.

**Ostrzeżenie o ograniczeniu bagażu**  
Komunikat, że rekomendowane lub wybrane rzeczy mogą się nie zmieścić (FR-1.12).  
`TBD` — w którym kroku się pojawia: [gaps.md](gaps.md) G-1.

---

## Garderoba użytkownika

**Garderoba (szafa cyfrowa)**  
Zbiór zaakceptowanych elementów odzieży użytkownika, powstały w Epic 2 (BR-2.1).  
`TBD` — zasób globalny vs per podróż: [gaps.md](gaps.md) D-6.

**Element garderoby / ubranie**  
Pojedyncza sztuka rozpoznana na zdjęciu lub dodana do szafy. Ma co najmniej kategorię i kolor (FR-2.8, FR-2.9); pozostałe atrybuty: [gaps.md](gaps.md) D-5.

**Kategoria ubrania**  
Typ elementu nadawany automatycznie i edytowalny (FR-2.8, FR-2.12).  
`TBD` — zamknięty słownik kategorii.

**Kolor**  
Cecha rozpoznawana automatycznie i edytowalna (FR-2.9, FR-2.13).

**Pozostałe dane ubrania**  
Atrybuty poza kategorią i kolorem, które użytkownik może poprawić (FR-2.14).  
`TBD` — lista atrybutów: [gaps.md](gaps.md) D-5.

**Rozpoznanie automatyczne**  
Identyfikacja ubrań na zdjęciu oraz nadanie im cech przez system (FR-2.5–FR-2.9). Wynik wymaga weryfikacji użytkownika (BR-2.3, FR-2.10, FR-2.11).

---

## Rekomendowana garderoba podróżna

**Rekomendowana garderoba**  
Zestaw elementów z szafy użytkownika zaproponowany na konkretną podróż (FR-3.11, FR-3.19), uwzględniający pogodę, aktywności, bagaż i cechy użytkownika.

**Zaakceptowana garderoba podróżna**  
Rekomendowana garderoba po akceptacji lub modyfikacji przez użytkownika (FR-3.21, FR-3.22, BR-3.4). Stanowi wejście do generowania stylizacji (FR-3.24, BR-4.2).

**Uniwersalność**  
Cecha elementu polegająca na możliwości użycia w wielu stylizacjach; preferowana przy doborze (BR-3.3, FR-3.17).  
`TBD` — metryka: [gaps.md](gaps.md) D-8.

**Liczba zastosowań ubrania**  
Informacja, z iloma proponowanymi stylizacjami można połączyć dane ubranie (FR-3.18).  
`TBD` — liczone względem których stylizacji: [gaps.md](gaps.md) D-8.

**Uzasadnienie wyboru**  
Wyjaśnienie, dlaczego element trafił do rekomendacji (FR-3.16), np. pogoda, aktywność, uniwersalność, pojemność bagażu.

**Cechy i fizjologia użytkownika**  
Opcjonalne informacje wpływające na częstotliwość ponownego użycia ubrania lub dobór warstw, np. szybkie brudzenie, pocenie (FR-3.8–FR-3.10).  
`TBD` — model danych i czy MVP: [gaps.md](gaps.md) D-9.

---

## Stylizacje i pakowanie

**Stylizacja**  
Komplet elementów garderoby zaproponowany na konkretny dzień podróży (FR-4.1), dopasowany do aktywności i pogody (FR-4.2, FR-4.5).

**Plan stylizacji**  
Zbiór stylizacji na wszystkie dni podróży (BR-4.1).

**Wizualizacja stylizacji**  
Sposób pokazania kompletu użytkownikowi (FR-4.3).  
`TBD` — kolaż zdjęć, manekin, obraz AI: [gaps.md](gaps.md) D-11.

**Zaakceptowana stylizacja**  
Stylizacja zatwierdzona przez użytkownika dla danego dnia (FR-4.6). Regeneracja innego dnia nie może jej zmienić (FR-4.9). Konflikt z FR-3.24: [gaps.md](gaps.md) G-3.

**Lista rzeczy do spakowania**  
Lista elementów do oznaczenia jako spakowane (FR-5.1–FR-5.4).  
`TBD` — źródło prawdy: garderoba podróżna, plan stylizacji, czy oba: [gaps.md](gaps.md) G-2.

**Kategoria na liście pakowania**  
Grupowanie pozycji listy (FR-5.2). Może, ale nie musi, być tożsama z kategorią ubrania z Epic 2.

**Postęp pakowania**  
Informacja wynikająca z liczby elementów oznaczonych jako spakowane względem całej listy (FR-5.4).

---

## Role danych (żeby nie mylić trzech „garderob”)

| Pojęcie | Co to jest |
|---|---|
| Garderoba (szafa) | Wszystkie zaakceptowane ubrania użytkownika |
| Rekomendowana / zaakceptowana garderoba podróżna | Podzbiór szafy wybrany na tę podróż |
| Plan stylizacji | Rozłożenie tej podróży na dni |
| Lista pakowania | Rzeczy do włożenia do bagażu, wynikające z planu |

---

## Świadomie poza słownikiem MVP

Nie definiujemy tu (brak BR/FR): konto użytkownika, gość, wiele równoległych podróży, rzeczy nieodzieżowe, zakup brakujących ubrań. Zobacz [gaps.md](gaps.md) sekcja 4 i [nfr.md](nfr.md).
