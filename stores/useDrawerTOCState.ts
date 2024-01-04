import { create } from "zustand";

type State = {
  isOpen: boolean;
};

type Action = {
  changeDrawerTOCOpen: (open: State["isOpen"]) => void;
};

const useDrawerTOCState = create<State & Action>((set) => ({
  isOpen: false,
  changeDrawerTOCOpen: (open) => set({ isOpen: open }),
}));

export default useDrawerTOCState;
