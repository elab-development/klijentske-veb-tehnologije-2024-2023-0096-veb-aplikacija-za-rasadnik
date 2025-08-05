// File: src/app/proizvod/[id]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import { fetchPlants } from "@/lib/api";
import QuantitySelector from "@/components/shared/QuantitySelector";
import { Button } from "@/components/ui/button";
import { Heart, ClipboardList } from "lucide-react";

export default async function PojedinacanProizvod({ params }: { params: { id: string } }) {
  const plants = await fetchPlants();
  const plant = plants.find((p) => p.id.toString() === params.id);

  if (!plant) return notFound();

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Image */}
        <div className="w-full bg-gray-100 rounded-md overflow-hidden">
          {plant.image_url ? (
            <Image
              src={plant.image_url}
              alt={plant.common_name || "Plant image"}
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 py-20">
              No image
            </div>
          )}
        </div>

        {/* Right: Info */}
        <div>
          <p className="text-xs uppercase text-gray-500 mb-1">Kategorija</p>
          <h1 className="text-2xl font-bold text-[#083626] mb-2">
            {plant.common_name || "Naziv biljke"}
          </h1>
          <p className="text-xl font-semibold text-[#63A60B] mb-4">
            {plant.price} RSD
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            U ponudi sadnice Tuje Smaragd (kupaste smaragdne tuje). Visina tuja se racuna bez busena,
            tj. iznad busena. U pitanju je najkvalitetnija sorta tuje za nase podneblje... (dummy tekst)
          </p>

          <ul className="text-sm space-y-1 mb-6">
            <li><strong>Latinski naziv:</strong> <span className="text-[#63A60B]">{plant.scientific_name}</span></li>
            <li><strong>Kategorija:</strong> <span className="italic">{plant.family || "Kategorija"}</span></li>
            <li><strong>Uslovi osunčanosti:</strong> <span className="italic">Uslovi</span></li>
            <li><strong>Zahtevi za održavanje:</strong> <span className="italic text-[#63A60B]">Zahtevi</span></li>
          </ul>

          <div className="flex items-center gap-3 mb-6">
            <QuantitySelector />
            <Button className="bg-[#63A60B] hover:bg-[#4c8207] text-white px-6 py-2">
              Dodaj u Korpu
            </Button>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-600">
            <button className="flex items-center gap-1 hover:text-[#63A60B]">
              <Heart className="w-4 h-4" /> Dodaj u listu želja
            </button>
            <button className="flex items-center gap-1 hover:text-[#63A60B]">
              <ClipboardList className="w-4 h-4" /> Dodaj u plan sadnje
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}