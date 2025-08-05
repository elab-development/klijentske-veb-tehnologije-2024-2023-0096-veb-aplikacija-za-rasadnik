"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface User {
  name: string;
  email: string;
}

export default function ProfilPage() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

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
        {/* Ikonica korisnika */}
        <div className="flex-shrink-0">
          <Image
            src="/assets/korisnikVeci.png"
            alt="Korisnik"
            width={100}
            height={100}
          />
        </div>

        {/* Podaci o korisniku + dugme za odjavu */}
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-bold text-[#083626] mb-4">VAŠI PODACI</h2>
          <p className="text-[#083626]">
            <strong>Korisničko ime:</strong> {user.name}
          </p>
          <p className="text-[#083626] mb-4">
            <strong>E-mail adresa:</strong> {user.email}
          </p>

          <button
            onClick={handleLogout}
            className="mt-2 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
          >
            Odjavi se
          </button>
        </div>
      </div>
    </section>
  );
}
