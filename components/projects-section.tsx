"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { ArrowUpRight, Github, Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const projects = [
    {
      title: "Linux Security Hardening Tool",
      description:
        "An automated security hardening tool for Linux servers that implements industry best practices and compliance standards.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Bash", "Python", "Security", "Automation"],
      github: "#",
      demo: "#",
    },
    {
      title: "Custom Kernel Module",
      description: "A Linux kernel module for optimizing I/O operations in high-throughput database environments.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["C", "Kernel", "Performance", "Linux"],
      github: "#",
      demo: "#",
    },
    {
      title: "Network Monitoring Dashboard",
      description: "Real-time network monitoring dashboard with anomaly detection and alerting capabilities.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Python", "React", "Prometheus", "Grafana"],
      github: "#",
      demo: "#",
    },
    {
      title: "Containerized Deployment Pipeline",
      description: "A complete CI/CD pipeline for containerized applications with automated testing and deployment.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Docker", "Kubernetes", "Jenkins", "GitOps"],
      github: "#",
      demo: "#",
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
          <span className="text-green-500">#</span> Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-green-500/20 overflow-hidden hover:border-green-500/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,0,0.1)]"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center justify-between">
                  {project.title}
                  <ArrowUpRight className="h-5 w-5 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
                <CardDescription className="text-gray-400">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-black/30 border border-green-500/10 rounded-md text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white gap-2">
                  <Github className="h-4 w-4" />
                  Code
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white gap-2">
                  <Globe className="h-4 w-4" />
                  Live Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
