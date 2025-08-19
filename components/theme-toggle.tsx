"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <Button variant="outline" size="icon" disabled className="h-9 w-9" />
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="h-9 w-9 bg-white dark:bg-gray-900"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 text-yellow-600 transition-all dark:rotate-90 dark:scale-0 dark:text-yellow-400" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 text-yellow-600 transition-all dark:rotate-0 dark:scale-100 dark:text-yellow-400" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
