"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegistracijaPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      alert("Uspešno ste se registrovali!");
      router.push("/prijava");
    } else {
      alert(data.message || "Greška pri registraciji");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/assets/rasadnik-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-[#083626]">
          Kreiranje Naloga
        </h2>
        <form className="space-y-4" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Korisničko ime"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#63A60B]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-pošta"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#63A60B]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Lozinka"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#63A60B]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full py-2 rounded-full transition text-white"
            style={{ backgroundColor: "#63A60B" }}
          >
            KREIRAJTE NALOG
          </button>
        </form>
      </div>
    </div>
  );
}
