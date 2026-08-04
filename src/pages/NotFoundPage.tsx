import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-2 text-6xl font-bold text-gray-900">404</h1>
      <p className="mb-6 text-xl text-gray-600">
        Ups! Ta strona nie istnieje.
      </p>
      <Button as={Link} to="/" color="blue">
        Wróć na stronę główną
      </Button>
    </section>
  );
}
