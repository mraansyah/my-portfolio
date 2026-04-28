import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { gallery } from "#constants";

interface PhotosState {
  activeMenuId: number;
  setActiveMenuId: (id: number) => void;
}

const usePhotosStore = create<PhotosState>()(immer((set) => ({
  activeMenuId: gallery.library.id,
  setActiveMenuId: (id) => set((state) => {
    state.activeMenuId = id;
  }),
})));

export default usePhotosStore;
