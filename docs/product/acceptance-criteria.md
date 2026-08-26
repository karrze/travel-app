# Kryteria akceptacji MVP

Mapowanie 1:1 na FR z [requirements.md](requirements.md). Kryteria **nie dodają** nowych funkcji. Gdzie FR jest niejednoznaczne, AC opisuje minimum testowalne i wskazuje decyzję w [gaps.md](gaps.md).

Format: Given / When / Then. Słownik: [glossary.md](glossary.md).

---

## Epic 1 – Zaplanowanie podróży

### FR-1.1 – Wybór miejsca podróży

- Given użytkownik jest na etapie planowania podróży
- When wskaże miejsce
- Then to miejsce jest zapisane jako miejsce podróży i widoczne w dalszych krokach

Zakres „miejsca”: [gaps.md](gaps.md) D-1.

### FR-1.2 – Wyszukiwanie miejsca

- Given użytkownik wprowadza fragment nazwy miejsca
- When system zwraca podpowiedzi
- Then użytkownik może wybrać miejsce z listy podpowiedzi (bez obowiązku wpisania pełnej nazwy z pamięci)

### FR-1.3 – Zmiana miejsca podróży

- Given miejsce jest już wybrane
- When użytkownik wybierze inne miejsce
- Then poprzednie miejsce zostaje zastąpione i plan używa nowego

### FR-1.4 – Data rozpoczęcia podróży

- Given użytkownik jest na etapie określania terminu
- When wskaże datę rozpoczęcia
- Then data jest zapisana w planie

### FR-1.5 – Data zakończenia podróży

- Given użytkownik jest na etapie określania terminu
- When wskaże datę zakończenia
- Then data jest zapisana w planie

### FR-1.6 – Zmiana terminu podróży

- Given daty są już wskazane
- When użytkownik zmieni datę rozpoczęcia lub zakończenia
- Then plan używa nowych dat, a długość pobytu jest przeliczana (FR-1.7)

### FR-1.7 – Obliczenie długości pobytu

- Given wskazane są data rozpoczęcia i zakończenia
- When obie daty są kompletne i data zakończenia nie jest wcześniejsza niż rozpoczęcia
- Then system wylicza liczbę dni bez ręcznego wpisywania przez użytkownika

Reguła liczenia: [gaps.md](gaps.md) D-2. Do czasu decyzji testować, że wynik jest spójny z jedną, udokumentowaną regułą i zmienia się po zmianie dat.

### FR-1.8 – Prezentacja długości pobytu

- Given system wyliczył liczbę dni
- When użytkownik ogląda plan (krok terminu lub podsumowanie)
- Then widzi tę liczbę dni

### FR-1.9 – Wybór rodzaju bagażu

- Given użytkownik jest na etapie bagażu
- When wybierze rodzaj bagażu
- Then rodzaj jest zapisany w planie

Słownik rodzajów: [gaps.md](gaps.md) D-3.

### FR-1.10 – Zmiana rodzaju bagażu

- Given rodzaj bagażu jest wybrany
- When użytkownik wybierze inny rodzaj
- Then plan używa nowego rodzaju

### FR-1.11 – Uwzględnienie pojemności bagażu

- Given plan ma wybrany rodzaj bagażu
- When system przygotowuje rekomendowaną listę / zestaw rzeczy (Epic 3)
- Then dobór korzysta z ograniczenia wynikającego z tego rodzaju

Jednostka pojemności: D-3. FR-1.11 nie wymaga ostrzeżenia w wizardzie Epic 1.

### FR-1.12 – Ostrzeżenie o ograniczeniu bagażu

- Given znane są rodzaj bagażu oraz zestaw rekomendowanych lub wybranych rzeczy
- When rzeczy mogą przekroczyć pojemność
- Then użytkownik widzi informację o możliwym braku miejsca

Moment w przepływie: [gaps.md](gaps.md) G-1. Do czasu decyzji **nie** wymagać ostrzeżenia wyłącznie na etapie Epic 1, jeśli nie ma jeszcze listy rzeczy.

### FR-1.13 – Określenie planowanych aktywności

- Given użytkownik jest na etapie aktywności
- When wskaże co najmniej jedną aktywność albo świadomie pusty wybór, jeśli produkt na to pozwoli
- Then wskazane aktywności są powiązane z planem

