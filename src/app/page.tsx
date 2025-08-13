import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Calendar, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              StreakFlow
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/auth/login">
              <Button
                variant="ghost"
                className="text-gray-600 dark:text-gray-300"
              >
                Sign In
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                Get Started
              </Button>
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <main className="py-16 sm:py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Flow into your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                streak
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Your personal habit tracker and productivity dashboard. Build
              lasting habits, focus on what matters, and track your progress
              with beautiful, interactive charts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/register">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8 py-3"
                >
                  Start Your Journey
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-3 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600"
                >
                  View Demo
                </Button>
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Habit Tracking",
                description:
                  "Visual streak tracking with colorful progress indicators",
                color: "from-green-400 to-green-600",
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Daily Focus",
                description:
                  "Prioritize 3 key tasks each day for maximum impact",
                color: "from-blue-400 to-blue-600",
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Pomodoro Timer",
                description: "Focus sessions with customizable time intervals",
                color: "from-purple-400 to-purple-600",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Progress Analytics",
                description: "Weekly overviews and productivity insights",
                color: "from-orange-400 to-orange-600",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 backdrop-blur-sm">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Ready to build your streaks?
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Join thousands of users who are building better habits and
                  achieving their goals.
                </p>
                <Link href="/auth/register">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-12 py-4"
                  >
                    Get Started for Free
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 StreakFlow. Built with Next.js, Tailwind CSS, and ❤️
          </p>
        </footer>
      </div>
    </div>
  );
}
