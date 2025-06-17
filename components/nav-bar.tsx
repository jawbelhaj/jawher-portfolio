"use client"

import { useState, useEffect } from "react"
import { Terminal, Menu, X, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ]

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)

    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.offsetTop - 80 // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-green-500/20" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => handleNavClick("#")}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Terminal className="h-6 w-6 text-green-500" />
          <span className="font-mono text-lg font-bold">
            <span className="text-green-500">Jaguar</span>@<span className="text-purple-500">linux-dev</span>
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-gray-300 hover:text-green-400 transition-colors"
            >
              {link.name}
            </button>
          ))}
          <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10" asChild>
            <a
              href="/files/jawher-belhaj-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>
          </Button>
        </nav>

        <button className="md:hidden text-gray-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-green-500/20">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-gray-300 hover:text-green-400 transition-colors py-2 text-left"
              >
                {link.name}
              </button>
            ))}
            <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10 w-full" asChild>
              <a
                href="/files/jawher-belhaj-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <FileText className="h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
