// File: src/app/katalog/page.tsx
import { fetchPlants } from "@/lib/api";
import ClientSideCatalog from "./ClientSideCatalog";

export default async function KatalogPage() {
  const plants = await fetchPlants();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-10">
      <ClientSideCatalog plants={plants} />
    </div>
  );
}
