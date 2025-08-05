// File: src/lib/api.ts
"use server";


export async function fetchPlants() {
  const res = await fetch(
    "https://trefle.io/api/v1/plants?token=WcQRs3Y1izZuRsaqN-N5csH93lnIvwrX7E7l08VTV2Q",
    {
      method: "GET",
      headers: { Accept: "application/json" },
      cache: "no-store",
    }
  );
  

  if (!res.ok) {
    throw new Error(`Failed to fetch plants: ${res.status}`);
  }

  // Explicitly type json.data as any[] so `p` isn’t implicitly any
  const json: { data: any[] } = await res.json();

  return json.data.map((p: any) => ({
    ...p,
    price: Math.floor(Math.random() * 900 + 300),
  }));
}
export async function fetchPlantById(id: string) {
  const plants = await fetchPlants();                      // koristi tvoj working fetchPlants
  return plants.find((p) => String(p.id) === id) ?? null; // pronađi biljku po id-u ili vrati null
}