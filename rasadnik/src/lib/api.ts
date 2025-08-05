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

  const json = await res.json();
  // mapiramo svaku biljku da dobiješ nasumičnu cenu:
  return json.data.map((p: any) => ({
    ...p,
    price: Math.floor(Math.random() * 900 + 300),
  }));
}
