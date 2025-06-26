"use client"

import { MobileContactSection } from "@/components/mobile-contact-section"
import { ContactSection } from "@/components/contact-section"

export function ResponsiveContactSection() {
  return (
    <>
      <div className="lg:hidden">
        <MobileContactSection />
      </div>
      <div className="hidden lg:block">
        <ContactSection />
      </div>
    </>
  )
}
