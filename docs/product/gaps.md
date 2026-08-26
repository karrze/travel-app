# Luki i otwarte decyzje produktowe

Źródło wymagań: [requirements.md](requirements.md). Ten plik **nie jest** specyfikacją. Zawiera pytania, niespójności i rekomendacje. Dopóki decyzja nie zostanie tu oznaczona jako podjęta, nie wraca do `requirements.md`.

Powiązane: [glossary.md](glossary.md), [nfr.md](nfr.md), [acceptance-criteria.md](acceptance-criteria.md).

**Zasada wracania do wymagań:** po decyzji doprecyzowujemy wyłącznie istniejące BR/FR. Bez nowych epiców, bez NFR i bez listy TBD w `requirements.md`.

Status decyzji: `otwarte` | `podjęte`.

---

## 1. Niespójności sekwencji i źródła prawdy

### G-1 – Ostrzeżenie o bagażu pojawia się za wcześnie

- **Status:** otwarte
- **Dotyczy:** FR-1.12, FR-1.11, FR-3.6, FR-3.7, Epic 5
- **Problem:** FR-1.12 wymaga informowania, że rekomendowane lub wybrane rzeczy mogą nie zmieścić się w bagażu. W Epic 1 nie ma jeszcze rekomendowanej listy rzeczy — ta powstaje w Epic 3, a lista pakowania w Epic 5.
- **Kandydat do `requirements.md`:** doprecyzować istniejące FR-1.12 (kiedy ostrzeżenie się pojawia), bez nowego ID.
- **Opcje:**
  1. Ostrzeżenie dopiero przy rekomendowanej garderobie (Epic 3) i/lub liście pakowania (Epic 5).
  2. W Epic 1 pokazywać wyłącznie informację o pojemności wybranego rodzaju bagażu, bez oceny „czy się zmieści”.

### G-2 – Źródło prawdy listy pakowania

- **Status:** otwarte
- **Dotyczy:** BR-5.2, FR-5.1
- **Problem:** BR-5.2 mówi, że lista ma odpowiadać zaakceptowanemu planowi garderoby **i** stylizacji. FR-5.1 generuje listę z garderoby użytej w zaakceptowanym planie stylizacji. Jeśli użytkownik zaakceptuje szafę podróżną, ale odrzuci część stylizacji, listy mogą się rozjechać.
- **Kandydat do `requirements.md`:** doprecyzować BR-5.2 i FR-5.1 tak, by wskazywały jedno źródło.
- **Rekomendacja:** źródłem prawdy jest zaakceptowany plan stylizacji. Lista pakowania = unikalne elementy garderoby wykorzystane w zaakceptowanych stylizacjach.

### G-3 – Zmiana garderoby vs. ochrona zaakceptowanych stylizacji

- **Status:** otwarte
- **Dotyczy:** FR-3.24, FR-4.9
- **Problem:** FR-3.24 wymaga, by zmiany w zaakceptowanej garderobie były uwzględnione przy generowaniu stylizacji. FR-4.9 zabrania, by regeneracja jednego dnia zmieniała zaakceptowane stylizacje innych dni. Nie wiadomo, co wygrywa, gdy użytkownik usunie z szafy podróżnej ubranie użyte w już zaakceptowanej stylizacji.
- **Kandydat do `requirements.md`:** dopisać regułę pierwszeństwa do istniejących FR-3.24 i FR-4.9.
- **Opcje:**
  1. Zaakceptowana stylizacja jest nienaruszalna; usunięcie ubrania blokowane, dopóki stylizacja z tym ubraniem jest zaakceptowana.
  2. Usunięcie ubrania unieważnia tylko te zaakceptowane stylizacje, które go używają; pozostałe dni bez zmian.
  3. Usunięcie ubrania zawsze regeneruje wszystkie niezaakceptowane dni; zaakceptowane zostają, nawet jeśli ubrania już nie ma na liście (niespójność świadoma).

### G-4 – Kolejność Epic 1 vs Epic 2

