"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Check, MoreHorizontal } from "lucide-react";
import HabitStreakChart from "@/components/dashboard/HabitStreakChart";

// Mock data for development
const mockHabits = [
  {
    id: "1",
    name: "Morning Exercise",
    description: "30 minutes workout",
    color: "#10B981",
    icon: "💪",
    streak: 7,
    completions: generateMockCompletions(30),
  },
  {
    id: "2",
    name: "Read Books",
    description: "20 pages per day",
    color: "#3B82F6",
    icon: "📚",
    streak: 12,
    completions: generateMockCompletions(30),
  },
  {
    id: "3",
    name: "Meditation",
    description: "10 minutes mindfulness",
    color: "#8B5CF6",
    icon: "🧘",
    streak: 5,
    completions: generateMockCompletions(30),
  },
];

function generateMockCompletions(days: number) {
  const completions = [];
  const today = new Date();

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);

    // Simulate some gaps in habits (80% completion rate)
    const completed = Math.random() > 0.2;

    completions.push({
      date: date.toISOString().split("T")[0],
      completed,
    });
  }

  return completions;
}

export default function HabitTracker() {
  const [habits] = useState(mockHabits);

  const toggleHabit = (habitId: string) => {
    // TODO: Implement habit toggle logic
    console.log("Toggle habit:", habitId);
  };

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
        <CardTitle className="text-lg sm:text-xl font-semibold">
          Habit Streaks
        </CardTitle>
        <Button size="sm" variant="outline" className="w-full sm:w-auto">
          <Plus className="w-4 h-4 mr-2" />
          Add Habit
        </Button>
      </CardHeader>

      <CardContent className="space-y-6 sm:space-y-8">
        {habits.map((habit) => (
          <div key={habit.id} className="group">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4 sm:gap-0">
              <div className="flex items-center space-x-3 sm:space-x-4 w-full sm:w-auto">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center text-white font-semibold shadow-lg transition-transform group-hover:scale-105 flex-shrink-0"
                  style={{
                    backgroundColor: habit.color,
                    boxShadow: `0 8px 25px ${habit.color}30`,
                  }}
                >
                  <span className="text-base sm:text-lg">{habit.icon}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base truncate">
                    {habit.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 truncate">
                    {habit.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between w-full sm:w-auto sm:space-x-4">
                <div className="text-left sm:text-right">
                  <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                    {habit.streak}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    day streak
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => toggleHabit(habit.id)}
                    className="w-8 h-8 sm:w-10 sm:h-10 p-0 rounded-xl hover:scale-105 transition-transform"
                  >
                    <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>

                  <Button
                    size="sm"
                    variant="ghost"
                    className="w-8 h-8 sm:w-10 sm:h-10 p-0 rounded-xl hover:scale-105 transition-transform"
                  >
                    <MoreHorizontal className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="ml-16">
              <HabitStreakChart
                completions={habit.completions}
                color={habit.color}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
