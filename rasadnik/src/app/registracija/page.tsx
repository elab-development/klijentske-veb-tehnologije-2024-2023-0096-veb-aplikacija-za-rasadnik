"use client";

import React from "react";

export default function RegistracijaPage() {
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
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Korisničko ime"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#63A60B]"
          />
          <input
            type="email"
            placeholder="E-pošta"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#63A60B]"
          />
          <input
            type="tel"
            placeholder="Telefon"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#63A60B]"
          />
          <input
            type="password"
            placeholder="Lozinka"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#63A60B]"
          />

          <button
            type="submit"
            className="w-full py-2 rounded-full transition text-white"
            style={{
              backgroundColor: "#63A60B", // svetlozelena
            }}
          >
            KREIRAJTE NALOG
          </button>
        </form>
      </div>
    </div>
  );
}
