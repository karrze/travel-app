import { Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { searchCities } from "../../../data/cities";
import { useTripPlanner } from "../context";

export function StepDestination() {
  const { draft, updateDraft } = useTripPlanner();
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = showSuggestions ? searchCities(draft.destination) : [];

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="mb-1 text-2xl text-gray-900">Dokąd jedziesz?</h2>
        <p className="text-sm text-gray-600">
          Wskaż miejsce podróży, aby rekomendacje pasowały do destynacji i
          pogody.
        </p>
      </div>
      <div className="relative">
        <div className="mb-2 block">
          <Label htmlFor="destination">Miejsce podróży</Label>
        </div>
        <TextInput
          id="destination"
          type="text"
          placeholder="np. Lizbona"
          value={draft.destination}
          autoComplete="off"
          onChange={(e) => {
            updateDraft({ destination: e.target.value });
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => {
            // Opóźnienie, aby kliknięcie w podpowiedź zdążyło się wykonać.
            setTimeout(() => setShowSuggestions(false), 150);
          }}
        />
        {suggestions.length > 0 && (
          <ul className="absolute z-10 mt-1 w-full overflow-hidden rounded-base border border-gray-200 bg-white shadow-xs">
            {suggestions.map((city) => (
              <li key={`${city.name}-${city.country}`}>
                <button
                  type="button"
                  className="flex w-full items-baseline gap-2 px-3.5 py-2.5 text-left text-sm hover:bg-gray-100"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => {
                    updateDraft({
                      destination: `${city.name}, ${city.country}`,
                    });
                    setShowSuggestions(false);
                  }}
                >
                  <span className="font-medium text-gray-900">{city.name}</span>
                  <span className="text-gray-500">{city.country}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
        <p className="mt-2 text-sm text-gray-500">
          Wybierz z podpowiedzi lub wpisz własne miejsce.
        </p>
      </div>
    </div>
  );
}
