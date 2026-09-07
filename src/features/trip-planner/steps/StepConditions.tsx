import { Label, ToggleSwitch } from "flowbite-react";
import {
  ACTIVITY_OPTIONS,
  FORMALITY_OPTIONS,
  REWEAR_OPTIONS,
  type Activity,
} from "../../../types/trip";
import { useTripPlanner } from "../context";

export function StepConditions() {
  const { draft, updateDraft } = useTripPlanner();

  const toggleActivity = (activity: Activity) => {
    const next = draft.activities.includes(activity)
      ? draft.activities.filter((a) => a !== activity)
      : [...draft.activities, activity];
    updateDraft({ activities: next });
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="mb-1 text-2xl text-gray-900">Warunki wyjazdu</h2>
        <p className="text-sm text-gray-600">
          Aktywności, formalność, pranie i tolerancja na powtarzanie ubrań —
          dzięki temu plan będzie praktyczny.
        </p>
      </div>

      <fieldset>
        <legend className="mb-2 text-sm font-medium text-gray-900">
          Planowane aktywności <span className="text-gray-500">(min. 1)</span>
        </legend>
        <div className="flex flex-wrap gap-2">
          {ACTIVITY_OPTIONS.map((option) => {
            const selected = draft.activities.includes(option.value);
            return (
              <button
                key={option.value}
                type="button"
                aria-pressed={selected}
                onClick={() => toggleActivity(option.value)}
                className={`rounded-base border px-3.5 py-2 text-sm font-medium transition-colors ${
                  selected
                    ? "border-primary-900 bg-primary-900 text-white"
                    : "border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-2 text-sm font-medium text-gray-900">
          Poziom formalności
        </legend>
        <div className="grid gap-3 sm:grid-cols-3">
          {FORMALITY_OPTIONS.map((option) => {
            const selected = draft.formality === option.value;
            return (
              <button
                key={option.value}
                type="button"
                aria-pressed={selected}
                onClick={() => updateDraft({ formality: option.value })}
                className={`rounded-card border p-3 text-left transition-colors ${
                  selected
                    ? "border-primary-900 bg-primary-50 ring-1 ring-primary-900"
                    : "border-gray-200 bg-white hover:bg-gray-100"
                }`}
              >
                <span className="block text-sm font-medium text-gray-900">
                  {option.label}
                </span>
                <span className="mt-0.5 block text-xs text-gray-600">
                  {option.description}
                </span>
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="flex items-center justify-between rounded-card border border-gray-200 bg-white p-4">
        <div>
          <Label htmlFor="laundry" className="block">
            Dostęp do prania na miejscu
          </Label>
          <p className="text-sm text-gray-500">
            Możliwość prania pozwala zabrać mniej rzeczy.
          </p>
        </div>
        <ToggleSwitch
          id="laundry"
          checked={draft.laundryAvailable}
          onChange={(checked) => updateDraft({ laundryAvailable: checked })}
        />
      </div>

      <fieldset>
        <legend className="mb-2 text-sm font-medium text-gray-900">
          Tolerancja na powtarzanie ubrań
        </legend>
        <div className="grid gap-3 sm:grid-cols-3">
          {REWEAR_OPTIONS.map((option) => {
            const selected = draft.rewearTolerance === option.value;
            return (
              <button
                key={option.value}
                type="button"
                aria-pressed={selected}
                onClick={() => updateDraft({ rewearTolerance: option.value })}
                className={`rounded-card border p-3 text-left transition-colors ${
                  selected
                    ? "border-primary-900 bg-primary-50 ring-1 ring-primary-900"
                    : "border-gray-200 bg-white hover:bg-gray-100"
                }`}
              >
                <span className="block text-sm font-medium text-gray-900">
                  {option.label}
                </span>
                <span className="mt-0.5 block text-xs text-gray-600">
                  {option.description}
                </span>
              </button>
            );
          })}
        </div>
      </fieldset>
    </div>
  );
}