- **Status:** otwarte
- **Dotyczy:** BR-1.2, BR-2.1, FR-1.17
- **Problem:** przepływ wymagań idzie: plan podróży → dobór garderoby. Digitalizacja szafy jest niezależnym epicem. Nie wiadomo, czy użytkownik może mieć pustą szafę w momencie FR-1.17 i co wtedy się dzieje.
- **Nie dodajemy nowego FR** o onboardingu, dopóki nie ma decyzji. Do odnotowania w NFR jako TBD.
- **Opcje:**
  1. Szafa globalna, niezależna od podróży; można ją uzupełniać przed lub po planie.
  2. Digitalizacja jest krokiem obowiązkowym między zatwierdzeniem planu a doborem.
  3. Dobór działa też na pustej szafie i komunikuje brak elementów (wymagałoby nowego zachowania — poza obecnym zakresem doprecyzowania).

---

## 2. Duplikaty i nachodzące FR

Te pozycje nie są nowym zakresem. Po decyzji można scalić treść istniejących ID, bez dodawania numerów.

| ID | Nakładające się FR | Propozycja |
|---|---|---|
| G-5 | FR-2.5 i FR-2.6 | FR-2.5 = wiele sztuk na zdjęciu (dowolne kategorie). FR-2.6 = wariant, gdy wszystkie sztuki są z jednej kategorii. Albo uznać FR-2.6 za uszczegółowienie FR-2.5 i nie testować osobno. |
| G-6 | FR-3.11 i FR-3.19 | Jedna prezentacja kompletnego zestawu. FR-3.19 może zostać zdaniem doprecyzowującym FR-3.11. |
| G-7 | FR-3.12/3.13 vs FR-3.21/3.22 | Warstwa sztuki (akcept/odrzut pojedynczego ubrania) vs warstwa zestawu (akcept/modyfikacja całości). Obie zostają, ale trzeba opisać kolejność: najpierw korekta sztuk, potem akceptacja zestawu. |
| G-8 | FR-3.6 i FR-3.7 | FR-3.6 = pojemność jako wejście algorytmu. FR-3.7 = skutek: liczba i rodzaj sztuk. Można zostawić oba po doprecyzowaniu modelu pojemności (D-3). |
| G-9 | FR-4.2 (w wymaganiach i w backlogu jako Task 4.4) | Nie duplikat FR, tylko podwójne taski w backlogu. Po doprecyzowaniu aktywności (D-4) backlog można scalić; `requirements.md` bez zmian. |

---

## 3. Otwarte decyzje do istniejących FR

Po podjęciu wracają **wyłącznie** jako doprecyzowanie wskazanego BR/FR.

### D-1 – Co jest „miejscem podróży”

- **Status:** otwarte
- **Dotyczy:** FR-1.1, FR-1.2, FR-3.1
- **Pytanie:** miasto, kraj, region, adres, współrzędne?
- **Wpływ:** jakość podpowiedzi i trafność pogody.
- **Rekomendacja robocza (niezapisana w wymaganiach):** miasto lub miejscowość z geolokalizacją w tle, wystarczająca do prognozy.

### D-2 – Jak liczyć dni podróży

- **Status:** otwarte
- **Dotyczy:** FR-1.7, FR-1.8, FR-4.1
- **Pytanie:** wyjazd 12.08, powrót 14.08 to 2 czy 3 dni / 2 czy 3 stylizacje?
- **Opcje:**
  1. Dni kalendarzowe włącznie z datą wyjazdu i powrotu (`end - start + 1`).
  2. Liczba nocy (`end - start`), a stylizacji `nocy + 1`.
- **Rekomendacja robocza:** opcja 1 — liczba stylizacji = liczba dni kalendarzowych.

### D-3 – Rodzaje bagażu i model pojemności

