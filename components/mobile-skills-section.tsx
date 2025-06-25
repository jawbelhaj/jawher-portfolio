"use client"

import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export function MobileSkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeTab, setActiveTab] = useState("skills")

  const skills = [
    { name: "Linux Administration", level: 95 },
    { name: "Python Development", level: 92 },
    { name: "Network Security", level: 88 },
    { name: "AI/ML Development", level: 85 },
    { name: "DevOps Engineering", level: 82 },
    { name: "QEMU/KVM", level: 87 },
  ]

  const technologies = {
    systems: ["Linux", "QEMU/KVM", "Bash", "SSH", "Systemd"],
    programming: ["Python", "Rust", "JavaScript", "C/C++", "SQL"],
    ai: ["PyTorch", "TensorFlow", "Transformers", "OpenAI", "Whisper"],
    security: ["Network Security", "Penetration Testing", "IDS", "Firewalls"],
    devops: ["Docker", "Kubernetes", "CI/CD", "Ansible", "Jenkins"],
    cloud: ["AWS", "IBM Cloud", "Terraform", "Prometheus", "Grafana"],
  }

  const tabs = [
    { id: "skills", name: "Skills" },
    { id: "tech", name: "Tech Stack" },
    { id: "certs", name: "Certificates" },
  ]

  return (
    <section id="skills" className="py-12 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-green-500/5" />

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
            <span className="text-green-500">#</span> Technical Skills
          </h2>

          {/* Mobile tabs */}
          <div className="flex justify-center">
            <div className="flex bg-gray-900/50 border border-green-500/20 rounded-lg p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab.id ? "bg-green-500/20 text-green-400" : "text-gray-400 hover:text-green-400"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          {/* Skills tab */}
          {activeTab === "skills" && (
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                    <span className="text-green-500 font-mono text-sm">{skill.level}%</span>
                  </div>
                  <Progress
                    value={skill.level}
                    className="h-2 bg-gray-800 rounded-full overflow-hidden"
                    indicatorClassName="bg-gradient-to-r from-green-500 to-emerald-400 transition-all duration-1000 ease-out"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Tech stack tab */}
          {activeTab === "tech" && (
            <div className="space-y-6">
              {Object.entries(technologies).map(([category, techs]) => (
                <div key={category} className="space-y-3">
                  <h3 className="text-lg font-semibold text-green-400 capitalize">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-green-500/20 text-gray-300 hover:bg-green-500/10 transition-colors text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Certificates tab */}
          {activeTab === "certs" && (
            <div className="space-y-4">
              {[
                { name: "Linux Kernel Development", issuer: "Linux Foundation", year: "2025" },
                { name: "AWS re/Start Graduate", issuer: "Amazon", year: "2021" },
                { name: "HCIA Routing & Switching", issuer: "Huawei", year: "2024" },
                { name: "Python Developer", issuer: "Sololearn", year: "2025" },
                { name: "Big Data Engineer", issuer: "IBM", year: "2021" },
                { name: "Cloud Application Developer", issuer: "IBM", year: "2021" },
              ].map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-900/30 border border-green-500/10 rounded-lg p-4 hover:border-green-500/30 transition-colors"
                >
                  <h4 className="font-semibold text-white text-sm">{cert.name}</h4>
                  <p className="text-gray-400 text-xs mt-1">
                    {cert.issuer} • {cert.year}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
