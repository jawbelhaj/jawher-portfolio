"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skills = [
    { name: "Linux System Administration", level: 95, category: "systems" },
    { name: "Shell Scripting (Bash/Python)", level: 90, category: "programming" },
    { name: "Network Security", level: 90, category: "security" },
    { name: "AI Development", level: 85, category: "ai" },
    { name: "Linux Kernel Development", level: 70, category: "systems" },
    { name: "DevOps (CI/CD, Docker, K8s)", level: 85, category: "devops" },
    { name: "Cloud Infrastructure (AWS/IBM)", level: 82, category: "cloud" },
    { name: "Database Management", level: 75, category: "database" },
    { name: "Offensive Cybersecurity Operations", level: 80, category: "security" },
  ]

  const technologies = {
    systems: ["Linux", "Bash", "Python", "C/C++", "QEMU", "KVM", "Systemd"],
    networking: ["Cisco", "Huawei", "SNMP", "Wireshark", "Nmap", "TLS/SSL", "VPN"],
    cloud: ["AWS", "IBM Cloud", "Docker", "Kubernetes", "Terraform", "Ansible"],
    development: ["JavaScript", "PHP", "ReactJS", "Node.js", "Git", "Jenkins"],
    security: ["Aircrack-ng", "Metasploit", "Burp Suite", "OWASP", "Penetration Testing"],
    ai: ["Machine Learning", "TensorFlow", "PyTorch", "NLP", "Computer Vision", "MLOps"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
    monitoring: ["Prometheus", "Grafana", "Nagios", "ELK Stack", "Zabbix"],
  }

  return (
    <section id="skills" className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Safe background code pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 overflow-hidden">
          <pre className="text-[0.5rem] text-green-500 whitespace-pre-wrap opacity-30 leading-relaxed">
            {`#!/bin/bash
# Advanced system monitoring and AI integration script
set -euo pipefail

# System metrics collection
collect_metrics() {
    echo "Collecting system metrics..."
    top -bn1 | grep "Cpu(s)"
    free -m | awk '/Mem/{printf "Memory: %.2f%%", $3/$2*100}'
    df -h / | awk '/\\// {print "Disk:", $(NF-1)}'
    netstat -ant | grep ESTABLISHED | wc -l
}

# AI model inference
run_ai_inference() {
    python3 -c "
import tensorflow as tf
import numpy as np
print('Loading AI model...')
print('Analyzing system patterns...')
print('Health score calculated')
"
}

# Kernel module management
manage_kernel_modules() {
    echo "Managing kernel modules..."
    lsmod | head -10
    echo "Custom modules loaded"
}

# Main execution
main() {
    echo "=== Advanced Linux System Management ==="
    collect_metrics
    run_ai_inference
    manage_kernel_modules
    
    echo "System monitoring active..."
}

main`}
          </pre>
        </div>
      </div>

      <div
        ref={ref}
        className="container mx-auto px-4 relative z-10"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "none" : "translateY(20px)",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
      >
        <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2">
          <span className="text-green-500">#</span> Technical Expertise
        </h2>

        <Tabs defaultValue="expertise" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 bg-gray-900/50 border border-green-500/20">
            <TabsTrigger
              value="expertise"
              className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-400"
            >
              Core Skills
            </TabsTrigger>
            <TabsTrigger
              value="technologies"
              className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-400"
            >
              Technologies
            </TabsTrigger>
            <TabsTrigger
              value="certifications"
              className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-400"
            >
              Certifications
            </TabsTrigger>
            <TabsTrigger
              value="achievements"
              className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-400"
            >
              Achievements
            </TabsTrigger>
          </TabsList>

          <TabsContent value="expertise" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {skills.slice(0, Math.ceil(skills.length / 2)).map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                      <span className="text-green-500 font-mono text-sm">{skill.level}%</span>
                    </div>
                    <Progress
                      value={skill.level}
                      className="h-3 bg-gray-800 rounded-full overflow-hidden"
                      indicatorClassName="bg-gradient-to-r from-green-500 to-emerald-400 transition-all duration-1000 ease-out"
                    />
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                {skills.slice(Math.ceil(skills.length / 2)).map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                      <span className="text-green-500 font-mono text-sm">{skill.level}%</span>
                    </div>
                    <Progress
                      value={skill.level}
                      className="h-3 bg-gray-800 rounded-full overflow-hidden"
                      indicatorClassName="bg-gradient-to-r from-green-500 to-emerald-400 transition-all duration-1000 ease-out"
                    />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="technologies" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(technologies).map(([category, techs]) => (
                <div
                  key={category}
                  className="bg-gray-900/30 border border-green-500/10 rounded-lg p-6 hover:border-green-500/30 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-green-400 mb-4 capitalize">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-green-500/20 text-gray-300 hover:bg-green-500/10 hover:border-green-500/40 transition-colors cursor-default"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="certifications" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Linux Kernel Development", issuer: "Linux Foundation", level: "Advanced" },
                { name: "AWS re/Start Graduate", issuer: "Amazon", level: "Professional" },
                { name: "HCIA Routing & Switching", issuer: "Huawei", level: "Professional" },
                { name: "Python Developer", issuer: "Sololearn", level: "Advanced" },
                { name: "Shell Scripting", issuer: "CodeSignal", level: "Intermediate" },
                { name: "Git Advanced", issuer: "CodeSignal", level: "Advanced" },
              ].map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-900/30 border border-green-500/10 rounded-lg p-4 hover:border-green-500/30 transition-colors"
                >
                  <h4 className="font-semibold text-white mb-1">{cert.name}</h4>
                  <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                  <Badge variant="outline" className="border-green-500/30 text-green-400">
                    {cert.level}
                  </Badge>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Professional Achievements</h3>
                {[
                  "Built 3 AI-powered development tools",
                  "Optimized enterprise Linux systems reducing downtime by 40%",
                  "Implemented security protocols protecting 50+ servers",
                  "Automated deployment processes saving 20+ hours/week",
                ].map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300">{achievement}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Technical Contributions</h3>
                {[
                  "Open source contributions to Linux kernel modules",
                  "Published AI testing frameworks on GitHub",
                  "Contributed to security vulnerability research",
                ].map((contribution, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300">{contribution}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
