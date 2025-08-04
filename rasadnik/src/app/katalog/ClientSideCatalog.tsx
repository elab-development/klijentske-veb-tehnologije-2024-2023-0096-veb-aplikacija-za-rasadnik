'use client';

import { useState } from 'react';
import PlantFilter, { Filters } from '@/components/shared/PlantFilter';
import PlantList from '@/components/shared/PlantList';

interface Plant {
  id: number;
  common_name: string | null;
  scientific_name: string;
  image_url?: string | null;
  growth?: { light?: string; maintenance_level?: string };
  price: string;
}

function inferType(p: Plant): 'ukrasne' | 'zacinske' | 'vocne' | 'sve' {
  const name = (p.common_name || '').toLowerCase();
  if (name.includes('ruža') || name.includes('cvijet') || name.includes('rose') || name.includes('flower')) return 'ukrasne';
  if (name.includes('bosiljak') || name.includes('peršun') || name.includes('basil') || name.includes('parsley')) return 'zacinske';
  if (name.includes('jabuka') || name.includes('pear') || name.includes('berry') || name.includes('voć')) return 'vocne';
  return 'sve';
}

function inferSun(p: Plant): 'sunce' | 'polusenka' | 'senka' | 'sve' {
  const light = (p.growth?.light || '').toLowerCase();
  if (light.includes('full') || light.includes('sun')) return 'sunce';
  if (light.includes('partial') || light.includes('polu')) return 'polusenka';
  if (light.includes('shade') || light.includes('sen')) return 'senka';
  return 'sve';
}

function inferMaintenance(p: Plant): 'nisko' | 'umereno' | 'zahtevno' | 'sve' {
  const m = (p.growth?.maintenance_level || '').toLowerCase();
  if (m.includes('low') || m.includes('nisko')) return 'nisko';
  if (m.includes('medium') || m.includes('umereno')) return 'umereno';
  if (m.includes('high') || m.includes('zahtevno') || m.includes('demanding')) return 'zahtevno';
  return 'sve';
}

export default function ClientSideCatalog({ plants }: { plants: Plant[] }) {
  const [filters, setFilters] = useState<Filters>({ type: 'sve', sun: 'sve', maintenance: 'sve' });

  const filtered = plants
    .filter(p => filters.type === 'sve' || inferType(p) === filters.type)
    .filter(p => filters.sun === 'sve'    || inferSun(p) === filters.sun)
    .filter(p => filters.maintenance === 'sve' || inferMaintenance(p) === filters.maintenance);

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Plant List</h1>
      <PlantFilter onChange={setFilters} />
      <PlantList plants={filtered} />
    </main>
  );
}