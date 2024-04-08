import { create } from "zustand";

export const useStore = create((set) => ({
  // STATE FOR EITHER NEW INVOICE OR EDIT INVOICE ACCEPTS NEW OR EDIT VALUE
  mode: "",
  // DELETE MODAL STATE AND HANDLER
  deleteModal: false,
  toggleDelete: () => set((state) => ({ deleteModal: !state.deleteModal })),
  // MARK AS PAID MODAL STATE AND HANDLER
  paidModal: false,
  togglePaid: () => set((state) => ({ paidModal: !state.paidModal })),
  // DRAWER COMPONENT STATE AND HANDLER
  drawer: false,
  toggleDrawer: (whichMode) =>
    set((state) => ({ drawer: !state.drawer, mode: whichMode })),
  // MODAL FOR SUCCESS OR ERROR ON SUBMIT WITH HANDLER
  formModal: false,
  toggleForm: (value) =>
    set((state) => ({
      formModal: !state.formModal,
      drawer: value,
    })),
}));
