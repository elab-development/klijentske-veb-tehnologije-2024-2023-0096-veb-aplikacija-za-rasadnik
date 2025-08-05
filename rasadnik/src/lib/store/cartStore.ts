// lib/store/useCartStore.ts
import { create } from 'zustand';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image_url?: string;
}

interface CartState {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  getTotal: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addToCart: (item) => {
    const existing = get().items.find(i => i.id === item.id);
    if (existing) {
      set({
        items: get().items.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        )
      });
    } else {
      set({ items: [...get().items, item] });
    }
  },
  removeFromCart: (id) => {
    set({ items: get().items.filter(i => i.id !== id) });
  },
  updateQuantity: (id, quantity) => {
    set({
      items: get().items.map(i =>
        i.id === id ? { ...i, quantity } : i
      )
    });
  },
  getTotal: () => {
    return get().items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  }
}));
