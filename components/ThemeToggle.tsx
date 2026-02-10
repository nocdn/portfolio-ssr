"use client"

import { Moon, Sun } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsDark(document.documentElement.classList.contains("dark"))

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        const dark = e.matches
        document.documentElement.classList.toggle("dark", dark)
        setIsDark(dark)
      }
    }
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  const toggle = () => {
    const next = !isDark
    document.documentElement.classList.toggle("dark", next)
    setIsDark(next)
    localStorage.setItem("theme", next ? "dark" : "light")
  }

  if (!mounted) return null

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="fixed right-6 bottom-6 z-50 hidden h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm transition-colors duration-200 hover:bg-gray-100 md:flex dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <Sun size={16} strokeWidth={2} />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <Moon size={16} strokeWidth={2} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}
