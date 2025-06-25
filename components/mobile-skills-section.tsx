"use client"

import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export function MobileSkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeTab, setActiveTab] = useState("expertise")

  const skills = [
    { name: "Linux System Administration", level: 95, category: "systems" },
    { name: "Python Development (Advanced)", level: 92, category: "programming" },
    { name: "AI/ML with PyTorch", level: 85, category: "ai" },
    { name: "Distributed VM Orchestration", level: 90, category: "systems" },
    { name: "Network Security & Monitoring", level: 88, category: "security" },
    { name: "Docker Containerization", level: 80, category: "devops" },
    { name: "Prometheus & Grafana", level: 82, category: "monitoring" },
    { name: "Cross-Platform Integration", level: 85, category: "systems" },
    { name: "FastAPI & Async Systems", level: 88, category: "programming" },
    { name: "QEMU/KVM Virtualization", level: 87, category: "systems" },
    { name: "Multi-Agent AI Systems", level: 83, category: "ai" },
    { name: "Resource Optimization Engineering", level: 89, category: "systems" },
  ]

  const technologies = {
    systems: ["Linux", "QEMU/KVM", "SSH", "Bash", "Systemd", "cgroups", "ZRAM", "remote-viewer"],
    programming: ["Python", "Rust", "FastAPI", "asyncio", "PyTorch", "Transformers", "Whisper", "Coqui TTS"],
    ai: ["PyTorch", "LLaMA/Mistral", "Multi-Modal AI", "Voice-First AI", "Swarm Intelligence", "Real-time Inference"],
    security: [
      "Network Security",
      "IDS",
      "Anomaly Detection",
      "Threat Detection",
      "Security Monitoring",
      "Penetration Testing",
    ],
    devops: ["Docker", "CI/CD", "Multi-stage Builds", "Microservices", "Load Balancing", "Automation"],
    monitoring: ["Prometheus", "Grafana", "SNMP", "ELK Stack", "Real-time Alerting", "Performance Metrics"],
    cloud: ["AWS", "IBM Cloud", "Distributed Computing", "Remote Orchestration", "Hybrid Architectures"],
    networking: ["Cisco", "Huawei", "SNMP", "TLS/SSL", "VPN", "Network Scanning", "Wireshark"],
  }

  const specializations = [
    {
      name: "Distributed VM Orchestration",
      description: "Cross-platform resource management via SSH",
      level: "Expert",
    },
    {
      name: "AI-Powered Security Monitoring",
      description: "Real-time threat detection with ML models",
      level: "Advanced",
    },
    {
      name: "Multi-Agent AI Systems",
      description: "Swarm intelligence and distributed AI coordination",
      level: "Advanced",
    },
    {
      name: "Linux Kernel Optimization",
      description: "Custom configurations and performance tuning",
      level: "Expert",
    },
    {
      name: "Voice-First AI Integration",
      description: "Multi-modal AI with voice command systems",
      level: "Advanced",
    },
    {
      name: "Resource Constraint Engineering",
      description: "Creative solutions for hardware limitations",
      level: "Expert",
    },
  ]

  const certifications = [
    { name: "Linux Kernel Development", issuer: "Linux Foundation", level: "Advanced" },
    { name: "AWS re/Start Graduate", issuer: "Amazon", level: "Professional" },
    { name: "HCIA Routing & Switching", issuer: "Huawei", level: "Professional" },
    { name: "Python Developer", issuer: "Sololearn", level: "Advanced" },
    { name: "Shell Scripting", issuer: "CodeSignal", level: "Intermediate" },
    { name: "Git Advanced", issuer: "CodeSignal", level: "Advanced" },
  ]

  const achievements = {
    technical: [
      "80% reduction in VM memory overcommitment errors",
      "50% improvement in backend request throughput",
      "40% reduction in security false positives",
      "35% faster development cycle with containerization",
      "12 hours/week saved through AI automation",
      "Built distributed VM architecture overcoming resource constraints",
    ],
    innovation: [
      "Designed custom multi-agent AI security platform",
      "Engineered Linux→Windows→Linux VM orchestration",
      "Built voice-first AI assistant with system control",
      "Implemented enterprise-grade monitoring solutions",
      "Created fast, secure terminal for cybersecurity tasks",
      "Developed real-time anomaly detection systems",
    ],
  }

  const tabs = [
    { id: "expertise", name: "Core Skills" },
    { id: "technologies", name: "Technologies" },
    { id: "specializations", name: "Specializations" },
    { id: "certifications", name: "Certifications" },
    { id: "achievements", name: "Achievements" },
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
            <span className="text-green-500">#</span> Advanced Technical Expertise
          </h2>

          {/* Mobile tabs - scrollable */}
          <div className="flex justify-center overflow-x-auto pb-2">
            <div className="flex bg-gray-900/50 border border-green-500/20 rounded-lg p-1 min-w-max">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                    activeTab === tab.id ? "bg-green-500/20 text-green-400" : "text-gray-400 hover:text-green-400"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          {/* Core Skills tab */}
          {activeTab === "expertise" && (
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

          {/* Technologies tab */}
          {activeTab === "technologies" && (
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

          {/* Specializations tab */}
          {activeTab === "specializations" && (
            <div className="space-y-4">
              {specializations.map((spec, index) => (
                <div
                  key={index}
                  className="bg-gray-900/30 border border-green-500/10 rounded-lg p-4 hover:border-green-500/30 transition-colors"
                >
                  <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">{spec.name}</h4>
                  <p className="text-gray-400 text-sm mb-3 leading-relaxed">{spec.description}</p>
                  <Badge variant="outline" className="border-green-500/30 text-green-400 text-xs">
                    {spec.level}
                  </Badge>
                </div>
              ))}
            </div>
          )}

          {/* Certifications tab */}
          {activeTab === "certifications" && (
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-900/30 border border-green-500/10 rounded-lg p-4 hover:border-green-500/30 transition-colors"
                >
                  <h4 className="font-semibold text-white text-sm sm:text-base mb-1">{cert.name}</h4>
                  <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                  <Badge variant="outline" className="border-green-500/30 text-green-400 text-xs">
                    {cert.level}
                  </Badge>
                </div>
              ))}
            </div>
          )}

          {/* Achievements tab */}
          {activeTab === "achievements" && (
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-green-400">Technical Achievements</h3>
                <div className="space-y-3">
                  {achievements.technical.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-300 text-sm leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-green-400">Innovation & Leadership</h3>
                <div className="space-y-3">
                  {achievements.innovation.map((contribution, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-300 text-sm leading-relaxed">{contribution}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
