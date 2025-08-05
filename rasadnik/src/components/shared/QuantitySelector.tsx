"use client";

interface QuantitySelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
}

export default function QuantitySelector({ quantity, onChange }: QuantitySelectorProps) {
  const increment = () => onChange(quantity + 1);
  const decrement = () => {
    if (quantity > 1) {
      onChange(quantity - 1);
    }
  };

  return (
    <div className="flex items-center border rounded px-2 py-1">
      <button
        onClick={decrement}
        className="text-lg font-bold px-2 text-gray-600 hover:text-[#63A60B]"
      >
        -
      </button>
      <span className="px-3 text-sm">{quantity}</span>
      <button
        onClick={increment}
        className="text-lg font-bold px-2 text-gray-600 hover:text-[#63A60B]"
      >
        +
      </button>
    </div>
  );
}
