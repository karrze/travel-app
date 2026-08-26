# Wymagania systemowo-biznesowe MVP

## Epic 1 – Zaplanowanie podróży

### Wymagania biznesowe

**BR-1.1 – Zebranie kontekstu podróży**
Aplikacja powinna umożliwiać zebranie informacji o podróży niezbędnych do przygotowania dopasowanych rekomendacji garderoby i stylizacji.

**BR-1.2 – Podstawa dalszych rekomendacji**
Dane dotyczące podróży powinny stanowić podstawę do dalszego doboru garderoby i generowania stylizacji.

**BR-1.3 – Kontrola danych przez użytkownika**
Użytkownik powinien mieć kontrolę nad informacjami dotyczącymi podróży przed rozpoczęciem procesu doboru garderoby.

### Wymagania funkcjonalne

**FR-1.1 – Wybór miejsca podróży**
System musi umożliwiać użytkownikowi wskazanie miejsca podróży.

**FR-1.2 – Wyszukiwanie miejsca**
System musi umożliwiać wyszukiwanie miejsca podróży z wykorzystaniem listy podpowiedzi.

**FR-1.3 – Zmiana miejsca podróży**
System musi umożliwiać zmianę wcześniej wybranego miejsca podróży.

**FR-1.4 – Data rozpoczęcia podróży**
System musi umożliwiać wskazanie daty rozpoczęcia podróży.

**FR-1.5 – Data zakończenia podróży**
System musi umożliwiać wskazanie daty zakończenia podróży.

**FR-1.6 – Zmiana terminu podróży**
System musi umożliwiać zmianę wcześniej wskazanych dat podróży.

**FR-1.7 – Obliczenie długości pobytu**
System musi automatycznie obliczać liczbę dni podróży na podstawie daty rozpoczęcia i zakończenia.

**FR-1.8 – Prezentacja długości pobytu**
System musi prezentować użytkownikowi obliczoną liczbę dni podróży.

**FR-1.9 – Wybór rodzaju bagażu**
System musi umożliwiać użytkownikowi określenie rodzaju bagażu.

**FR-1.10 – Zmiana rodzaju bagażu**
System musi umożliwiać zmianę wcześniej wybranego rodzaju bagażu.

**FR-1.11 – Uwzględnienie pojemności bagażu**
System musi wykorzystywać wybrany rodzaj bagażu przy przygotowywaniu rekomendowanej listy rzeczy.

**FR-1.12 – Ostrzeżenie o ograniczeniu bagażu**
System musi informować użytkownika, jeśli rekomendowane lub wybrane rzeczy mogą nie zmieścić się w zadeklarowanym bagażu.

**FR-1.13 – Określenie planowanych aktywności**
System musi umożliwiać użytkownikowi wskazanie aktywności planowanych podczas podróży.

**FR-1.14 – Powiązanie aktywności z podróżą**
System musi zapisywać wskazane aktywności jako element planu podróży i wykorzystywać je podczas późniejszego doboru garderoby oraz generowania stylizacji.

**FR-1.15 – Podsumowanie podróży**
System musi przed zatwierdzeniem planu prezentować użytkownikowi podsumowanie obejmujące miejsce podróży, termin, długość pobytu, rodzaj bagażu oraz wskazane aktywności.

**FR-1.16 – Powrót do wcześniejszych kroków**
System musi umożliwiać użytkownikowi powrót do wcześniejszych etapów planowania i zmianę danych.

**FR-1.17 – Zatwierdzenie planu podróży**
System musi umożliwiać zatwierdzenie planu podróży i przejście do etapu doboru garderoby.

---

# Epic 2 – Digitalizacja garderoby

### Wymagania biznesowe

**BR-2.1 – Cyfrowa reprezentacja garderoby**
Aplikacja powinna umożliwiać utworzenie cyfrowej reprezentacji garderoby użytkownika, która może zostać wykorzystana do przygotowania rekomendacji.

