"use client"

import { MobileFooter } from "@/components/mobile-footer"
import { Footer } from "@/components/footer"

export function ResponsiveFooter() {
  return (
    <>
      <div className="lg:hidden">
        <MobileFooter />
      </div>
      <div className="hidden lg:block">
        <Footer />
      </div>
    </>
  )
}
