"use client"

import { MobileCertificationsSection } from "@/components/mobile-certifications-section"
import { CertificationsSection } from "@/components/certifications-section"

export function ResponsiveCertificationsSection() {
  return (
    <>
      <div className="lg:hidden">
        <MobileCertificationsSection />
      </div>
      <div className="hidden lg:block">
        <CertificationsSection />
      </div>
    </>
  )
}
