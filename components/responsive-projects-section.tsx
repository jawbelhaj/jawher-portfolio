"use client"

import { MobileProjectsSection } from "@/components/mobile-projects-section"
import { EnhancedProjectsSection } from "@/components/enhanced-projects-section"

export function ResponsiveProjectsSection() {
  return (
    <>
      <div className="lg:hidden">
        <MobileProjectsSection />
      </div>
      <div className="hidden lg:block">
        <EnhancedProjectsSection />
      </div>
    </>
  )
}
