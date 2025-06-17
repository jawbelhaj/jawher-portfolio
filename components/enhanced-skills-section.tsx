"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function EnhancedSkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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

  return (
    <section id="skills" className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Enhanced background code pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 overflow-hidden">
          <pre className="text-[0.5rem] text-green-500 whitespace-pre-wrap opacity-30 leading-relaxed">
            {`#!/bin/bash
# Advanced distributed VM orchestration and AI integration
set -euo pipefail

# Remote VM deployment via SSH
deploy_remote_vm() {
    echo "Connecting to remote Windows host..."
    ssh user@windows-host "qemu-system-x86_64 -m 4G -smp 4 -hda pop-os.qcow2 -vnc :1"
    echo "Establishing GUI connection via remote-viewer..."
    remote-viewer vnc://windows-host:5901
}

# AI-powered security monitoring
monitor_security() {
    python3 -c "
import asyncio
import torch
from transformers import pipeline

async def ai_threat_detection():
    model = pipeline('text-classification', model='security-bert')
    while True:
        logs = await get_system_logs()
        threats = model(logs)
        if threats['LABEL'] == 'THREAT':
            send_alert(threats)
        await asyncio.sleep(1)

asyncio.run(ai_threat_detection())
"
}

# Memory optimization for VMs
optimize_vm_memory() {
    echo "Configuring ZRAM and memory ballooning..."
    modprobe zram
    echo lz4 > /sys/block/zram0/comp_algorithm
    echo 2G > /sys/block/zram0/disksize
    mkswap /dev/zram0 && swapon /dev/zram0
    
    # Configure cgroup memory limits
    echo "4G" > /sys/fs/cgroup/memory/vm-group/memory.limit_in_bytes
}

# Multi-agent AI swarm coordination
coordinate_ai_swarm() {
    python3 -c "
import asyncio
import torch.distributed as dist

class AIAgent:
    def __init__(self, agent_id):
        self.id = agent_id
        self.model = torch.load(f'agent_{agent_id}.pt')
    
    async def process_task(self, task):
        result = await self.model.inference(task)
        await self.communicate_with_swarm(result)
        return result

async def swarm_intelligence():
    agents = [AIAgent(i) for i in range(5)]
    tasks = await get_security_tasks()
    results = await asyncio.gather(*[
        agent.process_task(task) 
        for agent, task in zip(agents, tasks)
    ])
    return aggregate_swarm_decisions(results)
"
}

# Main execution
main() {
    echo "=== Advanced Linux AI Systems Management ==="
    deploy_remote_vm
    monitor_security &
    optimize_vm_memory
    coordinate_ai_swarm
    
    echo "All systems operational - Linux mastery in action"
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
          <span className="text-green-500">#</span> Advanced Technical Expertise
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
              value="specializations"
              className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-400"
            >
              Specializations
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

          <TabsContent value="specializations" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
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
              ].map((spec, index) => (
                <div
                  key={index}
                  className="bg-gray-900/30 border border-green-500/10 rounded-lg p-4 hover:border-green-500/30 transition-colors"
                >
                  <h4 className="font-semibold text-white mb-2">{spec.name}</h4>
                  <p className="text-gray-400 text-sm mb-3">{spec.description}</p>
                  <Badge variant="outline" className="border-green-500/30 text-green-400">
                    {spec.level}
                  </Badge>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Technical Achievements</h3>
                {[
                  "80% reduction in VM memory overcommitment errors",
                  "50% improvement in backend request throughput",
                  "40% reduction in security false positives",
                  "35% faster development cycle with containerization",
                  "12 hours/week saved through AI automation",
                  "Built distributed VM architecture overcoming ressources constraints",
                ].map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300">{achievement}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Innovation & Leadership</h3>
                {[
                  "Designed custom multi-agent AI security platform",
                  "Engineered Linux→Windows→Linux VM orchestration",
                  "Built voice-first AI assistant with system control",
                  "Implemented enterprise-grade monitoring solutions",
                  "Created fast, secure terminal for cybersecurity tasks",
                  "Developed real-time anomaly detection systems",
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
