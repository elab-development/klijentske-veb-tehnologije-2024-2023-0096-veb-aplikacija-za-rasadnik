"use server";

export async function fetchPlants() {
  const res = await fetch(
    "https://trefle.io/api/v1/plants?token=WcQRs3Y1izZuRsaqN-N5csH93lnIvwrX7E7l08VTV2Q",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      cache: "no-store", // to avoid caching
    },
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch plants: ${res.status}`);
  }

  const data = await res.json();
  return data.data; // return the actual array of plant objects
}