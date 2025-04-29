"use client"

import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] opacity-20" />

      {/* Animated gradient background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[40vh] w-[40vh] bg-green-500 rounded-full opacity-10 blur-[100px] animate-pulse" />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-sm font-mono mb-6">
            <span className="animate-pulse mr-2">●</span> Available for hire
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IT Specialist & <span className="text-green-500">Linux Developer</span>
          </h1>

          {mounted && (
            <div className="h-16 mb-8">
              <TypewriterEffect
                words={[
                  { text: "System Administration" },
                  { text: "Network Security" },
                  { text: "Linux Operations and Maintenance" },
                  { text: "Kernel Development" },
                  { text: "Cloud Management" },
                  { text: "Shell Scripting(Bash)" },
                  { text: "DevOps Engineering" },
                  { text: "Offensive Cybersecurity Operations" },
                ]}
              />
            </div>
          )}

          <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Building robust, secure, and scalable Linux solutions in enterprise IT
            infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-green-500 hover:bg-green-600 text-black gap-2">
              View Projects <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10">
              Contact Me
            </Button>
          </div>

          {/* Terminal decoration */}
          <div className="mt-16 max-w-2xl mx-auto bg-gray-900/80 border border-green-500/20 rounded-lg overflow-hidden shadow-[0_0_15px_rgba(0,255,0,0.1)]">
            <div className="bg-black/50 px-4 py-2 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-xs text-gray-400 font-mono ml-2">~/Jaguar</div>
            </div>
            <div className="p-4 font-mono text-sm">
              <div className="flex">
                <span className="text-green-500 mr-2">$</span>
                <span className="text-gray-300">whoami</span>
              </div>
              <div className="text-purple-400 mt-1">Linux Developer</div>
              <div className="flex mt-2">
                <span className="text-green-500 mr-2">$</span>
                <span className="text-gray-300">ls -la skills/</span>
              </div>
              <div className="text-blue-400 mt-1">
                System Administration | Network Security | Linux Operations and Maintenance | Cloud Management | Shell Scripting | DevOps | Offensive Cybersecurity Operations
              </div>
              <div className="flex mt-2">
                <span className="text-green-500 mr-2">$</span>
                <span className="text-gray-300">cat contact.txt</span>
              </div>
              <div className="text-yellow-400 mt-1">Ready to solve your complex IT challenges</div>
              <div className="flex mt-2">
                <span className="text-green-500 mr-2">$</span>
                <span className="text-gray-300 animate-pulse">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce-slow" />
        </div>
      </div>
    </section>
  )
}
