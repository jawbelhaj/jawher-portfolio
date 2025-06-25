"use client"

import { Shield, Lock, Eye, CheckCircle } from "lucide-react"

export function GovernmentSecurityBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-900/20 via-green-900/20 to-blue-900/20 border border-green-500/30 rounded-lg p-4 mb-8">
      <div className="flex items-center justify-center gap-6 text-sm">
        <div className="flex items-center gap-2 text-green-400">
          <Shield className="h-4 w-4" />
          <span>Security Compliant</span>
        </div>
        <div className="flex items-center gap-2 text-blue-400">
          <Lock className="h-4 w-4" />
          <span>Data Protected</span>
        </div>
        <div className="flex items-center gap-2 text-purple-400">
          <Eye className="h-4 w-4" />
          <span>WCAG AA Accessible</span>
        </div>
        <div className="flex items-center gap-2 text-yellow-400">
          <CheckCircle className="h-4 w-4" />
          <span>Government Grade</span>
        </div>
      </div>
    </div>
  )
}
