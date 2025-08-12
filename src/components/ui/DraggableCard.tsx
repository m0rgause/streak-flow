"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";

interface DraggableCardProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function DraggableCard({
  id,
  children,
  className,
}: DraggableCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(
        "relative group transition-all duration-300 ease-out",
        isDragging && "z-50 rotate-2 scale-105 shadow-2xl",
        !isDragging && "hover:scale-[1.02] hover:-translate-y-1",
        className
      )}
    >
      {/* Drag Handle */}
      <div
        {...attributes}
        {...listeners}
        className="absolute -top-3 -right-3 z-10 opacity-60 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-grab active:cursor-grabbing transform hover:scale-110 touch-manipulation"
      >
        <div className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full p-2 sm:p-3 shadow-lg border border-gray-200 dark:border-gray-600">
          <GripVertical className="w-5 h-5 sm:w-4 sm:h-4 text-gray-500 dark:text-gray-400" />
        </div>
      </div>

      {/* Card Content */}
      <div
        className={cn(
          "transition-all duration-200",
          isDragging && "opacity-50",
          "hover:shadow-2xl hover:shadow-gray-300/60 dark:hover:shadow-gray-800/60"
        )}
      >
        {children}
      </div>
    </div>
  );
}
