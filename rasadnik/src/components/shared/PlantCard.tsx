// components/PlantCard.tsx

import Image from "next/image";

type Plant = {
  id: number;
  common_name: string;
  family_common_name: string;
  image_url: string;
};

export default function PlantCard({ plant }: { plant: Plant }) {
  const cena = Math.floor(Math.random() * 1000) + 300;

  return (
    <div className="bg-white border border-muted rounded-lg shadow-md p-4">
      <Image
        src={plant.image_url || "/assets/placeholder.png"}
        alt={plant.common_name || "Nepoznato ime"}
        width={200}
        height={150}
        className="object-cover w-full h-36 rounded-md"
      />
      <h2 className="text-lg font-semibold mt-2 text-primary">
        {plant.common_name || "Nepoznato ime"}
      </h2>
      <p className="text-sm text-muted-foreground">
        Kategorija: {plant.family_common_name || "N/A"}
      </p>
      <p className="text-green-600 font-bold mt-1">{cena} RSD</p>
    </div>
  );
}
