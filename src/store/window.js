import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants";
import { immer } from "zustand/middleware/immer";
import { create } from "zustand";


const useWindowStore = create(immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX,
    openWindow: (windowKey, data = null) => set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = true;
        win.isMinimized = false;
        win.isMaximized = false;
        win.zIndex = state.nextZIndex;
        win.data = data ?? win.data
        state.nextZIndex++;
    }),
    closeWindow: (windowKey) => set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = false;
        win.isMinimized = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
    }),
    minimizeWindow: (windowKey) => set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isMinimized = true;
    }),
    maximizeWindow: (windowKey) => set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = true;
        win.isMinimized = false;
        win.isMaximized = !win.isMaximized; // toggle maximize
        win.zIndex = state.nextZIndex++;
    }),
    focusWindow: (window) => set((state) => {
        const win = state.windows[window];
        if (!win) return;
        win.zIndex = state.nextZIndex++;
    }),
})));

export default useWindowStore;