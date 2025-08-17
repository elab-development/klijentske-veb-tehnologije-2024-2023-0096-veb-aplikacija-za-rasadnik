'use client';

import Link from 'next/link';
import Image from 'next/image';

interface Plant {
  id: number;
  common_name: string | null;
  scientific_name: string;
  image_url?: string | null;
  family?: string;
  price: number | string;
  type?: string;
  sun?: string;
  maintenance?: string;
  category?: string;
  description?: string;
}

export default function PlantList({ plants }: { plants: Plant[] }) {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2">
      {plants.map((p) => (
        <li
          key={p.id}
          className="bg-white rounded-md overflow-hidden shadow hover:shadow-lg transition"
        >
          <Link href={`/proizvod/${p.id}`} className="block">
            {/* Slika  */}
            <div className="w-full aspect-square bg-gray-100 overflow-hidden relative">
              {p.image_url ? (
                <Image
                  src={p.image_url}
                  alt={p.common_name || 'Plant'}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  No image
                </div>
              )}
            </div>

            {/* Detalji */}
            <div className="p-4">
              {p.category && (
                <p className="text-xs text-gray-500 uppercase mb-1 truncate">
                  {p.category}
                </p>
              )}
              <h3 className="text-lg font-semibold text-[#083626] mb-1 truncate">
                {p.common_name || 'Naziv biljke'}
              </h3>
              {/* Kategorija */}
              <p className="text-sm font-semibold text-[#63A60B] mb-1 truncate">
                {p.type} {/* ukrasne/zacinske/vocne */}
              </p>
              <p className="text-sm text-gray-500 mb-1">
                ☀ {p.sun} | 🛠 {p.maintenance}
              </p>
              <p className="text-lg font-semibold text-[#63A60B]">
                {p.price} RSD
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
