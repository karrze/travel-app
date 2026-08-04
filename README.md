# Travel App

Aplikacja podróżnicza zbudowana w React z biblioteką [Flowbite React](https://flowbite-react.com/).

## Wymagania

- Node.js 18+

## Uruchomienie

```bash
npm install
npm run dev
```

Aplikacja będzie dostępna pod adresem `http://localhost:5173`.

## Skrypty

| Komenda | Opis |
|---------|------|
| `npm run dev` | Uruchamia serwer deweloperski |
| `npm run build` | Buduje wersję produkcyjną |
| `npm run preview` | Podgląd wersji produkcyjnej |
| `npm run lint` | Sprawdza kod ESLintem |

## Struktura projektu

```
src/
├── components/       # Komponenty UI (Navbar, Footer, karty)
├── data/             # Statyczne dane (destynacje)
├── layouts/          # Layouty stron
├── pages/            # Strony aplikacji
├── routes/           # Konfiguracja React Router
├── App.tsx
└── main.tsx
```

## Stack technologiczny

- **React 19** + **TypeScript**
- **Vite** — bundler
- **Flowbite React** — komponenty UI
- **Tailwind CSS v4** — stylowanie
- **React Router** — routing

## Dokumentacja

- [Flowbite React](https://flowbite-react.com/)
- [React Router](https://reactrouter.com/)
- [Vite](https://vite.dev/)
