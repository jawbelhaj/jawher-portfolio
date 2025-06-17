"use client"

import { useEffect, useState } from "react"
import { Terminal } from "lucide-react"

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("Initializing...")

  const loadingSteps = [
    "Initializing system...",
    "Loading components...",
    "Establishing connections...",
    "Optimizing performance...",
    "Ready to launch!",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 15
        const stepIndex = Math.floor((newProgress / 100) * loadingSteps.length)
        setLoadingText(loadingSteps[Math.min(stepIndex, loadingSteps.length - 1)])
        return Math.min(newProgress, 100)
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <Terminal className="h-16 w-16 text-green-500 mx-auto animate-pulse" />
        </div>
        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-gradient-to-r from-green-500 to-emerald-400 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-green-400 font-mono text-sm">{loadingText}</p>
        <p className="text-gray-500 font-mono text-xs mt-2">{Math.round(progress)}%</p>
      </div>
    </div>
  )
}
