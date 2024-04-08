import { create } from "zustand";

export const useStore = create((set) => ({
  deleteModal: false,
  mode: "",
  paidModal: false,
  drawer: false,
  formModal: false,
  toggleDelete: (value) => set((state) => ({ deleteModal: value })),
  togglePaid: () => set((state) => ({ paidModal: !state.paidModal })),
  toggleDrawer: (whichMode) =>
    set((state) => ({ drawer: !state.drawer, mode: whichMode })),
  toggleForm: () =>
    set((state) => ({
      formModal: !state.formModal,
    })),
}));
