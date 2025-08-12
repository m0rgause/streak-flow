"use client";

import { useMemo } from "react";

interface Completion {
  date: string;
  completed: boolean;
}

interface HabitStreakChartProps {
  completions: Completion[];
  color: string;
}

export default function HabitStreakChart({
  completions,
  color,
}: HabitStreakChartProps) {
  const chartData = useMemo(() => {
    // Create a grid for the last 30 days (similar to GitHub contributions)
    const weeks: Completion[][] = [];
    let currentWeek: Completion[] = [];

    completions.forEach((completion, index) => {
      const dayOfWeek = new Date(completion.date).getDay();

      // Start a new week on Sunday
      if (dayOfWeek === 0 && currentWeek.length > 0) {
        weeks.push(currentWeek);
        currentWeek = [];
      }

      currentWeek.push(completion);

      // If it's the last day, push the current week
      if (index === completions.length - 1) {
        weeks.push(currentWeek);
      }
    });

    return weeks;
  }, [completions]);

  const getIntensity = (completed: boolean) => {
    return completed ? 1 : 0;
  };

  const getOpacity = (intensity: number) => {
    if (intensity === 0) return 0.1;
    return 0.8;
  };

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex space-x-1">
        {chartData.map((week, weekIndex) => (
          <div key={weekIndex} className="flex flex-col space-y-1">
            {week.map((day, dayIndex) => {
              const intensity = getIntensity(day.completed);
              const opacity = getOpacity(intensity);

              return (
                <div
                  key={`${weekIndex}-${dayIndex}`}
                  className="w-3 h-3 rounded-sm border border-gray-200 dark:border-gray-600"
                  style={{
                    backgroundColor: day.completed ? color : "transparent",
                    opacity,
                  }}
                  title={`${day.date}: ${
                    day.completed ? "Completed" : "Missed"
                  }`}
                />
              );
            })}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
        <span>Less</span>
        <div className="flex space-x-1">
          {[0.1, 0.3, 0.6, 0.8].map((opacity, index) => (
            <div
              key={index}
              className="w-3 h-3 rounded-sm border border-gray-200 dark:border-gray-600"
              style={{
                backgroundColor: color,
                opacity,
              }}
            />
          ))}
        </div>
        <span>More</span>
      </div>
    </div>
  );
}
