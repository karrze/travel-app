import { HeroSection } from "../components/home/HeroSection";

const steps = [
  {
    title: "Zaplanuj podróż",
    description:
      "Wskaż miejsce, termin, rodzaj bagażu i warunki wyjazdu — powstanie brief podróży.",
    available: true,
  },
  {
    title: "Dodaj ubrania",
    description:
      "Sfotografuj rzeczy, które rozważasz na wyjazd. Packfit rozpozna je i zbuduje kapsułę.",
    available: false,
  },
  {
    title: "Otrzymaj stylizacje",
    description:
      "Silnik dobierze minimalną liczbę ubrań i gotowe outfity na każdy dzień podróży.",
    available: false,
  },
  {
    title: "Spakuj się z listą",
    description:
      "Lista pakowania powstaje z zaakceptowanych stylizacji — odhaczaj i ruszaj w drogę.",
    available: false,
  },
];

export function HomePage() {
  return (
    <>
      <HeroSection />
      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl text-gray-900">Jak działa Packfit</h2>
          <p className="text-gray-600">
            Cztery kroki od planu podróży do spakowanej walizki.
          </p>
        </div>
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-card border border-gray-200 bg-white p-5 shadow-xs"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-sm font-medium text-primary-900">
                  {index + 1}
                </span>
                {!step.available && (
                  <span className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    Wkrótce
                  </span>
                )}
              </div>
              <h3 className="mb-1 font-sans text-base font-semibold tracking-normal text-gray-900">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
