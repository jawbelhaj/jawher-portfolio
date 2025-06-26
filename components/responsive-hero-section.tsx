"use client"

import { useState, useEffect } from "react"
import { MobileHeroSection } from "@/components/mobile-hero-section"
import { EnhancedHeroSection } from "@/components/enhanced-hero-section"

export function ResponsiveHeroSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024) // lg breakpoint
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  return (
    <>
      <div className="lg:hidden">
        <MobileHeroSection />
      </div>
      <div className="hidden lg:block">
        <EnhancedHeroSection />
      </div>
    </>
  )
}
