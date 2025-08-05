'use client'
import { useState } from 'react';



export default function QuantitySelector() {
  const [qty, setQty] = useState(1);
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setQty(q => Math.max(1, q - 1))}
        className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded"
      >
        −
      </button>
      <span className="w-12 text-center font-medium">{qty}</span>
      <button
        onClick={() => setQty(q => q + 1)}
        className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded"
      >
        +
      </button>
    </div>
  );
}