Taksonomia: [gaps.md](gaps.md) D-4. Minimum testowalne: da się wskazać aktywności i są one widoczne w podsumowaniu.

### FR-1.14 – Powiązanie aktywności z podróżą

- Given aktywności są wskazane i plan zatwierdzony
- When system dobiera garderobę (Epic 3) i generuje stylizacje (Epic 4)
- Then te same aktywności są wejściem do doboru i stylizacji

### FR-1.15 – Podsumowanie podróży

- Given użytkownik nie zatwierdził jeszcze planu
- When otwiera podsumowanie
- Then widzi miejsce, termin, długość pobytu, rodzaj bagażu i wskazane aktywności

### FR-1.16 – Powrót do wcześniejszych kroków

- Given użytkownik jest na późniejszym etapie planowania (przed zatwierdzeniem)
- When wraca do wcześniejszego kroku i zmienia dane
- Then podsumowanie i kolejne kroki pokazują zaktualizowane dane

### FR-1.17 – Zatwierdzenie planu podróży

- Given podsumowanie zawiera komplet danych wymaganych przez FR-1.15
- When użytkownik zatwierdza plan
- Then przechodzi do etapu doboru garderoby (Epic 3)

Kolejność względem digitalizacji szafy: [gaps.md](gaps.md) G-4 — AC nie wymaga, by szafa była już pełna.

---

## Epic 2 – Digitalizacja garderoby

### FR-2.1 – Dodawanie zdjęć

- Given użytkownik digitalizuje garderobę
- When doda zdjęcie zawierające ubrania
- Then system przyjmuje zdjęcie do przetwarzania

### FR-2.2 – Kilka ubrań na zdjęciu

- Given zdjęcie zawiera więcej niż jedno ubranie
- When system je przetwarza
- Then nie odrzuca zdjęcia tylko dlatego, że jest na nim kilka sztuk

### FR-2.3 – Zdjęcie z aparatu

- Given urządzenie ma aparat i użytkownik udzielił uprawnienia
- When wykona zdjęcie w aplikacji
- Then zdjęcie trafia do przetwarzania jak w FR-2.1

Odmowa uprawnienia: [nfr.md](nfr.md) NFR-O2.

### FR-2.4 – Zdjęcie z galerii

- Given użytkownik ma zdjęcie w galerii urządzenia
- When je wybierze
- Then zdjęcie trafia do przetwarzania jak w FR-2.1

### FR-2.5 – Skanowanie wielu ubrań

- Given na zdjęciu jest kilka ubrań
- When system kończy rozpoznanie
- Then użytkownik widzi więcej niż jeden rozpoznany element (o ile model je wykrył)

### FR-2.6 – Skanowanie kategorii ubrań

- Given na zdjęciu jest kilka elementów tej samej kategorii
- When system kończy rozpoznanie
- Then może rozpoznać wiele elementów z tego zdjęcia

Nakładanie z FR-2.5: [gaps.md](gaps.md) G-5. Minimum: spełnienie FR-2.5 wystarcza, jeśli sztuki są z jednej kategorii.

### FR-2.7 – Automatyczne rozpoznanie ubrania

- Given przesłano zdjęcie z ubraniami
- When przetwarzanie się powiedzie
- Then system sam oznacza wykryte ubrania (użytkownik nie rysuje ich ręcznie jako warunek sukcesu)

### FR-2.8 – Automatyczne przypisanie kategorii

- Given ubranie zostało rozpoznane
- When system pokazuje je do weryfikacji
- Then ma przypisaną kategorię nadaną automatycznie

### FR-2.9 – Automatyczne rozpoznanie koloru

- Given ubranie zostało rozpoznane
- When system pokazuje je do weryfikacji
- Then ma przypisany kolor nadany automatycznie

### FR-2.10 – Weryfikacja danych

- Given system rozpoznał ubrania i cechy
- When użytkownik ogląda wynik
- Then widzi informacje (co najmniej wykryte sztuki, kategorię, kolor) i może je ocenić przed akceptacją

### FR-2.11 – Akceptacja rozpoznanych ubrań

- Given użytkownik widzi rozpoznane ubrania
- When zaakceptuje sztukę / sztuki
- Then trafiają do garderoby użytkownika i są dostępne do rekomendacji

### FR-2.12 – Edycja kategorii

- Given ubranie ma kategorię (przed lub po akceptacji)
- When użytkownik zmieni kategorię
- Then zapisana jest nowa kategoria

