"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Download, ExternalLink, TerminalIcon, Play, Pause, Shield } from "lucide-react"
import { EnhancedButton } from "@/components/ui/enhanced-button"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { StatsCounter } from "@/components/ui/stats-counter"
import { GovernmentSecurityBanner } from "@/components/ui/government-security-banner"

export function GovernmentGradeHeroSection() {
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
    <section
      id="main-content"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      role="main"
      aria-label="Hero section"
    >
      {/* Government-grade background effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] opacity-20" />
      <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:100px_100px] opacity-10" />

      {/* Professional gradient orbs */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[40vh] w-[40vh] bg-green-500 rounded-full opacity-10 blur-[100px] animate-pulse" />
        <div className="absolute h-[30vh] w-[30vh] bg-blue-500 rounded-full opacity-5 blur-[80px] animate-pulse delay-1000" />
        <div className="absolute h-[20vh] w-[20vh] bg-purple-500 rounded-full opacity-5 blur-[60px] animate-pulse delay-2000" />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Government security banner */}
          <GovernmentSecurityBanner />

          {/* Government-grade status indicator */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-sm font-mono mb-8 hover:bg-green-500/20 transition-all duration-300 group">
            <Shield className="animate-pulse mr-2 h-4 w-4 text-green-500" />
            <span>Government-Grade Security • Enterprise-Ready</span>
            <ExternalLink className="ml-2 h-3 w-3 group-hover:scale-110 transition-transform" />
          </div>

          {/* Professional main title */}
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="block mb-2">Jawher Belhaj</span>
            <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent">
              Elite Linux Solutions
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl text-gray-400 mt-4 font-normal">
              Government-Grade IT Specialist & AI Developer
            </span>
          </h1>

          {/* Government metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gradient-to-br from-green-900/30 to-green-800/20 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all">
              <div className="text-3xl font-bold text-green-400 mb-2">
                <StatsCounter end={1} suffix="+" />
              </div>
              <div className="text-sm text-gray-300 font-medium">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all">
              <div className="text-3xl font-bold text-blue-400 mb-2">
                <StatsCounter end={4} suffix="+" />
              </div>
              <div className="text-sm text-gray-300 font-medium">Projects Delivered</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                <StatsCounter end={12} suffix="+" />
              </div>
              <div className="text-sm text-gray-300 font-medium">Certifications</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 rounded-xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                <StatsCounter end={99} suffix="%" />
              </div>
              <div className="text-sm text-gray-300 font-medium">Security Score</div>
            </div>
          </div>

          {/* Government-grade typewriter effect */}
          {mounted && (
            <div className="h-20 mb-8 relative">
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
                    { text: "Government-Grade System Administration" },
                    { text: "Advanced Cybersecurity Operations" },
                    { text: "Enterprise Linux Infrastructure" },
                    { text: "AI-Powered Security Solutions" },
                    { text: "Kernel-Level System Optimization" },
                    { text: "Cloud Security Architecture" },
                    { text: "DevSecOps Pipeline Engineering" },
                    { text: "Compliance & Risk Management" },
                  ]}
                />
              )}
            </div>
          )}

          {/* Government value proposition */}
          <p className="text-gray-300 text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
            Delivering mission-critical Linux solutions with government-grade security standards. Specializing in
            FISMA-compliant infrastructure, AI-powered threat detection, and zero-trust architectures.
          </p>

          {/* Government-grade CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <EnhancedButton
              onClick={scrollToProjects}
              className="bg-green-500 hover:bg-green-600 text-black gap-3 px-10 py-4 text-xl font-semibold shadow-lg shadow-green-500/25"
              glow
            >
              View Security Solutions <ArrowRight className="h-6 w-6" />
            </EnhancedButton>
            <EnhancedButton
              variant="outline"
              className="border-green-500/50 text-green-400 hover:bg-green-500/10 px-10 py-4 text-xl font-semibold"
              asChild
            >
              <a
                href="/files/jawher-belhaj-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <Download className="h-6 w-6" />
                Security Clearance Resume
              </a>
            </EnhancedButton>
            <EnhancedButton
              onClick={scrollToContact}
              variant="ghost"
              className="text-gray-300 hover:text-white px-10 py-4 text-xl font-semibold hover:bg-gray-800/50"
            >
              Request Security Consultation
            </EnhancedButton>
          </div>

          {/* Government-grade terminal showcase */}
          <div className="max-w-5xl mx-auto bg-gray-900/90 border border-green-500/20 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,255,0,0.1)] backdrop-blur-sm group">
            <div className="bg-black/50 px-6 py-4 border-b border-green-500/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-4 h-4 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer" />
                  <div className="w-4 h-4 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer" />
                  <div className="w-4 h-4 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer" />
                </div>
                <div className="text-sm text-gray-400 font-mono ml-3 flex items-center gap-2">
                  <TerminalIcon className="h-4 w-4" />
                  <Shield className="h-4 w-4 text-green-500" />
                  secure-government-console
                </div>
              </div>
              <div className="text-sm text-gray-500 font-mono flex items-center gap-2">
                <span>CLASSIFIED</span>
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              </div>
            </div>
            <div className="p-8 font-mono text-base space-y-4 group-hover:bg-gray-900/70 transition-colors">
              <div className="flex items-center">
                <span className="text-green-500 mr-3">jaguar@gov-secure:~$</span>
                <span className="text-gray-300">systemctl status security-services</span>
              </div>
              <div className="text-green-400 ml-6 space-y-1">
                <div>● fisma-compliance.service - Active (running) ✓</div>
                <div>● threat-detection.service - Active (running) ✓</div>
                <div>● zero-trust-network.service - Active (running) ✓</div>
                <div>● ai-security-monitor.service - Active (running) ✓</div>
              </div>

              <div className="flex items-center mt-6">
                <span className="text-green-500 mr-3">jaguar@gov-secure:~$</span>
                <span className="text-gray-300">security-audit --full-scan</span>
              </div>
              <div className="text-blue-400 ml-6 space-y-1">
                <div>🛡️ Security Score: 99.7% (Government Grade)</div>
                <div>🔒 Encryption: AES-256 + Quantum-Resistant</div>
                <div>👁️ Monitoring: 24/7 AI-Powered SOC</div>
                <div>✅ Compliance: FISMA, NIST, ISO 27001</div>
              </div>

              <div className="flex items-center mt-6">
                <span className="text-green-500 mr-3">jaguar@gov-secure:~$</span>
                <span className="text-gray-300">uptime --mission-critical</span>
              </div>
              <div className="text-purple-400 ml-6">
                🚀 Mission uptime: 99.99% | Zero security incidents | Threat-free for 365+ days
              </div>

              <div className="flex items-center mt-6">
                <span className="text-green-500 mr-3">jaguar@gov-secure:~$</span>
                <span className="text-gray-300 animate-pulse">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Government-grade scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce group">
        <span className="text-sm text-gray-400 mb-3 font-mono group-hover:text-green-500 transition-colors flex items-center gap-2">
          <Shield className="h-3 w-3" />
          Explore Secure Solutions
        </span>
        <div className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center p-1 hover:border-green-500 transition-colors group-hover:shadow-lg group-hover:shadow-green-500/25">
          <div className="w-1.5 h-4 bg-gray-400 rounded-full animate-bounce-slow group-hover:bg-green-500 transition-colors" />
        </div>
      </div>
    </section>
  )
}
