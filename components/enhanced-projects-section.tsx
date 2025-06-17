"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { ArrowUpRight, Github, Globe, Brain, TestTube, Code2, Server, Zap, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function EnhancedProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const projects = [
    {
      title: "AI Coding Assistant",
      description:
        "An offline-first, autonomous AI architect for developers. It analyzes entire codebases at the pattern level, converts natural language into phased development plans, and continuously self-improves through reinforcement learning. With vector memory, multi-phase orchestration, and secure local execution.",
      highlight: "It codes, plans, and adapts—empowering developers with full control and zero cloud dependency.",
      image: "/images/ai-coding-assistant.png",
      tags: ["AI", "Machine Learning", "Code Analysis", "Offline-First"],
      github: "https://github.com/jawbelhaj/app-architect-explorer",
      demo: "https://app-architect-explorer.lovable.app/",
      icon: <Brain className="h-5 w-5 text-purple-500" />,
      featured: true,
      demoWorking: true,
    },
    {
      title: "QualiTestAI",
      description:
        "An autonomous testing architect that maps logic and dependencies to generate robust, risk-aware tests. Uses polyglot AST parsing, mutation testing, and sandboxed CI/CD to execute adaptive quality workflows.",
      highlight:
        "It reverse-engineers developer intent and stress-tests software with enterprise precision and safety.",
      image: "/images/qualitestai.png",
      tags: ["AI Testing", "AST Parsing", "Mutation Testing", "CI/CD"],
      github: "https://github.com/jawbelhaj/auto-test-alchemist",
      demo: "https://auto-test-alchemist.lovable.app/",
      icon: <TestTube className="h-5 w-5 text-purple-500" />,
      featured: true,
      demoWorking: true,
    },
    {
      title: "Website Builder",
      description:
        "A smart web app builder that turns business needs into high-performance, accessible digital products. Features include intelligent templates, AI-generated content, WCAG AA compliance, multi-framework code output, and one-click deployment. From blogs to PWAs.",
      highlight:
        "More than a site builder—it delivers enterprise-grade experiences with built-in SEO and optimization.",
      image: "/images/website-builder.png",
      tags: ["Web Development", "AI Content", "WCAG AA", "PWA"],
      github: "https://github.com/jawbelhaj/site-spark-starter-kit",
      demo: "https://site-spark-starter-kit.lovable.app/",
      icon: <Code2 className="h-5 w-5 text-blue-500" />,
      featured: true,
      demoWorking: true,
    },
    {
      title: "QEMU VM Memory Optimization",
      description:
        "Engineered advanced VM memory management system that prioritizes physical RAM allocation, implements ZRAM compression, and intelligently manages swap fallback. Achieved 80% reduction in memory overcommitment errors through cgroup-based limits and memory ballooning techniques.",
      highlight: "Transformed VM stability and performance through intelligent memory orchestration.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Linux", "QEMU", "Memory Management", "Performance"],
      github: "#",
      demo: "#",
      icon: <Server className="h-5 w-5 text-green-500" />,
      featured: true,
      metrics: "80% reduction in memory errors",
    },
    {
      title: "Distributed VM Lab Setup",
      description:
        "Designed and implemented a distributed VM deployment system to overcome hardware limitations. Built cross-platform orchestration pipeline: Linux → SSH → Windows 10 → QEMU → Pop!_OS VM with remote-viewer GUI access. Maximized performance while minimizing local resource usage.",
      highlight:
        "Creative engineering solution that turned resource constraints into distributed computing advantages.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["SSH", "QEMU", "Cross-Platform", "Resource Optimization"],
      github: "#",
      demo: "#",
      icon: <Zap className="h-5 w-5 text-yellow-500" />,
      featured: true,
      metrics: "Overcame hardware limitations",
    },
    {
      title: "Multi-Agent AI Security Platform",
      description:
        "Built distributed swarm intelligence architecture for adaptive AI decision making in security and system monitoring. Features asyncio-based coordination, FastAPI endpoints, and PyTorch-powered threat analysis with real-time response capabilities.",
      highlight: "Swarm intelligence meets cybersecurity - autonomous AI agents working in coordination.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Python", "AsyncIO", "FastAPI", "PyTorch", "Swarm AI"],
      github: "#",
      demo: "#",
      icon: <Shield className="h-5 w-5 text-red-500" />,
      featured: true,
      metrics: "Real-time threat detection",
    },
    {
      title: "Enterprise Security Monitoring System",
      description:
        "Deployment of Prometheus and Grafana monitoring and supervision solution. Developed comprehensive IDS with real-time anomaly detection, automated AI-driven security alerts, and enterprise-grade audit logging. Integrated with VMware environments and SNMP device monitoring.",
      highlight: "Saved 12 hours/week while reducing false positives by 40% through intelligent automation.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Python", "Prometheus", "Grafana", "Security", "Monitoring"],
      github: "#",
      demo: "#",
      icon: <Shield className="h-5 w-5 text-blue-500" />,
      featured: true,
      metrics: "40% fewer false positives, 12h/week saved",
      workHistory: "IRESA DevOps Monitoring Role",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-green-500/5 blur-[100px] rounded-full" />
      <div className="absolute bottom-1/4 left-0 w-1/4 h-1/4 bg-purple-500/5 blur-[100px] rounded-full" />

      <div
        ref={ref}
        className="container mx-auto px-4"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "none" : "translateY(20px)",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
      >
        <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2">
          <span className="text-green-500">#</span> Advanced Technical Projects
        </h2>

        <div className="grid lg:grid-cols-1 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-green-500/20 overflow-hidden hover:border-green-500/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,0,0.1)] group"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="bg-black/80 backdrop-blur-sm rounded-full p-2 border border-green-500/20">
                      {project.icon}
                    </div>
                  </div>
                  {project.metrics && (
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-black/80 backdrop-blur-sm rounded-lg p-2 border border-green-500/20">
                        <p className="text-green-400 text-sm font-medium">📊 {project.metrics}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl text-white flex items-center justify-between">
                        {project.title}
                        {project.demo !== "#" && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
                          >
                            <ArrowUpRight className="h-5 w-5 text-green-500" />
                          </a>
                        )}
                      </CardTitle>
                      {project.workHistory && (
                        <p className="text-sm text-purple-400 font-medium">🏢 From: {project.workHistory}</p>
                      )}
                    </CardHeader>

                    <CardContent className="p-0 mb-4">
                      <CardDescription className="text-gray-300 mb-3 leading-relaxed">
                        {project.description}
                      </CardDescription>

                      {project.highlight && (
                        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 mb-4">
                          <p className="text-green-400 text-sm font-medium flex items-start">
                            <span className="text-green-500 mr-2 mt-0.5">🎯</span>
                            {project.highlight}
                          </p>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="outline"
                            className="border-green-500/20 text-gray-300 hover:bg-green-500/10 hover:border-green-500/30 transition-colors"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </div>

                  <CardFooter className="p-0 flex justify-between">
                    {project.github !== "#" ? (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-white gap-2 hover:bg-gray-800/50"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                    ) : (
                      <div className="text-xs text-gray-500">Private Repository</div>
                    )}

                    {project.demo !== "#" ? (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-white gap-2 hover:bg-green-500/10"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <Globe className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    ) : (
                      <div className="text-xs text-gray-500">Internal System</div>
                    )}
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10" asChild>
            <a href="https://github.com/jawbelhaj" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