**BR-2.2 – Ograniczenie wysiłku użytkownika**
Proces digitalizacji garderoby powinien ograniczać nakład pracy wymagany od użytkownika poprzez możliwość przetwarzania wielu ubrań jednocześnie i automatyczne rozpoznawanie ich podstawowych cech.

**BR-2.3 – Kontrola poprawności danych**
Użytkownik powinien zachować kontrolę nad informacjami rozpoznanymi automatycznie przez system.

### Wymagania funkcjonalne

**FR-2.1 – Dodawanie zdjęć**
System musi umożliwiać użytkownikowi dodanie zdjęcia zawierającego ubrania.

**FR-2.2 – Kilka ubrań na zdjęciu**
System musi umożliwiać przetwarzanie zdjęcia zawierającego kilka ubrań.

**FR-2.3 – Zdjęcie z aparatu**
System musi umożliwiać wykonanie zdjęcia przy użyciu aparatu urządzenia.

**FR-2.4 – Zdjęcie z galerii**
System musi umożliwiać wybranie istniejącego zdjęcia z galerii urządzenia.

**FR-2.5 – Skanowanie wielu ubrań**
System musi umożliwiać jednoczesne rozpoznanie kilku ubrań znajdujących się na jednym zdjęciu.

**FR-2.6 – Skanowanie kategorii ubrań**
System musi umożliwiać rozpoznanie wielu elementów należących do jednej kategorii na podstawie pojedynczego zdjęcia.

**FR-2.7 – Automatyczne rozpoznanie ubrania**
System musi automatycznie identyfikować ubrania znajdujące się na przesłanym zdjęciu.

**FR-2.8 – Automatyczne przypisanie kategorii**
System musi automatycznie przypisywać rozpoznanym ubraniom kategorię.

**FR-2.9 – Automatyczne rozpoznanie koloru**
System musi automatycznie określać kolor rozpoznanego ubrania.

**FR-2.10 – Weryfikacja danych**
System musi prezentować użytkownikowi rozpoznane informacje w sposób umożliwiający ich weryfikację.

**FR-2.11 – Akceptacja rozpoznanych ubrań**
System musi umożliwiać zaakceptowanie poprawnie rozpoznanych ubrań i ich danych.

**FR-2.12 – Edycja kategorii**
System musi umożliwiać zmianę kategorii ubrania.

**FR-2.13 – Edycja koloru**
System musi umożliwiać zmianę rozpoznanego koloru ubrania.

**FR-2.14 – Edycja pozostałych danych**
System musi umożliwiać zmianę pozostałych informacji przypisanych do ubrania.

**FR-2.15 – Usunięcie ubrania**
System musi umożliwiać użytkownikowi usunięcie rozpoznanego lub wcześniej zaakceptowanego elementu garderoby.

---

# Epic 3 – Dobór garderoby do podróży

### Wymagania biznesowe

**BR-3.1 – Dopasowanie garderoby do kontekstu podróży**
Rekomendowana garderoba powinna uwzględniać kontekst konkretnej podróży oraz informacje mające wpływ na potrzeby użytkownika podczas wyjazdu.

**BR-3.2 – Optymalizacja garderoby**
Aplikacja powinna dążyć do ograniczenia liczby zabieranych ubrań przy jednoczesnym zapewnieniu możliwości utworzenia możliwie dużej liczby odpowiednich stylizacji.

**BR-3.3 – Uniwersalność rekomendowanej garderoby**
W procesie rekomendacji powinny być preferowane elementy garderoby, które mogą zostać wykorzystane w wielu stylizacjach.

**BR-3.4 – Kontrola rekomendacji przez użytkownika**
Ostateczna decyzja dotycząca garderoby zabieranej w podróż powinna należeć do użytkownika.

**BR-3.5 – Spójność rekomendacji**
Zmiany dokonane przez użytkownika w rekomendowanej garderobie powinny być uwzględniane w kolejnych etapach planowania.

### Wymagania funkcjonalne

