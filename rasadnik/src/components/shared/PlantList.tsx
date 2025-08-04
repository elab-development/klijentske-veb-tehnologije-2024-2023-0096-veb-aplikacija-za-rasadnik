"use client";

import Image from "next/image";

interface Plant {
  id: number;
  common_name: string | null;
  scientific_name: string;
  image_url?: string | null;
}

export default function PlantList({ plants }: { plants: Plant[] }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {plants.map((plant) => (
        <li key={plant.id} className="border p-4 rounded shadow">
          <p className="font-semibold">
            {plant.common_name || "Unnamed Plant"}
          </p>
          <p className="text-sm text-gray-500 italic">
            {plant.scientific_name}
          </p>
          {plant.image_url && (
            <Image
              src={plant.image_url}
              alt={plant.common_name || "Plant"}
              width={300}
              height={200}
              className="mt-2 rounded object-cover"
            />
          )}
        </li>
      ))}
    </ul>
  );
}