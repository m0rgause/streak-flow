"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Mock data for the current week
const mockWeekData = {
  dates: [
    { date: "8", completed: 3, total: 4 },
    { date: "9", completed: 4, total: 4 },
    { date: "10", completed: 2, total: 4 },
    { date: "11", completed: 4, total: 4 },
    { date: "12", completed: 3, total: 4 },
    { date: "13", completed: 1, total: 4 }, // today
    { date: "14", completed: 0, total: 4 }, // future
  ],
};

export default function WeeklyOverview() {
  const getCompletionRate = (completed: number, total: number) => {
    if (total === 0) return 0;
    return (completed / total) * 100;
  };

  const getIntensityClass = (rate: number) => {
    if (rate === 0) return "bg-gray-100 dark:bg-gray-700";
    if (rate < 25)
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
    if (rate < 50)
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
    if (rate < 75)
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
  };

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">This Week</CardTitle>
        <div className="flex items-center space-x-1">
          <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
            <Calendar className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Week view */}
        <div className="grid grid-cols-7 gap-2">
          {weekDays.map((day, index) => {
            const dayData = mockWeekData.dates[index];
            const completionRate = getCompletionRate(
              dayData.completed,
              dayData.total
            );
            const isToday = index === 5; // Today is Friday (index 5)
            const isFuture = index > 5;

            return (
              <div key={day} className="text-center">
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                  {day}
                </div>
                <div
                  className={`
                  w-8 h-8 rounded-lg flex items-center justify-center text-xs font-medium
                  ${getIntensityClass(completionRate)}
                  ${isToday ? "ring-2 ring-blue-500" : ""}
                  ${isFuture ? "opacity-50" : ""}
                `}
                >
                  {dayData.date}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {isFuture ? "" : `${dayData.completed}/${dayData.total}`}
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary */}
        <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600 dark:text-gray-400">This week</span>
            <span className="font-medium text-gray-900 dark:text-white">
              17/24 habits completed
            </span>
          </div>

          <div className="mt-2">
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
              <span>71% completion rate</span>
              <span>+5% from last week</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
              <div
                className="bg-blue-500 h-1.5 rounded-full"
                style={{ width: "71%" }}
              ></div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
