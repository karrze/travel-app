import { Badge, Label, TextInput } from "flowbite-react";
import { tripDurationDays } from "../../../types/trip";
import { useTripPlanner } from "../context";

export function StepDates() {
  const { draft, updateDraft } = useTripPlanner();

  const duration = tripDurationDays(draft.startDate, draft.endDate);
  const datesInWrongOrder =
    draft.startDate !== "" &&
    draft.endDate !== "" &&
    new Date(draft.endDate) < new Date(draft.startDate);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="mb-1 text-2xl text-gray-900">Kiedy wyjeżdżasz?</h2>
        <p className="text-sm text-gray-600">
          Na podstawie dat zaplanujemy stylizacje na każdy dzień i policzymy
          liczbę potrzebnych rzeczy.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="start-date">Data wyjazdu</Label>
          </div>
          <TextInput
            id="start-date"
            type="date"
            value={draft.startDate}
            onChange={(e) => updateDraft({ startDate: e.target.value })}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="end-date">Data powrotu</Label>
          </div>
          <TextInput
            id="end-date"
            type="date"
            value={draft.endDate}
            min={draft.startDate || undefined}
            onChange={(e) => updateDraft({ endDate: e.target.value })}
          />
        </div>
      </div>
      {datesInWrongOrder && (
        <p className="text-sm font-medium text-primary-800">
          Data powrotu nie może być wcześniejsza niż data wyjazdu.
        </p>
      )}
      {duration !== null && (
        <div className="flex items-center gap-2">
          <Badge size="sm">
            Długość pobytu: {duration}{" "}
            {duration === 1 ? "dzień" : "dni"}
          </Badge>
          <span className="text-sm text-gray-500">
            (liczymy dni kalendarzowe łącznie z dniem wyjazdu i powrotu)
          </span>
        </div>
      )}
    </div>
  );
}
