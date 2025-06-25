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
    { name: "Linux System Administration", level: 95 },
    { name: "Python Development (Advanced)", level: 92 },
    { name: "AI/ML with PyTorch", level: 85 },
    { name: "Distributed VM Orchestration", level: 90 },
    { name: "Network Security & Monitoring", level: 88 },
    { name: "Docker Containerization", level: 80 },
    { name: "Prometheus & Grafana", level: 82 },
    { name: "Cross-Platform Integration", level: 85 },
    { name: "FastAPI & Async Systems", level: 88 },
    { name: "QEMU/KVM Virtualization", level: 87 },
    { name: "Multi-Agent AI Systems", level: 83 },
    { name: "Resource Optimization Engineering", level: 89 },
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

          {/* Tabs */}
          <div className="flex justify-center overflow-x-auto pb-2">
            <div className="flex bg-gray-900/50 border border-green-500/20 rounded-lg p-1 min-w-max">
              <button
                onClick={() => setActiveTab("expertise")}
                className={`px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === "expertise" ? "bg-green-500/20 text-green-400" : "text-gray-400 hover:text-green-400"
                }`}
              >
                Core Skills
              </button>
              <button
                onClick={() => setActiveTab("technologies")}
                className={`px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === "technologies" ? "bg-green-500/20 text-green-400" : "text-gray-400 hover:text-green-400"
                }`}
              >
                Technologies
              </button>
              <button
                onClick={() => setActiveTab("specializations")}
                className={`px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === "specializations"
                    ? "bg-green-500/20 text-green-400"
                    : "text-gray-400 hover:text-green-400"
                }`}
              >
                Specializations
              </button>
              <button
                onClick={() => setActiveTab("achievements")}
                className={`px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === "achievements" ? "bg-green-500/20 text-green-400" : "text-gray-400 hover:text-green-400"
                }`}
              >
                Achievements
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {/* Core Skills Tab */}
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

            {/* Technologies Tab */}
            {activeTab === "technologies" && (
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-green-400">Systems</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Linux", "QEMU/KVM", "SSH", "Bash", "Systemd", "cgroups", "ZRAM", "remote-viewer"].map(
                      (tech, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-green-500/20 text-gray-300 hover:bg-green-500/10 transition-colors text-xs"
                        >
                          {tech}
                        </Badge>
                      ),
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-green-400">Programming</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "Rust", "FastAPI", "asyncio", "PyTorch", "Transformers", "Whisper", "Coqui TTS"].map(
                      (tech, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-green-500/20 text-gray-300 hover:bg-green-500/10 transition-colors text-xs"
                        >
                          {tech}
                        </Badge>
                      ),
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-green-400">AI</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "PyTorch",
                      "LLaMA/Mistral",
                      "Multi-Modal AI",
                      "Voice-First AI",
                      "Swarm Intelligence",
                      "Real-time Inference",
                    ].map((tech, index) => (
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

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-green-400">Security</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Network Security",
                      "IDS",
                      "Anomaly Detection",
                      "Threat Detection",
                      "Security Monitoring",
                      "Penetration Testing",
                    ].map((tech, index) => (
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

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-green-400">DevOps</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Docker", "CI/CD", "Multi-stage Builds", "Microservices", "Load Balancing", "Automation"].map(
                      (tech, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-green-500/20 text-gray-300 hover:bg-green-500/10 transition-colors text-xs"
                        >
                          {tech}
                        </Badge>
                      ),
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-green-400">Monitoring</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Prometheus", "Grafana", "SNMP", "ELK Stack", "Real-time Alerting", "Performance Metrics"].map(
                      (tech, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-green-500/20 text-gray-300 hover:bg-green-500/10 transition-colors text-xs"
                        >
                          {tech}
                        </Badge>
                      ),
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-green-400">Cloud</h3>
                  <div className="flex flex-wrap gap-2">
                    {["AWS", "IBM Cloud", "Distributed Computing", "Remote Orchestration", "Hybrid Architectures"].map(
                      (tech, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-green-500/20 text-gray-300 hover:bg-green-500/10 transition-colors text-xs"
                        >
                          {tech}
                        </Badge>
                      ),
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-green-400">Networking</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Cisco", "Huawei", "SNMP", "TLS/SSL", "VPN", "Network Scanning", "Wireshark"].map(
                      (tech, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-green-500/20 text-gray-300 hover:bg-green-500/10 transition-colors text-xs"
                        >
                          {tech}
                        </Badge>
                      ),
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Specializations Tab */}
            {activeTab === "specializations" && (
              <div className="space-y-4">
                <div className="bg-gray-900/30 border border-green-500/10 rounded-lg p-4 hover:border-green-500/30 transition-colors">
                  <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Distributed VM Orchestration</h4>
                  <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                    Cross-platform resource management via SSH
                  </p>
                  <Badge variant="outline" className="border-green-500/30 text-green-400 text-xs">
                    Expert
                  </Badge>
                </div>

                <div className="bg-gray-900/30 border border-green-500/10 rounded-lg p-4 hover:border-green-500/30 transition-colors">
                  <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">AI-Powered Security Monitoring</h4>
                  <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                    Real-time threat detection with ML models
                  </p>
                  <Badge variant="outline" className="border-green-500/30 text-green-400 text-xs">
                    Advanced
                  </Badge>
                </div>

                <div className="bg-gray-900/30 border border-green-500/10 rounded-lg p-4 hover:border-green-500/30 transition-colors">
                  <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Multi-Agent AI Systems</h4>
                  <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                    Swarm intelligence and distributed AI coordination
                  </p>
                  <Badge variant="outline" className="border-green-500/30 text-green-400 text-xs">
                    Advanced
                  </Badge>
                </div>

                <div className="bg-gray-900/30 border border-green-500/10 rounded-lg p-4 hover:border-green-500/30 transition-colors">
                  <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Linux Kernel Optimization</h4>
                  <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                    Custom configurations and performance tuning
                  </p>
                  <Badge variant="outline" className="border-green-500/30 text-green-400 text-xs">
                    Expert
                  </Badge>
                </div>

                <div className="bg-gray-900/30 border border-green-500/10 rounded-lg p-4 hover:border-green-500/30 transition-colors">
                  <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Voice-First AI Integration</h4>
                  <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                    Multi-modal AI with voice command systems
                  </p>
                  <Badge variant="outline" className="border-green-500/30 text-green-400 text-xs">
                    Advanced
                  </Badge>
                </div>

                <div className="bg-gray-900/30 border border-green-500/10 rounded-lg p-4 hover:border-green-500/30 transition-colors">
                  <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">
                    Resource Constraint Engineering
                  </h4>
                  <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                    Creative solutions for hardware limitations
                  </p>
                  <Badge variant="outline" className="border-green-500/30 text-green-400 text-xs">
                    Expert
                  </Badge>
                </div>
              </div>
            )}

            {/* Achievements Tab */}
            {activeTab === "achievements" && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-green-400">Technical Achievements</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-300 text-sm leading-relaxed">
                        80% reduction in VM memory overcommitment errors
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-300 text-sm leading-relaxed">
                        50% improvement in backend request throughput
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-300 text-sm leading-relaxed">40% reduction in security false positives</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-300 text-sm leading-relaxed">
                        35% faster development cycle with containerization
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-300 text-sm leading-relaxed">12 hours/week saved through AI automation</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Built distributed VM architecture overcoming resource constraints
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-green-400">Innovation & Leadership</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Designed custom multi-agent AI security platform
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Engineered Linux→Windows→Linux VM orchestration
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Built voice-first AI assistant with system control
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Implemented enterprise-grade monitoring solutions
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Created fast, secure terminal for cybersecurity tasks
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Developed real-time anomaly detection systems
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
