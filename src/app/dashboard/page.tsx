import { Suspense } from "react";
import DashboardGrid from "@/components/dashboard/DashboardGrid";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Card, CardContent } from "@/components/ui/card";
import { DashboardLayoutProvider } from "@/contexts/DashboardLayoutContext";

export default function DashboardPage() {
  return (
    <DashboardLayoutProvider>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950">
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
          <DashboardHeader />

          {/* Draggable Hint */}
          <div className="flex items-center justify-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-4 px-2">
            <span className="text-center">
              💡 <span className="hidden sm:inline">Hover over cards and </span>
              Drag the grip icon to rearrange your dashboard
            </span>
          </div>

          <Suspense fallback={<DashboardSkeleton />}>
            <DashboardGrid />
          </Suspense>
        </div>
      </div>
    </DashboardLayoutProvider>
  );
}

function DashboardSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
      {[...Array(6)].map((_, i) => (
        <Card
          key={i}
          className={`animate-pulse border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm ${
            i === 0
              ? "col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-8"
              : i === 5
              ? "col-span-1 sm:col-span-4 md:col-span-6 lg:col-span-12"
              : "col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4"
          }`}
        >
          <CardContent className="p-4 sm:p-6">
            <div className="h-3 sm:h-4 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full w-1/2 mb-3 sm:mb-4"></div>
            <div className="h-16 sm:h-20 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-xl"></div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
