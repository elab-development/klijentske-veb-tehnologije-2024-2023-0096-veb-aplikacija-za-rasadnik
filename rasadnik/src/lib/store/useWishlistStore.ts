import { create } from 'zustand';

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  image_url?: string;
}

interface WishlistState {
  items: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: number) => void;
}

export const useWishlistStore = create<WishlistState>((set, get) => ({
  items: [],
  addToWishlist: (item) => {
    const exists = get().items.find((i) => i.id === item.id);
    if (!exists) {
      set({ items: [...get().items, item] });
    }
  },
  removeFromWishlist: (id) => {
    set({ items: get().items.filter((i) => i.id !== id) });
  },
}));
