import { DestinationCard } from "../components/home/DestinationCard";
import { HeroSection } from "../components/home/HeroSection";
import { destinations } from "../data/destinations";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900">
            Popularne destynacje
          </h2>
          <p className="text-gray-600">
            Wybierz spośród naszych najlepiej ocenianych kierunków podróży.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </section>
    </>
  );
}
