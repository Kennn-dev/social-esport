import create from "zustand";
type State = {
  auth: any;
};

type Action = {
  update: (payload: any) => void;
};
// define the store
export const useAppStore = create<State & Action>((set) => ({
  auth: null,
  update: (payload) => set((state) => ({ ...state, auth: null })),
}));
