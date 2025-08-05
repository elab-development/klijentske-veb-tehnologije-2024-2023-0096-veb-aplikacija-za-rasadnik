'use client';

import { useCartStore } from '@/lib/store/cartStore';
import Image from 'next/image';

export default function KorpaPage() {
  const { items, getTotal, updateQuantity, removeFromCart } = useCartStore();

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-[#083626] mb-8">KORPA</h1>
      <table className="w-full border-t border-b border-[#083626] text-left">
        <thead>
          <tr className="text-[#083626]">
            <th className="py-2">Proizvod</th>
            <th className="py-2">Cena</th>
            <th className="py-2">Količina</th>
            <th className="py-2">Ukupno</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id} className="border-t">
              <td className="py-4 flex items-center gap-4">
                {item.image_url && (
                  <Image
                    src={item.image_url}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded"
                  />
                )}
                <span>{item.name}</span>
              </td>
              <td>{item.price.toFixed(2)} RSD</td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  min={1}
                  className="w-16 border rounded px-2 py-1"
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                />
              </td>
              <td>{(item.price * item.quantity).toFixed(2)} RSD</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="text-right mt-8 font-semibold text-lg text-[#083626]">
        UKUPNO: {getTotal().toFixed(2)} RSD
      </div>
    </main>
  );
}
