"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Download, ExternalLink, TerminalIcon, Play, Pause } from "lucide-react"
import { EnhancedButton } from "@/components/ui/enhanced-button"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { StatsCounter } from "@/components/ui/stats-counter"

export function EnhancedHeroSection() {
  const [mounted, setMounted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToProjects = () => {
    const element = document.querySelector("#projects")
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] opacity-20" />
      <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:100px_100px] opacity-10" />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[40vh] w-[40vh] bg-green-500 rounded-full opacity-10 blur-[100px] animate-pulse" />
        <div className="absolute h-[30vh] w-[30vh] bg-purple-500 rounded-full opacity-5 blur-[80px] animate-pulse delay-1000" />
        <div className="absolute h-[20vh] w-[20vh] bg-blue-500 rounded-full opacity-5 blur-[60px] animate-pulse delay-2000" />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Enhanced status indicator */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-sm font-mono mb-8 hover:bg-green-500/20 transition-colors group">
            <span className="animate-pulse mr-2 h-2 w-2 bg-green-500 rounded-full"></span>
            <span>Available for hire</span>
            <ExternalLink className="ml-2 h-3 w-3 group-hover:scale-110 transition-transform" />
          </div>

          {/* Enhanced main title with gradient */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            IT Specialist &{" "}
            <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent animate-pulse">
              Linux Developer
            </span>
          </h1>

          {/* Stats section */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-500">
                <StatsCounter end={1} suffix="+" />
              </div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-500">
                <StatsCounter end={4} suffix="+" />
              </div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500">
                <StatsCounter end={12} suffix="+" />
              </div>
              <div className="text-sm text-gray-400">Certifications</div>
            </div>
          </div>

          {/* Enhanced typewriter effect */}
          {mounted && (
            <div className="h-16 mb-8 relative">
              <div className="absolute top-0 right-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 rounded-full bg-gray-900/50 border border-green-500/20 hover:bg-green-500/10 transition-colors"
                  aria-label={isPlaying ? "Pause animation" : "Play animation"}
                >
                  {isPlaying ? (
                    <Pause className="h-3 w-3 text-green-500" />
                  ) : (
                    <Play className="h-3 w-3 text-green-500" />
                  )}
                </button>
              </div>
              {isPlaying && (
                <TypewriterEffect
                  words={[
                    { text: "System Administration" },
                    { text: "Network Security" },
                    { text: "Linux Operations & Maintenance" },
                    { text: "AI Development" },
                    { text: "Kernel Development" },
                    { text: "Cloud Management" },
                    { text: "Shell Scripting (Bash)" },
                    { text: "DevOps Engineering" },
                    { text: "Offensive Cybersecurity Operations" },
                  ]}
                />
              )}
            </div>
          )}

          {/* Enhanced description */}
          <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Building robust, secure, and scalable Linux solutions in enterprise IT infrastructure. Specializing in
            AI-powered development tools and autonomous testing systems.
          </p>

          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <EnhancedButton
              onClick={scrollToProjects}
              className="bg-green-500 hover:bg-green-600 text-black gap-2 px-8 py-3 text-lg font-semibold"
              glow
            >
              View Projects <ArrowRight className="h-5 w-5" />
            </EnhancedButton>
            <EnhancedButton
              variant="outline"
              className="border-green-500/50 text-green-400 hover:bg-green-500/10 px-8 py-3 text-lg font-semibold"
              asChild
            >
              <a
                href="/files/jawher-belhaj-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Download className="h-5 w-5" />
                Download CV
              </a>
            </EnhancedButton>
            <EnhancedButton
              onClick={scrollToContact}
              variant="ghost"
              className="text-gray-300 hover:text-white px-8 py-3 text-lg font-semibold hover:bg-gray-800/50"
            >
              Contact Me
            </EnhancedButton>
          </div>

          {/* Enhanced terminal decoration */}
          <div className="max-w-4xl mx-auto bg-gray-900/90 border border-green-500/20 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,255,0,0.1)] backdrop-blur-sm group">
            <div className="bg-black/50 px-4 py-3 border-b border-green-500/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer" />
                  <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer" />
                </div>
                <div className="text-xs text-gray-400 font-mono ml-2 flex items-center gap-1">
                  <TerminalIcon className="h-3 w-3" />
                  ~/Jaguar
                </div>
              </div>
              <div className="text-xs text-gray-500 font-mono">bash 5.1.16</div>
            </div>
            <div className="p-6 font-mono text-sm space-y-3 group-hover:bg-gray-900/70 transition-colors">
              <div className="flex items-center">
                <span className="text-green-500 mr-2">$</span>
                <span className="text-gray-300">whoami</span>
              </div>
              <div className="text-purple-400 ml-4">Linux Developer & AI Architect</div>

              <div className="flex items-center mt-4">
                <span className="text-green-500 mr-2">$</span>
                <span className="text-gray-300">ls -la skills/</span>
              </div>
              <div className="text-blue-400 ml-4 space-y-1">
                <div>drwxr-xr-x System Administration</div>
                <div>drwxr-xr-x Network Security</div>
                <div>drwxr-xr-x Linux Operations & Maintenance</div>
                <div>drwxr-xr-x AI Development</div>
                <div>drwxr-xr-x Cloud Management</div>
                <div>drwxr-xr-x Shell Scripting</div>
                <div>drwxr-xr-x DevOps Engineering</div>
                <div>drwxr-xr-x Offensive Cybersecurity</div>
              </div>

              <div className="flex items-center mt-4">
                <span className="text-green-500 mr-2">$</span>
                <span className="text-gray-300">cat contact.txt</span>
              </div>
              <div className="text-yellow-400 ml-4">Ready to solve your complex IT challenges</div>

              <div className="flex items-center mt-4">
                <span className="text-green-500 mr-2">$</span>
                <span className="text-gray-300 animate-pulse">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce group">
        <span className="text-sm text-gray-400 mb-2 font-mono group-hover:text-green-500 transition-colors">
          scroll_down
        </span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1 hover:border-green-500 transition-colors group-hover:shadow-lg group-hover:shadow-green-500/25">
          <div className="w-1 h-3 bg-gray-400 rounded-full animate-bounce-slow group-hover:bg-green-500 transition-colors" />
        </div>
      </div>
    </section>
  )
}
