"use client"

import { MobileExperienceSection } from "@/components/mobile-experience-section"
import { EnhancedExperienceSection } from "@/components/enhanced-experience-section"

export function ResponsiveExperienceSection() {
  return (
    <>
      <div className="lg:hidden">
        <MobileExperienceSection />
      </div>
      <div className="hidden lg:block">
        <EnhancedExperienceSection />
      </div>
    </>
  )
}
