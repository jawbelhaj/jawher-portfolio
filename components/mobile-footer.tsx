"use client"

import { Terminal, Github, Linkedin, Mail, Phone, MapPin, Heart } from "lucide-react"

export function MobileFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 border-t border-green-500/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-purple-500/5" />

      <div className="container mx-auto px-4 py-8 mobile-safe relative z-10">
        <div className="space-y-6">
          {/* Brand */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Terminal className="h-5 w-5 text-green-500" />
              <span className="font-mono text-lg font-bold">
                <span className="text-green-500">Jaguar</span>@<span className="text-purple-500">linux-dev</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
              IT Specialist & Linux Developer passionate about building secure, scalable solutions with AI-powered
              automation.
            </p>
          </div>

          {/* Quick links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
            {[
              { name: "About", href: "#about" },
              { name: "Skills", href: "#skills" },
              { name: "Projects", href: "#projects" },
              { name: "Experience", href: "#experience" },
              { name: "Certificates", href: "#certifications" },
              { name: "Contact", href: "#contact" },
            ].map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  const element = document.querySelector(link.href)
                  if (element) {
                    const offsetTop = element.offsetTop - 80
                    window.scrollTo({ top: offsetTop, behavior: "smooth" })
                  }
                }}
                className="text-gray-400 hover:text-green-500 transition-colors text-sm py-2"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Contact info */}
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
              <MapPin className="h-3 w-3 text-green-500" />
              <span>Tunis, Tunisia</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
              <Phone className="h-3 w-3 text-green-500" />
              <a href="tel:+21694722173" className="hover:text-green-500 transition-colors">
                +216 94 722 173
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
              <Mail className="h-3 w-3 text-green-500" />
              <a href="mailto:jawbelhaj@gmail.com" className="hover:text-green-500 transition-colors">
                jawbelhaj@gmail.com
              </a>
            </div>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/jawbelhaj"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900/50 p-3 rounded-lg border border-green-500/20 hover:bg-gray-800 hover:border-green-500/40 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4 text-green-500" />
            </a>
            <a
              href="https://www.linkedin.com/in/jawher-belhaj-2147031a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900/50 p-3 rounded-lg border border-green-500/20 hover:bg-gray-800 hover:border-green-500/40 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4 text-green-500" />
            </a>
            <a
              href="mailto:jawbelhaj@gmail.com"
              className="bg-gray-900/50 p-3 rounded-lg border border-green-500/20 hover:bg-gray-800 hover:border-green-500/40 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4 text-green-500" />
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-6 text-center space-y-2">
            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
              <span>&copy; {currentYear} Jawher Belhaj. Made with</span>
              <Heart className="h-3 w-3 text-red-500 fill-current" />
              <span>and</span>
              <Terminal className="h-3 w-3 text-green-500" />
            </div>
            <div className="text-xs text-gray-600">Built with Next.js, TypeScript, and Tailwind CSS</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
