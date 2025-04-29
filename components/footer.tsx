import { Terminal } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-green-500/10 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Terminal className="h-5 w-5 text-green-500" />
            <span className="font-mono text-sm font-bold">
              <span className="text-green-500">Jaguar</span>@<span className="text-purple-500">linux-dev</span>
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <nav className="flex gap-4 md:gap-6">
              <Link href="#about" className="text-sm text-gray-400 hover:text-green-500 transition-colors">
                About
              </Link>
              <Link href="#skills" className="text-sm text-gray-400 hover:text-green-500 transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="text-sm text-gray-400 hover:text-green-500 transition-colors">
                Projects
              </Link>
              <Link href="#experience" className="text-sm text-gray-400 hover:text-green-500 transition-colors">
                Experience
              </Link>
              <Link href="#certifications" className="text-sm text-gray-400 hover:text-green-500 transition-colors">
                Certifications
              </Link>
              <Link href="#contact" className="text-sm text-gray-400 hover:text-green-500 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Jawher Belhaj Linux Developer. All rights reserved.
          </p>

          <div className="text-sm text-gray-500 font-mono">
            <span className="text-green-500">$</span> uptime |{" "}
            <span className="text-purple-500">6 years, 7 months, 12 days</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
