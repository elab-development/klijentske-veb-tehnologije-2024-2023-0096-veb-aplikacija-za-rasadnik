// File: src/lib/api.ts
"use server";

let cachedPlants: any[] | null = null;

const types = ['ukrasne', 'zacinske', 'vocne'] as const;
const sunExposures = ['sunce', 'polusenka', 'senka'] as const;
const maintenances = ['nisko', 'umereno', 'zahtevno'] as const;

function getRandom<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export async function fetchPlants() {
  if (cachedPlants) return cachedPlants;

  const res = await fetch("https://trefle.io/api/v1/plants?token=WcQRs3Y1izZuRsaqN-N5csH93lnIvwrX7E7l08VTV2Q", {
    method: "GET",
    headers: { Accept: "application/json" },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch plants: ${res.status}`);
  }

  const json: { data: any[] } = await res.json();

  cachedPlants = json.data.slice(0, 20).map((p, i) => ({
    ...p,
    price: 500 + i * 50,
    type: getRandom(types),
    sun: getRandom(sunExposures),
    maintenance: getRandom(maintenances),
    category: p.family_common_name || p.family || 'N/A',
    description: `Opis za biljku ${p.common_name || 'bez imena'}...`,
  }));

  return cachedPlants;
}

export async function fetchPlantById(id: string) {
  const plants = await fetchPlants();
  return plants.find((p) => String(p.id) === id) ?? null;
}