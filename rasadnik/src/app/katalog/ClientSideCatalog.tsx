'use client';

import { useMemo, useState } from 'react';
import PlantFilter, { Filters } from '@/components/shared/PlantFilter';
import PlantList from '@/components/shared/PlantList';

interface Plant {
  id: number;
  common_name: string | null;
  scientific_name: string;
  image_url?: string | null;
  price: number | string;
  type?: string;
  sun?: string;
  maintenance?: string;
  category?: string;
  description?: string;
}

export default function ClientSideCatalog({ plants }: { plants: Plant[] }) {
  const [filters, setFilters] = useState<Filters>({
    type: 'sve',
    sun: 'sve',
    maintenance: 'sve',
  });

  const filtered = useMemo(() => {
    return plants
      .filter((p) => filters.type === 'sve' || p.type === filters.type)
      .filter((p) => filters.sun === 'sve' || p.sun === filters.sun)
      .filter((p) => filters.maintenance === 'sve' || p.maintenance === filters.maintenance);
  }, [plants, filters]);

  return (
    <main className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Lista biljaka</h1>
      <PlantFilter onChange={setFilters} />
      {filtered.length === 0 ? (
        <p className="text-gray-500 text-center mt-10">Nema biljaka koje odgovaraju filterima.</p>
      ) : (
        <PlantList plants={filtered} />
      )}
    </main>
  );
}