**FR-3.1 – Uwzględnienie prognozy pogody**
System musi uwzględniać prognozę pogody podczas doboru garderoby.

**FR-3.2 – Pogoda dla poszczególnych dni**
System musi umożliwiać użytkownikowi sprawdzenie pogody dla każdego dnia podróży.

**FR-3.3 – Brak dostępnej prognozy**
Jeśli szczegółowa prognoza pogody dla terminu podróży nie jest dostępna, system musi poinformować użytkownika o braku lub ograniczonej dostępności danych pogodowych.

**FR-3.4 – Uwzględnienie aktywności**
System musi uwzględniać planowane przez użytkownika aktywności.

**FR-3.5 – Rekomendacje względem aktywności**
System musi dopasowywać rekomendowane ubrania do planowanych aktywności.

**FR-3.6 – Uwzględnienie pojemności bagażu**
System musi uwzględniać pojemność wybranego bagażu podczas tworzenia rekomendacji.

**FR-3.7 – Dopasowanie rekomendacji do bagażu**
System musi dobierać liczbę i rodzaj rekomendowanych elementów garderoby z uwzględnieniem wybranego bagażu.

**FR-3.8 – Uwzględnienie cech użytkownika**
System musi umożliwiać uwzględnienie cech użytkownika mających wpływ na częstotliwość ponownego wykorzystania ubrania, np. szybkiego brudzenia ubrań.

**FR-3.9 – Uwzględnienie fizjologii użytkownika**
System musi umożliwiać uwzględnienie informacji dotyczących fizjologii użytkownika wpływających na dobór garderoby, np. pocenia się.

**FR-3.10 – Wprowadzenie informacji o użytkowniku**
System musi umożliwiać użytkownikowi wprowadzenie informacji dotyczących cech i fizjologii, które mają zostać uwzględnione podczas przygotowywania rekomendacji.

**FR-3.11 – Rekomendowanie ubrań**
System musi prezentować użytkownikowi rekomendowany zestaw ubrań na podróż.

**FR-3.12 – Akceptacja ubrania**
System musi umożliwiać zaakceptowanie rekomendowanego ubrania.

**FR-3.13 – Odrzucenie ubrania**
System musi umożliwiać odrzucenie wybranego rekomendowanego ubrania.

**FR-3.14 – Optymalizacja liczby ubrań**
System musi dążyć do minimalizacji liczby rekomendowanych ubrań.

**FR-3.15 – Maksymalizacja liczby stylizacji**
System musi dobierać garderobę w sposób umożliwiający utworzenie możliwie dużej liczby stylizacji z ograniczonego zestawu ubrań.

**FR-3.16 – Uzasadnienie wyboru ubrania**
System musi umożliwiać użytkownikowi sprawdzenie, dlaczego dane ubranie zostało uwzględnione w rekomendacji.

**FR-3.17 – Dobór uniwersalnych ubrań**
System musi uwzględniać uniwersalność elementów garderoby podczas przygotowywania rekomendacji.

**FR-3.18 – Liczba zastosowań ubrania**
System musi umożliwiać sprawdzenie, z iloma proponowanymi stylizacjami można połączyć dane ubranie.

**FR-3.19 – Prezentacja rekomendowanej garderoby**
System musi prezentować użytkownikowi kompletny rekomendowany zestaw garderoby.

**FR-3.20 – Liczba rekomendowanych elementów**
System musi prezentować liczbę ubrań znajdujących się w rekomendowanej garderobie.

**FR-3.21 – Akceptacja rekomendacji**
System musi umożliwiać zaakceptowanie rekomendowanej garderoby.

**FR-3.22 – Modyfikacja rekomendacji**
System musi umożliwiać użytkownikowi zmodyfikowanie rekomendowanej garderoby.

**FR-3.23 – Aktualizacja rekomendacji po zmianie**
Po odrzuceniu lub zmianie elementu rekomendowanej garderoby system musi uwzględnić tę zmianę w aktualnym zestawie rekomendacji.