### FR-2.13 – Edycja koloru

- Given ubranie ma kolor
- When użytkownik zmieni kolor
- Then zapisany jest nowy kolor

### FR-2.14 – Edycja pozostałych danych

- Given ubranie ma atrybuty poza kategorią i kolorem, które system pokazał lub które produkt przewiduje
- When użytkownik je zmieni
- Then zapisane są nowe wartości

Lista atrybutów: [gaps.md](gaps.md) D-5. Do czasu decyzji minimum = da się edytować wszystkie atrybuty, które system wyświetlił przy weryfikacji.

### FR-2.15 – Usunięcie ubrania

- Given istnieje rozpoznane (jeszcze niezaakceptowane) albo zaakceptowane ubranie
- When użytkownik je usunie
- Then znika z wyniku skanu i/lub z garderoby i nie wraca do rekomendacji jako element szafy

---

## Epic 3 – Dobór garderoby do podróży

### FR-3.1 – Uwzględnienie prognozy pogody

- Given plan ma miejsce i termin
- When system przygotowuje rekomendowaną garderobę
- Then dobór korzysta z dostępnej prognozy dla tego miejsca i terminu (albo ze stanu braku danych z FR-3.3)

### FR-3.2 – Pogoda dla poszczególnych dni

- Given istnieje prognoza dzienna w horyzoncie dostawcy
- When użytkownik chce sprawdzić pogodę
- Then może zobaczyć informację pogodową dla każdego dnia podróży, dla którego dane są dostępne

Dni bez szczegółowej prognozy: FR-3.3, [gaps.md](gaps.md) D-10.

### FR-3.3 – Brak dostępnej prognozy

- Given dla części lub całości terminu nie ma szczegółowej prognozy
- When użytkownik jest na etapie doboru / pogody
- Then widzi informację o braku lub ograniczonej dostępności danych (niepusty, milczący ekran)

### FR-3.4 – Uwzględnienie aktywności

- Given plan zawiera wskazane aktywności
- When system dobiera garderobę
- Then aktywności są wejściem algorytmu (nie są ignorowane)

### FR-3.5 – Rekomendacje względem aktywności

- Given wskazano aktywności (np. trekking)
- When system prezentuje rekomendowane ubrania
- Then w zestawie są elementy uzasadnione tymi aktywnościami (widać to w doborze lub w uzasadnieniu FR-3.16)

### FR-3.6 – Uwzględnienie pojemności bagażu

- Given wybrano rodzaj bagażu
- When system tworzy rekomendację
- Then pojemność wynikająca z rodzaju jest ograniczeniem wejściowym

### FR-3.7 – Dopasowanie rekomendacji do bagażu

- Given dwa różne rodzaje bagażu o różnej pojemności (po D-3)
- When system liczy rekomendację dla tego samego kontekstu podróży
- Then liczba i/lub rodzaj rekomendowanych elementów różni się w stronę mniejszego zestawu dla mniejszego bagażu

Do czasu D-3: testować, że rodzaj bagażu zmienia wynik, niekoniecznie konkretną jednostkę.

### FR-3.8 – Uwzględnienie cech użytkownika

- Given użytkownik podał cechę wpływającą na ponowne użycie (przykład z FR: szybkie brudzenie)
- When system przygotowuje rekomendację
- Then cecha wpływa na dobór (np. większa liczba sztuk danej warstwy) względem braku tej cechy

Model: [gaps.md](gaps.md) D-9.

### FR-3.9 – Uwzględnienie fizjologii użytkownika

- Given użytkownik podał informację fizjologiczną (przykład z FR: pocenie)
- When system przygotowuje rekomendację
- Then informacja wpływa na dobór względem jej braku

### FR-3.10 – Wprowadzenie informacji o użytkowniku

- Given użytkownik jest na etapie, w którym rekomendacja ma te dane uwzględnić
- When wprowadzi informacje o cechach i/lub fizjologii
- Then są zapisane i użyte przy przygotowaniu rekomendacji (FR-3.8, FR-3.9)

### FR-3.11 – Rekomendowanie ubrań

- Given zatwierdzony plan i dostępna garderoba
- When system kończy dobór
- Then użytkownik widzi rekomendowany zestaw ubrań na tę podróż

Pusta szafa: G-4. Luka asortymentowa: D-12 — poza AC, dopóki brak decyzji o nowym zakresie.

