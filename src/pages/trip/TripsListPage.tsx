import { Badge, Button, Card, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDeviceId } from "../../lib/deviceId";
import { supabase } from "../../lib/supabase";
import {
  activityLabels,
  luggageLabel,
  tripDurationDays,
  type TripRow,
} from "../../types/trip";

function formatDate(iso: string | null): string {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function TripsListPage() {
  const [trips, setTrips] = useState<TripRow[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    supabase
      .from("trips")
      .select("*")
      .eq("device_id", getDeviceId())
      .order("created_at", { ascending: false })
      .then(({ data, error: queryError }) => {
        if (cancelled) return;
        if (queryError) {
          setError("Nie udało się pobrać podróży. Spróbuj ponownie później.");
          console.error("Błąd pobierania podróży:", queryError.message);
        } else {
          setTrips((data ?? []) as TripRow[]);
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl text-gray-900">Moje podróże</h1>
        <Button as={Link} to="/podroz/nowa">
          Zaplanuj podróż
        </Button>
      </div>

      {error && <p className="text-primary-800">{error}</p>}

      {!error && trips === null && (
        <div className="flex justify-center py-16">
          <Spinner size="lg" />
        </div>
      )}

      {trips !== null && trips.length === 0 && (
        <Card>
          <p className="text-center text-gray-600">
            Nie masz jeszcze żadnej podróży. Zaplanuj pierwszą, aby Packfit
            dobrał dla Ciebie stylizacje i listę pakowania.
          </p>
        </Card>
      )}

      <div className="flex flex-col gap-4">
        {trips?.map((trip) => {
          const duration = tripDurationDays(
            trip.start_date ?? "",
            trip.end_date ?? "",
          );
          return (
            <Card key={trip.id}>
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="mb-1 flex items-center gap-2">
                    <h2 className="truncate text-xl text-gray-900">
                      {trip.destination || "Bez miejsca"}
                    </h2>
                    <Badge size="sm" color={trip.status === "confirmed" ? "default" : "gray"}>
                      {trip.status === "confirmed" ? "Zatwierdzona" : "Szkic"}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">
                    {formatDate(trip.start_date)} – {formatDate(trip.end_date)}
                    {duration !== null &&
                      ` · ${duration} ${duration === 1 ? "dzień" : "dni"}`}
                    {trip.luggage_type &&
                      ` · ${luggageLabel(trip.luggage_type)}`}
                  </p>
                  {trip.activities.length > 0 && (
                    <p className="mt-1 text-sm text-gray-500">
                      {activityLabels(trip.activities).join(", ")}
                    </p>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
