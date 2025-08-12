"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TrendingUp, Target, Clock, Flame } from "lucide-react";

const mockStats = [
  {
    id: "1",
    title: "Weekly Completion",
    value: "85%",
    change: "+12%",
    trend: "up",
    icon: <Target className="w-5 h-5" />,
    color: "text-green-500",
  },
  {
    id: "2",
    title: "Average Streak",
    value: "8 days",
    change: "+2 days",
    trend: "up",
    icon: <Flame className="w-5 h-5" />,
    color: "text-orange-500",
  },
  {
    id: "3",
    title: "Focus Sessions",
    value: "12",
    change: "+4",
    trend: "up",
    icon: <Clock className="w-5 h-5" />,
    color: "text-blue-500",
  },
  {
    id: "4",
    title: "Productivity Score",
    value: "92",
    change: "+8",
    trend: "up",
    icon: <TrendingUp className="w-5 h-5" />,
    color: "text-purple-500",
  },
];

export default function QuickStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base sm:text-lg font-semibold">
          Weekly Overview
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {mockStats.map((stat) => (
            <div
              key={stat.id}
              className="text-center p-3 sm:p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:shadow-md transition-shadow"
            >
              <div
                className={`inline-flex p-1.5 sm:p-2 rounded-lg mb-2 sm:mb-3 ${stat.color} bg-opacity-10`}
              >
                <span className={stat.color}>{stat.icon}</span>
              </div>

              <div className="space-y-1">
                <p className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-tight">
                  {stat.title}
                </p>
                <p
                  className={`text-xs font-medium ${
                    stat.trend === "up"
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {stat.change}{" "}
                  <span className="hidden sm:inline">from last week</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
