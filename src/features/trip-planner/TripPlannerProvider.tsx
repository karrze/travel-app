import { useCallback, useMemo, useState, type ReactNode } from "react";
import { getDeviceId } from "../../lib/deviceId";
import { supabase } from "../../lib/supabase";
import type { TripDraft } from "../../types/trip";
import { TRIP_STEPS, TripPlannerContext } from "./context";

function createEmptyDraft(): TripDraft {
  return {
    id: crypto.randomUUID(),
    destination: "",
    startDate: "",
    endDate: "",
    luggageType: null,
    activities: [],
    formality: "mixed",
    laundryAvailable: false,
    rewearTolerance: "medium",
    status: "draft",
  };
}

/** Mapowanie draftu (camelCase) na wiersz tabeli trips (snake_case). */
function rowFromDraft(draft: TripDraft) {
  return {
    id: draft.id,
    device_id: getDeviceId(),
    status: draft.status,
    destination: draft.destination.trim(),
    start_date: draft.startDate || null,
    end_date: draft.endDate || null,
    luggage_type: draft.luggageType,
    activities: draft.activities,
    formality: draft.formality,
    laundry_available: draft.laundryAvailable,
    rewear_tolerance: draft.rewearTolerance,
  };
}

export function TripPlannerProvider({ children }: { children: ReactNode }) {
  const [draft, setDraft] = useState<TripDraft>(createEmptyDraft);
  const [step, setStep] = useState(0);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [confirming, setConfirming] = useState(false);

  const updateDraft = useCallback((patch: Partial<TripDraft>) => {
    setDraft((prev) => ({ ...prev, ...patch }));
  }, []);

  const persist = useCallback(async (next: TripDraft): Promise<boolean> => {
    const { error } = await supabase.from("trips").upsert(rowFromDraft(next));
    if (error) {
      setSaveError(
        "Nie udało się zapisać podróży. Sprawdź połączenie i spróbuj ponownie.",
      );
      console.error("Błąd zapisu podróży:", error.message);
      return false;
    }
    setSaveError(null);
    return true;
  }, []);

  const goToStep = useCallback((next: number) => {
    setStep(Math.max(0, Math.min(next, TRIP_STEPS.length - 1)));
  }, []);

  const nextStep = useCallback(() => {
    // Zapis draftu w tle przy przejściu do kolejnego kroku.
    setDraft((current) => {
      void persist(current);
      return current;
    });
    setStep((s) => Math.min(s + 1, TRIP_STEPS.length - 1));
  }, [persist]);

  const prevStep = useCallback(() => {
    setStep((s) => Math.max(s - 1, 0));
  }, []);

  const confirmTrip = useCallback(async (): Promise<boolean> => {
    setConfirming(true);
    const confirmed: TripDraft = { ...draft, status: "confirmed" };
    const ok = await persist(confirmed);
    if (ok) setDraft(confirmed);
    setConfirming(false);
    return ok;
  }, [draft, persist]);

  const value = useMemo(
    () => ({
      draft,
      step,
      saveError,
      confirming,
      updateDraft,
      goToStep,
      nextStep,
      prevStep,
      confirmTrip,
    }),
    [
      draft,
      step,
      saveError,
      confirming,
      updateDraft,
      goToStep,
      nextStep,
      prevStep,
      confirmTrip,
    ],
  );

  return (
    <TripPlannerContext.Provider value={value}>
      {children}
    </TripPlannerContext.Provider>
  );
}