**FR-3.24 – Aktualizacja zależnych stylizacji**
Zmiany w zaakceptowanej garderobie muszą zostać uwzględnione podczas generowania stylizacji.

---

# Epic 4 – Generowanie stylizacji

### Wymagania biznesowe

**BR-4.1 – Plan stylizacji na podróż**
Aplikacja powinna zapewniać użytkownikowi plan stylizacji odpowiadający poszczególnym dniom i kontekstowi podróży.

**BR-4.2 – Wykorzystanie wybranej garderoby**
Generowane stylizacje powinny bazować na garderobie wybranej dla danej podróży.

**BR-4.3 – Kontrola stylizacji przez użytkownika**
Użytkownik powinien zachować kontrolę nad ostatecznym wyborem stylizacji.

### Wymagania funkcjonalne

**FR-4.1 – Stylizacja na każdy dzień**
System musi generować propozycję stylizacji dla każdego dnia podróży.

**FR-4.2 – Dopasowanie do aktywności**
System musi uwzględniać planowane aktywności podczas tworzenia stylizacji.

**FR-4.3 – Wizualizacja stylizacji**
System musi prezentować wizualizację wygenerowanej stylizacji.

**FR-4.4 – Prezentacja wykorzystanych ubrań**
System musi umożliwiać sprawdzenie elementów garderoby wykorzystanych w danej stylizacji.

**FR-4.5 – Dopasowanie do pogody**
System musi uwzględniać warunki pogodowe podczas generowania stylizacji.

**FR-4.6 – Akceptacja stylizacji**
System musi umożliwiać użytkownikowi zaakceptowanie wybranej stylizacji.

**FR-4.7 – Odrzucenie stylizacji**
System musi umożliwiać użytkownikowi odrzucenie zaproponowanej stylizacji.

**FR-4.8 – Wygenerowanie alternatywnej stylizacji**
Po odrzuceniu stylizacji system musi umożliwiać przygotowanie innej propozycji dla danego dnia.

**FR-4.9 – Zachowanie zaakceptowanych stylizacji**
Ponowne wygenerowanie stylizacji dla jednego dnia nie może powodować zmiany wcześniej zaakceptowanych stylizacji dla pozostałych dni.

---

# Epic 5 – Pakowanie walizki

### Wymagania biznesowe

**BR-5.1 – Wsparcie procesu pakowania**
Aplikacja powinna wspierać użytkownika w przełożeniu przygotowanego planu garderoby i stylizacji na rzeczy, które należy zabrać w podróż.

**BR-5.2 – Spójność planu i pakowania**
Lista rzeczy do spakowania powinna odpowiadać ostatecznie zaakceptowanemu planowi garderoby i stylizacji.

### Wymagania funkcjonalne

**FR-5.1 – Lista rzeczy do spakowania**
System musi generować listę rzeczy do spakowania na podstawie garderoby wykorzystywanej w zaakceptowanym planie stylizacji.

**FR-5.2 – Grupowanie rzeczy**
System musi grupować elementy listy według kategorii.

**FR-5.3 – Oznaczanie rzeczy jako spakowane**
System musi umożliwiać użytkownikowi oznaczenie poszczególnych elementów jako spakowane.

**FR-5.4 – Status pakowania**
System musi prezentować użytkownikowi informację o postępie pakowania wynikającą ze statusu poszczególnych elementów listy.

---

# Epic 6 – Korzystanie z aplikacji podczas podróży

### Wymagania biznesowe

**BR-6.1 – Dostęp do przygotowanego planu podczas podróży**
Aplikacja powinna umożliwiać użytkownikowi wykorzystanie wcześniej przygotowanego planu stylizacji podczas trwania podróży.

### Wymagania funkcjonalne

**FR-6.1 – Stylizacja na dany dzień**
System musi umożliwiać wyświetlenie stylizacji przypisanej do konkretnego dnia podróży.

**FR-6.2 – Nawigacja pomiędzy dniami**
System musi umożliwiać przełączanie się pomiędzy poszczególnymi dniami podróży.
