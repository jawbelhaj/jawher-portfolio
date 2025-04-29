"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Building2, Calendar } from "lucide-react"

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const experiences = [
    {
      title: "IT Specialist",
      company: "Huawei Technologies",
      period: "Oct_2021 - May_2022",
      description: [
        "Monitor & optimize networks, servers & data centers",
        "Install & maintain hardware, software & applications",
        "Deploy & test network gear with minimal downtime",
        "Repair, upgrade & cable hardware; run system tests",
        "Deploy and manage monitoring tools (SNMP) to capture real-time metrics and set alerts",
        "Analyze performance & plan capacity upgrades",
        "Enforce firewalls, VPNs, antivirus & compliance",
        "Oversee patching, upgrades & change control",
        "Deliver first-line hardware & software support",
        "Oversee asset management, procurement coordination, and vendor relationships",
        "Maintain technical documentation, including network diagrams and user manuals",
        "Conduct incident response, root cause analysis, and corrective action implementation",
        "Manage IP-based video surveillance systems, alarms, and notification platforms",
        "Resolve customer issues & optimize IT services",
        "Ensure scalability via tuning & proactive maintenance",
      ],
    },
    {
      title: "DevOps and Monitoring Traineeship ",
      company: "Institute of Research Education and Services of Addiction (IRESA)",
      period: "Jan_2021 - Juin_2021",
      description: [
        "Prometheus-based real-time monitoring: Deployed and optimized Prometheus for both Linux and Windows exporters across VMware Workstation VMs within GNS3 simulations, delivering end-to-end observability",
        "SNMP device oversight: Monitored switches, routers, and firewalls via SNMP to ensure full visibility into the entire network ecosystem",
        "Configure and manage access control & encryption, setting up TLS/SSL(self-signed certificates generated via CertTool) and front-ended the Prometheus UI with an NGINX reverse proxy to protect metric streams",
        "Grafana visualization: Integrated Grafana for dynamic, role-based dashboards that render Prometheus metrics in real time",
        "Email alerting: Configured Prometheus Alertmanager for email-based notifications, enabling proactive incident response and fault detection",
      ],
    },
    {
      title: "Network Technician Intern",
      company: "Société Tunisienne de l'Electricité et du Gaz(STEG)",
      period: "July_2021",
      description: [
        "Explored the company's telephone and radio networks, including components and cabling",
        "Setting up a new telephone line and troubleshooting network issues with technicians",
        "Acquired skills in repairing fixed-line phones and building jumper cables",
        "Contributed to resolving network problems across different company sites",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-1/3 h-1/3 bg-green-500/5 blur-[100px] rounded-full" />

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

        <div className="relative border-l-2 border-green-500/30 ml-4 md:ml-0 md:mx-auto md:max-w-3xl pl-6 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-[30px] mt-1.5 h-5 w-5 rounded-full border-4 border-black bg-green-500" />

              <div className="bg-gray-900/50 border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,0,0.1)]">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mt-1 md:mt-0">
                    <Calendar className="h-4 w-4 text-green-500" />
                    {exp.period}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-300 mb-4">
                  <Building2 className="h-4 w-4 text-green-500" />
                  <span>{exp.company}</span>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-400 flex items-start">
                      <span className="text-green-500 mr-2">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
