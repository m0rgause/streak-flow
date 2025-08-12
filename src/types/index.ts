import {
  Habit,
  HabitCompletion,
  DailyFocus,
  JournalEntry,
  PomodoroSession,
  User,
} from "@prisma/client";

export interface HabitWithCompletions extends Habit {
  completions: HabitCompletion[];
}

export interface DashboardData {
  habits: HabitWithCompletions[];
  dailyFocus: DailyFocus[];
  journalEntry: JournalEntry | null;
  user: User;
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
  session: PomodoroSession | null;
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
