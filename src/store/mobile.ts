import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { LocationData } from "./location";

export type MobileScreen =
  | "home"
  | "finder"
  | "safari"
  | "photos"
  | "contact"
  | "terminal"
  | "resume"
  | "txtfile"
  | "imgfile";

interface MobileState {
  activeScreen: MobileScreen;
  screenHistory: MobileScreen[];
  folderHistory: LocationData[];
  navigate: (screen: MobileScreen) => void;
  goBack: () => void;
  setFolderHistory: (history: LocationData[]) => void;
}

const useMobileStore = create<MobileState>()(immer((set) => ({
  activeScreen: "home",
  screenHistory: [],
  folderHistory: [],

  navigate: (screen) => set((state) => {
    state.screenHistory.push(state.activeScreen);
    state.activeScreen = screen;
  }),

  goBack: () => set((state) => {
    const prev = state.screenHistory.pop();
    if (prev)
      state.activeScreen = prev;
  }),
  setFolderHistory: (history) => set((state) => {
    state.folderHistory = history;
  })
})));

export default useMobileStore;