### FR-3.12 – Akceptacja ubrania

- Given w zestawie jest rekomendowane ubranie
- When użytkownik je zaakceptuje
- Then pozostaje w bieżącym zestawie jako zaakceptowane

### FR-3.13 – Odrzucenie ubrania

- Given w zestawie jest rekomendowane ubranie
- When użytkownik je odrzuci
- Then nie jest już pozycją do zabrania; zestaw jest aktualizowany (FR-3.23)

### FR-3.14 – Optymalizacja liczby ubrań

- Given ten sam kontekst podróży i szafa umożliwiająca warianty
- When system liczy rekomendację
- Then nie proponuje zbędnego nadmiaru sztuk ponad pokrycie dni / aktywności / pogody

Priorytet vs FR-3.15: [gaps.md](gaps.md) D-7. Minimum: zestaw nie jest prostą sumą „jedna pełna stylizacja na dzień bez współdzielenia”, jeśli da się współdzielić.

### FR-3.15 – Maksymalizacja liczby stylizacji

- Given ograniczony zestaw
- When system dobiera garderobę
- Then elementy da się złożyć w kompletne stylizacje na dni podróży (wejście do Epic 4), a nie tylko luźną listę niepasujących sztuk

### FR-3.16 – Uzasadnienie wyboru ubrania

- Given ubranie jest w rekomendacji
- When użytkownik chce sprawdzić powód
- Then widzi uzasadnienie (pogoda, aktywność, uniwersalność, bagaż lub inny faktyczny powód doboru)

### FR-3.17 – Dobór uniwersalnych ubrań

- Given w szafie są elementy o różnej liczbie możliwych połączeń
- When system układa rekomendację
- Then przy porównywalnym pokryciu potrzeb preferuje elementy nadające się do wielu stylizacji

Metryka: [gaps.md](gaps.md) D-8.

### FR-3.18 – Liczba zastosowań ubrania

- Given ubranie jest w rekomendowanym lub prezentowanym zestawie
- When użytkownik chce sprawdzić liczbę zastosowań
- Then widzi liczbę proponowanych stylizacji, z którymi to ubranie się łączy (definicja D-8)

### FR-3.19 – Prezentacja rekomendowanej garderoby

- Given rekomendacja jest gotowa
- When użytkownik ogląda wynik doboru
- Then widzi kompletny zestaw (wszystkie pozycje rekomendacji), nie tylko podzbiór bez dostępu do reszty

Nakładanie z FR-3.11: [gaps.md](gaps.md) G-6.

### FR-3.20 – Liczba rekomendowanych elementów

- Given prezentowany jest zestaw
- When użytkownik go ogląda
- Then widzi liczbę ubrań w rekomendowanej garderobie, zgodną z liczbą pozycji w zestawie

### FR-3.21 – Akceptacja rekomendacji

- Given użytkownik widzi kompletny zestaw
- When zaakceptuje rekomendowaną garderobę
- Then zestaw staje się zaakceptowaną garderobą podróżną i można przejść do stylizacji

Kolejność vs FR-3.12: [gaps.md](gaps.md) G-7.

### FR-3.22 – Modyfikacja rekomendacji

- Given użytkownik widzi zestaw
- When zmieni skład (odrzucenie, ewentualnie inne dozwolone korekty wynikające z FR-3.12/3.13)
- Then system przyjmuje zmodyfikowany zestaw zamiast oryginału

### FR-3.23 – Aktualizacja rekomendacji po zmianie

- Given użytkownik odrzucił lub zmienił element
- When patrzy na bieżący zestaw
- Then zestaw odzwierciedla tę zmianę (element nie wraca „po cichu” w tej samej roli)

### FR-3.24 – Aktualizacja zależnych stylizacji

- Given garderoba podróżna została zmieniona po wcześniejszym wygenerowaniu stylizacji albo przed ich akceptacją
- When system generuje lub odświeża stylizacje
- Then używa aktualnej zaakceptowanej garderoby, a nie poprzedniego składu

Konflikt z FR-4.9: [gaps.md](gaps.md) G-3. Do czasu decyzji: niezaakceptowane dni korzystają z nowej szafy; zaakceptowane dni — według wybranej opcji G-3.

---

## Epic 4 – Generowanie stylizacji

### FR-4.1 – Stylizacja na każdy dzień

