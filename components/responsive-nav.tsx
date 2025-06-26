"use client"

import { MobileNav } from "@/components/mobile-nav"
import { MobileOptimizedNav } from "@/components/ui/mobile-optimized-nav"

export function ResponsiveNav() {
  return (
    <>
      <div className="lg:hidden">
        <MobileNav />
      </div>
      <div className="hidden lg:block">
        <MobileOptimizedNav />
      </div>
    </>
  )
}
