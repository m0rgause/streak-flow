"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw, Settings } from "lucide-react";
import { usePomodoroStore } from "@/store";

export default function PomodoroTimer() {
  const {
    isRunning,
    timeLeft,
    duration,
    startTimer,
    pauseTimer,
    resetTimer,
    tick,
  } = usePomodoroStore();

  const [selectedDuration, setSelectedDuration] = useState(25 * 60); // 25 minutes

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(tick, 1000);
    } else if (timeLeft === 0) {
      // Timer finished - could show notification here
      console.log("Pomodoro session completed!");
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeLeft, tick]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleStart = () => {
    if (timeLeft === duration) {
      startTimer(selectedDuration);
    } else {
      // Resume
      usePomodoroStore.setState({ isRunning: true });
    }
  };

  const handleReset = () => {
    resetTimer();
    setSelectedDuration(25 * 60);
  };

  const progress = ((duration - timeLeft) / duration) * 100;

  const presetDurations = [
    { label: "15m", value: 15 * 60 },
    { label: "25m", value: 25 * 60 },
    { label: "45m", value: 45 * 60 },
    { label: "60m", value: 60 * 60 },
  ];

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-base sm:text-lg font-semibold">
          Focus Timer
        </CardTitle>
        <Button
          size="sm"
          variant="ghost"
          className="w-8 h-8 sm:w-auto sm:h-auto p-0 sm:p-2"
        >
          <Settings className="w-3 h-3 sm:w-4 sm:h-4" />
        </Button>
      </CardHeader>

      <CardContent className="flex flex-col items-center space-y-4 sm:space-y-6">
        {/* Circular Progress */}
        <div className="relative w-24 h-24 sm:w-32 sm:h-32">
          <svg
            className="w-full h-full transform -rotate-90"
            viewBox="0 0 100 100"
          >
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="6"
              fill="transparent"
              className="text-gray-200 dark:text-gray-700"
            />
            {/* Progress circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="6"
              fill="transparent"
              strokeDasharray={`${2 * Math.PI * 45}`}
              strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
              className="text-blue-500 transition-all duration-1000 ease-in-out"
            />
          </svg>

          {/* Time display */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg sm:text-2xl font-mono font-bold text-gray-900 dark:text-white">
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>

        {/* Duration presets */}
        {!isRunning && timeLeft === duration && (
          <div className="flex flex-wrap gap-2 justify-center">
            {presetDurations.map((preset) => (
              <Button
                key={preset.value}
                size="sm"
                variant={
                  selectedDuration === preset.value ? "default" : "outline"
                }
                onClick={() => setSelectedDuration(preset.value)}
                className="text-xs sm:text-sm px-2 sm:px-3"
              >
                {preset.label}
              </Button>
            ))}
          </div>
        )}

        {/* Control buttons */}
        <div className="flex space-x-2 sm:space-x-3 w-full">
          <Button
            onClick={isRunning ? pauseTimer : handleStart}
            className="flex-1 text-sm sm:text-base"
            size="lg"
          >
            {isRunning ? (
              <>
                <Pause className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Pause</span>
                <span className="sm:hidden">⏸</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">
                  {timeLeft === duration ? "Start" : "Resume"}
                </span>
                <span className="sm:hidden">▶</span>
              </>
            )}
          </Button>

          <Button
            onClick={handleReset}
            variant="outline"
            size="lg"
            className="px-2 sm:px-4"
          >
            <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4" />
          </Button>
        </div>

        {/* Status */}
        <div className="text-center">
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            {isRunning ? "Focus time active" : "Ready to start focus session"}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
