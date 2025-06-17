"use client"

import { useEffect, useState } from "react"
import { Eye, EyeOff, Type, Contrast } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AccessibilityFeatures() {
  const [isVisible, setIsVisible] = useState(false)
  const [highContrast, setHighContrast] = useState(false)
  const [largeText, setLargeText] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    // Apply accessibility settings
    if (highContrast) {
      document.documentElement.classList.add("high-contrast")
    } else {
      document.documentElement.classList.remove("high-contrast")
    }

    if (largeText) {
      document.documentElement.classList.add("large-text")
    } else {
      document.documentElement.classList.remove("large-text")
    }

    if (reducedMotion) {
      document.documentElement.classList.add("reduce-motion")
    } else {
      document.documentElement.classList.remove("reduce-motion")
    }
  }, [highContrast, largeText, reducedMotion])

  return (
    <>
      {/* Accessibility toggle button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 left-4 z-50 p-3 bg-gray-900 border border-green-500/20 rounded-full text-green-500 hover:bg-gray-800 transition-colors"
        aria-label="Toggle accessibility options"
      >
        <Eye className="h-5 w-5" />
      </button>

      {/* Accessibility panel */}
      {isVisible && (
        <div className="fixed bottom-16 left-4 z-50 bg-gray-900/95 backdrop-blur-md border border-green-500/20 rounded-lg p-4 w-64">
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <Eye className="h-4 w-4 text-green-500" />
            Accessibility
          </h3>
          <div className="space-y-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setHighContrast(!highContrast)}
              className={`w-full justify-start gap-2 ${highContrast ? "bg-green-500/10 text-green-400" : ""}`}
            >
              <Contrast className="h-4 w-4" />
              High Contrast
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLargeText(!largeText)}
              className={`w-full justify-start gap-2 ${largeText ? "bg-green-500/10 text-green-400" : ""}`}
            >
              <Type className="h-4 w-4" />
              Large Text
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setReducedMotion(!reducedMotion)}
              className={`w-full justify-start gap-2 ${reducedMotion ? "bg-green-500/10 text-green-400" : ""}`}
            >
              <EyeOff className="h-4 w-4" />
              Reduce Motion
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
