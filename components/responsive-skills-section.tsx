"use client"

import { MobileSkillsSection } from "@/components/mobile-skills-section"
import { EnhancedSkillsSection } from "@/components/enhanced-skills-section"

export function ResponsiveSkillsSection() {
  return (
    <>
      <div className="lg:hidden">
        <MobileSkillsSection />
      </div>
      <div className="hidden lg:block">
        <EnhancedSkillsSection />
      </div>
    </>
  )
}
