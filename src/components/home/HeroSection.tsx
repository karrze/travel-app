import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-wide text-primary-800">
          Packfit
        </p>
        <h1 className="mb-4 text-4xl text-gray-900 md:text-5xl">
          Pakuj się stylizacjami, nie pojedynczymi rzeczami
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          Powiedz nam, dokąd jedziesz i co zabierasz pod uwagę — Packfit dobierze
          outfity na każdy dzień i wygeneruje listę pakowania dopasowaną do
          Twojego bagażu.
        </p>
        <div className="flex justify-center gap-3">
          <Button size="lg" as={Link} to="/podroz/nowa">
            Zaplanuj podróż
          </Button>
          <Button size="lg" color="light" as={Link} to="/podroze">
            Moje podróże
          </Button>
        </div>
      </div>
    </section>
  );
}
