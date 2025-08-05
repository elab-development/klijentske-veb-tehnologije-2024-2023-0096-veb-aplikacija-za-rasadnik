"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchPlants } from "@/lib/api";
import QuantitySelector from "@/components/shared/QuantitySelector";
import { Button } from "@/components/ui/button";
import { Heart, ClipboardList } from "lucide-react";
import { useCartStore } from "@/lib/store/cartStore";
import { useWishlistStore } from "@/lib/store/useWishlistStore";
import { usePlantingPlanStore } from "@/lib/store/usePlantingPlanStore";

export default function PojedinacanProizvod() {
  const params = useParams();
  const [plant, setPlant] = useState<any>(null);
  const [quantity, setQuantity] = useState<number>(1);

  const addToCart = useCartStore((state) => state.addToCart);
  const addToWishlist = useWishlistStore((state) => state.addToWishlist);
  const addToPlantingPlan = usePlantingPlanStore((state) => state.addToPlan);

  useEffect(() => {
    const fetchData = async () => {
      const allPlants = await fetchPlants();
      const selected = allPlants.find((p) => p.id.toString() === params?.id);
      setPlant(selected);
    };
    fetchData();
  }, [params]);

  if (!plant) return <div>Učitavanje...</div>;

  const handleAddToWishlist = () => {
    addToWishlist({
      id: plant.id,
      name: plant.common_name,
      price: plant.price,
      image_url: plant.image_url,
    });
  };

  const handleAddToPlantingPlan = () => {
    addToPlantingPlan({
      id: plant.id,
      name: plant.common_name,
      image_url: plant.image_url,
      date: new Date().toISOString().split("T")[0],
      status: "Nije zasađeno",
    });
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Slika */}
        <div className="w-full md:w-1/2 flex justify-center">
          {plant.image_url ? (
            <div className="w-full max-w-[500px] aspect-[4/3] relative rounded-md overflow-hidden bg-gray-100">
              <Image
                src={plant.image_url}
                alt={plant.common_name || "Plant image"}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="w-full max-w-[500px] aspect-[4/3] flex items-center justify-center text-gray-400 bg-gray-100 rounded-md">
              No image
            </div>
          )}
        </div>

        {/* Informacije */}
        <div className="flex-1">
          <p className="text-xs uppercase text-gray-500 mb-1">
             Tip: <span className="font-semibold normal-case text-[#083626] uppercase">{plant.type || "Nepoznata"}</span>
          </p>

          <h1 className="text-2xl font-bold text-[#083626] mb-2">
            {plant.common_name || "Naziv biljke"}
          </h1>
          <p className="text-xl font-semibold text-[#63A60B] mb-4">
            {plant.price} RSD
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
            {plant.description || plant.bibliography || "Opis nije dostupan za ovu biljku."}
          </p>

          <ul className="text-sm space-y-1 mb-6">
            <li>
              <strong>Latinski naziv:</strong>{" "}
              <span className="text-[#63A60B]">{plant.scientific_name}</span>
            </li>
            <li>
              <strong>Kategorija:</strong>{" "}
              <span className="italic">
                {plant.family_common_name || plant.family || "Nepoznata"}
              </span>
            </li>
            <li>
              <strong>Uslovi osunčanosti:</strong>{" "}
              <span className="italic">{plant.sun || "Nepoznato"}</span>
            </li>
            <li>
              <strong>Zahtevi za održavanje:</strong>{" "}
              <span className="italic text-[#63A60B]">
                {plant.maintenance || "Nepoznato"}
              </span>
            </li>
          </ul>

          <div className="flex items-center gap-3 mb-6">
            <QuantitySelector quantity={quantity} onChange={setQuantity} />
            <Button
              className="bg-[#63A60B] hover:bg-[#4c8207] text-white px-6 py-2"
              onClick={() =>
                addToCart({
                  id: plant.id,
                  name: plant.common_name,
                  price: plant.price,
                  quantity,
                  image_url: plant.image_url,
                })
              }
            >
              Dodaj u Korpu
            </Button>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-600">
            <button
              onClick={handleAddToWishlist}
              className="flex items-center gap-1 hover:text-[#63A60B]"
            >
              <Heart className="w-4 h-4" /> Dodaj u listu želja
            </button>
            <button
              onClick={handleAddToPlantingPlan}
              className="flex items-center gap-1 hover:text-[#63A60B]"
            >
              <ClipboardList className="w-4 h-4" /> Dodaj u plan sadnje
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
