"use client"

import { useEffect, useState } from "react"
import { Activity } from "lucide-react"

interface PerformanceMetrics {
  loadTime: number
  renderTime: number
  memoryUsage: number
}

export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)
  const [showMetrics, setShowMetrics] = useState(false)

  useEffect(() => {
    // Measure performance metrics
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart
      const renderTime = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart

      // Memory usage (if available)
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0

      setMetrics({
        loadTime: Math.round(loadTime),
        renderTime: Math.round(renderTime),
        memoryUsage: Math.round(memoryUsage / 1024 / 1024), // Convert to MB
      })
    }

    // Wait for page to fully load
    if (document.readyState === "complete") {
      measurePerformance()
    } else {
      window.addEventListener("load", measurePerformance)
      return () => window.removeEventListener("load", measurePerformance)
    }
  }, [])

  if (!metrics) return null

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setShowMetrics(!showMetrics)}
        className="p-2 bg-gray-900 border border-green-500/20 rounded-full text-green-500 hover:bg-gray-800 transition-colors"
        aria-label="Toggle performance metrics"
      >
        <Activity className="h-4 w-4" />
      </button>

      {showMetrics && (
        <div className="absolute bottom-12 right-0 bg-gray-900/95 backdrop-blur-md border border-green-500/20 rounded-lg p-3 w-48 text-xs">
          <h4 className="text-green-400 font-semibold mb-2">Performance</h4>
          <div className="space-y-1 text-gray-300">
            <div>Load: {metrics.loadTime}ms</div>
            <div>Render: {metrics.renderTime}ms</div>
            <div>Memory: {metrics.memoryUsage}MB</div>
          </div>
        </div>
      )}
    </div>
  )
}
