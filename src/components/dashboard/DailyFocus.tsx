"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, Plus } from "lucide-react";

const mockFocusTasks = [
  {
    id: "1",
    title: "Complete project proposal",
    completed: true,
    priority: 1,
  },
  {
    id: "2",
    title: "Review team PRs",
    completed: true,
    priority: 2,
  },
  {
    id: "3",
    title: "Plan weekend hiking trip",
    completed: false,
    priority: 3,
  },
];

export default function DailyFocus() {
  const [tasks] = useState(mockFocusTasks);

  const completedTasks = tasks.filter((task) => task.completed).length;

  const toggleTask = (taskId: string) => {
    console.log("Toggle task:", taskId);
  };

  const getPriorityColor = (priority: number) => {
    switch (priority) {
      case 1:
        return "text-red-500";
      case 2:
        return "text-yellow-500";
      case 3:
        return "text-green-500";
      default:
        return "text-gray-500";
    }
  };

  const getPriorityLabel = (priority: number) => {
    switch (priority) {
      case 1:
        return "High";
      case 2:
        return "Medium";
      case 3:
        return "Low";
      default:
        return "None";
    }
  };

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <div>
          <CardTitle className="text-base sm:text-lg font-semibold">
            Today&apos;s Focus
          </CardTitle>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
            {completedTasks}/{tasks.length} completed
          </p>
        </div>
        <Button size="sm" variant="outline" className="w-full sm:w-auto">
          <Plus className="w-4 h-4" />
        </Button>
      </CardHeader>

      <CardContent className="space-y-2 sm:space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <button
              onClick={() => toggleTask(task.id)}
              className="mt-0.5 flex-shrink-0"
            >
              {task.completed ? (
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
              ) : (
                <Circle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              )}
            </button>

            <div className="flex-1 min-w-0">
              <p
                className={`text-xs sm:text-sm font-medium break-words ${
                  task.completed
                    ? "text-gray-500 dark:text-gray-400 line-through"
                    : "text-gray-900 dark:text-white"
                }`}
              >
                {task.title}
              </p>
              <span
                className={`inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded text-xs font-medium ${getPriorityColor(
                  task.priority
                )} bg-gray-100 dark:bg-gray-700 mt-1`}
              >
                <span className="hidden sm:inline">
                  {getPriorityLabel(task.priority)} priority
                </span>
                <span className="sm:hidden">
                  {getPriorityLabel(task.priority)}
                </span>
              </span>
            </div>
          </div>
        ))}

        {tasks.length === 0 && (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            <Circle className="w-12 h-12 mx-auto mb-3 opacity-50" />
            <p className="text-sm">No focus tasks for today</p>
            <p className="text-xs mt-1">Add up to 3 priority tasks</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
