"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { ArrowUpRight, Github, Globe, Brain, TestTube, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function MobileProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const projects = [
    {
      title: "AI Coding Assistant",
      description:
        "Offline-first AI architect that analyzes codebases and converts natural language into development plans with reinforcement learning.",
      image: "/images/ai-coding-assistant.png",
      tags: ["AI", "Machine Learning", "Code Analysis"],
      github: "https://github.com/jawbelhaj/app-architect-explorer",
      demo: "https://app-architect-explorer.lovable.app/",
      icon: <Brain className="h-4 w-4 text-purple-500" />,
    },
    {
      title: "QualiTestAI",
      description:
        "Autonomous testing architect with polyglot AST parsing, mutation testing, and sandboxed CI/CD execution.",
      image: "/images/qualitestai.png",
      tags: ["AI Testing", "AST Parsing", "CI/CD"],
      github: "https://github.com/jawbelhaj/auto-test-alchemist",
      demo: "https://auto-test-alchemist.lovable.app/",
      icon: <TestTube className="h-4 w-4 text-purple-500" />,
    },
    {
      title: "Website Builder",
      description: "Smart web app builder with AI-generated content, WCAG AA compliance, and one-click deployment.",
      image: "/images/website-builder.png",
      tags: ["Web Development", "AI Content", "WCAG AA"],
      github: "https://github.com/jawbelhaj/site-spark-starter-kit",
      demo: "https://site-spark-starter-kit.lovable.app/",
      icon: <Code2 className="h-4 w-4 text-blue-500" />,
    },
  ]

  return (
    <section id="projects" className="py-12 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-purple-500/5" />

      <div
        ref={ref}
        className="container mx-auto px-4 mobile-safe"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "none" : "translateY(20px)",
          transition: "all 0.6s ease-out",
        }}
      >
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center flex items-center justify-center gap-2">
            <span className="text-green-500">#</span> Featured Projects
          </h2>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="mobile-card bg-gray-900/50 border border-green-500/20 rounded-lg overflow-hidden hover:border-green-500/40 transition-all duration-300"
              >
                {/* Project image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <div className="bg-black/80 backdrop-blur-sm rounded-full p-2 border border-green-500/20">
                      {project.icon}
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black/80 backdrop-blur-sm rounded-full p-2 border border-green-500/20 hover:bg-green-500/20 transition-colors"
                    >
                      <ArrowUpRight className="h-4 w-4 text-green-500" />
                    </a>
                  </div>
                </div>

                {/* Project content */}
                <div className="p-4 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="border-green-500/20 text-gray-300 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white flex-1" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white flex-1" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Globe className="h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10" asChild>
              <a href="https://github.com/jawbelhaj" target="_blank" rel="noopener noreferrer">
                View All Projects
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
