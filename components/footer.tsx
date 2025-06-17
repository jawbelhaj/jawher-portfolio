"use client"

import { Terminal, Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const startYear = 2018 // When you started your career
  const yearsOfExperience = currentYear - startYear

  return (
    <footer className="bg-gray-950 border-t border-green-500/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-green-500/5 blur-[100px]" />

      <div className="container mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="h-6 w-6 text-green-500" />
              <span className="font-mono text-xl font-bold">
                <span className="text-green-500">Jaguar</span>@<span className="text-purple-500">linux-dev</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md leading-relaxed">
              IT Specialist & Linux Developer passionate about building robust, secure, and scalable solutions.
              Specializing in AI-powered development tools and enterprise infrastructure.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/jawbelhaj"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 p-2 rounded-lg border border-green-500/20 hover:bg-gray-800 hover:border-green-500/40 transition-colors group"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4 text-green-500 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/jawher-belhaj-2147031a5/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 p-2 rounded-lg border border-green-500/20 hover:bg-gray-800 hover:border-green-500/40 transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-green-500 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:jawbelhaj@gmail.com"
                className="bg-gray-900 p-2 rounded-lg border border-green-500/20 hover:bg-gray-800 hover:border-green-500/40 transition-colors group"
                aria-label="Email"
              >
                <Mail className="h-4 w-4 text-green-500 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {[
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Experience", href: "#experience" },
                { name: "Certifications", href: "#certifications" },
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
                  className="block text-gray-400 hover:text-green-500 transition-colors text-sm"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span>Tunis, Tunisia</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="h-4 w-4 text-green-500 flex-shrink-0" />
                <a href="tel:+21694722173" className="hover:text-green-500 transition-colors">
                  +216 94 722 173
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="h-4 w-4 text-green-500 flex-shrink-0" />
                <a href="mailto:jawbelhaj@gmail.com" className="hover:text-green-500 transition-colors">
                  jawbelhaj@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span>&copy; {currentYear} Jawher Belhaj. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>and lots of</span>
              <Terminal className="h-4 w-4 text-green-500" />
            </div>

            {/* System info */}
            <div className="flex items-center gap-4 text-sm text-gray-500 font-mono">
              <div className="flex items-center gap-2">
                <span className="text-green-500">$</span>
                <span>uptime</span>
                <span className="text-purple-500">{yearsOfExperience} years</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">$</span>
                <span>status</span>
                <span className="text-green-400">available</span>
              </div>
            </div>
          </div>

          {/* Additional info */}
          <div className="mt-4 pt-4 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-600">
            <div>Built with Next.js, TypeScript, and Tailwind CSS</div>
            <div className="flex items-center gap-4">
              <a
                href="/files/jawher-belhaj-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-green-500 transition-colors"
              >
                <ExternalLink className="h-3 w-3" />
                Resume
              </a>
              <span>•</span>
              <span>Last updated: {new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
