"use client"

import { useEffect, useState } from "react"
import { Terminal, Code2, Server, Shield, Cpu, Database } from "lucide-react"

export function FloatingElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const icons = [Terminal, Code2, Server, Shield, Cpu, Database]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {icons.map((Icon, index) => (
        <div
          key={index}
          className="absolute opacity-5 text-green-500"
          style={{
            left: `${10 + index * 15}%`,
            top: `${20 + index * 10}%`,
            animationDelay: `${index * 2}s`,
            animation: `float 20s infinite linear`,
          }}
        >
          <Icon className="h-8 w-8" />
        </div>
      ))}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(100vh) rotate(0deg); }
          100% { transform: translateY(-100px) rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
