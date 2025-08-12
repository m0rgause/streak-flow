"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Save, Smile } from "lucide-react";

const moodEmojis = [
  { emoji: "😢", value: 1, label: "Terrible" },
  { emoji: "😞", value: 2, label: "Bad" },
  { emoji: "😐", value: 3, label: "Okay" },
  { emoji: "😊", value: 4, label: "Good" },
  { emoji: "🤩", value: 5, label: "Amazing" },
];

export default function JournalWidget() {
  const [entry, setEntry] = useState("");
  const [mood, setMood] = useState<number | null>(null);
  const [hasEntryToday] = useState(false); // This would come from API

  const handleSave = () => {
    if (!entry.trim()) return;

    // TODO: Save to API
    console.log("Saving journal entry:", { entry, mood });

    // Reset form
    setEntry("");
    setMood(null);
  };

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  if (hasEntryToday) {
    return (
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center">
            <BookOpen className="w-5 h-5 mr-2" />
            Journal Entry
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col items-center justify-center text-center space-y-4">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
            <BookOpen className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>

          <div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-2">
              Journal Complete! ✨
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              You&apos;ve already reflected on {currentDate}
            </p>
          </div>

          <Button variant="outline" size="sm">
            View Entry
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center">
          <BookOpen className="w-5 h-5 mr-2" />
          Daily Reflection
        </CardTitle>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {currentDate}
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Mood selector */}
        <div>
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
            How are you feeling today?
          </label>
          <div className="flex justify-between">
            {moodEmojis.map((moodOption) => (
              <button
                key={moodOption.value}
                onClick={() => setMood(moodOption.value)}
                className={`
                  text-2xl p-2 rounded-lg transition-all hover:scale-110
                  ${
                    mood === moodOption.value
                      ? "bg-blue-100 dark:bg-blue-900 scale-110"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700"
                  }
                `}
                title={moodOption.label}
              >
                {moodOption.emoji}
              </button>
            ))}
          </div>
        </div>

        {/* Text area */}
        <div>
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
            What went well today?
          </label>
          <textarea
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            placeholder="Reflect on your day, celebrate wins, or note lessons learned..."
            className="w-full h-20 p-3 text-sm border border-gray-200 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent
                       resize-none placeholder-gray-400 dark:placeholder-gray-500"
          />
        </div>

        {/* Save button */}
        <Button
          onClick={handleSave}
          disabled={!entry.trim()}
          className="w-full"
          size="sm"
        >
          <Save className="w-4 h-4 mr-2" />
          Save Reflection
        </Button>

        {/* Streak indicator */}
        <div className="flex items-center justify-center text-xs text-gray-500 dark:text-gray-400">
          <Smile className="w-4 h-4 mr-1" />5 day reflection streak
        </div>
      </CardContent>
    </Card>
  );
}
