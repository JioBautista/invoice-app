import { create } from "zustand";

export const useStore2 = create((set) => ({
  active: [],
  addTask: (value) => set((state) => ({ active: [...state.active, value] })),
}));
