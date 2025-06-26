"use client"

import { MobileAboutSection } from "@/components/mobile-about-section"
import { EnhancedAboutSection } from "@/components/enhanced-about-section"

export function ResponsiveAboutSection() {
  return (
    <>
      <div className="lg:hidden">
        <MobileAboutSection />
      </div>
      <div className="hidden lg:block">
        <EnhancedAboutSection />
      </div>
    </>
  )
}
