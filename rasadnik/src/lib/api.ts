"use server";

let cachedPlants: any[] | null = null;

const sunExposures = ['sunce', 'polusenka', 'senka'] as const;
const maintenances = ['nisko', 'umereno', 'zahtevno'] as const;

function getRandom<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function determinePlantType(category: string): 'ukrasne' | 'zacinske' | 'vocne' {
  const lower = category.toLowerCase();

  const vocneFamilies = ['rose family', 'olive family'];
  const ukrasneFamilies = ['fagaceae', 'ranunculaceae', 'ericaceae'];

  if (vocneFamilies.some(f => lower.includes(f))) return 'vocne';
  if (ukrasneFamilies.some(f => lower.includes(f))) return 'ukrasne';

  return 'zacinske';
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

  cachedPlants = json.data.slice(0, 20).map((p, i) => {
    const category = p.family_common_name || p.family || 'N/A';
    const type = determinePlantType(category);

    return {
      ...p,
      price: 500 + i * 50,
      category,
      type,
      sun: getRandom(sunExposures),
      maintenance: getRandom(maintenances),
      description: p.bibliography || 'Opis nije dostupan.',
    };
  });

  return cachedPlants;
}

export async function fetchPlantById(id: string) {
  const plants = await fetchPlants();
  return plants.find((p) => String(p.id) === id) ?? null;
}
