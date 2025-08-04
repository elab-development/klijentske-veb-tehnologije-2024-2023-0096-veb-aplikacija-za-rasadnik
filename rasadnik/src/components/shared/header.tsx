"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const isLoggedIn = false; // Zameniti kasnije sa pravom proverom
const userName = "Marko"; // Primer imena korisnika

export default function Header() {
  return (
    <header className="w-full border-b border-muted">
      {/* Gornja traka */}
      <div className="bg-beige text-sm text-primary flex justify-between px-4 sm:px-10 py-1 items-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Image src="/assets/lokacija.png" alt="Lokacija" width={16} height={16} />
            <span>Random adresa br.233 , 11000 Beograd</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Image src="/assets/sat.png" alt="Sat" width={16} height={16} />
            <span>Pon - Sub 8.00-19.00 / Nedelja neradni dan</span>
          </div>
          <div className="flex gap-3 ml-4">
            <Image src="/assets/instagram.png" alt="Instagram" width={16} height={16} />
            <Image src="/assets/facebook.png" alt="Facebook" width={16} height={16} />
            <Image src="/assets/tiktok.png" alt="TikTok" width={16} height={16} />
          </div>
        </div>
      </div>

      {/* Navigacija */}
      <div className="flex justify-between items-center py-3 px-4 sm:px-10 bg-white">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/assets/logo.png" alt="Logo" width={32} height={32} />
          <span className="text-lg font-bold text-primary">RASADNIK</span>
        </Link>

        {/* Navigacija meni */}
        <nav className="hidden sm:flex gap-6 text-primary font-medium">
          <Link href="/o-nama" className="hover:underline">O NAMA</Link>
          <Link href="/katalog" className="hover:underline">KATALOG</Link>
          <Link href="/lista-zelja" className="hover:underline">LISTA ŽELJA</Link>
        </nav>

        {/* Desna strana */}
        <div className="flex items-center gap-4">
          {/* Telefon */}
          <a
            href="tel:0600424270"
            className="bg-zelena text-white px-4 py-2 rounded-full flex items-center gap-2 hover:opacity-90 transition"
          >
            <Image src="/assets/telefon.png" alt="Telefon" width={16} height={16} />
            <span className="text-sm font-medium">060/042 42 70</span>
          </a>

          {/* Login ili korisnik */}
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

          {/* Korpa */}
          <Link href="/korpa">
            <Image src="/assets/korpa.png" alt="Korpa" width={20} height={20} />
          </Link>
        </div>
      </div>
    </header>
  );
}