- **Status:** otwarte
- **Dotyczy:** FR-1.9, FR-1.10, FR-1.11, FR-1.12, FR-3.6, FR-3.7
- **Pytanie:** jakie wartości wybiera użytkownik i czym jest „pojemność”?
- **Brakuje:** słownika rodzajów (np. bagaż podręczny, kabinowy, rejestrowany, plecak) oraz jednostki (sztuki ubrań vs objętość vs waga).
- **Rekomendacja robocza:** 3–4 predefiniowane rodzaje z limitem sztuk odzieży na MVP, bez rzeczywistej objętości 3D.

### D-4 – Taksonomia aktywności

- **Status:** otwarte
- **Dotyczy:** FR-1.13, FR-1.14, FR-3.4, FR-3.5, FR-4.2
- **Pytanie:** zamknięta lista czy dowolny tekst? Jedna lista na całą podróż czy aktywności przypisane do dni?
- **Wpływ:** bez rozbicia na dni stylizacja „na każdy dzień” (FR-4.1) używa tej samej listy aktywności codziennie.
- **Rekomendacja robocza na MVP:** zamknięta wielokrotna lista na całą podróż (np. spacer, plaża, trekking, restauracje, formalne wyjście, sport). Przypisanie do dni = później.

### D-5 – Atrybuty elementu garderoby („pozostałe dane”)

- **Status:** otwarte
- **Dotyczy:** FR-2.8, FR-2.9, FR-2.14
- **Pytanie:** co poza kategorią i kolorem podlega edycji?
- **Kandydaci:** krój/warstwa (top, dół, obuwie, okrycie), formalność, materiał, wzór, sezon.
- **Rekomendacja robocza na MVP:** kategoria, kolor, warstwa (góra/dół/buty/okrycie/akcesorium). Reszta poza MVP.

### D-6 – Szafa globalna czy per podróż

- **Status:** otwarte
- **Dotyczy:** BR-2.1, BR-3.1
- **Rekomendacja robocza:** szafa jest zasobem użytkownika (globalna). Podróż jest kontekstem rekomendacji, nie kontenerem ubrań.

### D-7 – Priorytet optymalizacji

- **Status:** otwarte
- **Dotyczy:** BR-3.2, FR-3.14, FR-3.15
- **Problem:** minimalizacja liczby ubrań i maksymalizacja liczby stylizacji to dwa cele, które mogą się gryźć.
- **Rekomendacja robocza:** najpierw pokrycie: co najmniej jedna kompletna stylizacja na każdy dzień podróży, dopasowana do pogody i aktywności; potem minimalizacja liczby sztuk; uniwersalność jako kryterium rozstrzygające przy remisie.

### D-8 – Definicja uniwersalności i „liczby zastosowań”

- **Status:** otwarte
- **Dotyczy:** BR-3.3, FR-3.17, FR-3.18
- **Pytanie:** jak liczyć, z iloma stylizacjami łączy się ubranie — z wygenerowanymi propozycjami, z potencjalnymi kombinacjami, z zaakceptowanymi?
- **Rekomendacja robocza:** liczba zastosowań = liczba proponowanych stylizacji w bieżącym planie, które zawierają to ubranie.

### D-9 – Cechy i fizjologia użytkownika

- **Status:** otwarte
- **Dotyczy:** FR-3.8, FR-3.9, FR-3.10
- **Pytania:** profil stały czy ankieta per podróż? Jakie wartości (skala / flagi)? Jak konkretnie zwiększają liczbę sztuk? Czy to MVP?
- **Rekomendacja:** świadomie zostawić w wymaganiach (nie wycinać ID), ale w implementacji MVP ograniczyć do 2–3 opcjonalnych flag (np. szybko brudzę ubrania, mocno się pocę) zapisanych przy użytkowniku. Szczegółowy model = później. Prywatność: [nfr.md](nfr.md).

### D-10 – Fallback przy braku prognozy

