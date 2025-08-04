"use client";

import Link from "next/link";

export default function PrijavaPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/rasadnik-bg.png')", // zameni po potrebi
      }}
    >
      <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg max-w-md w-full flex flex-col items-center">
        <h1 className="text-2xl font-bold text-[#083626] mb-4">PRIJAVA</h1>

        <form className="w-full flex flex-col gap-3">
          <label className="text-[#083626] text-sm">Korisničko ime ili adresa e-pošte</label>
          <input
            type="text"
            className="rounded-md px-4 py-2 border border-[#F5F2ED] focus:outline-none focus:ring-2"
            placeholder="Unesite korisničko ime ili e-mail"
          />

          <label className="text-[#083626] text-sm mt-2">Lozinka</label>
          <input
            type="password"
            className="rounded-md px-4 py-2 border border-[#F5F2ED] focus:outline-none focus:ring-2"
            placeholder="Unesite lozinku"
          />

          <button
            type="submit"
            className="mt-4 rounded-full px-6 py-2 font-semibold hover:opacity-90 transition"
            style={{
              backgroundColor: "#63A60B",  // Svetlo zelena
              color: "white",
            }}
          >
            ULOGUJTE SE
          </button>
        </form>

        <div className="mt-8 flex flex-col items-center">
          <h2 className="text-lg font-semibold text-[#083626] mb-2">NEMATE NALOG?</h2>
          <p className="text-[#083626] text-sm text-center mb-3">
            Ukoliko nemate nalog na našoj stranici, možete ga kreirati klikom na dugme dole
          </p>
          <Link href="/registracija">
            <button
              className="rounded-full px-6 py-2 font-semibold hover:opacity-90 transition"
              style={{
                backgroundColor: "#63A60B",  // Svetlo zelena
                color: "white",
              }}
            >
              KREIRAJTE NALOG
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
