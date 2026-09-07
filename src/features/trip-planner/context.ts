import { createContext, useContext } from "react";
import type { TripDraft } from "../../types/trip";
import { tripDurationDays } from "../../types/trip";

export const TRIP_STEPS = [
  "Miejsce",
  "Termin",
  "Bagaż",
  "Warunki",
  "Brief",
] as const;

export interface TripPlannerContextValue {
  draft: TripDraft;
  step: number;
  saveError: string | null;
  confirming: boolean;
  updateDraft: (patch: Partial<TripDraft>) => void;
  goToStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  confirmTrip: () => Promise<boolean>;
}

export const TripPlannerContext =
  createContext<TripPlannerContextValue | null>(null);

export function useTripPlanner(): TripPlannerContextValue {
  const ctx = useContext(TripPlannerContext);
  if (!ctx) {
    throw new Error(
      "useTripPlanner musi być użyty wewnątrz TripPlannerProvider",
    );
  }
  return ctx;
}

/** Walidacja per krok — bez spełnienia nie można przejść dalej. */
export function isStepValid(step: number, draft: TripDraft): boolean {
  switch (step) {
    case 0:
      return draft.destination.trim().length >= 2;
    case 1:
      return tripDurationDays(draft.startDate, draft.endDate) !== null;
    case 2:
      return draft.luggageType !== null;
    case 3:
      return draft.activities.length > 0;
    default:
      return true;
  }
}
