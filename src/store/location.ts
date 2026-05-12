import { locations } from "#constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export interface LocationData {
  id: number | string;
  name: string;
  icon: string;
  kind: string;
  type?: string;
  fileType?: string;
  position?: string;
  windowPosition?: string;
  href?: string;
  imageUrl?: string;
  description?: string[];
  subtitle?: string;
  image?: string;
  children?: LocationData[];
}

interface LocationState {
  activeLocation: LocationData;
  setActiveLocation: (location: LocationData) => void;
  resetActivation: () => void;
}

const DEFAULT_LOCATION = locations.work as LocationData;

const useLocationStore = create<LocationState>()(immer((set) => ({
  activeLocation: DEFAULT_LOCATION,

  setActiveLocation: (location: LocationData) => set((state) => {
    state.activeLocation = location;
  }),

  resetActivation: () => set((state) => {
    state.activeLocation = DEFAULT_LOCATION;
  })
})));

export default useLocationStore;