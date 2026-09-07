import { LUGGAGE_OPTIONS } from "../../../types/trip";
import { useTripPlanner } from "../context";

export function StepLuggage() {
  const { draft, updateDraft } = useTripPlanner();

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="mb-1 text-2xl text-gray-900">Jaki zabierasz bagaż?</h2>
        <p className="text-sm text-gray-600">
          Rodzaj bagażu to realne ograniczenie pakowania — dopasujemy do niego
          liczbę rzeczy.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {LUGGAGE_OPTIONS.map((option) => {
          const selected = draft.luggageType === option.value;
          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={selected}
              onClick={() => updateDraft({ luggageType: option.value })}
              className={`rounded-card border p-4 text-left transition-colors ${
                selected
                  ? "border-primary-900 bg-primary-50 ring-1 ring-primary-900"
                  : "border-gray-200 bg-white hover:bg-gray-100"
              }`}
            >
              <span className="block font-medium text-gray-900">
                {option.label}
              </span>
              <span className="mt-1 block text-sm text-gray-600">
                {option.description}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
