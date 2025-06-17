"use client"

export function Section508SkipLinks() {
  return (
    <div className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 z-50 bg-black text-white p-4 rounded-br-lg border border-green-500">
      <nav aria-label="Skip navigation links">
        <ul className="space-y-2">
          <li>
            <a
              href="#main-content"
              className="text-green-400 hover:text-green-300 underline focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Skip to main content
            </a>
          </li>
          <li>
            <a
              href="#navigation"
              className="text-green-400 hover:text-green-300 underline focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Skip to navigation
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-green-400 hover:text-green-300 underline focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Skip to contact information
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
