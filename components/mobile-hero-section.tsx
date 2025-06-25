"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Download, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileHeroSection() {
  const [mounted, setMounted] = useState(false)
  const [currentText, setCurrentText] = useState("")

  const skills = ["Linux Specialist", "AI Developer", "System Admin", "Security Expert", "DevOps Engineer"]

  useEffect(() => {
    setMounted(true)

    let skillIndex = 0
    let charIndex = 0
    let isDeleting = false

    const typeEffect = () => {
      const currentSkill = skills[skillIndex]

      if (isDeleting) {
        setCurrentText(currentSkill.substring(0, charIndex - 1))
        charIndex--
      } else {
        setCurrentText(currentSkill.substring(0, charIndex + 1))
        charIndex++
      }

      if (!isDeleting && charIndex === currentSkill.length) {
        setTimeout(() => {
          isDeleting = true
        }, 1500)
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        skillIndex = (skillIndex + 1) % skills.length
      }

      setTimeout(typeEffect, isDeleting ? 50 : 100)
    }

    typeEffect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Mobile-optimized background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-purple-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.1)_0%,transparent_50%)]" />

      <div className="container mx-auto px-4 py-8 relative z-10 mobile-safe">
        <div className="text-center space-y-6">
          {/* Status indicator */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2" />
            Available for hire
          </div>

          {/* Main title - mobile optimized */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
              <span className="block text-white">Jawher Belhaj</span>
              <span className="block bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                IT Specialist
              </span>
            </h1>

            {/* Typewriter effect - mobile friendly */}
            <div className="h-12 flex items-center justify-center">
              <div className="text-xl sm:text-2xl font-semibold text-gray-300">
                {currentText}
                <span className="animate-pulse text-green-500">|</span>
              </div>
            </div>
          </div>

          {/* Description - mobile optimized */}
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            Building secure, scalable Linux solutions with AI-powered automation. Specializing in enterprise
            infrastructure and cybersecurity.
          </p>

          {/* Stats - mobile grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-gray-900/50 rounded-lg p-3 border border-green-500/20">
              <div className="text-lg sm:text-xl font-bold text-green-400">1+</div>
              <div className="text-xs text-gray-400">Years Exp</div>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-3 border border-blue-500/20">
              <div className="text-lg sm:text-xl font-bold text-blue-400">4+</div>
              <div className="text-xs text-gray-400">Projects</div>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-3 border border-purple-500/20">
              <div className="text-lg sm:text-xl font-bold text-purple-400">12+</div>
              <div className="text-xs text-gray-400">Certificates</div>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-3 border border-yellow-500/20">
              <div className="text-lg sm:text-xl font-bold text-yellow-400">99%</div>
              <div className="text-xs text-gray-400">Uptime</div>
            </div>
          </div>

          {/* CTA buttons - mobile stack */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button
              onClick={() => scrollToSection("#projects")}
              className="bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-green-500/25"
            >
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="border-green-500/50 text-green-400 hover:bg-green-500/10 font-semibold py-3 px-6 rounded-lg"
              asChild
            >
              <a
                href="/files/jawher-belhaj-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Terminal showcase - mobile optimized */}
          <div className="max-w-full mx-auto bg-gray-900/90 border border-green-500/20 rounded-lg overflow-hidden shadow-lg backdrop-blur-sm">
            <div className="bg-black/50 px-4 py-2 border-b border-green-500/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-xs text-gray-400 font-mono ml-2 flex items-center gap-1">
                  <Terminal className="h-3 w-3" />
                  terminal
                </div>
              </div>
            </div>
            <div className="p-4 font-mono text-sm space-y-2 text-left">
              <div className="flex flex-wrap items-center">
                <span className="text-green-500 mr-2">$</span>
                <span className="text-gray-300">whoami</span>
              </div>
              <div className="text-purple-400 ml-4">Linux Developer & AI Specialist</div>

              <div className="flex flex-wrap items-center mt-3">
                <span className="text-green-500 mr-2">$</span>
                <span className="text-gray-300">cat skills.txt</span>
              </div>
              <div className="text-blue-400 ml-4 space-y-1 text-xs sm:text-sm">
                <div>✓ System Administration</div>
                <div>✓ Network Security</div>
                <div>✓ AI Development</div>
                <div>✓ DevOps Engineering</div>
              </div>

              <div className="flex flex-wrap items-center mt-3">
                <span className="text-green-500 mr-2">$</span>
                <span className="text-gray-300 animate-pulse">_</span>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="flex flex-col items-center animate-bounce mt-8">
            <span className="text-xs text-gray-400 mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
              <div className="w-1 h-3 bg-gray-400 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
