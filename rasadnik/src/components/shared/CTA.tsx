'use client'

import { PhoneCall } from 'lucide-react'
import Link from 'next/link'

export default function ContactCTA() {
  return (
    <section
      className="py-10 px-6 md:px-20 font-inter bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/CTA pozadina.png')",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-[#FDFCF9]">
        <div>
          <h2 className="text-[32px] font-extrabold">POTREBNA VAM JE POMOĆ?</h2>
          <p className="mt-2 text-[20px] font-normal">
            Kontaktirajte nas i daćemo vam odgovor na sva vaša pitanja.
          </p>
        </div>

        <Link href="tel:+381641234567">
          <button className="bg-[#63A60B] hover:bg-[#5a960a] text-[#FDFCF9] text-[15px] font-semibold py-3 px-6 rounded-full flex items-center gap-2 transition shadow-md shadow-black/20">
            <PhoneCall size={18} />
            KONTAKTIRAJTE NAS
          </button>
        </Link>
      </div>
    </section>
  )
}
