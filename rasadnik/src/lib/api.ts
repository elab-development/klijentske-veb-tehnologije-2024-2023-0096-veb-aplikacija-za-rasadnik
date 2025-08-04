// lib/api.ts
export async function getPlants() {
  const API_KEY = "WcQRs3Y1izZuRsaqN-N5csH93lnIvwrX7E7l08VTV2Q";
  const response = await fetch(
    `https://trefle.io/api/v1/plants?token=${API_KEY}`
  );
  const data = await response.json();
  return data.data;
}
