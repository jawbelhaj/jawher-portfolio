"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Server, Shield, Cpu, GitBranch, Brain } from "lucide-react"
import Image from "next/image"

export function MobileAboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" className="py-12 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-purple-500/5" />

      <div
        ref={ref}
        className="container mx-auto px-4 mobile-safe"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "none" : "translateY(20px)",
          transition: "all 0.6s ease-out",
        }}
      >
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center flex items-center justify-center gap-2">
            <span className="text-green-500">#</span> About Me
          </h2>

          {/* Profile image - mobile first */}
          <div className="flex justify-center">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56">
              <div className="relative w-full h-full border-2 border-green-500/30 rounded-lg overflow-hidden">
                <div className="bg-black/80 px-3 py-2 border-b border-green-500/30 flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <div className="text-xs text-gray-400 font-mono">profile.jpg</div>
                </div>
                <div className="relative w-full h-full">
                  <Image
                    src="/images/profile.jpg"
                    alt="Jawher Belhaj - IT Specialist & Linux Developer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 192px, 224px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 text-center">
            <p className="text-gray-300 text-base leading-relaxed">
              I'm a passionate IT Specialist and Linux Developer with extensive experience in designing, implementing,
              and maintaining enterprise-grade Linux systems.
            </p>

            <p className="text-gray-300 text-base leading-relaxed">
              My expertise spans advanced system administration, AI-powered security solutions, and distributed
              computing architectures with experience in security-sensitive environments.
            </p>

            {/* Skills grid - mobile optimized */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-3 p-3 bg-gray-900/30 rounded-lg border border-green-500/20">
                <Server className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">System Administration</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-900/30 rounded-lg border border-purple-500/20">
                <Brain className="h-5 w-5 text-purple-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">AI Development</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-900/30 rounded-lg border border-blue-500/20">
                <Shield className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Network Security</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-900/30 rounded-lg border border-yellow-500/20">
                <Cpu className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Virtualization</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-900/30 rounded-lg border border-red-500/20 sm:col-span-2">
                <GitBranch className="h-5 w-5 text-red-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">DevOps Engineering</span>
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-gray-900/30 border border-green-500/20 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-green-400 mb-3">Key Achievements</h3>
              <div className="space-y-2 text-sm text-gray-300 text-left">
                <div className="flex items-start gap-2">
                  <span className="text-green-500 mt-1 flex-shrink-0">•</span>
                  <span>80% reduction in VM memory errors through QEMU optimization</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 mt-1 flex-shrink-0">•</span>
                  <span>Built distributed VM orchestration across platforms</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 mt-1 flex-shrink-0">•</span>
                  <span>Developed multi-agent AI security platform</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 mt-1 flex-shrink-0">•</span>
                  <span>Security-sensitive projects in defense environments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
