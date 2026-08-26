# Wymagania niefunkcjonalne (MVP)

NFR nie mieszamy z BR/FR w [requirements.md](requirements.md). Ten plik jest jedynym miejscem na jakość, platformę, prywatność i integracje.

Status: `TBD` = brak decyzji produktowej; `propozycja MVP` = robocze założenie do potwierdzenia. Otwarte decyzje funkcjonalne: [gaps.md](gaps.md).

---

## NFR-P – Platforma i tożsamość

### NFR-P1 – Platforma

- **Status:** TBD
- **Potrzeba:** FR-2.3 (aparat), FR-2.4 (galeria), Epic 6 (użycie w podróży).
- **Opcje:** przeglądarka mobilna / PWA / aplikacja natywna iOS i Android / tylko web desktop + mobile web.
- **Propozycja MVP:** PWA lub mobile web z dostępem do aparatu i galerii; desktop jako uzupełnienie (galeria tak, aparat zależny od urządzenia).
- **Blokuje:** wybór stacku, uprawnienia, offline.

### NFR-P2 – Konto i trwałość danych

- **Status:** TBD
- **Potrzeba:** trwała szafa (BR-2.1), powrót do planu w trakcie wyjazdu (BR-6.1).
- **Opcje:** konto obowiązkowe; konto opcjonalne + tryb gościa (dane lokalne); tylko urządzenie bez konta.
- **Propozycja MVP:** konto wymagane przed digitalizacją szafy i zapisaniem podróży; bez trybu gościa na start.
- **Świadomie poza MVP:** logowanie społecznościowe, wiele urządzeń w pełnej synchronizacji (dopóki nie ma decyzji).

### NFR-P3 – Liczba podróży

- **Status:** TBD
- **Propozycja MVP:** jedna aktywna podróż na użytkownika. Historia i równoległe wyjazdy poza zakresem.

---

## NFR-O – Dostępność w podróży

### NFR-O1 – Offline

- **Status:** TBD
- **Dotyczy:** Epic 6 (FR-6.1, FR-6.2), częściowo Epic 5.
- **Opcje:**
  1. Wymagane połączenie (świadome cięcie MVP).
  2. Cache zaakceptowanego planu stylizacji na urządzeniu; przegląd dni bez sieci.
  3. Pełny offline także dla pakowania i edycji.
- **Propozycja MVP:** opcja 2 — odczyt planu stylizacji i nawigacja między dniami bez sieci, po wcześniejszym załadowaniu. Digitalizacja, pogoda i nowy dobór wymagają sieci.
- **Uzasadnienie:** Epic 6 bez jakiegokolwiek cache jest kruchy w samolocie i roamingu.

### NFR-O2 – Uprawnienia urządzenia

Aplikacja musi obsługiwać odmowę dostępu do aparatu i galerii: czytelny komunikat i ścieżka przez galerię albo ponowną prośbę o uprawnienie. Brak tego zachowania w FR — tu jako NFR ścieżek błędów.

---

## NFR-Q – Jakość i czas odpowiedzi

Wartości są propozycją MVP, do zmierzenia po wyborze dostawców.

| ID | Temat | Propozycja MVP |
|---|---|---|
| NFR-Q1 | Podpowiedzi miejsc (FR-1.2) | Pierwsze wyniki w < 1 s od 3. znaku, przy sieci |
| NFR-Q2 | Prognoza pogody (FR-3.1–FR-3.3) | Odpowiedź lub stan „brak danych” w < 3 s |
| NFR-Q3 | Rozpoznanie zdjęcia (FR-2.5–FR-2.9) | Wynik weryfikowalny w < 15 s dla typowego zdjęcia; timeout z komunikatem |
| NFR-Q4 | Dobór garderoby (Epic 3) | Pierwszy zestaw w < 10 s po zatwierdzeniu wejść |
| NFR-Q5 | Generowanie stylizacji dnia (Epic 4) | Propozycja dnia w < 5 s; alternatywa (FR-4.8) w < 5 s |
| NFR-Q6 | Trafność rozpoznania | Użytkownik może skorygować 100% cech (BR-2.3); brak SLA procentowego na MVP |

Dokładność CV i „optymalność” zestawu nie mają twardego progu liczbowego w wymaganiach. Akceptacja = użytkownik może zweryfikować, poprawić, odrzucić (FR-2.10–FR-2.15, FR-3.12–FR-3.22, FR-4.6–FR-4.8).

