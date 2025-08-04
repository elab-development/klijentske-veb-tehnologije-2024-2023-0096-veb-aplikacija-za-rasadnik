"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const isLoggedIn = false;
const userName = "Marko";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white border-b border-muted font-inter">
      {/* Gornja traka */}
      <div className="bg-beige text-[15px] text-primary flex justify-center px-4 sm:px-10 py-1 items-center">
        <div className="flex gap-3">
          <Image src="/assets/instagram.png" alt="Instagram" width={16} height={16} />
          <Image src="/assets/facebook.png" alt="Facebook" width={16} height={16} />
          <Image src="/assets/tiktok.png" alt="TikTok" width={16} height={16} />
        </div>
      </div>

      {/* Navigacija */}
      <div className="flex justify-between items-center py-3 px-4 sm:px-10 bg-white">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/assets/logo.png" alt="Logo" width={32} height={32} />
            <span className="text-lg font-bold text-primary">RASADNIK</span>
          </Link>

          <nav className="hidden sm:flex gap-6 text-primary font-medium">
            <Link href="/o-nama" className="hover:underline">O NAMA</Link>
            <Link href="/katalog" className="hover:underline">KATALOG</Link>
            <Link href="/lista-zelja" className="hover:underline">LISTA ŽELJA</Link>
          </nav>
        </div>

        <div className="hidden sm:flex items-center gap-4">
          <a href="tel:0600424270" className="bg-[#63A60B] text-white px-4 py-2 rounded-full flex items-center gap-2 hover:opacity-90 transition">
            <Image src="/assets/telefon.png" alt="Telefon" width={16} height={16} />
            <span className="text-sm font-medium">060/042 42 70</span>
          </a>

          {isLoggedIn ? (
            <Link href="/profil" className="flex items-center gap-1 text-primary hover:underline">
              <Image src="/assets/korisnik.png" alt="Profil" width={20} height={20} />
              <span>{userName}</span>
            </Link>
          ) : (
            <Link href="/prijava" className="flex items-center gap-1 text-primary hover:underline">
              <Image src="/assets/korisnik.png" alt="Prijava" width={20} height={20} />
              <span>Prijava</span>
            </Link>
          )}

          <Link href="/korpa">
            <Image src="/assets/korpa.png" alt="Korpa" width={20} height={20} />
          </Link>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="sm:hidden z-50" aria-label="Toggle menu">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobilni meni fullscreen */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-start pt-16 gap-6 text-primary text-[15px] font-medium overflow-y-auto pb-10">
          <Image src="/assets/logo.png" alt="Logo" width={40} height={40} />
          <span className="text-lg font-bold">RASADNIK</span>

          <Link href="/o-nama" onClick={() => setMenuOpen(false)}>O NAMA</Link>
          <Link href="/katalog" onClick={() => setMenuOpen(false)}>KATALOG</Link>
          <Link href="/lista-zelja" onClick={() => setMenuOpen(false)}>LISTA ŽELJA</Link>

          <a href="tel:0600424270" className="bg-[#63A60B] text-white px-5 py-2 rounded-full flex items-center gap-2 hover:opacity-90 transition">
            <Image src="/assets/telefon.png" alt="Telefon" width={16} height={16} />
            <span className="text-[15px] font-semibold">060/042 42 70</span>
          </a>

          {isLoggedIn ? (
            <Link href="/profil" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-[#63A60B]">
              <Image src="/assets/korisnik.png" alt="Profil" width={22} height={22} />
              <span>{userName}</span>
            </Link>
          ) : (
            <Link href="/prijava" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-[#63A60B]">
              <Image src="/assets/korisnik.png" alt="Prijava" width={22} height={22} />
              <span>Prijava</span>
            </Link>
          )}

          <Link href="/korpa" onClick={() => setMenuOpen(false)}>
            <Image src="/assets/korpa.png" alt="Korpa" width={24} height={24} />
          </Link>

          <div className="text-center px-6 pt-4">
            <p className="text-sm">Random adresa br.233 , 11000 Beograd</p>
            <p className="text-sm">Pon - Sub 8.00-19.00 / Nedelja neradni dan</p>
          </div>
        </div>
      )}
    </header>
  );
}