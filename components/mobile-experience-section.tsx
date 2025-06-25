"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Building2, Calendar, MapPin, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function MobileExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const experiences = [
    {
      title: "IT Specialist",
      company: "Huawei Technologies",
      location: "Tunis, Tunisia",
      period: "Oct 2021 - May 2022",
      type: "Full-time",
      description: [
        "Supervised LAN/WAN networks and data centers for maximum performance",
        "Implemented SNMP monitoring for real-time metrics collection",
        "Deployed IT security policies: firewalls, VPNs, compliance controls",
        "Managed security-sensitive national defense projects",
      ],
      achievements: ["40% reduction in system downtime", "50+ servers monitored", "99.9% uptime for critical systems"],
    },
    {
      title: "DevOps Specialist",
      company: "IRESA",
      location: "Tunis, Tunisia",
      period: "Jan 2021 - Jun 2021",
      type: "Internship",
      description: [
        "Deployed Prometheus and Grafana monitoring solution",
        "Configured TLS/SSL with NGINX reverse proxy",
        "Built comprehensive monitoring infrastructure",
        "Implemented email-based alerting system",
      ],
      achievements: [
        "60% faster incident response",
        "Real-time monitoring for 20+ components",
        "Enterprise-grade observability",
      ],
    },
    {
      title: "Network Technician",
      company: "STEG",
      location: "Tunis, Tunisia",
      period: "Jul 2020",
      type: "Internship",
      description: [
        "Explored telephone and radio networks",
        "Participated in network troubleshooting",
        "Gained hands-on hardware experience",
        "Built foundation for networking career",
      ],
      achievements: ["Network fundamentals mastery", "Hardware troubleshooting skills", "Multi-site network repairs"],
    },
  ]

  return (
    <section id="experience" className="py-12 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-green-500/5" />

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
            <span className="text-green-500">#</span> Experience
          </h2>

          <div className="relative space-y-8">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-purple-500 opacity-30" />

            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-2.5 mt-2 h-3 w-3 rounded-full bg-green-500 border-2 border-black shadow-lg" />

                <div className="ml-10 mobile-card bg-gray-900/50 border border-green-500/20 rounded-lg p-4 hover:border-green-500/40 transition-all duration-300">
                  {/* Header */}
                  <div className="space-y-2 mb-4">
                    <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Building2 className="h-4 w-4 text-green-500" />
                      <span className="font-medium text-sm">{exp.company}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-gray-400 text-sm">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </div>
                      <Badge variant="outline" className="border-green-500/30 text-green-400 text-xs">
                        {exp.type}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar className="h-3 w-3 text-green-500" />
                      {exp.period}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-3 mb-4">
                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-300 flex items-start text-sm leading-relaxed">
                          <span className="text-green-500 mr-2 mt-1 flex-shrink-0">›</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2 flex items-center gap-1">
                      <Award className="h-3 w-3 text-yellow-500" />
                      Key Achievements:
                    </h4>
                    <div className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="text-yellow-400 text-sm flex items-center gap-2">
                          <div className="w-1 h-1 bg-yellow-500 rounded-full flex-shrink-0" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
