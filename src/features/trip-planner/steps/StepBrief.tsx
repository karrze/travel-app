import { Card } from "flowbite-react";
import {
  activityLabels,
  formalityLabel,
  luggageLabel,
  rewearLabel,
  tripDurationDays,
} from "../../../types/trip";
import { useTripPlanner } from "../context";

function formatDate(iso: string): string {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

interface BriefRowProps {
  label: string;
  value: string;
  stepIndex: number;
}

export function StepBrief() {
  const { draft, goToStep } = useTripPlanner();

  const duration = tripDurationDays(draft.startDate, draft.endDate);

  const rows: BriefRowProps[] = [
    { label: "Miejsce", value: draft.destination || "—", stepIndex: 0 },
    {
      label: "Termin",
      value: `${formatDate(draft.startDate)} – ${formatDate(draft.endDate)}`,
      stepIndex: 1,
    },
    {
      label: "Długość pobytu",
      value:
        duration === null ? "—" : `${duration} ${duration === 1 ? "dzień" : "dni"}`,
      stepIndex: 1,
    },
    { label: "Bagaż", value: luggageLabel(draft.luggageType), stepIndex: 2 },
    {
      label: "Aktywności",
      value: activityLabels(draft.activities).join(", ") || "—",
      stepIndex: 3,
    },
    {
      label: "Formalność",
      value: formalityLabel(draft.formality),
      stepIndex: 3,
    },
    {
      label: "Pranie na miejscu",
      value: draft.laundryAvailable ? "Tak" : "Nie",
      stepIndex: 3,
    },
    {
      label: "Powtarzanie ubrań",
      value: rewearLabel(draft.rewearTolerance),
      stepIndex: 3,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="mb-1 text-2xl text-gray-900">Brief podróży</h2>
        <p className="text-sm text-gray-600">
          Sprawdź założenia przed doborem ubrań. Możesz jeszcze wrócić i
          poprawić każdy krok.
        </p>
      </div>
      <Card>
        <dl className="divide-y divide-gray-200">
          {rows.map((row) => (
            <div
              key={row.label}
              className="flex items-center justify-between gap-4 py-2.5 first:pt-0 last:pb-0"
            >
              <div className="min-w-0">
                <dt className="text-xs uppercase tracking-wide text-gray-500">
                  {row.label}
                </dt>
                <dd className="truncate text-sm font-medium text-gray-900">
                  {row.value}
                </dd>
              </div>
              <button
                type="button"
                onClick={() => goToStep(row.stepIndex)}
                className="shrink-0 text-sm font-medium text-primary-800 hover:underline"
              >
                Edytuj
              </button>
            </div>
          ))}
        </dl>
      </Card>
    </div>
  );
}
