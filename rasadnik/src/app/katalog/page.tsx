// File: src/app/katalog/page.tsx
import { fetchPlants } from "@/lib/api";
import ClientSideCatalog from "./ClientSideCatalog";
import { cache } from 'react';

// Cache the result of fetchPlants() during build/runtime
const getCachedPlants = cache(() => fetchPlants());

export default async function KatalogPage() {
  const plants = await getCachedPlants();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-10">
      <ClientSideCatalog plants={plants} />
    </div>
  );
}