---

## NFR-D – Dane, prywatność, retencja

### NFR-D1 – Zdjęcia ubrań

- Zdjęcia są danymi użytkownika. Przetwarzane w celu rozpoznania i wizualizacji stylizacji.
- **TBD:** czy oryginał jest przechowywany, jak długo, czy tylko wykrojone miniatury elementów.
- **Propozycja MVP:** przechowywać miniaturę elementu potrzebną do kolażu (D-11); oryginał zbiorczego zdjęcia można usunąć po akceptacji rozpoznanych sztuk.

### NFR-D2 – Cechy i fizjologia (FR-3.8–FR-3.10)

Dane potencjalnie wrażliwe.  
**Propozycja MVP:** tylko opcjonalne flagi, wyraźna zgoda, możliwość usunięcia. Bez wnioskowania medycznego. Szczegóły modelu: [gaps.md](gaps.md) D-9.

### NFR-D3 – Lokalizacja i pogoda

Miejsce podróży wystarcza do prognozy. Brak ciągłego śledzenia lokalizacji urządzenia, o ile nie wyniknie to z NFR-P1.

### NFR-D4 – Usuwanie

Użytkownik może usunąć element szafy (FR-2.15).  
**TBD (poza FR):** usunięcie konta, szafy w całości, podróży. Propozycja: usunięcie konta usuwa zdjęcia, szafę, plany i flagi fizjologii.

### NFR-D5 – Podstawy prawne

**TBD** — RODO: administrator, umowa powierzenia z dostawcą vision/pogody, transfer poza EOG. Do uzupełnienia przed produkcją, nie blokuje projektowania UI.

---

## NFR-I – Język i integracje

### NFR-I1 – Język

- **Status:** TBD
- **Propozycja MVP:** interfejs po polsku. Wyszukiwanie miejsc obsługuje nazwy lokalne i polskie, zależnie od dostawcy.

### NFR-I2 – Integracje zewnętrzne

| Potrzeba | FR | TBD |
|---|---|---|
| Podpowiedzi miejsc | FR-1.2 | dostawca (np. Places) |
| Prognoza per dzień | FR-3.1–FR-3.3, FR-4.5 | dostawca, horyzont (typowo 7–16 dni), fallback D-10 |
| Rozpoznanie ubrań | FR-2.5–FR-2.9 | model vision / API |
| Mapa / geokodowanie | D-1 | tylko jeśli miejsce ≠ samo miasto |

Niedostępność integracji: komunikat, brak cichego pustego stanu. Dla pogody obowiązuje FR-3.3.

### NFR-I3 – Horyzont prognozy

Jeśli termin wykracza poza horyzont dostawcy, system stosuje FR-3.3 i fallback z [gaps.md](gaps.md) D-10. Nie wymyślamy fałszywej „szczegółowej” pogody dziennej.

---

## NFR-E – Stany błędów i puste stany

W `requirements.md` ich nie ma; na MVP przyjmujemy minimum:

| Sytuacja | Oczekiwane zachowanie |
|---|---|
| Brak sieci (poza NFR-O1 cache) | Komunikat, bez utraty już wprowadzonego planu |
| Timeout rozpoznania | Komunikat, możliwość ponowienia i ręcznej korekty |
| Zdjęcie bez ubrań / nieudane rozpoznanie | Komunikat, możliwość dodania innego zdjęcia; ręczne dodanie atrybutów nie jest nowym FR — tylko korekta tego, co system zwróci, albo puste 0 elementów |
| Odmowa aparatu/galerii | NFR-O2 |
| Pusta szafa przy doborze | [gaps.md](gaps.md) G-4 — TBD |
| Brak prognozy | FR-3.3 + D-10 |
| Data końca przed datą startu | Blokada zatwierdzenia planu |

---

## NFR-A – Dostępność (minimum)

**Propozycja MVP:** kontrast tekstu zgodny z WCAG 2.2 AA dla treści kluczowych; elementy sterujące osiągalne z klawiatury na webie; etykiety przy ikonach (akceptuj / odrzuć / spakowane). Pełny audyt AA poza MVP.

---

## Świadomie poza NFR MVP

- Multiplayer / współdzielona walizka
- Push z codzienną stylizacją
- Pomiar rzeczywistej objętości walizki (3D / waga lotnicza)
- Gwarantowana dokładność AI
- Wielojęzyczność
