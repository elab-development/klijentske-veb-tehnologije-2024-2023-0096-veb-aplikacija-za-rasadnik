// ✅ FILE 2: ProfilPage.tsx (dodato prikaz liste želja i plana sadnje)

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useWishlistStore } from "@/lib/store/useWishlistStore";
import { StatusType, usePlantingPlanStore } from "@/lib/store/usePlantingPlanStore";

interface User {
  name: string;
  email: string;
}

export default function ProfilPage() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const wishlist = useWishlistStore((state) => state.items);
  const plantingPlan = usePlantingPlanStore((state) => state.items);
  const updateStatus = usePlantingPlanStore((state) => state.updateStatus);
  const updateDate = usePlantingPlanStore((state) => state.updateDate);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("/api/me");
      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
      } else {
        router.push("/prijava");
      }
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    window.location.href = "/";
  };

  if (!user) return <div className="p-6">Učitavanje...</div>;

  return (
    <section className="max-w-4xl mx-auto mt-24 px-4 sm:px-6 font-inter">
      <div className="bg-[#F5F2ED] rounded-[32px] p-6 sm:p-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-12 shadow">
        <div className="flex-shrink-0">
          <Image src="/assets/korisnikVeci.png" alt="Korisnik" width={100} height={100} />
        </div>

        <div className="text-center sm:text-left">
          <h2 className="text-xl font-bold text-[#083626] mb-4">VAŠI PODACI</h2>
          <p className="text-[#083626]"><strong>Korisničko ime:</strong> {user.name}</p>
          <p className="text-[#083626] mb-4"><strong>E-mail adresa:</strong> {user.email}</p>
          <button onClick={handleLogout} className="mt-2 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition">
            Odjavi se
          </button>
        </div>
      </div>

      {/* LISTA ŽELJA */}
      <h2 className="text-2xl font-bold mt-10 text-[#083626]">LISTA ŽELJA</h2>
      <table className="w-full border-t border-b mt-2 mb-8">
        <thead>
          <tr className="text-left">
            <th>Proizvod</th>
            <th>Cena</th>
          </tr>
        </thead>
        <tbody>
          {wishlist.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="flex items-center gap-4 py-2">
                {item.image_url && <Image src={item.image_url} alt={item.name} width={40} height={40} />}
                {item.name}
              </td>
              <td>{item.price.toFixed(2)} RSD</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* PLAN SADNJE */}
      <h2 className="text-2xl font-bold mt-10 text-[#083626]">PLAN SADNJE</h2>
      <table className="w-full border-t border-b mt-2">
        <thead>
          <tr className="text-left">
            <th>Proizvod</th>
            <th>Datum sadnje</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {plantingPlan.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="flex items-center gap-4 py-2">
                {item.image_url && <Image src={item.image_url} alt={item.name} width={40} height={40} />}
                {item.name}
              </td>
              <td>
                <input
                  type="date"
                  value={item.date}
                  className="border px-2 py-1 rounded"
                  onChange={(e) => updateDate(item.id, e.target.value)}
                />
              </td>
              <td>
                <select
                  className="border px-2 py-1 rounded"
                  value={item.status}
                  onChange={(e) => updateStatus(item.id, e.target.value as StatusType)}
                >
                  <option value="Zasađeno">
                    Zasađeno
                  </option>
                  <option value="Nije zasađeno">
                    Nije zasađeno
                  </option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}