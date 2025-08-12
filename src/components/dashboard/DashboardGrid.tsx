"use client";

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from "@dnd-kit/sortable";

import HabitTracker from "@/components/dashboard/HabitTracker";
import DailyFocus from "@/components/dashboard/DailyFocus";
import JournalWidget from "@/components/dashboard/JournalWidget";
import PomodoroTimer from "@/components/dashboard/PomodoroTimer";
import WeeklyOverview from "@/components/dashboard/WeeklyOverview";
import QuickStats from "@/components/dashboard/QuickStats";
import DraggableCard from "@/components/ui/DraggableCard";
import { useDashboardLayout } from "@/contexts/DashboardLayoutContext";

// Component mapping with responsive breakpoints
const componentMap = {
  "habit-tracker": {
    component: <HabitTracker />,
    className:
      "col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-8 xl:col-span-8",
  },
  "pomodoro-timer": {
    component: <PomodoroTimer />,
    className:
      "col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-4",
  },
  "daily-focus": {
    component: <DailyFocus />,
    className:
      "col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-4",
  },
  "weekly-overview": {
    component: <WeeklyOverview />,
    className:
      "col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-4",
  },
  "journal-widget": {
    component: <JournalWidget />,
    className:
      "col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-4",
  },
  "quick-stats": {
    component: <QuickStats />,
    className:
      "col-span-1 sm:col-span-4 md:col-span-6 lg:col-span-12 xl:col-span-12",
  },
};

export default function DashboardGrid() {
  const { layout, updateLayout } = useDashboardLayout();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = layout.indexOf(active.id as string);
      const newIndex = layout.indexOf(over.id as string);

      updateLayout(arrayMove(layout, oldIndex, newIndex));
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={layout} strategy={rectSortingStrategy}>
        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
          {layout.map((id) => {
            const config = componentMap[id as keyof typeof componentMap];
            if (!config) return null;

            return (
              <DraggableCard key={id} id={id} className={config.className}>
                {config.component}
              </DraggableCard>
            );
          })}
        </div>
      </SortableContext>
    </DndContext>
  );
}
