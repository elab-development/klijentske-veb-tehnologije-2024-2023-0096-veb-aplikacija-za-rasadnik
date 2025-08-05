// src/lib/store/usePlantingPlanStore.ts
import { create } from 'zustand';

export type StatusType = 'Zasađeno' | 'Nije zasađeno';

export interface PlanItem {
  id: number;
  name: string;
  image_url?: string;
  date: string;
  status: StatusType;
}

// Input tip samo sa podacima koje korisnik unosi (bez date i status)
type PlanItemInput = {
  id: number;
  name: string;
  image_url?: string;
  date: string;
  status: StatusType;
};

interface PlantingPlanState {
  items: PlanItem[];
  addToPlan: (item: PlanItemInput) => void;
  updateDate: (id: number, date: string) => void;
  updateStatus: (id: number, status: StatusType) => void;
  removeFromPlan: (id: number) => void;
}

export const usePlantingPlanStore = create<PlantingPlanState>((set, get) => ({
  items: [],
  addToPlan: (item) => {
    const exists = get().items.find((i) => i.id === item.id);
    if (!exists) {
      set({
        items: [
          ...get().items,
          {
            ...item,
            date: new Date().toISOString().split('T')[0],
            status: 'Nije zasađeno',
          },
        ],
      });
    }
  },
  updateDate: (id, date) => {
    set({
      items: get().items.map((i) =>
        i.id === id ? { ...i, date } : i
      ),
    });
  },
  updateStatus: (id, status) => {
    set({
      items: get().items.map((i) =>
        i.id === id ? { ...i, status } : i
      ),
    });
  },
  removeFromPlan: (id) => {
    set({
      items: get().items.filter((i) => i.id !== id),
    });
  },
}));
