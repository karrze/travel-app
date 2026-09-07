import { Alert, Button } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  TRIP_STEPS,
  isStepValid,
  useTripPlanner,
} from "../../features/trip-planner/context";
import { TripPlannerProvider } from "../../features/trip-planner/TripPlannerProvider";
import { StepBrief } from "../../features/trip-planner/steps/StepBrief";
import { StepConditions } from "../../features/trip-planner/steps/StepConditions";
import { StepDates } from "../../features/trip-planner/steps/StepDates";
import { StepDestination } from "../../features/trip-planner/steps/StepDestination";
import { StepLuggage } from "../../features/trip-planner/steps/StepLuggage";

function Stepper() {
  const { step, goToStep, draft } = useTripPlanner();

  return (
    <ol className="mb-8 flex items-center gap-2 sm:gap-3">
      {TRIP_STEPS.map((label, index) => {
        const isCurrent = index === step;
        const isDone = index < step;
        // Można wrócić do wcześniejszych kroków; do przodu tylko gdy poprzednie są poprawne.
        const canJump =
          index < step ||
          (index > step &&
            Array.from({ length: index }, (_, i) => i).every((i) =>
              isStepValid(i, draft),
            ));
        return (
          <li key={label} className="flex flex-1 flex-col items-center gap-1.5">
            <button
              type="button"
              disabled={!canJump && !isCurrent}
              onClick={() => goToStep(index)}
              aria-current={isCurrent ? "step" : undefined}
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                isCurrent
                  ? "bg-primary-900 text-white"
                  : isDone
                    ? "bg-primary-100 text-primary-900"
                    : "bg-gray-200 text-gray-500"
              } ${canJump ? "cursor-pointer hover:ring-2 hover:ring-primary-300" : ""}`}
            >
              {index + 1}
            </button>
            <span
              className={`hidden text-xs sm:block ${
                isCurrent ? "font-medium text-gray-900" : "text-gray-500"
              }`}
            >
              {label}
            </span>
          </li>
        );
      })}
    </ol>
  );
}

function TripConfirmation() {
  const { draft } = useTripPlanner();

  return (
    <div className="mx-auto max-w-xl px-4 py-16 text-center">
      <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary-100">
        <svg
          className="h-7 w-7 text-primary-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h1 className="mb-2 text-3xl text-gray-900">Brief zatwierdzony!</h1>
      <p className="mb-8 text-gray-600">
        Plan podróży do <strong>{draft.destination}</strong> został zapisany.
        Następny krok to dodanie ubrań rozważanych na wyjazd — ta funkcja
        pojawi się wkrótce.
      </p>
      <div className="flex justify-center gap-3">
        <Button as={Link} to="/podroze">
          Zobacz moje podróże
        </Button>
        <Button color="light" as={Link} to="/">
          Wróć na stronę główną
        </Button>
      </div>
    </div>
  );
}

function TripPlannerWizard() {
  const { draft, step, saveError, confirming, nextStep, prevStep, confirmTrip } =
    useTripPlanner();

  if (draft.status === "confirmed") {
    return <TripConfirmation />;
  }

  const isLastStep = step === TRIP_STEPS.length - 1;
  const canContinue = isStepValid(step, draft);

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="mb-8 text-center text-3xl text-gray-900">
        Zaplanuj podróż
      </h1>
      <Stepper />
      {saveError && (
        <Alert color="failure" className="mb-4">
          {saveError}
        </Alert>
      )}
      <div className="rounded-card border border-gray-200 bg-white p-6 shadow-xs">
        {step === 0 && <StepDestination />}
        {step === 1 && <StepDates />}
        {step === 2 && <StepLuggage />}
        {step === 3 && <StepConditions />}
        {step === 4 && <StepBrief />}
      </div>
      <div className="mt-6 flex items-center justify-between">
        <Button color="ghost" onClick={prevStep} disabled={step === 0}>
          Wstecz
        </Button>
        {isLastStep ? (
          <Button
            onClick={() => void confirmTrip()}
            disabled={confirming}
          >
            {confirming ? "Zapisywanie…" : "Zatwierdź brief"}
          </Button>
        ) : (
          <Button onClick={nextStep} disabled={!canContinue}>
            Dalej
          </Button>
        )}
      </div>
    </div>
  );
}

export function TripPlannerPage() {
  return (
    <TripPlannerProvider>
      <TripPlannerWizard />
    </TripPlannerProvider>
  );
}
