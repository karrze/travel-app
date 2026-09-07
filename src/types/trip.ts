/**
 * Typy domenowe dla epica "Planowanie podróży".
 * Wartości enumów są zapisywane w Supabase (tabela trips) jako text.
 */

export type TripStatus = "draft" | "confirmed";

export type LuggageType =
  | "backpack"
  | "carry_on"
  | "carry_on_backpack"
  | "checked";

export type Formality = "casual" | "mixed" | "elegant";

export type RewearTolerance = "low" | "medium" | "high";

export type Activity =
  | "beach"
  | "sightseeing"
  | "trekking"
  | "dining"
  | "sport"
  | "work";

export interface TripDraft {
  id: string;
  destination: string;
  startDate: string; // ISO yyyy-mm-dd
  endDate: string; // ISO yyyy-mm-dd
  luggageType: LuggageType | null;
  activities: Activity[];
  formality: Formality;
  laundryAvailable: boolean;
  rewearTolerance: RewearTolerance;
  status: TripStatus;
}

/** Wiersz tabeli trips w Supabase (snake_case). */
export interface TripRow {
  id: string;
  device_id: string;
  status: TripStatus;
  destination: string;
  start_date: string | null;
  end_date: string | null;
  luggage_type: LuggageType | null;
  activities: Activity[];
  formality: Formality;
  laundry_available: boolean;
  rewear_tolerance: RewearTolerance;
  created_at: string;
}

// ===== Opcje wyboru (etykiety UI) =====

export const LUGGAGE_OPTIONS: {
  value: LuggageType;
  label: string;
  description: string;
}[] = [
  {
    value: "backpack",
    label: "Plecak",
    description: "Tylko to, co najpotrzebniejsze — maksymalna mobilność.",
  },
  {
    value: "carry_on",
    label: "Bagaż podręczny",
    description: "Walizka kabinowa zgodna z limitami tanich linii.",
  },
  {
    value: "carry_on_backpack",
    label: "Kabinówka + plecak",
    description: "Walizka kabinowa i mały plecak jako bagaż dodatkowy.",
  },
  {
    value: "checked",
    label: "Walizka rejestrowana",
    description: "Duża walizka nadawana do luku — najwięcej miejsca.",
  },
];

export const ACTIVITY_OPTIONS: { value: Activity; label: string }[] = [
  { value: "beach", label: "Plaża" },
  { value: "sightseeing", label: "Zwiedzanie" },
  { value: "trekking", label: "Trekking" },
  { value: "dining", label: "Restauracje i wyjścia" },
  { value: "sport", label: "Sport" },
  { value: "work", label: "Praca" },
];

export const FORMALITY_OPTIONS: {
  value: Formality;
  label: string;
  description: string;
}[] = [
  {
    value: "casual",
    label: "Luźno",
    description: "Wygodnie i na sportowo, bez eleganckich wyjść.",
  },
  {
    value: "mixed",
    label: "Mieszanie",
    description: "Na co dzień luźno, ale przyda się coś eleganckiego.",
  },
  {
    value: "elegant",
    label: "Elegancko",
    description: "Przewaga formalnych okazji i dress code'u.",
  },
];

export const REWEAR_OPTIONS: {
  value: RewearTolerance;
  label: string;
  description: string;
}[] = [
  {
    value: "low",
    label: "Niska",
    description: "Wolę świeży zestaw każdego dnia.",
  },
  {
    value: "medium",
    label: "Średnia",
    description: "Mogę powtórzyć niektóre rzeczy raz lub dwa.",
  },
  {
    value: "high",
    label: "Wysoka",
    description: "Chętnie noszę te same rzeczy wielokrotnie.",
  },
];

export function luggageLabel(value: LuggageType | null): string {
  return LUGGAGE_OPTIONS.find((o) => o.value === value)?.label ?? "—";
}

export function formalityLabel(value: Formality): string {
  return FORMALITY_OPTIONS.find((o) => o.value === value)?.label ?? "—";
}

export function rewearLabel(value: RewearTolerance): string {
  return REWEAR_OPTIONS.find((o) => o.value === value)?.label ?? "—";
}

export function activityLabels(values: Activity[]): string[] {
  return ACTIVITY_OPTIONS.filter((o) => values.includes(o.value)).map(
    (o) => o.label,
  );
}

/**
 * Długość pobytu w dniach kalendarzowych, włącznie z dniem przyjazdu
 * i wyjazdu (decyzja D-2). Zwraca null, gdy daty są niekompletne
 * lub niepoprawne (koniec przed startem).
 */
export function tripDurationDays(
  startDate: string,
  endDate: string,
): number | null {
  if (!startDate || !endDate) return null;
  const start = new Date(startDate);
  const end = new Date(endDate);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return null;
  const diff = Math.round(
    (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24),
  );
  if (diff < 0) return null;
  return diff + 1;
}
