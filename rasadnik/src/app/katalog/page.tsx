import { fetchPlants } from "@/lib/api";
import PlantList from "@/components/shared/PlantList";

export default async function Katalog() {
  const plants = await fetchPlants();

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Plant List</h1>
      <PlantList plants={plants} />
    </main>
  );
}