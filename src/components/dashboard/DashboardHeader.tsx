"use client";

import { format } from "date-fns";
import { Calendar, Flame, Target, RotateCcw } from "lucide-react";
import { useUIStore } from "@/store";
import { useDashboardLayout } from "@/contexts/DashboardLayoutContext";
import { Button } from "@/components/ui/button";

export default function DashboardHeader() {
  const currentDate = useUIStore((state) => state.currentDate);
  const { resetLayout } = useDashboardLayout();

  const today = format(currentDate, "EEEE, MMMM d, yyyy");
  const greeting = getGreeting();

  return (
    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-8 pb-6 border-b border-gray-200/60 dark:border-gray-700/60">
      <div className="mb-6 lg:mb-0">
        <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 dark:from-indigo-400 dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent mb-3">
          {greeting} 👋
        </h1>
        <div className="flex items-center text-gray-600 dark:text-gray-400">
          <Calendar className="w-4 h-4 mr-2 text-indigo-500 dark:text-indigo-400" />
          <span className="text-sm font-medium">{today}</span>
        </div>
      </div>

      <div className="flex items-center space-x-8">
        <StatItem
          icon={<Flame className="w-5 h-5" />}
          label="Current Streak"
          value="7"
          color="text-orange-500"
          bgColor="bg-orange-100 dark:bg-orange-900/20"
        />
        <StatItem
          icon={<Target className="w-5 h-5" />}
          label="Today's Focus"
          value="3/3"
          color="text-emerald-500"
          bgColor="bg-emerald-100 dark:bg-emerald-900/20"
        />

        {/* Reset Layout Button */}
        <Button
          variant="outline"
          size="sm"
          onClick={resetLayout}
          className="flex items-center space-x-2"
          title="Reset dashboard layout"
        >
          <RotateCcw className="w-4 h-4" />
          <span className="hidden sm:inline">Reset Layout</span>
        </Button>
      </div>
    </div>
  );
}

function StatItem({
  icon,
  label,
  value,
  color,
  bgColor,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
  bgColor: string;
}) {
  return (
    <div className="flex items-center space-x-3">
      <div className={`p-3 rounded-xl ${bgColor}`}>
        <div className={color}>{icon}</div>
      </div>
      <div>
        <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-medium">
          {label}
        </div>
        <div className="text-xl font-bold text-gray-900 dark:text-white">
          {value}
        </div>
      </div>
    </div>
  );
}

function getGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}
