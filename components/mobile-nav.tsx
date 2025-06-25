"use client"

import { useState, useEffect } from "react"
import { Terminal, Menu, X, FileText, Home, User, Code, Briefcase, Award, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileNav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Update active section
      const sections = ["about", "skills", "projects", "experience", "certifications", "contact"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      setActiveSection(currentSection || "")
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Certificates", href: "#certifications", icon: Award },
    { name: "Contact", href: "#contact", icon: Mail },
  ]

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      <header className={`mobile-nav ${isScrolled ? "bg-black/95" : "bg-transparent"} transition-all duration-300`}>
        <div className="container mx-auto px-4 py-3 flex items-center justify-between mobile-safe">
          <button
            onClick={() => handleNavClick("#")}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Terminal className="h-5 w-5 text-green-500" />
            <span className="font-mono text-base font-bold">
              <span className="text-green-500">Jaguar</span>@<span className="text-purple-500">dev</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4">
            {navLinks.slice(1).map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-colors px-3 py-2 rounded-md ${
                  activeSection === link.href.replace("#", "")
                    ? "text-green-400 bg-green-500/10"
                    : "text-gray-300 hover:text-green-400"
                }`}
              >
                {link.name}
              </button>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="border-green-500 text-green-500 hover:bg-green-500/10"
              asChild
            >
              <a
                href="/files/jawher-belhaj-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <FileText className="h-3 w-3" />
                CV
              </a>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-800/50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5 text-gray-300" /> : <Menu className="h-5 w-5 text-gray-300" />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <>
          <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gray-900/98 backdrop-blur-md border-l border-green-500/20 z-50 mobile-safe">
            <div className="flex items-center justify-between p-4 border-b border-green-500/20">
              <span className="font-mono text-lg font-bold text-green-500">Menu</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-md hover:bg-gray-800/50 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-5 w-5 text-gray-300" />
              </button>
            </div>
            <nav className="p-4 space-y-2">
              {navLinks.map((link) => {
                const Icon = link.icon
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeSection === link.href.replace("#", "") || (link.href === "#" && activeSection === "")
                        ? "text-green-400 bg-green-500/10 border border-green-500/20"
                        : "text-gray-300 hover:text-green-400 hover:bg-gray-800/50"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {link.name}
                  </button>
                )
              })}
              <div className="pt-4 border-t border-gray-800">
                <Button
                  variant="outline"
                  className="w-full border-green-500 text-green-500 hover:bg-green-500/10"
                  asChild
                >
                  <a
                    href="/files/jawher-belhaj-cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <FileText className="h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  )
}
