import {
  habit,
  habitCompletion,
  dailyFocus,
  journalEntry,
  pomodoroSession,
  user,
} from "@prisma/client";

export interface HabitWithCompletions extends habit {
  completions: habitCompletion[];
}

export interface DashboardData {
  habits: HabitWithCompletions[];
  dailyFocus: dailyFocus[];
  journalEntry: journalEntry | null;
  user: user;
}

export interface HabitStreak {
  current: number;
  longest: number;
  total: number;
}

export interface PomodoroState {
  isRunning: boolean;
  timeLeft: number;
  duration: number;
  session: pomodoroSession | null;
}

export interface CreateHabitData {
  name: string;
  description?: string;
  color?: string;
  icon?: string;
}

export interface CreateDailyFocusData {
  title: string;
  description?: string;
  priority: number;
}

export interface CreateJournalEntryData {
  content: string;
  mood?: number;
}
