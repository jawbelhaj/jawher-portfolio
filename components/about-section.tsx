"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Code2, Server, Shield, Cpu, GitBranch } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-500/5 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-500/5 blur-[100px] rounded-full" />

      <div
        ref={ref}
        className="container mx-auto px-4"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "none" : "translateY(20px)",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
      >
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <span className="text-green-500">#</span> About Me
            </h2>

            <p className="text-gray-300 mb-6">
              I'm a passionate IT Specialist and Linux Developer with extensive experience in designing, implementing,
              and maintaining enterprise-grade Linux systems. My expertise spans across system administration, network
              security, and custom Linux kernel development.
            </p>

            <p className="text-gray-300 mb-6">
              With a deep understanding of Linux internals and a problem-solving mindset, I specialize in optimizing
              system performance, hardening security, and automating complex IT workflows. I'm committed to open-source
              principles and continuously contribute to the Linux community.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Server className="h-5 w-5 text-green-500" />
                <span className="text-gray-300">System Administration</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-500" />
                <span className="text-gray-300">Network Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="h-5 w-5 text-green-500" />
                <span className="text-gray-300">Shell Scripting</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="h-5 w-5 text-green-500" />
                <span className="text-gray-300">Kernel Development</span>
              </div>
              <div className="flex items-center gap-2 sm:col-span-2">
                <GitBranch className="h-5 w-5 text-green-500" />
                <span className="text-gray-300">DevOps Engineering</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative order-1 lg:order-2">
            <div className="relative w-full max-w-md mx-auto">
              {/* Profile image with terminal-like frame */}
              <div className="relative aspect-square border-2 border-green-500/30 rounded-lg overflow-hidden">
                <div className="bg-black/80 px-4 py-2 border-b border-green-500/30 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-xs text-gray-400 font-mono ml-2">~/profile.jpg</div>
                </div>
                <div className="relative w-full h-full">
                  <Image
                    src="/images/profile.jpg"
                    alt="IT Specialist & Linux Developer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
