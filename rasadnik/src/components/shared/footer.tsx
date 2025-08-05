'use client'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-white mt-10 text-[#083626] text-[15px] font-inter">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo + opis */}
        <div className="flex flex-col items-center text-center">
  <div className="flex items-center gap-3">
    <Image
      src="/assets/logo.png"
      alt="Rasadnik logo"
      width={100}
      height={80}
      priority
    />
  </div>
  <p className="mt-3 text-[#083626]/80 font-light leading-snug">
    Najbolji kvalitet po <br /> najnižim cenama
  </p>
</div>


        {/* Brzi Linkovi */}
        <div>
          <h4 className="text-[#083626] font-normal mb-2">Brzi Linkovi</h4>
          <ul className="space-y-1 text-[#878787]">
            <li><a href="/" className="hover:text-[#63A60B] transition font-light">Početna</a></li>
            <li><a href="/katalog" className="hover:text-[#63A60B] transition font-light">Katalog</a></li>
            <li><a href="/profil" className="hover:text-[#63A60B] transition font-light">Moj Nalog</a></li>
            <li><a href="/korpa" className="hover:text-[#63A60B] transition font-light">Korpa</a></li>
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <h4 className="text-[#083626] font-normal mb-2">Kontakt</h4>
          <ul className="space-y-1 text-[#878787] font-light">
            <li>Broj: 060/042 42 70</li>
            <li>Email: rasadnik@gmail.com</li>
            <li>Adresa: Random adresa br.233, 11000 Beograd</li>
          </ul>
        </div>

        {/* Mapa */}
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1413.801793273757!2d20.434302332339054!3d44.74856098936362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a707e3d2f69ed%3A0x6a7f6d2b0d9a3a8f!2sRakovica!5e0!3m2!1sen!2srs!4v1616161616161"
            width="100%"
            height="160"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded"
          ></iframe>
        </div>
      </div>

      {/* Copyright bez border-a */}
      <div className="text-center text-[#878787] text-[15px] font-light py-4">
        COPYRIGHT 2025 RASADNIK
      </div>
    </footer>
  )
}
