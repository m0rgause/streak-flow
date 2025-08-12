import { create } from "zustand";
import { PomodoroState } from "@/types";

interface PomodoroStore extends PomodoroState {
  startTimer: (duration: number) => void;
  pauseTimer: () => void;
  resetTimer: () => void;
  tick: () => void;
}

export const usePomodoroStore = create<PomodoroStore>((set, get) => ({
  isRunning: false,
  timeLeft: 25 * 60, // 25 minutes in seconds
  duration: 25 * 60,
  session: null,

  startTimer: (duration: number) => {
    set({
      isRunning: true,
      duration,
      timeLeft: duration,
    });
  },

  pauseTimer: () => {
    set({ isRunning: false });
  },

  resetTimer: () => {
    const { duration } = get();
    set({
      isRunning: false,
      timeLeft: duration,
      session: null,
    });
  },

  tick: () => {
    const { timeLeft, isRunning } = get();
    if (isRunning && timeLeft > 0) {
      set({ timeLeft: timeLeft - 1 });
    } else if (timeLeft === 0) {
      set({ isRunning: false });
    }
  },
}));

interface UIStore {
  sidebarOpen: boolean;
  currentDate: Date;
  setSidebarOpen: (open: boolean) => void;
  setCurrentDate: (date: Date) => void;
}

export const useUIStore = create<UIStore>((set) => ({
  sidebarOpen: false,
  currentDate: new Date(),
  setSidebarOpen: (open: boolean) => set({ sidebarOpen: open }),
  setCurrentDate: (date: Date) => set({ currentDate: date }),
}));
