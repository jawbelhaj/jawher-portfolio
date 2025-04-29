"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Progress } from "@/components/ui/progress"

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skills = [
    { name: "Linux System Administration", level: 95 },
    { name: "Shell Scripting (Bash/Python)", level: 90 },
    { name: "Network Security", level: 90 },
    { name: "Linux Kernel Development", level: 70 },
    { name: "DevOps (CI/CD, Docker, K8s)", level: 65 },
    { name: "Cloud Infrastructure (AWS/IBM)", level: 82 },
    { name: "Database Management", level: 75 },
    { name: "Offensive Cybersecurity Operations", level: 60 },
  ]

  const technologies = [
    "Linux",
    "Bash",
    "Python",
    "C/C++",
    "Javascript",
    "PHP",
    "ReactJS",
    "AWS",
    "IBM Cloud",
    "Git",
    "Nmap",
    "Aircrack-ng",
    "Wireshark",
    "Nagios",
    "Prometheus",
    "Grafana",
    "VMware Workstation",
    "Virtualbox",
    "Virt-manager",
    "QEMU",
    "KVM",
    "GNS3",
    "Packet Tracer",
    "eNSP",
    "Docker",
    "Kubernetes",
    "Ansible", 
    "Jenkins",
    "IBM Big Data",
    "Express Framework",
    "MapReduce",
    "Jupyter",
    "kafka",
    "Spark",
    "Yarn",
    "Node.js",
    "HDFS",
    "Apache",
    "MySQL",
    "PostgreSQL",
    "Nginx",
    "SNMP",
    "TLS/SSL",
    "Logs",
    "XML",
  ]

  return (
    <section id="skills" className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Background code pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 overflow-hidden">
          <pre className="text-[0.5rem] text-green-500 whitespace-pre-wrap opacity-30">
            {`#!/bin/bash
# System monitoring script
while true; do
  echo "CPU Usage: $(top -bn1 | grep "Cpu(s)" | sed "s/.*, *\$$[0-9.]*\$$%* id.*/\\1/" | awk '{print 100 - $1}')%"
  echo "Memory Usage: $(free -m | awk '/Mem/{print $3}')MB / $(free -m | awk '/Mem/{print $2}')MB"
  echo "Disk Usage: $(df -h / | awk '/\\// {print $(NF-1)}')"
  echo "Network: $(netstat -ant | grep ESTABLISHED | wc -l) connections"
  sleep 5
done

# Kernel module
#include <linux/init.h>
#include <linux/module.h>
#include <linux/kernel.h>

MODULE_LICENSE("GPL");
MODULE_AUTHOR("Linux Developer");
MODULE_DESCRIPTION("A simple Linux kernel module");
MODULE_VERSION("0.1");

static int __init module_init_function(void) {
    printk(KERN_INFO "Module initialized\\n");
    return 0;
}

static void __exit module_exit_function(void) {
    printk(KERN_INFO "Module exited\\n");
}

module_init(module_init_function);
module_exit(module_exit_function);`}
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
          <span className="text-green-500">#</span> Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Skill bars */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-200">Expertise</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-green-500 font-mono">{skill.level}%</span>
                  </div>
                  <Progress
                    value={skill.level}
                    className="h-2 bg-gray-800"
                    indicatorClassName="bg-gradient-to-r from-green-500 to-emerald-400"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-200">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-gray-900 border border-green-500/20 rounded-full text-sm text-gray-300 hover:bg-green-500/10 hover:border-green-500/40 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
