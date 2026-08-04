import { Button } from "flowbite-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-500 px-4 py-20 text-white">
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          Odkryj świat z Travel App
        </h1>
        <p className="mb-8 text-lg text-blue-100 md:text-xl">
          Planuj wymarzone podróże, przeglądaj najlepsze oferty i wyrusz w
          niezapomnianą przygodę.
        </p>
        <Button size="xl" color="light" className="font-semibold">
          Zobacz oferty
        </Button>
      </div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&q=80')] bg-cover bg-center opacity-20" />
    </section>
  );
}
