import { Badge, Button, Card } from "flowbite-react";
import type { Destination } from "../../data/destinations";

interface DestinationCardProps {
  destination: Destination;
}

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Card className="max-w-sm overflow-hidden">
      <div className="relative -mx-6 -mt-6 mb-4">
        <img
          className="h-48 w-full object-cover"
          src={destination.imageUrl}
          alt={destination.name}
        />
        <Badge color="info" className="absolute right-3 top-3">
          ★ {destination.rating}
        </Badge>
      </div>
      <div className="flex flex-col gap-2">
        <h5 className="text-xl font-bold tracking-tight text-gray-900">
          {destination.name}
        </h5>
        <p className="text-sm text-gray-500">{destination.country}</p>
        <p className="text-sm text-gray-600">{destination.description}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-lg font-bold text-blue-600">
            od {destination.price.toLocaleString("pl-PL")} zł
          </span>
          <Button size="sm">Szczegóły</Button>
        </div>
      </div>
    </Card>
  );
}
