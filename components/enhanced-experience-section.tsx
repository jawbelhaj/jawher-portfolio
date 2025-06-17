"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Building2, Calendar, MapPin, ExternalLink, Award, Zap, Shield } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function EnhancedExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const experiences = [
    {
      title: "IT Specialist",
      company: "Huawei Technologies",
      location: "Tunis, Tunisia",
      period: "Oct 2021 - May 2022",
      duration: "8 months",
      type: "Full-time",
      industries: ["Networking", "National Security/Defense", "Education Technology"],
      description: [
        "Supervised and optimized LAN/WAN networks, servers, and data centers ensuring maximum performance and availability",
        "Designed, deployed, and validated network equipment with minimal operational impact in security-sensitive environments",
        "Implemented SNMP monitoring solutions for real-time metrics collection and alerting across enterprise infrastructure",
        "Deployed and enforced IT security policies: firewalls, VPNs, antivirus, and compliance controls for defense projects",
        "Managed updates, security patches, and change processes for system continuity in mission-critical environments",
        "Administered IP video surveillance systems and alarm/notification devices for security operations",
        "Created and maintained technical documentation: network architecture, procedures, and security protocols",
        "Coordinated incident responses, performed root cause analysis, and deployed corrective actions",
        "Contributed to infrastructure scalability through proactive optimization and preventive maintenance",
      ],
      technologies: ["Linux", "SNMP", "Network Security", "VMware", "System Administration", "Defense Systems"],
      achievements: [
        "Reduced system downtime by 40% in security-sensitive environments",
        "Implemented monitoring for 50+ servers in defense infrastructure",
        "Optimized network performance by 30% for critical systems",
        "Maintained 99.9% uptime for national security projects",
      ],
      securityClearance: "Worked on security-sensitive national defense projects",
      icon: <Shield className="h-5 w-5 text-blue-500" />,
    },
    {
      title: "DevOps and Monitoring Specialist",
      company: "Institute of Research Education and Services of Addiction (IRESA)",
      location: "Tunis, Tunisia",
      period: "Jan 2021 - Jun 2021",
      duration: "6 months",
      type: "Internship",
      projectName: "Deployment of Prometheus and Grafana Monitoring and Supervision Solution",
      description: [
        "Deployed and optimized Prometheus for comprehensive Linux and Windows monitoring across VMware Workstation VMs within GNS3 simulations",
        "Implemented SNMP device oversight for switches, routers, and firewalls ensuring complete network ecosystem visibility",
        "Configured advanced access control & encryption, implementing TLS/SSL with self-signed certificates via CertTool",
        "Architected NGINX reverse proxy for Prometheus UI protection and secure metric stream access",
        "Integrated Grafana for dynamic, role-based dashboards rendering real-time Prometheus metrics",
        "Configured Prometheus Alertmanager for intelligent email-based notifications enabling proactive incident response",
        "Built comprehensive monitoring infrastructure supporting enterprise-grade observability requirements",
      ],
      technologies: ["Prometheus", "Grafana", "NGINX", "TLS/SSL", "VMware", "GNS3", "SNMP", "Linux"],
      achievements: [
        "Built enterprise-grade monitoring system from scratch",
        "Implemented real-time alerting reducing incident response time by 60%",
        "Created dynamic dashboards for 20+ infrastructure components",
        "Established secure monitoring pipeline with TLS encryption",
      ],
      icon: <Zap className="h-5 w-5 text-green-500" />,
    },
    {
      title: "Network Technician Intern",
      company: "Société Tunisienne de l'Electricité et du Gaz (STEG)",
      location: "Tunis, Tunisia",
      period: "Jul 2020",
      duration: "1 month",
      type: "Internship",
      description: [
        "Explored enterprise telephone and radio networks, analyzing components and cabling infrastructure",
        "Participated in setting up new telephone lines and troubleshooting complex network issues with senior technicians",
        "Acquired hands-on skills in repairing fixed-line phones and building custom jumper cables",
        "Contributed to resolving network problems across multiple company sites and facilities",
        "Gained foundational understanding of telecommunications infrastructure and network hardware",
      ],
      technologies: ["Network Hardware", "Telecommunications", "Cable Management", "Network Troubleshooting"],
      achievements: [
        "Mastered network fundamentals in enterprise environment",
        "Gained hands-on hardware troubleshooting experience",
        "Contributed to network repairs across 5+ company sites",
        "Built foundation for advanced networking career",
      ],
      icon: <Building2 className="h-5 w-5 text-purple-500" />,
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute top-0 left-1/4 w-1/3 h-1/3 bg-green-500/5 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-1/4 h-1/4 bg-purple-500/5 blur-[80px] rounded-full" />

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
          <span className="text-green-500">#</span> Professional Experience
        </h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Enhanced timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-purple-500 to-blue-500 opacity-30" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Enhanced timeline dot */}
                <div className="absolute left-6 mt-2 h-5 w-5 rounded-full border-4 border-black bg-green-500 shadow-lg shadow-green-500/50 z-10 flex items-center justify-center">
                  {exp.icon}
                </div>

                <div className="ml-16 bg-gray-900/50 border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,0,0.1)] group">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-300 mt-1">
                        <Building2 className="h-4 w-4 text-green-500" />
                        <span className="font-medium">{exp.company}</span>
                      </div>

                      {exp.projectName && (
                        <div className="mt-2 p-2 bg-blue-500/10 border border-blue-500/20 rounded-md">
                          <p className="text-blue-400 text-sm font-medium">🚀 Project: {exp.projectName}</p>
                        </div>
                      )}

                      {exp.industries && (
                        <div className="mt-2">
                          <p className="text-sm text-gray-400 mb-1">Industries:</p>
                          <div className="flex flex-wrap gap-1">
                            {exp.industries.map((industry, idx) => (
                              <Badge
                                key={idx}
                                variant="outline"
                                className="border-purple-500/30 text-purple-400 text-xs"
                              >
                                {industry}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {exp.securityClearance && (
                        <div className="mt-2 p-2 bg-red-500/10 border border-red-500/20 rounded-md">
                          <p className="text-red-400 text-sm font-medium flex items-center gap-1">
                            <Shield className="h-3 w-3" />
                            {exp.securityClearance}
                          </p>
                        </div>
                      )}

                      <div className="flex items-center gap-4 text-gray-400 text-sm mt-2">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </div>
                        <Badge variant="outline" className="border-green-500/30 text-green-400 text-xs">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex flex-col items-end mt-2 lg:mt-0">
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Calendar className="h-4 w-4 text-green-500" />
                        {exp.period}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{exp.duration}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-4">
                    <ul className="space-y-2">
                      {exp.description.slice(0, 3).map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-300 flex items-start text-sm leading-relaxed">
                          <span className="text-green-500 mr-2 mt-1">›</span>
                          {item}
                        </li>
                      ))}
                      {exp.description.length > 3 && (
                        <details className="group/details">
                          <summary className="text-green-400 cursor-pointer text-sm hover:text-green-300 transition-colors">
                            Show {exp.description.length - 3} more responsibilities...
                          </summary>
                          <div className="mt-2 space-y-2">
                            {exp.description.slice(3).map((item, itemIndex) => (
                              <li
                                key={itemIndex + 3}
                                className="text-gray-300 flex items-start text-sm leading-relaxed"
                              >
                                <span className="text-green-500 mr-2 mt-1">›</span>
                                {item}
                              </li>
                            ))}
                          </div>
                        </details>
                      )}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="border-green-500/20 text-gray-300 text-xs hover:bg-green-500/10 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
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
                          <div className="w-1 h-1 bg-yellow-500 rounded-full" />
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

        {/* Enhanced call to action */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Interested in my professional journey and technical expertise?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/files/jawher-belhaj-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 hover:bg-green-500/20 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Download Technical Resume
            </a>
            <a
              href="https://www.linkedin.com/in/jawher-belhaj-2147031a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-400 hover:bg-blue-500/20 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              View LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
