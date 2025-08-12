"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface DashboardLayoutContextType {
  layout: string[];
  updateLayout: (newLayout: string[]) => void;
  resetLayout: () => void;
}

const DashboardLayoutContext = createContext<
  DashboardLayoutContextType | undefined
>(undefined);

const defaultLayout = [
  "habit-tracker",
  "pomodoro-timer",
  "daily-focus",
  "weekly-overview",
  "journal-widget",
  "quick-stats",
];

interface DashboardLayoutProviderProps {
  children: React.ReactNode;
}

export function DashboardLayoutProvider({
  children,
}: DashboardLayoutProviderProps) {
  const [layout, setLayout] = useState<string[]>(defaultLayout);

  // Load layout from localStorage on mount
  useEffect(() => {
    const savedLayout = localStorage.getItem("streakflow-dashboard-layout");
    if (savedLayout) {
      try {
        const parsedLayout = JSON.parse(savedLayout);
        if (
          Array.isArray(parsedLayout) &&
          parsedLayout.length === defaultLayout.length
        ) {
          setLayout(parsedLayout);
        }
      } catch {
        console.warn("Failed to parse saved layout, using default");
      }
    }
  }, []);

  // Save layout to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("streakflow-dashboard-layout", JSON.stringify(layout));
  }, [layout]);

  const updateLayout = (newLayout: string[]) => {
    setLayout(newLayout);
  };

  const resetLayout = () => {
    setLayout(defaultLayout);
    localStorage.removeItem("streakflow-dashboard-layout");
  };

  return (
    <DashboardLayoutContext.Provider
      value={{ layout, updateLayout, resetLayout }}
    >
      {children}
    </DashboardLayoutContext.Provider>
  );
}

export function useDashboardLayout() {
  const context = useContext(DashboardLayoutContext);
  if (context === undefined) {
    throw new Error(
      "useDashboardLayout must be used within a DashboardLayoutProvider"
    );
  }
  return context;
}