- **Status:** otwarte
- **Dotyczy:** FR-3.3, FR-3.1, FR-4.5
- **Problem:** FR-3.3 wymaga informacji o braku danych, ale nie mówi, jak wtedy dobierać garderobę i stylizacje.
- **Opcje:** klimatyczne normy sezonowe dla miejsca; warstwy uniwersalne; zablokowanie doboru do czasu ręcznego wskazania oczekiwań pogodowych.
- **Rekomendacja robocza:** komunikat (FR-3.3) + dobór na podstawie sezonu/klimatu miejsca, z oznaczeniem niepewności.

### D-11 – Forma wizualizacji stylizacji

- **Status:** otwarte
- **Dotyczy:** FR-4.3, FR-4.4
- **Opcje:** kolaż zdjęć z szafy użytkownika; układ na manekinie; obraz generowany AI.
- **Rekomendacja robocza na MVP:** kolaż zdjęć elementów z szafy. Generowanie AI poza MVP (koszt, NFR, jakość).

### D-12 – Co, gdy w szafie brakuje potrzebnego ubrania

- **Status:** otwarte
- **Dotyczy:** BR-3.1, FR-3.11
- **Problem:** brak FR o luce asortymentowej (np. brak okrycia przy zimnej pogodzie).
- **Uwaga:** to byłoby nowe zachowanie. Nie dopisujemy nowego FR w tej iteracji. Jeśli zdecydujesz, że MVP ma o tym mówić, najpierw decyzja tutaj, potem ewentualne **nowe** wymaganie w osobnej zmianie zakresu — nie jako „doprecyzowanie”.

---

## 4. Braki przekrojowe (poza obecnymi BR/FR)

Nie wracają do `requirements.md` jako doprecyzowanie istniejących ID. Albo zostają w [nfr.md](nfr.md), albo — jeśli wejdą do zakresu — będą osobną zmianą produktu.

| Temat | Gdzie żyje teraz | Czy blokuje MVP |
|---|---|---|
| Platforma (web / PWA / native) | NFR-P1 | Tak, dla aparatu, galerii, offline |
| Konto, sesja, gość | NFR-P2 | Tak, dla trwałej szafy |
| Wiele podróży / historia | nieopisane | Nie na pierwszy przebieg, jeśli MVP = 1 aktywna podróż |
| Onboarding i pusta szafa | G-4 | Częściowo |
| Rzeczy nieodzieżowe (kosmetyki, elektronika) | poza FR-5.1 | Nie, jeśli lista = tylko garderoba ze stylizacji |
| Edycja planu po zatwierdzeniu (poza FR-1.16 przed zatwierdzeniem) | nieopisane | Warto świadomie wyciąć na MVP |
| Offline w trakcie wyjazdu | NFR-O1 | Epic 6 bez tego jest kruchy |
| Język UI i rynki | NFR-I1 | Nie, jeśli jeden język na start |
| Integracje (miejsca, pogoda, vision) | NFR-I2 | Tak technicznie, nie jako BR |

---

## 5. Rekomendacje cięcia zakresu (nie są decyzją)

To opinia analityczna, nie zmiana `requirements.md`:

1. FR-2.6 (cała kategoria na jednym zdjęciu) — najdroższy wariant CV; MVP może spełnić BR-2.2 przez FR-2.5.
2. Generatywna wizualizacja (wariant D-11) — poza MVP.
3. Fizjologia (FR-3.8–3.10) — zostawić jako lekkie flagi albo odłożyć; pełny model jest drogi i wrażliwy prywatnościowo.
4. Epic 6 bez offline — dopuszczalne na MVP tylko przy świadomym NFR-O1 = „wymagane połączenie”.

---

## 6. Kolejność zamykania decyzji

Najpierw to, bez czego nie da się spójnie pisać UI ani AC:

1. D-2 (dni), D-3 (bagaż), D-4 (aktywności), D-6 (szafa globalna)
2. G-2 (źródło listy pakowania), G-1 (moment ostrzeżenia), D-7 (priorytet optymalizacji)
3. D-5 (atrybuty), D-8 (uniwersalność), D-11 (wizualizacja)
4. D-9, D-10, G-3, G-4
5. D-12 tylko jeśli świadomie powiększasz zakres