- Given znana jest liczba dni podróży (FR-1.7) i zaakceptowana garderoba podróżna
- When system generuje plan stylizacji
- Then istnieje propozycja stylizacji dla każdego dnia podróży

Liczba dni: D-2.

### FR-4.2 – Dopasowanie do aktywności

- Given plan ma aktywności
- When system tworzy stylizację dnia
- Then komplet uwzględnia te aktywności (nie jest sprzeczny z zadeklarowanym planem, np. same formalne kreacje przy samym trekkingu)

Aktywności per dzień vs cała podróż: D-4.

### FR-4.3 – Wizualizacja stylizacji

- Given wygenerowano stylizację
- When użytkownik ją ogląda
- Then widzi wizualizację kompletu, nie sam tekstową listę jako jedyny widok

Forma: [gaps.md](gaps.md) D-11.

### FR-4.4 – Prezentacja wykorzystanych ubrań

- Given użytkownik ogląda stylizację
- When chce sprawdzić skład
- Then widzi elementy garderoby użyte w tej stylizacji

### FR-4.5 – Dopasowanie do pogody

- Given dla dnia jest prognoza albo fallback D-10
- When system generuje stylizację tego dnia
- Then komplet uwzględnia warunki (np. okrycie przy zimnie / deszczu, jeśli takie elementy są w zaakceptowanej garderobie)

Brak elementu w szafie: D-12 — nie wymaga proponowania zakupów.

### FR-4.6 – Akceptacja stylizacji

- Given użytkownik widzi propozycję dnia
- When ją zaakceptuje
- Then stylizacja dnia ma status zaakceptowanej

### FR-4.7 – Odrzucenie stylizacji

- Given użytkownik widzi propozycję dnia
- When ją odrzuci
- Then ta propozycja nie pozostaje obowiązującą stylizacją dnia

### FR-4.8 – Wygenerowanie alternatywnej stylizacji

- Given użytkownik odrzucił stylizację dnia
- When prosi o inną propozycję
- Then system przedstawia inną stylizację dla **tego** dnia, z zaakceptowanej garderoby podróżnej

### FR-4.9 – Zachowanie zaakceptowanych stylizacji

- Given dzień A ma zaakceptowaną stylizację, dzień B nie
- When użytkownik regeneruje stylizację dnia B
- Then stylizacja dnia A pozostaje bez zmian

---

## Epic 5 – Pakowanie walizki

### FR-5.1 – Lista rzeczy do spakowania

- Given istnieje zaakceptowany plan stylizacji
- When system generuje listę pakowania
- Then lista zawiera elementy garderoby użyte w tym planie (unikalne sztuki)

Źródło prawdy vs BR-5.2: [gaps.md](gaps.md) G-2. Do czasu decyzji testować FR-5.1 literalnie (plan stylizacji), nie „całą zaakceptowaną szafę podróżną, jeśli nie weszła do stylizacji”.

### FR-5.2 – Grupowanie rzeczy

- Given lista pakowania ma elementy z więcej niż jednej kategorii
- When użytkownik ogląda listę
- Then elementy są pogrupowane według kategorii

### FR-5.3 – Oznaczanie rzeczy jako spakowane

- Given pozycja jest na liście i nieoznaczona
- When użytkownik ją oznaczy
- Then ma status spakowanej; ponowne działanie może zdjąć status, jeśli UI na to pozwala — minimum: da się oznaczyć jako spakowane

### FR-5.4 – Status pakowania

- Given część pozycji jest spakowana
- When użytkownik ogląda listę
- Then widzi postęp wynikający ze statusów (np. spakowane / wszystkie), spójny z liczbą oznaczonych pozycji

---

## Epic 6 – Korzystanie z aplikacji podczas podróży

### FR-6.1 – Stylizacja na dany dzień

- Given istnieje plan stylizacji z przypisanymi dniami
- When użytkownik otwiera widok podróży dla konkretnego dnia
- Then widzi stylizację przypisaną do tego dnia (zaakceptowaną, a jeśli dzień niezaakceptowany — bieżącą propozycję)

Offline: [nfr.md](nfr.md) NFR-O1 — AC funkcjonalne nie wymaga działania bez sieci, dopóki NFR-O1 nie jest potwierdzone.

### FR-6.2 – Nawigacja pomiędzy dniami

- Given podróż trwa więcej niż jeden dzień
- When użytkownik przełącza się na inny dzień
- Then widzi stylizację tego dnia, bez utraty planu
