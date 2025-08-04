// app/katalog/page.tsx
"use client";

import { useEffect, useState } from "react";
import PlantCard from "@/components/shared/PlantCard";

const API_KEY = "WcQRs3Y1izZuRsaqN-N5csH93lnIvwrX7E7l08VTV2Q";

export default function Katalog() {
  const [plants, setPlants] = useState<any[]>([]);
  const [typeFilter, setTypeFilter] = useState("all");
  const [lightFilter, setLightFilter] = useState("all");
  const [maintenanceFilter, setMaintenanceFilter] = useState("all");

  useEffect(() => {
    async function fetchPlants() {
      try {
        const res = await fetch(`https://trefle.io/api/v1/plants?token=${API_KEY}`);
        const data = await res.json();

        const mapped = data.data.map((plant: any) => ({
          id: plant.id,
          common_name: plant.common_name || plant.slug,
          image_url: plant.image_url || "/assets/placeholder.jpg",
          category:
            plant.family_common_name?.toLowerCase().includes("fruit")
              ? "vocne"
              : plant.family_common_name?.toLowerCase().includes("herb")
              ? "zacinske"
              : "ukrasne",
          sunlight: plant.main_species?.growth?.light || 5,
          maintenance: plant.main_species?.growth?.maintenance || 2,
          price: Math.floor(Math.random() * 1000 + 300),
        }));

        setPlants(mapped);
      } catch (err) {
        console.error("Greška pri fetchovanju biljaka:", err);
      }
    }

    fetchPlants();
  }, []);

  const filtered = plants.filter((plant) => {
    const matchType =
      typeFilter === "all" || plant.category === typeFilter;
    const matchLight =
      lightFilter === "all" ||
      (lightFilter === "sunce" && plant.sunlight >= 7) ||
      (lightFilter === "polusenka" && plant.sunlight >= 4 && plant.sunlight < 7) ||
      (lightFilter === "senka" && plant.sunlight < 4);
    const matchMaintenance =
      maintenanceFilter === "all" ||
      (maintenanceFilter === "nisko" && plant.maintenance === 1) ||
      (maintenanceFilter === "umereno" && plant.maintenance === 2) ||
      (maintenanceFilter === "zahtevno" && plant.maintenance === 3);

    return matchType && matchLight && matchMaintenance;
  });

  return (
    <div className="p-6 space-y-6">
      {/* Filter: Tip sadnice */}
      <div className="bg-[#f3f3f3] p-4 rounded-lg">
        <p className="font-semibold mb-2">Tip sadnice:</p>
        <div className="flex gap-4">
          <label><input type="radio" value="all" name="type" onChange={() => setTypeFilter("all")} defaultChecked /> Sve</label>
          <label><input type="radio" value="ukrasne" name="type" onChange={() => setTypeFilter("ukrasne")} /> Ukrasne</label>
          <label><input type="radio" value="zacinske" name="type" onChange={() => setTypeFilter("zacinske")} /> Začinske</label>
          <label><input type="radio" value="vocne" name="type" onChange={() => setTypeFilter("vocne")} /> Voćne</label>
        </div>
      </div>

      {/* Filter: Osunčanost */}
      <div className="bg-[#f3f3f3] p-4 rounded-lg">
        <p className="font-semibold mb-2">Uslovi osunčanosti:</p>
        <div className="flex gap-4">
          <label><input type="radio" value="all" name="light" onChange={() => setLightFilter("all")} defaultChecked /> Sve</label>
          <label><input type="radio" value="sunce" name="light" onChange={() => setLightFilter("sunce")} /> Sunce</label>
          <label><input type="radio" value="polusenka" name="light" onChange={() => setLightFilter("polusenka")} /> Polusenka</label>
          <label><input type="radio" value="senka" name="light" onChange={() => setLightFilter("senka")} /> Senka</label>
        </div>
      </div>

      {/* Filter: Održavanje */}
      <div className="bg-[#f3f3f3] p-4 rounded-lg">
        <p className="font-semibold mb-2">Zahtevi za održavanje:</p>
        <div className="flex gap-4">
          <label><input type="radio" value="all" name="odrzavanje" onChange={() => setMaintenanceFilter("all")} defaultChecked /> Sve</label>
          <label><input type="radio" value="nisko" name="odrzavanje" onChange={() => setMaintenanceFilter("nisko")} /> Nisko</label>
          <label><input type="radio" value="umereno" name="odrzavanje" onChange={() => setMaintenanceFilter("umereno")} /> Umereno</label>
          <label><input type="radio" value="zahtevno" name="odrzavanje" onChange={() => setMaintenanceFilter("zahtevno")} /> Zahtevno</label>
        </div>
      </div>

      {/* Katalog biljaka */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filtered.length > 0 ? (
          filtered.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))
        ) : (
          <p className="text-center col-span-full">Nema biljaka za prikaz 🙁</p>
        )}
      </div>
    </div>
  );
}
